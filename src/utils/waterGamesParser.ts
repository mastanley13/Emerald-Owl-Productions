import { WaterGamesData, GalleryItem, TestimonialData, FaqItem } from '../types/waterGames';
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
  // If resources is undefined or not an array, return default empty categories
  if (!resources || !Array.isArray(resources)) {
    console.error('Invalid resources data provided:', resources);
    return {
      byCategory: {
        heroBackground: [] as Resource[],
        videoThumbnails: [] as Resource[],
        galleryImages: [] as Resource[],
        all: [] as Resource[]
      }
    };
  }

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
    const alt = (resource.alt || '').toLowerCase();
    
    if (alt.includes('water') && (alt.includes('hero') || alt.includes('banner'))) {
      categorized.byCategory.heroBackground.push(resource);
    } else if (alt.includes('video') || alt.includes('thumbnail')) {
      categorized.byCategory.videoThumbnails.push(resource);
    } else if (alt.includes('water') || alt.includes('games') || alt.includes('splash')) {
      categorized.byCategory.galleryImages.push(resource);
    }
  });

  return categorized;
}

/**
 * Transforms raw Water Games JSON data into structured format
 */
export function parseWaterGamesData(rawData: any): WaterGamesData {
  try {
    console.log('Parsing water games data:', rawData ? 'Data present' : 'Data missing');
    
    if (!rawData) {
      console.error('Raw water games data is undefined or null');
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
    const waterGamesData: WaterGamesData = {
      meta: {
        title: rawData.title || 'Water Games | Emerald Owl Productions',
        description: rawData.meta?.description || 'Experience the most fun water games and activities for events and celebrations!',
        keywords: rawData.meta?.keywords || ''
      },
      hero: {
        title: 'Water Games',
        backgroundImage: resources.byCategory.heroBackground[0] || {
          type: 'image',
          url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/673c312c15ee062538bfed37.jpeg',
          alt: 'Water Games Hero'
        }
      },
      videoContent: {
        videoUrl: 'https://www.youtube.com/embed/Jh0H0d-PeZo',
        thumbnailUrl: resources.byCategory.videoThumbnails[0]?.url || 'https://img.youtube.com/vi/Jh0H0d-PeZo/maxresdefault.jpg',
        title: 'See Our Water Activities in Action',
        note: 'PLEASE UNMUTE FOR BEST EXPERIENCE'
      },
      contentSection: {
        title: 'Water Wars',
        description: 'Who does not love a great all out water war? This activity is fun for kids and adults! If you are just wanting to get a little splashed, THIS IS NOT FOR YOU! Our water wars are TOTAL & COMPLETE DRENCHERS! We bring the water blasters, plastic buckets for dumping, and the containers your participants will use as filling stations. You just provide the running water.',
        features: [
          'Perfect for hot summer days',
          'Great for team building activities',
          'Fun for all ages',
          'Complete equipment provided',
          'Easy setup and cleanup',
          'Can be combined with Foam Parties'
        ]
      },
      gallery: galleryItems.length > 0 ? galleryItems : [
        {
          image: {
            type: 'image',
            url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/673c312c15ee062538bfed37.jpeg',
            alt: 'Water Games Experience'
          },
          caption: 'Water Games Experience'
        }
      ],
      testimonials: [
        {
          quote: "The water games were a huge hit at our summer festival! The kids had an absolute blast and it was the perfect way to cool down.",
          author: 'Sarah Johnson',
          role: 'Event Coordinator'
        },
        {
          quote: "Everyone loved the water wars activity. The Emerald Owl team was professional and made sure everyone had a great time.",
          author: 'Michael Rodriguez',
          role: 'School Principal'
        }
      ],
      faqs: [
        {
          question: 'What ages are suitable for water games?',
          answer: 'Our water games are suitable for all ages, from children to adults. We can adjust the intensity level based on your event requirements.'
        },
        {
          question: 'What do we need to provide for water games?',
          answer: 'You just need to provide access to running water. We bring all the equipment including water blasters, buckets, and containers.'
        },
        {
          question: 'Can water games be combined with other activities?',
          answer: 'Yes! Water games pair perfectly with our foam parties for an ultimate wet and wild experience. Ask us about special combo packages.'
        },
        {
          question: 'What should participants wear?',
          answer: 'Participants should wear clothes that can get wet (swimwear is ideal), and bring a change of clothes and towels.'
        }
      ],
      cta: {
        text: 'Book Your Water Games Event',
        url: '/contact-us',
        backgroundColor: '#22c55e' // Green color
      },
      resources
    };

    return waterGamesData;
  } catch (error) {
    console.error('Error parsing water games data:', error);
    
    // Return minimal fallback data in case of parsing errors
    return {
      meta: {
        title: 'Water Games | Emerald Owl Productions',
        description: 'Experience the most fun water games and activities for events and celebrations!',
        keywords: ''
      },
      hero: {
        title: 'Water Games',
        backgroundImage: {
          type: 'image',
          url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/673c312c15ee062538bfed37.jpeg',
          alt: 'Water Games Hero'
        }
      },
      videoContent: {
        videoUrl: '',
        thumbnailUrl: '',
        title: '',
        note: ''
      },
      contentSection: {
        title: 'Water Wars',
        description: 'Who does not love a great all out water war? This activity is fun for kids and adults!',
        features: []
      },
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
          all: []
        }
      }
    };
  }
} 