import { NeonNightsData, GalleryItem, TestimonialData, FaqItem, Package } from '../types/neonNights';
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
        all: [] as Resource[],
      },
    };
  }

  const all = resources.map((resource: any) => ({
    url: resource.url || '',
    alt: resource.alt || '',
    type: resource.type || 'image',
    width: resource.width || 1200,
    height: resource.height || 800,
  }));

  return {
    byCategory: {
      heroBackground: all.filter(r => r.alt?.toLowerCase().includes('hero') || r.alt?.toLowerCase().includes('background')),
      videoThumbnails: all.filter(r => r.alt?.toLowerCase().includes('video') || r.alt?.toLowerCase().includes('thumbnail')),
      galleryImages: all.filter(r => r.alt?.toLowerCase().includes('gallery')),
      packageImages: all.filter(r => r.alt?.toLowerCase().includes('package')),
      all,
    },
  };
}

/**
 * Parses raw JSON data into structured NeonNightsData object
 */
export function parseNeonNightsData(rawData: any): NeonNightsData {
  if (!rawData) {
    throw new Error('No data provided to parse');
  }

  // Extract resources and categorize them for easier access
  const resourcesData = categorizeResources(rawData.resources || []);
  const resources = resourcesData.byCategory;

  // Create a properly structured meta object
  const meta = {
    title: rawData.meta?.title || 'Neon Nights | Emerald Owl Productions',
    description: rawData.meta?.description || 'Experience the vibrant energy of our Neon Nights events.',
    keywords: rawData.meta?.keywords || ['neon nights', 'neon event', 'uv party', 'glow party', 'nighttime event'],
  };

  // Parse hero section data
  const hero = {
    title: rawData.hero?.title || 'Neon Nights',
    subtitle: rawData.hero?.subtitle || '',
    description: rawData.hero?.description || '',
    backgroundImage: resources.heroBackground[0] || null,
  };

  // Parse CTA data
  const cta = {
    text: rawData.cta?.text || 'Book Your Neon Experience',
    url: rawData.cta?.url || '/contact',
  };

  // Parse video content if available
  const videoContent = rawData.videoContent
    ? {
        title: rawData.videoContent.title || '',
        description: rawData.videoContent.description || '',
        videoUrl: rawData.videoContent.videoUrl || '',
        thumbnailUrl: rawData.videoContent.thumbnailUrl || resources.videoThumbnails[0]?.url || '',
      }
    : undefined;

  // Parse content section
  const contentSection = {
    title: rawData.contentSection?.title || 'Illuminate Your Event',
    description:
      rawData.contentSection?.description ||
      'Our Neon Nights experiences transform any venue into a vibrant, glowing wonderland of color and excitement.',
    features: rawData.contentSection?.features || [],
  };

  // Parse gallery items if available
  const gallery: GalleryItem[] = rawData.gallery
    ? rawData.gallery.map((item: any) => ({
        image: item.image || resources.galleryImages[0] || resources.all[0] || { url: '', alt: 'Gallery image' },
        title: item.title || '',
        caption: item.caption || '',
      }))
    : resources.galleryImages.map(image => ({
        image,
        title: '',
        caption: '',
      }));

  // Parse testimonials if available
  const testimonials: TestimonialData[] = rawData.testimonials
    ? rawData.testimonials.map((testimonial: any) => ({
        quote: testimonial.quote || 'This was an amazing experience!',
        author: testimonial.author || 'Happy Client',
        role: testimonial.role || '',
        image: testimonial.image || null,
      }))
    : [];

  // Parse FAQs if available
  const faqs: FaqItem[] = rawData.faqs
    ? rawData.faqs.map((faq: any) => ({
        question: faq.question || '',
        answer: faq.answer || '',
      }))
    : [
        {
          question: 'What is a Neon Night event?',
          answer: 'Neon Nights are immersive events featuring UV lighting, glow-in-the-dark elements, and vibrant neon colors to create an energetic and visually stunning atmosphere.'
        },
        {
          question: 'Do participants need to bring anything special?',
          answer: 'We recommend wearing light-colored clothing that will glow under UV light for the best experience, but this is not required. Our events provide all necessary glow elements and UV-reactive materials.'
        },
        {
          question: 'How much space is needed for a Neon Nights event?',
          answer: 'The space requirements depend on the size of your group. Our team will work with you to determine the appropriate setup for your venue and number of participants.'
        },
        {
          question: 'Is the UV lighting safe?',
          answer: 'Yes, we use industry-standard UV lighting that is safe for events. Our team follows all safety protocols to ensure a safe experience for all participants.'
        },
        {
          question: 'Can Neon Nights be combined with other experiences?',
          answer: 'Absolutely! Neon Nights pairs exceptionally well with our Foam Parties, Water Games, and other experiences for a multi-dimensional event.'
        }
      ];

  // Parse packages if available
  const packages: Package[] = rawData.packages
    ? rawData.packages.map((pkg: any, index: number) => ({
        title: pkg.title || `Neon Package ${index + 1}`,
        description: pkg.description || '',
        image: pkg.image || resources.packageImages[index] || resources.all[0] || { url: '', alt: 'Package image' },
        features: pkg.features || [],
        price: pkg.price || '',
        ctaText: pkg.ctaText || 'Book Now',
        ctaUrl: pkg.ctaUrl || '/contact',
      }))
    : [];

  // Return the fully structured data object
  return {
    meta,
    hero,
    cta,
    videoContent,
    contentSection,
    gallery: gallery.length > 0 ? gallery : undefined,
    testimonials: testimonials.length > 0 ? testimonials : undefined,
    faqs,
    packages: packages.length > 0 ? packages : undefined,
    resources: resources.all,
  };
} 