const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeHeroImages() {
  const publicDir = path.join(process.cwd(), 'public');
  const outputDir = path.join(publicDir, 'optimized');

  // Create optimized directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Common hero image extensions
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp'];

  // Get all image files from public directory
  const files = fs.readdirSync(publicDir)
    .filter(file => imageExtensions.includes(path.extname(file).toLowerCase()))
    .filter(file => {
      const stats = fs.statSync(path.join(publicDir, file));
      return stats.size > 500 * 1024; // Only optimize files > 500KB
    });

  console.log(`Found ${files.length} large images to check...`);

  let skippedCount = 0;
  let optimizedCount = 0;

  for (const file of files) {
    const inputPath = path.join(publicDir, file);
    const fileName = path.parse(file).name;

    // Check if this image has already been optimized
    const isAlreadyOptimized = checkIfOptimized(outputDir, fileName);

    if (isAlreadyOptimized) {
      console.log(`⏭️  Skipped (already optimized): ${file}`);
      skippedCount++;
      continue;
    }

    try {
      // Generate multiple optimized versions
      const variants = [
        { suffix: '-hero', width: 1920, quality: 85 },
        { suffix: '-tablet', width: 1024, quality: 80 },
        { suffix: '-mobile', width: 640, quality: 75 },
        { suffix: '-blur', width: 40, quality: 20 } // For blur placeholder
      ];

      for (const variant of variants) {
        // WebP version
        await sharp(inputPath)
          .resize(variant.width, null, {
            withoutEnlargement: true,
            fit: 'cover'
          })
          .webp({ quality: variant.quality })
          .toFile(path.join(outputDir, `${fileName}${variant.suffix}.webp`));

        // AVIF version (even more optimized)
        await sharp(inputPath)
          .resize(variant.width, null, {
            withoutEnlargement: true,
            fit: 'cover'
          })
          .avif({ quality: variant.quality })
          .toFile(path.join(outputDir, `${fileName}${variant.suffix}.avif`));

        // Fallback JPEG
        await sharp(inputPath)
          .resize(variant.width, null, {
            withoutEnlargement: true,
            fit: 'cover'
          })
          .jpeg({ quality: variant.quality, progressive: true })
          .toFile(path.join(outputDir, `${fileName}${variant.suffix}.jpg`));
      }

      console.log(`✅ Optimized: ${file}`);
      optimizedCount++;
    } catch (error) {
      console.error(`❌ Failed to optimize ${file}:`, error.message);
    }
  }

  console.log('\n🎉 Image optimization complete!');
  console.log(`📊 Results: ${optimizedCount} optimized, ${skippedCount} skipped`);
  if (optimizedCount > 0) {
    console.log('💡 Tip: Update your components to use the optimized versions');
  }
}

/**
 * Check if an image has already been optimized by looking for key variant files
 */
function checkIfOptimized(outputDir, fileName) {
  // Check for the existence of key variants to determine if optimization is complete
  const keyVariants = [
    `${fileName}-hero.webp`,
    `${fileName}-tablet.webp`,
    `${fileName}-mobile.webp`,
    `${fileName}-blur.webp`
  ];

  return keyVariants.every(variant =>
    fs.existsSync(path.join(outputDir, variant))
  );
}

/**
 * Force re-optimization of specific images
 */
function forceOptimize(imageNames = []) {
  if (imageNames.length === 0) {
    console.log('🔄 Force optimizing ALL images...');
    return optimizeHeroImages();
  }

  console.log(`🔄 Force optimizing: ${imageNames.join(', ')}`);
  // You could implement selective re-optimization here
}

/**
 * Clean up optimized files (useful for starting fresh)
 */
function cleanOptimized() {
  const outputDir = path.join(process.cwd(), 'public', 'optimized');

  if (fs.existsSync(outputDir)) {
    fs.rmSync(outputDir, { recursive: true, force: true });
    console.log('🧹 Cleaned optimized directory');
  }
}

// Command line argument handling
const args = process.argv.slice(2);

if (args.includes('--clean')) {
  cleanOptimized();
} else if (args.includes('--force')) {
  // Remove optimized directory and re-optimize everything
  cleanOptimized();
  optimizeHeroImages().catch(console.error);
} else {
  // Normal run - skip already optimized images
  optimizeHeroImages().catch(console.error);
}