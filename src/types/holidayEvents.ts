export interface HolidayEventsData {
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };
  hero: {
    title: string;
    backgroundImage: {
      url: string;
      alt: string;
    };
  };
  contentSection: {
    title: string;
    description: string;
    features?: string[];
  };
  holidayEvents: {
    id: number;
    name: string;
    description: string;
    image: {
      url: string;
      alt: string;
    };
    features: string[];
  }[];
  gallery?: {
    image: {
      url: string;
      alt: string;
    };
    caption?: string;
  }[];
  testimonials?: {
    quote: string;
    author: string;
    role?: string;
  }[];
  faqs?: {
    question: string;
    answer: string;
  }[];
  cta: {
    text: string;
    url: string;
    backgroundColor?: string;
  };
} 