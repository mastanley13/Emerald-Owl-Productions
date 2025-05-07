/**
 * Gunge data structure types
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
 * Gunge Package Option
 */
export interface PackageOption {
  title: string;
  description: string;
  image: Resource;
  features?: string[];
  price?: string;
}

/**
 * FAQ Item
 */
export interface FaqItem {
  question: string;
  answer: string;
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
 * Testimonial data
 */
export interface TestimonialData {
  quote: string;
  author: string;
  role?: string;
}

/**
 * Complete Gunge data
 */
export interface GungeData {
  meta: MetaInfo;
  hero: HeroBannerData;
  videoContent?: VideoContentData;
  contentSection: ContentSectionData;
  packages?: PackageOption[];
  gallery: GalleryItem[];
  testimonials?: TestimonialData[];
  faqs?: FaqItem[];
  cta: CtaData;
  resources: {
    byCategory: {
      heroBackground: Resource[];
      videoThumbnails: Resource[];
      galleryImages: Resource[];
      packageImages: Resource[];
      all: Resource[];
    };
  };
} 