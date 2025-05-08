/**
 * Interface for Sensory Friendly Experiences data
 */
export interface SensoryFriendlyExperiencesData {
  /**
   * Page title
   */
  title: string;
  
  /**
   * Hero section data
   */
  hero: {
    /**
     * Main heading
     */
    heading: string;
    
    /**
     * Subheading text
     */
    subheading: string;
    
    /**
     * Background image URL
     */
    backgroundImage?: string;
  };
  
  /**
   * Introduction section
   */
  introduction: {
    /**
     * Section heading
     */
    heading: string;
    
    /**
     * Description paragraphs
     */
    description: string[];
    
    /**
     * Featured image
     */
    image?: string;
  };
  
  /**
   * Features section for what makes the experience different
   */
  features: {
    /**
     * Section heading
     */
    heading: string;
    
    /**
     * List of features
     */
    items: Array<{
      /**
       * Feature title
       */
      title: string;
      
      /**
       * Feature description
       */
      description: string;
      
      /**
       * Feature icon or image (optional)
       */
      icon?: string;
    }>;
  };
  
  /**
   * Director profile section
   */
  director: {
    /**
     * Section heading
     */
    heading: string;
    
    /**
     * Name of the director
     */
    name: string;
    
    /**
     * Title of the director
     */
    title: string;
    
    /**
     * Director's image
     */
    image: string;
    
    /**
     * Biography paragraphs
     */
    bio: string[];
    
    /**
     * Quote from the director
     */
    quote?: string;
    
    /**
     * Contact information
     */
    contact?: {
      email?: string;
      phone?: string;
    };
  };
  
  /**
   * Image gallery
   */
  gallery: {
    /**
     * Section heading
     */
    heading: string;
    
    /**
     * Gallery images
     */
    images: Array<{
      /**
       * Image URL
       */
      url: string;
      
      /**
       * Image alt text
       */
      alt: string;
    }>;
  };
  
  /**
   * Pricing section
   */
  pricing: {
    /**
     * Section heading
     */
    heading: string;
    
    /**
     * Description paragraphs
     */
    description: string[];
    
    /**
     * Contact button text
     */
    buttonText: string;
    
    /**
     * Contact button link
     */
    buttonLink: string;
  };
} 