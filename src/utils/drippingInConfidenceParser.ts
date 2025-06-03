import { DrippingInConfidenceData, GalleryItem, ProductOption, TestimonialData } from '../types/drippingInConfidence';
import { Resource } from '../types/homepage';

/**
 * Categorizes resources by their alt text identifiers
 */
function categorizeResources(resources: any[]): {
  byCategory: {
    heroBackground: Resource[];
    videoThumbnails: Resource[];
    galleryImages: Resource[];
    productImages: Resource[];
    all: Resource[];
  };
} {
  const categorized = {
    byCategory: {
      heroBackground: [] as Resource[],
      videoThumbnails: [] as Resource[],
      galleryImages: [] as Resource[],
      productImages: [] as Resource[],
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
    
    if (alt.includes('dripping') && alt.includes('hero')) {
      categorized.byCategory.heroBackground.push(resource);
    } else if (alt.includes('video') || alt.includes('thumbnail')) {
      categorized.byCategory.videoThumbnails.push(resource);
    } else if (alt.includes('product') || alt.includes('option')) {
      categorized.byCategory.productImages.push(resource);
    } else if (alt.includes('dripping') || alt.includes('confidence') || alt.includes('slime')) {
      categorized.byCategory.galleryImages.push(resource);
    }
  });

  return categorized;
}

/**
 * Transforms raw Dripping in Confidence JSON data into structured format
 */
export function parseDrippingInConfidenceData(rawData: any): DrippingInConfidenceData {
  // Categorize resources
  const resources = categorizeResources(rawData.resources || []);
  
  // Extract gallery items
  const galleryItems: GalleryItem[] = resources.byCategory.galleryImages.map(image => ({
    image,
    caption: image.alt
  }));

  // Extract product options
  const productOptions: ProductOption[] = [
    {
      title: 'Slime Dunk Challenge',
      description: 'The ultimate slime experience - perfect for fundraisers and special events!',
      image: resources.byCategory.productImages[0] || {
        type: 'image',
        url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67ab94d979284b777a6a7660.jpeg',
        alt: 'Slime Dunk Challenge'
      },
      features: [
        'Custom colored slime',
        'Professional setup and cleanup',
        'Perfect for fundraisers',
        'Includes all safety equipment'
      ]
    },
    {
      title: 'Slime Blasters',
      description: 'Cover your event in colorful slime with our slime blaster cannons!',
      image: resources.byCategory.productImages[1] || resources.byCategory.productImages[0] || {
        type: 'image',
        url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67a453fb7ee1c12aa7752dcc.jpeg',
        alt: 'Slime Blasters'
      },
      features: [
        'Multiple slime cannons',
        'Vibrant color choices',
        'Environmentally friendly materials',
        'Washable and non-staining'
      ]
    }
  ];

  // Extract testimonials
  const testimonials: TestimonialData[] = [
    // {
    //   quote: "The slime experience was the highlight of our school fundraiser! Kids and parents alike couldn't stop talking about it.",
    //   author: 'Sarah Johnson',
    //   role: 'PTA President'
    // },
    // {
    //   quote: "Emerald Owl's team made setup and cleanup so easy. The slime was vibrant, safe, and exactly what we wanted for our event.",
    //   author: 'Michael Carter',
    //   role: 'Event Coordinator'
    // }
  ];

  // Create the structured data
  const drippingInConfidenceData: DrippingInConfidenceData = {
    meta: {
      title: rawData.title || 'Dripping in Confidence | Emerald Owl Productions',
      description: rawData.meta?.description || 'Experience the most fun and messy slime activities for events and fundraisers!',
      keywords: rawData.meta?.keywords || ''
    },
    hero: {
      title: 'Dripping in Confidence',
      backgroundImage: resources.byCategory.heroBackground[0] || {
        type: 'image',
        url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67ab94d979284b777a6a7660.jpeg',
        alt: 'Dripping in Confidence Hero'
      }
    },
    videoContent: {
      videoUrl: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67c692cfa5debb772355f884.mp4',
      thumbnailUrl: resources.byCategory.videoThumbnails[0]?.url || 'https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/d2BYZGOF7ecSj21A0t4N/media/transcoded_videos/3198a0efe217fc4a.jpg',
      title: 'See Our Slime Experiences in Action',
      note: 'PLEASE UNMUTE TO HEAR INFORMATION'
    },
    contentSection: {
      title: 'Create Unforgettable Messy Memories with Dripping in Confidence',
      description: 'Our signature slime experiences bring excitement, laughter, and unforgettable moments to any event. Perfect for fundraisers, school events, corporate team building, and private parties.',
      features: [
        'Custom colored slime options to match your theme',
        'Professional setup, operation and cleanup included',
        'Environmentally friendly and skin-safe materials',
        'Experienced staff to ensure smooth operation',
        'Multiple package options to fit your needs and budget'
      ]
    },
    productOptions: productOptions,
    gallery: galleryItems.length > 0 ? galleryItems : [
      {
        image: {
          type: 'image',
          url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67ab94d979284b777a6a7660.jpeg',
          alt: 'Dripping in Confidence Experience'
        },
        caption: 'Dripping in Confidence Experience'
      }
    ],
    testimonials: testimonials,
    cta: {
      text: 'Book Your Slime Experience',
      url: '/contact-us',
      backgroundColor: '#8bc34a' // Light green color
    },
    resources
  };

  return drippingInConfidenceData;
} 