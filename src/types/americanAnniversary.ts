/**
 * American Anniversary Celebration data structure types
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
 * Complete American Anniversary data
 */
export interface AmericanAnniversaryData {
  meta: MetaInfo;
  hero: HeroBannerData;
  videoContent?: VideoContentData;
  contentSection: ContentSectionData;
  gallery: GalleryItem[];
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