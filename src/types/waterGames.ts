/**
 * Water Games data structure types
 */

import { Resource } from './homepage';

/**
 * Meta information for SEO
 */
export interface MetaInfo {
  title: string;
  description: string;
  keywords: string;
}

/**
 * Hero Banner section data
 */
export interface HeroBannerData {
  title: string;
  backgroundImage: Resource;
}

/**
 * Video Content data
 */
export interface VideoContentData {
  videoUrl: string;
  thumbnailUrl: string;
  title?: string;
  note?: string;
}

/**
 * Content Section data
 */
export interface ContentSectionData {
  title: string;
  description: string;
  features?: string[];
}

/**
 * Gallery Item
 */
export interface GalleryItem {
  image: Resource;
  caption?: string;
}

/**
 * Call To Action data
 */
export interface CtaData {
  text: string;
  url: string;
  backgroundColor?: string;
}

/**
 * FAQ Item
 */
export interface FaqItem {
  question: string;
  answer: string;
}

/**
 * Testimonial data
 */
export interface TestimonialData {
  quote: string;
  author: string;
  role?: string;
}

/**
 * Complete Water Games data
 */
export interface WaterGamesData {
  meta: MetaInfo;
  hero: HeroBannerData;
  videoContent?: VideoContentData;
  contentSection: ContentSectionData;
  gallery: GalleryItem[];
  testimonials?: TestimonialData[];
  faqs?: FaqItem[];
  cta: CtaData;
  resources: {
    byCategory: {
      heroBackground: Resource[];
      videoThumbnails: Resource[];
      galleryImages: Resource[];
      all: Resource[];
    };
  };
} 