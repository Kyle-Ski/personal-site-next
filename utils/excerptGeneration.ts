import { PortableTextBlock } from '@portabletext/types';

export function generateSmartExcerpt(
  content: {
    title: string;
    excerpt?: string;
    body?: PortableTextBlock[];
    routeNotes?: string; // For trip reports
  },
  contentType: 'blog' | 'tripReport' | 'gearReview',
  maxLength: number = 160
): string {
  // Use existing excerpt if available
  if (content.excerpt) {
    return truncateText(content.excerpt, maxLength);
  }
  
  // For trip reports, try route notes
  if (contentType === 'tripReport' && content.routeNotes) {
    return truncateText(content.routeNotes, maxLength);
  }
  
  // Extract text from portable text body
  if (content.body && content.body.length > 0) {
    const plainText = extractPlainTextFromPortableText(content.body);
    if (plainText) {
      return truncateText(plainText, maxLength);
    }
  }
  
  // Fallback based on content type
  switch (contentType) {
    case 'blog':
      return `Read ${content.title} on Kyle Czajkowski's blog covering web development, outdoor adventures, and tech insights.`;
    case 'tripReport':
      return `Adventure report: ${content.title}. Read about this outdoor adventure experience with detailed route information and insights.`;
    case 'gearReview':
      return `In-depth review of ${content.title}. Field-tested gear review with real-world performance insights.`;
    default:
      return content.title;
  }
}

function extractPlainTextFromPortableText(blocks: PortableTextBlock[]): string {
  return blocks
    .filter((block) => block._type === 'block')
    .map((block) => {
      if (block.children) {
        return block.children
          .map((child: any) => child.text || '')
          .join('');
      }
      return '';
    })
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) {
    return text;
  }
  
  // Find the last complete word before the limit
  const truncated = text.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  
  if (lastSpace > 0) {
    return truncated.substring(0, lastSpace) + '...';
  }
  
  return truncated + '...';
}