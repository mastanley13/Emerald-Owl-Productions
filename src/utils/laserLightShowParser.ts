import { LaserLightShowData, GalleryItem, TestimonialData, FaqItem, SafetyFeature } from '../types/laserLightShow';
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
    
    if (alt.includes('laser') && (alt.includes('hero') || alt.includes('banner'))) {
      categorized.byCategory.heroBackground.push(resource);
    } else if (alt.includes('video') || alt.includes('thumbnail')) {
      categorized.byCategory.videoThumbnails.push(resource);
    } else if (alt.includes('package') || alt.includes('pricing')) {
      categorized.byCategory.packageImages.push(resource);
    } else if (alt.includes('laser') || alt.includes('light show') || alt.includes('beam')) {
      categorized.byCategory.galleryImages.push(resource);
    }
  });

  return categorized;
}

/**
 * Transforms raw Laser Light Show JSON data into structured format
 */
export function parseLaserLightShowData(rawData: any): LaserLightShowData {
  try {
    console.log('Parsing laser light show data:', rawData ? 'Data present' : 'Data missing');
    
    if (!rawData) {
      console.error('Raw laser light show data is undefined or null');
      rawData = {}; // Use empty object as fallback
    }
    
    // Categorize resources
    const resources = categorizeResources(rawData.resources || []);
    
    // Extract gallery items
    const galleryItems: GalleryItem[] = resources.byCategory.galleryImages.map(image => ({
      image,
      caption: image.alt
    }));

    // Create safety features
    const safetyFeatures: SafetyFeature[] = [
      {
        title: 'Environmentally Friendly',
        description: 'No debris, smoke, or chemical residue - just pure light entertainment',
        icon: 'leaf'
      },
      {
        title: 'Weather Resilient',
        description: 'Shows can go on in various weather conditions, reducing last-minute cancellations',
        icon: 'cloud'
      },
      {
        title: 'Noise-Friendly',
        description: 'Silent operation is perfect for sensitive communities and wildlife',
        icon: 'volume-off'
      }
    ];

    // Create the structured data
    const laserLightShowData: LaserLightShowData = {
      meta: {
        title: rawData.title || 'Laser Light Show | Emerald Owl Productions',
        description: rawData.meta?.description || 'Experience spectacular laser light shows for any event, creating unforgettable visual experiences!',
        keywords: rawData.meta?.keywords || ''
      },
      hero: {
        title: 'Laser Light Show',
        backgroundImage: resources.byCategory.heroBackground[0] || {
          type: 'image',
          url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/671d07f56bdb4dfd0c0a60c4.jpeg',
          alt: 'Laser Light Show Hero'
        }
      },
      videoContent: {
        videoUrl: 'https://www.youtube.com/embed/97L5BAhkWY0',
        thumbnailUrl: resources.byCategory.videoThumbnails[0]?.url || 'https://img.youtube.com/vi/97L5BAhkWY0/maxresdefault.jpg',
        title: 'See Our Laser Light Shows in Action',
        note: 'PLEASE UNMUTE FOR BEST EXPERIENCE'
      },
      contentSection: {
        title: 'Standard In-Person Light Show',
        description: 'Drive-in laser shows are perfect for the festive winter, while outdoor shows shine in warmer months, allowing guests to mingle and fully engage, from arm waving to dancing. Laser shows can complement festivals or be featured events, with customizable music themes—from Dancing Through The Decades to Celebrate America, British Invasion, Motown, a Mix, or Christian Rock.',
        features: [
          'Customizable music themes',
          'Perfect for indoor or outdoor events',
          'Can run multiple times at minimal extra cost',
          'Suitable for various event types and sizes',
          'Eye-catching and memorable experience',
          'Complete safety with no fire risk'
        ]
      },
      benefits: [
        {
          title: 'Vibrant Visual Experience',
          description: 'Lasers offer the most vibrant colors for captivating, dreamlike light displays',
          icon: 'star'
        },
        {
          title: 'Cost Effective',
          description: 'Multiple shows can be run on the same night at minimal extra cost',
          icon: 'dollar-sign'
        },
        {
          title: 'Versatile Setup',
          description: 'Works for indoor/outdoor settings and drive-in shows with various configurations',
          icon: 'cog'
        }
      ],
      safetyFeatures: safetyFeatures,
      packages: resources.byCategory.packageImages.length > 0 ? resources.byCategory.packageImages.map((image, index) => ({
        title: index === 0 ? 'Beam Show' : index === 1 ? 'Graphic/Animation Show' : 'Water Effects',
        description: index === 0 ? 
          'Your audience will be captivated by the illusion of "structures" floating mid-air, transforming the space with objects like rotating fans, geometric cones, and luminous shafts of light.' :
          index === 1 ?
          'Audience sees specific images displayed in laser light on a large flat surface. We can display seasonal characters, various themes, or tell a story. Custom designed event or sponsor logos are also possible.' :
          'If your venue happens to be next to a body of water, we can create reflections for a magical effect. Water screens also offer an amazing and mystical way to display laser images.',
        image: image,
        features: index === 0 ? 
          ['Floating structures of light', 'Dynamic or tranquil atmosphere', 'No projection surface needed'] :
          index === 1 ? 
          ['Requires projection surface', 'Custom animations available', 'Perfect for logos and themed content'] :
          ['Enhanced visual impact', 'Unique reflection effects', 'Magical water screen option'],
        price: 'Contact for pricing'
      })) : [
        {
          title: 'Beam Show',
          description: 'Your audience will be captivated by the illusion of "structures" floating mid-air, transforming the space with objects like rotating fans, geometric cones, and luminous shafts of light.',
          image: {
            type: 'image',
            url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/671d07f56bdb4dfd0c0a60c4.jpeg',
            alt: 'Beam Show'
          },
          features: ['Floating structures of light', 'Dynamic or tranquil atmosphere', 'No projection surface needed'],
          price: 'Contact for pricing'
        },
        {
          title: 'Graphic/Animation Show',
          description: 'Audience sees specific images displayed in laser light on a large flat surface. We can display seasonal characters, various themes, or tell a story. Custom designed event or sponsor logos are also possible.',
          image: {
            type: 'image',
            url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/671fc430bc925310f0743e06.jpeg',
            alt: 'Graphic/Animation Show'
          },
          features: ['Requires projection surface', 'Custom animations available', 'Perfect for logos and themed content'],
          price: 'Contact for pricing'
        },
        {
          title: 'Water Effects',
          description: 'If your venue happens to be next to a body of water, we can create reflections for a magical effect. Water screens also offer an amazing and mystical way to display laser images.',
          image: {
            type: 'image',
            url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/671fc47e40adeb606bb6b38f.jpeg',
            alt: 'Water Effects'
          },
          features: ['Enhanced visual impact', 'Unique reflection effects', 'Magical water screen option'],
          price: 'Contact for pricing'
        }
      ],
      gallery: galleryItems.length > 0 ? galleryItems : [
        {
          image: {
            type: 'image',
            url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/671d07f56bdb4dfd0c0a60c4.jpeg',
            alt: 'Laser Light Show Experience'
          },
          caption: 'Laser Light Show Experience'
        },
        {
          image: {
            type: 'image',
            url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/671fc430bc925310f0743e06.jpeg',
            alt: 'Laser Graphics Display'
          },
          caption: 'Laser Graphics Display'
        },
        {
          image: {
            type: 'image',
            url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/671fc47e40adeb606bb6b38f.jpeg',
            alt: 'Laser Water Effects'
          },
          caption: 'Laser Water Effects'
        }
      ],
      testimonials: [
        // {
        //   quote: "The laser light show was absolutely stunning! Our guests were mesmerized and it became the highlight of our event.",
        //   author: 'Michael Johnson',
        //   role: 'Event Planner'
        // },
        // {
        //   quote: "We chose a laser show instead of fireworks for our celebration and couldn't be happier. It was unique, environmentally friendly, and truly spectacular.",
        //   author: 'Sarah Williams',
        //   role: 'Festival Coordinator'
        // }
      ],
      faqs: [
        {
          question: 'Do you need a special venue for a laser light show?',
          answer: 'Our laser shows are versatile and can be adapted to various venues, both indoor and outdoor. For beam shows, we need adequate space and darkness. For graphic shows, we need a projection surface like a wall or screen. We can assess your venue to determine the best setup.'
        },
        {
          question: 'How much does a laser light show cost?',
          answer: 'Costs vary based on show type, duration, complexity, location, and whether it\'s a one-time or multi-night event. Multiple shows on the same night add minimal cost. Contact us for a custom quote based on your specific needs.'
        },
        {
          question: 'Are laser shows safe?',
          answer: 'Yes, our laser shows are extremely safe. They produce no fire risk, debris, or chemical residue. We follow all safety protocols and regulations regarding laser power and audience exposure.'
        },
        {
          question: 'Can you customize the music for our laser show?',
          answer: 'Absolutely! We offer various music themes from Dancing Through The Decades to Celebrate America, British Invasion, Motown, a Mix, or Christian Rock. We can also work with custom playlists to match your event theme.'
        }
      ],
      cta: {
        text: 'Book Your Laser Light Show',
        url: '/contact-us',
        backgroundColor: '#10b981' // Emerald color
      },
      resources
    };

    return laserLightShowData;
  } catch (error) {
    console.error('Error parsing laser light show data:', error);
    
    // Return minimal fallback data in case of parsing errors
    return {
      meta: {
        title: 'Laser Light Show | Emerald Owl Productions',
        description: 'Experience spectacular laser light shows for any event, creating unforgettable visual experiences!',
        keywords: ''
      },
      hero: {
        title: 'Laser Light Show',
        backgroundImage: {
          type: 'image',
          url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/671d07f56bdb4dfd0c0a60c4.jpeg',
          alt: 'Laser Light Show Hero'
        }
      },
      videoContent: {
        videoUrl: '',
        thumbnailUrl: '',
        title: '',
        note: ''
      },
      contentSection: {
        title: 'Standard In-Person Light Show',
        description: 'Laser light shows offer a spectacular visual experience for any event.',
        features: []
      },
      benefits: [],
      safetyFeatures: [],
      packages: [],
      gallery: [],
      testimonials: [],
      faqs: [],
      cta: {
        text: 'Contact Us',
        url: '/contact-us',
        backgroundColor: '#10b981'
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