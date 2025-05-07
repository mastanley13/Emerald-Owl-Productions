import { GungeData, GalleryItem, PackageOption, TestimonialData, FaqItem } from '../types/gunge';
import { Resource } from '../types/homepage';

/**
 * Categorizes resources by their alt text identifiers
 */
function categorizeResources(resources: any[]): {
  byCategory: {
    heroBackground: Resource[];
    videoThumbnails: Resource[];
    galleryImages: Resource[];
    packageImages: Resource[];
    all: Resource[];
  };
} {
  // If resources is undefined or not an array, return default empty categories
  if (!resources || !Array.isArray(resources)) {
    console.error('Invalid resources data provided:', resources);
    return {
      byCategory: {
        heroBackground: [] as Resource[],
        videoThumbnails: [] as Resource[],
        galleryImages: [] as Resource[],
        packageImages: [] as Resource[],
        all: [] as Resource[]
      }
    };
  }

  const categorized = {
    byCategory: {
      heroBackground: [] as Resource[],
      videoThumbnails: [] as Resource[],
      galleryImages: [] as Resource[],
      packageImages: [] as Resource[],
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
    const alt = (resource.alt || '').toLowerCase();
    
    if (alt.includes('gunge') && alt.includes('hero')) {
      categorized.byCategory.heroBackground.push(resource);
    } else if (alt.includes('video') || alt.includes('thumbnail')) {
      categorized.byCategory.videoThumbnails.push(resource);
    } else if (alt.includes('package') || alt.includes('option')) {
      categorized.byCategory.packageImages.push(resource);
    } else if (alt.includes('gunge') || alt.includes('slime') || alt.includes('messy')) {
      categorized.byCategory.galleryImages.push(resource);
    }
  });

  return categorized;
}

/**
 * Transforms raw Gunge JSON data into structured format
 */
export function parseGungeData(rawData: any): GungeData {
  try {
    console.log('Parsing gunge data:', rawData ? 'Data present' : 'Data missing');
    
    if (!rawData) {
      console.error('Raw gunge data is undefined or null');
      rawData = {}; // Use empty object as fallback
    }
    
    // Categorize resources
    const resources = categorizeResources(rawData.resources || []);
    
    // Extract gallery items
    const galleryItems: GalleryItem[] = resources.byCategory.galleryImages.map(image => ({
      image,
      caption: image.alt
    }));

    // Create the structured data
    const gungeData: GungeData = {
      meta: {
        title: rawData.title || 'Gunge & Slime Experiences | Emerald Owl Productions',
        description: rawData.meta?.description || 'Create messy, fun-filled gunge experiences for fundraisers, charity events, and special occasions!',
        keywords: rawData.meta?.keywords || ''
      },
      hero: {
        title: 'Gunge & Slime Experiences',
        backgroundImage: resources.byCategory.heroBackground[0] || {
          type: 'image',
          url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/671125656eaeb07042dfb1e5.png',
          alt: 'Gunge & Slime Experiences Hero'
        }
      },
      videoContent: {
        videoUrl: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67c692cfa5debb772355f884.mp4',
        thumbnailUrl: resources.byCategory.videoThumbnails[0]?.url || 'https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/d2BYZGOF7ecSj21A0t4N/media/transcoded_videos/3198a0efe217fc4a.jpg',
        title: 'See Our Gunge Experiences in Action',
        note: 'PLEASE UNMUTE TO HEAR INFORMATION'
      },
      contentSection: {
        title: 'Unforgettable Messy Fun with Gunge',
        description: 'Create excitement and laughter with our premium gunge experiences! Perfect for school events, fundraisers, charity events, and special occasions. Our professional gunge tanks and colorful slime create memorable moments for participants and spectators alike.',
        features: [
          'Custom colored gunge to match your theme',
          'Professional gunge tanks and equipment',
          'Experienced operators and MCs',
          'Complete setup and cleanup',
          'Great for fundraising activities',
          'Safe, non-toxic, and washable materials'
        ]
      },
      packages: [
        {
          title: 'Standard Gunge Package',
          description: 'Perfect for smaller events and parties!',
          image: resources.byCategory.packageImages[0] || {
            type: 'image',
            url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/671125656eaeb07042dfb1e5.png',
            alt: 'Standard Gunge Package'
          },
          features: [
            'Up to 2 hours of gunge activities',
            'Single gunge tank',
            'Standard gunge colors',
            'Setup and operation by our staff'
          ],
          price: 'Starting at $699'
        },
        {
          title: 'Premium Gunge Experience',
          description: 'Our most popular option for fundraisers and special events!',
          image: resources.byCategory.packageImages[1] || resources.byCategory.packageImages[0] || {
            type: 'image',
            url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/6711251ba860dfbc168d28f1.jpeg',
            alt: 'Premium Gunge Experience'
          },
          features: [
            'Up to 3 hours of gunge activities',
            'Multiple gunge tanks',
            'Premium slime options and colors',
            'Special effects and lighting',
            'Professional staff and MC services'
          ],
          price: 'Starting at $1,499'
        }
      ],
      gallery: galleryItems.length > 0 ? galleryItems : [
        {
          image: {
            type: 'image',
            url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/671125656eaeb07042dfb1e5.png',
            alt: 'Gunge Experience'
          },
          caption: 'Gunge Experience'
        }
      ],
      testimonials: [
        {
          quote: "The gunge tank was the highlight of our school fundraiser! The kids absolutely loved it and we raised so much more than expected.",
          author: 'Michael Peterson',
          role: 'School Principal'
        },
        {
          quote: "Emerald Owl's gunge experience was professional from start to finish. They handled everything including setup and cleanup.",
          author: 'Sarah Thompson',
          role: 'Event Organizer'
        }
      ],
      faqs: [
        {
          question: 'Is the gunge safe?',
          answer: 'Yes! Our gunge is non-toxic, hypoallergenic, and biodegradable. It\'s safe for all ages and washes away easily with water.'
        },
        {
          question: 'How much space is needed for a gunge event?',
          answer: 'We recommend at least 15\' x 15\' of open space for a standard gunge tank setup. Larger events may require more space.'
        },
        {
          question: 'Can gunge activities be held indoors?',
          answer: 'Yes, with proper precautions. We recommend a space with adequate drainage and non-slip flooring. We\'ll work with you to ensure your venue is suitable.'
        },
        {
          question: 'What should participants wear?',
          answer: 'Comfortable clothes that can get messy, such as swimwear, shorts, and t-shirts. We recommend bringing a change of clothes and towels.'
        }
      ],
      cta: {
        text: 'Book Your Gunge Experience',
        url: '/contact-us',
        backgroundColor: '#22c55e' // Green color
      },
      resources
    };

    return gungeData;
  } catch (error) {
    console.error('Error parsing gunge data:', error);
    
    // Return minimal fallback data in case of parsing errors
    return {
      meta: {
        title: 'Gunge & Slime Experiences | Emerald Owl Productions',
        description: 'Create messy, fun-filled gunge experiences for fundraisers, charity events, and special occasions!',
        keywords: ''
      },
      hero: {
        title: 'Gunge & Slime Experiences',
        backgroundImage: {
          type: 'image',
          url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/671125656eaeb07042dfb1e5.png',
          alt: 'Gunge Hero'
        }
      },
      videoContent: {
        videoUrl: '',
        thumbnailUrl: '',
        title: '',
        note: ''
      },
      contentSection: {
        title: 'Unforgettable Messy Fun with Gunge',
        description: 'Create excitement and laughter with our premium gunge experiences!',
        features: []
      },
      packages: [],
      gallery: [],
      testimonials: [],
      faqs: [],
      cta: {
        text: 'Contact Us',
        url: '/contact-us',
        backgroundColor: '#22c55e'
      },
      resources: {
        byCategory: {
          heroBackground: [],
          videoThumbnails: [],
          galleryImages: [],
          packageImages: [],
          all: []
        }
      }
    };
  }
} 