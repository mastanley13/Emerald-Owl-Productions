import { FoamPartiesData, GalleryItem, PackageOption, FaqItem } from '../types/foamParties';
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
    colorRunImages: Resource[];
    all: Resource[];
  };
} {
  const categorized = {
    byCategory: {
      heroBackground: [] as Resource[],
      videoThumbnails: [] as Resource[],
      galleryImages: [] as Resource[],
      packageImages: [] as Resource[],
      colorRunImages: [] as Resource[],
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
    
    if (alt.includes('foam') && alt.includes('hero')) {
      categorized.byCategory.heroBackground.push(resource);
    } else if (alt.includes('video') || alt.includes('thumbnail')) {
      categorized.byCategory.videoThumbnails.push(resource);
    } else if (alt.includes('package') || alt.includes('option')) {
      categorized.byCategory.packageImages.push(resource);
    } else if (alt.includes('color run') || alt.includes('color-run')) {
      categorized.byCategory.colorRunImages.push(resource);
    } else if (alt.includes('foam') || alt.includes('party') || alt.includes('event')) {
      categorized.byCategory.galleryImages.push(resource);
    }
  });

  return categorized;
}

/**
 * Transforms raw Foam Parties JSON data into structured format
 */
export function parseFoamPartiesData(rawData: any): FoamPartiesData {
  // Categorize resources
  const resources = categorizeResources(rawData.resources || []);
  
  // Define specific gallery items for Foam Parties
  const foamPartyGalleryImages: GalleryItem[] = [
    {
      image: {
        type: 'image',
        url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67a44e5c7ee1c14549751fc8.jpeg',
        alt: 'Excited children playing in a mountain of bubbles at a Foam Party by Emerald Owl Productions.'
      },
      caption: 'Excited children playing in a mountain of bubbles at a Foam Party by Emerald Owl Productions.'
    },
    {
      image: {
        type: 'image',
        url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67a449c97ee1c16aea750681.jpeg',
        alt: 'Outdoor fun with a large foam cannon at an Emerald Owl Productions Foam Party.'
      },
      caption: 'Outdoor fun with a large foam cannon at an Emerald Owl Productions Foam Party.'
    },
    {
      image: {
        type: 'image',
        url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67a449f253f26c8bef5ef4af.jpeg',
        alt: 'Guests enjoying a sunny day covered in foam at a community Foam Party by Emerald Owl Productions.'
      },
      caption: 'Guests enjoying a sunny day covered in foam at a community Foam Party by Emerald Owl Productions.'
    },
    {
      image: {
        type: 'image',
        url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/673ae494f980e185eb7731bb.jpeg',
        alt: 'Safe and fun foam pit for all ages at an Emerald Owl Productions Foam Party.'
      },
      caption: 'Safe and fun foam pit for all ages at an Emerald Owl Productions Foam Party.'
    },
    {
      image: {
        type: 'image',
        url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67111c429663ed06310b88bf.jpeg',
        alt: 'Action shot of foam being sprayed over a happy crowd at an Emerald Owl Productions event.'
      },
      caption: 'Action shot of foam being sprayed over a happy crowd at an Emerald Owl Productions event.'
    },
    {
      image: {
        type: 'image',
        url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/671115b56a23197f7a8f63d8.jpeg',
        alt: 'Memorable moments from an Emerald Owl Productions Foam Party celebration.'
      },
      caption: 'Memorable moments from an Emerald Owl Productions Foam Party celebration.'
    }
  ];

  // Extract foam package options
  const foamPackages: PackageOption[] = [
    {
      title: 'Basic Foam Package',
      description: 'Perfect for smaller events and parties!',
      image: {
        type: 'image',
        url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67111c601ff902234d3256b4.jpeg',
        alt: 'Fun and affordable Basic Foam Package by Emerald Owl Productions, perfect for parties.'
      },
      features: [
        'Up to 2 hours of foam',
        'Single foam cannon',
        'Standard foam solution',
        'Setup and operation by our staff'
      ],
      price: 'Starting at $599'
    },
    {
      title: 'Premium Foam Experience',
      description: 'Our most popular option for medium to large events!',
      image: {
        type: 'image',
        url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67111c53970dedac4ff481a6.jpeg',
        alt: 'Ultimate Premium Foam Experience with extra foam and fun from Emerald Owl Productions.'
      },
      features: [
        'Up to 3 hours of foam',
        'Multiple foam cannons',
        'Premium hypoallergenic solution',
        'Special foam effects',
        'Professional staff and DJ services'
      ],
      price: 'Starting at $1,299'
    }
  ];

  // Extract FAQs
  const faqs: FaqItem[] = [
    {
      question: 'Is the foam safe?',
      answer: 'Yes! Our foam is non-toxic, hypoallergenic, and biodegradable. It\'s safe for all ages and washes away easily with water.'
    },
    {
      question: 'How much space is needed for a foam party?',
      answer: 'We recommend at least 20\' x 20\' of open space for a standard foam party setup. Larger events may require more space.'
    },
    {
      question: 'What should participants wear?',
      answer: 'Comfortable clothes that can get wet, such as swimwear, shorts, and t-shirts. We recommend bringing a change of clothes and towels.'
    }
  ];

  // Create the structured data
  const foamPartiesData: FoamPartiesData = {
    meta: {
      title: rawData.title || 'Foam Parties | Emerald Owl Productions',
      description: rawData.meta?.description || 'Create high-energy, fun-filled foam parties for any occasion!',
      keywords: rawData.meta?.keywords || ''
    },
    hero: {
      title: 'Foam Parties',
      backgroundImage: resources.byCategory.heroBackground[0] || {
        type: 'image',
        url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67a453fb7ee1c12aa7752dcc.jpeg',
        alt: 'Foam Parties Hero'
      }
    },
    videoContent: {
      videoUrl: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67c692cfa5debb772355f884.mp4',
      thumbnailUrl: resources.byCategory.videoThumbnails[0]?.url || 'https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/d2BYZGOF7ecSj21A0t4N/media/transcoded_videos/3198a0efe217fc4a.jpg',
      title: 'See Our Foam Parties in Action',
      note: 'PLEASE UNMUTE TO HEAR INFORMATION'
    },
    contentSection: {
      title: 'Unforgettable Foam Parties',
      description: 'Transform any event into an exciting, high-energy experience with our premium foam parties! Perfect for school events, festivals, corporate team building, fundraisers, and private celebrations.',
      features: [
        'Professional foam cannons and equipment',
        'Safe, non-toxic, hypoallergenic foam',
        'Customizable packages for any event size',
        'Experienced staff to ensure smooth operation',
        'Optional DJ services and lighting effects'
      ]
    },
    foamPackages: foamPackages,
    gallery: foamPartyGalleryImages,
    faqs: faqs,
    cta: {
      text: 'Book Your Foam Party',
      url: '/contact-us',
      backgroundColor: '#03a9f4' // Light blue color
    },
    resources
  };

  return foamPartiesData;
} 