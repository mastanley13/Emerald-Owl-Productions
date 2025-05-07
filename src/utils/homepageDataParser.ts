import { HomepageData, Resource } from '../types/homepage';

/**
 * Categorizes resources by their alt text identifiers
 */
function categorizeResources(resources: any[]): {
  byCategory: {
    logo: Resource[];
    americaAnniversary: Resource[];
    laserLightShow: Resource[];
    neonNights: Resource[];
    drippingInConfidence: Resource[];
    foamParty: Resource[];
    sensoryFriendly: Resource[];
    socialMedia: Resource[];
  };
  all: Resource[];
} {
  const categorized = {
    byCategory: {
      logo: [] as Resource[],
      americaAnniversary: [] as Resource[],
      laserLightShow: [] as Resource[],
      neonNights: [] as Resource[],
      drippingInConfidence: [] as Resource[],
      foamParty: [] as Resource[],
      sensoryFriendly: [] as Resource[],
      socialMedia: [] as Resource[],
    },
    all: [] as Resource[]
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
  categorized.all = typedResources;

  // Categorize by alt text
  typedResources.forEach(resource => {
    const alt = resource.alt.toLowerCase();
    
    if (alt.includes('emerald owl productions')) {
      categorized.byCategory.logo.push(resource);
    } else if (alt.includes('america 250th') || alt.includes('american')) {
      categorized.byCategory.americaAnniversary.push(resource);
    } else if (alt.includes('laser light show')) {
      categorized.byCategory.laserLightShow.push(resource);
    } else if (alt.includes('neon nights')) {
      categorized.byCategory.neonNights.push(resource);
    } else if (alt.includes('dripping in confidence')) {
      categorized.byCategory.drippingInConfidence.push(resource);
    } else if (alt.includes('foam party')) {
      categorized.byCategory.foamParty.push(resource);
    } else if (alt.includes('sensory friendly')) {
      categorized.byCategory.sensoryFriendly.push(resource);
    } else if (alt.includes('social media') || alt.includes('icon')) {
      categorized.byCategory.socialMedia.push(resource);
    }
  });

  return categorized;
}

/**
 * Transforms raw homepage JSON data into structured format
 */
export function parseHomepageData(rawData: any): HomepageData {
  // Categorize resources
  const resources = categorizeResources(rawData.resources || []);
  
  // Extract service information from content
  const serviceInfo = [
    {
      id: 'laser-show',
      title: 'Laser Light Shows',
      description: 'Spectacular laser displays for any event',
      image: resources.byCategory.laserLightShow[0]?.url || 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/678fb2d6141a590c80b64c99.jpeg',
      link: '/laser-light-show'
    },
    {
      id: 'neon-nights',
      title: 'Neon Nights',
      description: 'Glow in the dark party experiences',
      image: resources.byCategory.neonNights[0]?.url || 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67a4558baa4eed1400f75c3a.jpeg',
      link: '/neon-nights'
    },
    {
      id: 'dripping',
      title: 'Dripping in Confidence',
      description: 'Fun and messy experiences',
      image: resources.byCategory.drippingInConfidence[0]?.url || 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67ab94d979284b777a6a7660.jpeg',
      link: '/dripping-in-confidence'
    },
    {
      id: 'foam-parties',
      title: 'Foam Party & Color Run',
      description: 'Exciting foam activities and entertainment',
      image: resources.byCategory.foamParty[0]?.url || 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67a453fb7ee1c12aa7752dcc.jpeg',
      link: '/foam-parties'
    },
    {
      id: 'sensory',
      title: 'Sensory Friendly Experiences',
      description: 'Inclusive experiences for all',
      image: resources.byCategory.sensoryFriendly[0]?.url || 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67ab91924dcedf6404738967.png',
      link: '/sensory-friendly-experiences'
    }
  ];

  // Create the structured homepage data
  const homepageData: HomepageData = {
    meta: {
      title: rawData.title || 'Emerald Owl Productions Home',
      description: rawData.meta?.description || 'Schedule any event with Emerald Owl Productions to enhance its quality',
      keywords: rawData.meta?.keywords || ''
    },
    hero: {
      logo: resources.byCategory.logo[0] || {
        type: 'image',
        url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/6704204d9d9a095a00d5b580.png',
        alt: 'Emerald Owl Productions'
      },
      title: {
        main: 'Emerald Owl',
        secondary: 'Productions'
      },
      subtitle: 'Creating unforgettable experiences for your most important events',
      ctaButtons: {
        primary: {
          text: 'Book Now',
          url: '/contact-us'
        },
        secondary: {
          text: 'View Our Experiences',
          action: 'scrollToExperiences'
        }
      },
      trustIndicators: ['5-Star Rated', 'Premium Experience']
    },
    americaBanner: {
      title: "America's 250th Anniversary",
      subtitle: "Experience a Revolutionary Light Show Celebration!",
      ctaText: "Discover More",
      ctaUrl: "/american-anniversary-celebration"
    },
    videoHighlight: {
      title: "See Our Experiences in Action",
      thumbnailUrl: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/d2BYZGOF7ecSj21A0t4N/media/transcoded_videos/3198a0efe217fc4a.jpg",
      videoUrl: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67c692cfa5debb772355f884.mp4",
      note: "PLEASE UNMUTE TO HEAR INFORMATION"
    },
    services: serviceInfo,
    featuredContent: {
      title: {
        firstPart: "America's 250th",
        secondPart: "Anniversary"
      },
      description: "Join us in celebrating America's 250th anniversary with a spectacular laser light show experience. Our patriotic displays bring American history to life in a breathtaking visual celebration.",
      features: [
        "Stunning patriotic visuals",
        "Historical narration and music",
        "Perfect for community events and celebrations"
      ],
      ctaText: "Learn More",
      ctaUrl: "/american-anniversary-celebration",
      images: resources.byCategory.americaAnniversary.map(res => res.url)
    },
    resources
  };

  return homepageData;
} 