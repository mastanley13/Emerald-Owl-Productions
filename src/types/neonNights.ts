import { Resource } from './homepage';

/**
 * Metadata for the Neon Nights page
 */
export interface NeonNightsMeta {
  title: string;
  description: string;
  keywords: string[];
}

/**
 * Hero section content for the Neon Nights page
 */
export interface NeonNightsHero {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: Resource;
}

/**
 * Call to action for the Neon Nights page
 */
export interface NeonNightsCTA {
  text: string;
  url: string;
}

/**
 * Video content section
 */
export interface VideoContent {
  title?: string;
  description?: string;
  videoUrl: string;
  thumbnailUrl?: string;
}

/**
 * Content section for Neon Nights
 */
export interface ContentSection {
  title: string;
  description: string;
  features?: string[];
}

/**
 * Gallery item for Neon Nights page
 */
export interface GalleryItem {
  image: Resource;
  title?: string;
  caption?: string;
}

/**
 * Testimonial for Neon Nights page
 */
export interface TestimonialData {
  quote: string;
  author: string;
  role?: string;
  image?: Resource;
}

/**
 * FAQ item for Neon Nights page
 */
export interface FaqItem {
  question: string;
  answer: string;
}

/**
 * Package or offering for Neon Nights
 */
export interface Package {
  title: string;
  description: string;
  image: Resource;
  features?: string[];
  price?: string;
  ctaText?: string;
  ctaUrl?: string;
}

/**
 * Main data structure for Neon Nights page
 */
export interface NeonNightsData {
  meta: NeonNightsMeta;
  hero: NeonNightsHero;
  cta: NeonNightsCTA;
  videoContent?: VideoContent;
  contentSection: ContentSection;
  gallery?: GalleryItem[];
  testimonials?: TestimonialData[];
  faqs?: FaqItem[];
  packages?: Package[];
  resources?: Resource[];
} 