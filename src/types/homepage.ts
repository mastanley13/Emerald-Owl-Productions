// Homepage data structure types

/**
 * Resource (image) type
 */
export interface Resource {
  type: 'image' | 'video';
  url: string;
  alt: string;
  width?: string;
  height?: string;
}

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
  logo: Resource;
  title: {
    main: string;
    secondary: string;
  };
  subtitle: string;
  ctaButtons: {
    primary: {
      text: string;
      url: string;
    };
    secondary: {
      text: string;
      action: string;
    };
  };
  trustIndicators: string[];
}

/**
 * America Banner section data
 */
export interface AmericaBannerData {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaUrl: string;
}

/**
 * Video Highlight data
 */
export interface VideoHighlightData {
  title: string;
  thumbnailUrl: string;
  videoUrl: string;
  note: string;
}

/**
 * Service for ServiceHighlights
 */
export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

/**
 * Featured content for FeaturedSlider
 */
export interface FeaturedContent {
  title: {
    firstPart: string;
    secondPart: string;
  };
  description: string;
  features: string[];
  ctaText: string;
  ctaUrl: string;
  images: string[];
}

/**
 * Complete homepage data
 */
export interface HomepageData {
  meta: MetaInfo;
  hero: HeroBannerData;
  americaBanner: AmericaBannerData;
  videoHighlight: VideoHighlightData;
  services: Service[];
  featuredContent: FeaturedContent;
  resources: {
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
  };
} 