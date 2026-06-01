import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import sharp from 'sharp';

dotenv.config();

const NOTION_KEY = process.env.NOTION_KEY;
const GEAR_DATABASE_ID = '4b1821fe-47eb-4140-9545-3376110383d5';
const DATA_FILE_PATH = path.join(process.cwd(), 'data', 'notion-gear.json');
const GEAR_IMAGES_DIR = path.join(process.cwd(), 'public', 'gear-images');

function extractProp(props, name) {
  const p = props[name];
  if (!p) return null;

  switch (p.type) {
    case 'title':
      return p.title?.[0]?.plain_text || '';
    case 'rich_text':
      return p.rich_text?.[0]?.plain_text || null;
    case 'select':
      return p.select?.name || null;
    case 'multi_select':
      return p.multi_select?.map((item) => item.name) || [];
    case 'number':
      return p.number;
    case 'formula':
      return p.formula?.number || null;
    case 'date':
      return p.date?.start || null;
    case 'url':
      return p.url || null;
    case 'files': {
      const file = p.files?.[0];
      if (!file) return null;
      if (file.type === 'file') return file.file?.url || null;
      if (file.type === 'external') return file.external?.url || null;
      return null;
    }
    case 'checkbox':
      return p.checkbox || false;
    default:
      return null;
  }
}

function mapPageToProps(page) {
  const props = page.properties;
  const imgFile = props.img?.files?.[0];
  return {
    id: page.id,
    title: props.title?.title?.[0]?.plain_text || '',
    product: extractProp(props, 'product'),
    brand: extractProp(props, 'brand'),
    category: extractProp(props, 'category') || 'Uncategorized',
    categoryColor: props.category?.select?.color || 'default',
    packLists: extractProp(props, 'pack_list') || [],
    weight_oz: extractProp(props, 'weight_oz'),
    weight_lb: extractProp(props, 'weight_lb'),
    weight_g: extractProp(props, 'weight_g'),
    cost: extractProp(props, 'cost'),
    acquiredOn: extractProp(props, 'acquired_on'),
    retiredOn: extractProp(props, 'retired_on'),
    url: extractProp(props, 'url'),
    imageUrl: imgFile?.file?.url || imgFile?.external?.url || null,
    color: extractProp(props, 'color'),
    moreInfo: extractProp(props, 'more_info'),
    isRetired: !!props.retired_on?.date?.start,
    reviewLink: extractProp(props, 'review-link'),
  };
}

async function downloadAndProcessImages(gear) {
  if (!fs.existsSync(GEAR_IMAGES_DIR)) {
    fs.mkdirSync(GEAR_IMAGES_DIR, { recursive: true });
  }

  let successCount = 0;
  let failCount = 0;

  for (const item of gear) {
    if (!item.imageUrl) continue;

    const filename = `${item.id}.webp`;
    const filepath = path.join(GEAR_IMAGES_DIR, filename);

    try {
      console.log(`  📥 Downloading image for: ${item.title}`);
      const response = await fetch(item.imageUrl);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      const buffer = Buffer.from(await response.arrayBuffer());
      const webpBuffer = await sharp(buffer).webp({ quality: 85 }).toBuffer();
      fs.writeFileSync(filepath, webpBuffer);
      item.imageUrl = `/gear-images/${filename}`;
      successCount++;
    } catch (err) {
      console.error(`  ❌ Image failed for "${item.title}": ${err.message}`);
      item.imageUrl = null;
      failCount++;
    }
  }

  console.log(`\n📸 Images: ${successCount} saved, ${failCount} failed`);
}

async function queryDatabase(cursor) {
  const body = {
    page_size: 100,
  };
  if (cursor) body.start_cursor = cursor;

  const response = await fetch(`https://api.notion.com/v1/databases/${GEAR_DATABASE_ID}/query`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${NOTION_KEY}`,
      'Notion-Version': '2022-06-28',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Notion API error ${response.status}: ${text}`);
  }

  return response.json();
}

async function fetchAllGear() {
  console.log('Fetching gear data from Notion...');

  const allGear = [];
  let cursor = null;
  let hasMore = true;

  while (hasMore) {
    const data = await queryDatabase(cursor);
    for (const page of data.results) {
      allGear.push(mapPageToProps(page));
    }
    hasMore = data.has_more;
    cursor = data.next_cursor;
    console.log(`  Fetched ${data.results.length} items (total: ${allGear.length})`);
  }

  return allGear;
}

async function saveGear(gear) {
  const data = {
    lastUpdated: new Date().toISOString(),
    totalItems: gear.length,
    gear,
  };

  const dataDir = path.dirname(DATA_FILE_PATH);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  fs.writeFileSync(DATA_FILE_PATH, JSON.stringify(data, null, 2));
  console.log(`\nSaved ${gear.length} gear items to ${DATA_FILE_PATH}`);
}

async function main() {
  if (!NOTION_KEY) {
    console.error('NOTION_KEY environment variable is required');
    process.exit(1);
  }

  try {
    console.log('Fetching gear data from Notion API...\n');
    const gear = await fetchAllGear();
    await downloadAndProcessImages(gear);
    await saveGear(gear);

    const active = gear.filter((g) => !g.isRetired);
    console.log(`\n  Active items: ${active.length}`);
    console.log(`  Retired items: ${gear.length - active.length}`);
    console.log('Done!');
  } catch (error) {
    console.error('Error fetching Notion gear data:', error.message);
    process.exit(1);
  }
}

main();
