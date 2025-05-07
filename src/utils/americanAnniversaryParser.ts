import { AmericanAnniversaryData, GalleryItem } from '../types/americanAnniversary';
import { Resource } from '../types/homepage';

/**
 * Categorizes resources by their alt text identifiers
 */
function categorizeResources(resources: any[]): {
  byCategory: {
    heroBackground: Resource[];
    videoThumbnails: Resource[];
    galleryImages: Resource[];
    all: Resource[];
  };
} {
  const categorized = {
    byCategory: {
      heroBackground: [] as Resource[],
      videoThumbnails: [] as Resource[],
      galleryImages: [] as Resource[],
      all: [] as Resource[]
    }
  };

  // Map all resources to Resource type 
  const typedResources: Resource[] = resources.map(resource => ({
    type: resource.type || 'image',
    url: resource.url,
    alt: resource.alt || '',
    width: resource.width,
    height: resource.height
  }));

  // Set all resources
  categorized.byCategory.all = typedResources;

  // Categorize by alt text
  typedResources.forEach(resource => {
    const alt = resource.alt.toLowerCase();
    
    if (alt.includes('america') && alt.includes('hero')) {
      categorized.byCategory.heroBackground.push(resource);
    } else if (alt.includes('video') || alt.includes('thumbnail')) {
      categorized.byCategory.videoThumbnails.push(resource);
    } else if (alt.includes('america') || alt.includes('celebration') || alt.includes('anniversary')) {
      categorized.byCategory.galleryImages.push(resource);
    }
  });

  return categorized;
}

/**
 * Transforms raw American Anniversary JSON data into structured format
 */
export function parseAmericanAnniversaryData(rawData: any): AmericanAnniversaryData {
  // Categorize resources
  const resources = categorizeResources(rawData.resources || []);
  
  // Extract gallery items
  const galleryItems: GalleryItem[] = resources.byCategory.galleryImages.map(image => ({
    image,
    caption: image.alt
  }));

  // Create the structured data
  const americanAnniversaryData: AmericanAnniversaryData = {
    meta: {
      title: rawData.title || 'America\'s 250th Anniversary Celebration',
      description: rawData.meta?.description || 'Experience America\'s 250th Anniversary with our Revolutionary Light Show Celebration',
      keywords: rawData.meta?.keywords || ''
    },
    hero: {
      title: 'America\'s 250th Anniversary Celebration',
      backgroundImage: resources.byCategory.heroBackground[0] || {
        type: 'image',
        url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/673652882fd9d4e5aaea654c.png',
        alt: 'America\'s 250th Anniversary Celebration Hero'
      }
    },
    videoContent: {
      videoUrl: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67c692cfa5debb772355f884.mp4',
      thumbnailUrl: resources.byCategory.videoThumbnails[0]?.url || 'https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/d2BYZGOF7ecSj21A0t4N/media/transcoded_videos/3198a0efe217fc4a.jpg',
      title: 'See Our American Anniversary Celebration in Action',
      note: 'PLEASE UNMUTE TO HEAR INFORMATION'
    },
    contentSection: {
      title: 'Celebrate America\'s 250th Anniversary with a Revolutionary Light Show',
      description: 'Join us in celebrating America\'s 250th anniversary with a spectacular laser light show experience. Our patriotic displays bring American history to life in a breathtaking visual celebration.',
      features: [
        'Stunning patriotic visuals and effects',
        'Historical narration and music',
        'Perfect for community events and celebrations',
        'Custom shows tailored to your venue and audience'
      ]
    },
    gallery: galleryItems.length > 0 ? galleryItems : [
      {
        image: {
          type: 'image',
          url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/673652882fd9d4e5aaea654c.png',
          alt: 'America\'s 250th Anniversary Celebration'
        },
        caption: 'America\'s 250th Anniversary Celebration'
      }
    ],
    cta: {
      text: 'Book Your Anniversary Celebration',
      url: '/contact-us',
      backgroundColor: '#002147' // Navy blue - patriotic color
    },
    resources
  };

  return americanAnniversaryData;
} 