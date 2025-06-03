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
  description?: string;
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
  image?: Resource;
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
 * Event Idea data
 */
export interface EventIdeaData {
  title: string;
  description: string;
  footer?: string;
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
  eventIdea?: EventIdeaData;
  resources: {
    byCategory: {
      heroBackground: Resource[];
      videoThumbnails: Resource[];
      galleryImages: Resource[];
      packageImages?: Resource[];
      colorRunImages?: Resource[];
      all: Resource[];
    };
  };
} 