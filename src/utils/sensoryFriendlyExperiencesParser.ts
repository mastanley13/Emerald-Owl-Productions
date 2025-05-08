/**
 * Parser utility for the Sensory Friendly Experiences page data
 */
import { SensoryFriendlyExperiencesData } from '../types/sensoryFriendlyExperiences';

/**
 * Parses the raw JSON data from the API into structured SensoryFriendlyExperiencesData
 * @param data Raw data from the API
 * @returns Structured SensoryFriendlyExperiencesData object
 */
export function parseSensoryFriendlyExperiencesData(data: any): SensoryFriendlyExperiencesData {
  try {
    // Extract HTML content from the data
    const htmlContent = data?.html || '';
    
    // Default structured data
    const structuredData: SensoryFriendlyExperiencesData = {
      title: 'Sensory Friendly Experiences',
      
      hero: {
        heading: 'Sensory Friendly Experiences',
        subheading: 'Inclusive experiences designed for everyone to enjoy',
        backgroundImage: extractImageFromHTML(htmlContent, 'section-KwwUa0EPO', 'bg-') || 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67181cb3869895650f06553e.jpeg'
      },
      
      introduction: {
        heading: 'Plan An Event That Can Include Everyone',
        description: [
          'At Emerald Owl Productions, we believe that everyone deserves to experience joy and fun. Our Sensory Friendly Experiences are specially designed to accommodate individuals with sensory sensitivities, creating a welcoming environment for all participants.',
          'In response to parent feedback about sensory sensitivities preventing their children from attending our events, we collaborated with Ali Cheely, our Director of Neurodivergent Events, to create experiences that are both exciting and comfortable for everyone.'
        ],
        image: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67ab91924dcedf6404738967.png'
      },
      
      features: {
        heading: 'What Separates This From Others',
        items: [
          {
            title: 'Specialized Scheduling',
            description: 'We carefully schedule events during quieter times to avoid overwhelming crowds and create a more comfortable environment.'
          },
          {
            title: 'Modified Lights & Sound',
            description: 'Our light displays use gentle transitions and reduced flashing, while sound levels are carefully monitored and kept at comfortable volumes.'
          },
          {
            title: 'Calm Areas',
            description: 'We designate specific quiet spaces where participants can take breaks if they feel overwhelmed at any point during the event.'
          }
        ]
      },
      
      director: {
        heading: 'Meet Our Director',
        name: 'Ali Cheely',
        title: 'Director of Neurodivergent Events',
        image: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67144f7bf312d46538860eaa.jpeg',
        bio: [
          'Ali Cheely is a mother of 4 children, 3 of which have special needs, including neurological differences. She brings her teaching and coaching experience from school, church, and home settings to Emerald Owl Productions.',
          'She has worked with children and adults with autism, Down syndrome, Split brain syndrome, Cerebral palsy, OCD, ADHD, global cognitive delays, and short stature/dwarfism. Ali has also worked with individuals who are non-verbal and non-ambulatory.'
        ],
        quote: "I know how hard it is when you feel there are no events that meet the unique needs of your kids. As Director of Neurodivergent Events, my job is to create specific experiences that meet the needs of populations that are often overlooked by event planners. It is truly humbling to use my knowledge and background to create memories via epic events for these populations.",
        contact: {
          email: 'ali@emeraldowlproductions.com',
          phone: '(252) 570-9453'
        }
      },
      
      gallery: {
        heading: 'Sensory Friendly Event Gallery',
        images: [
          {
            url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/6732347e70d7a32506175fd9.jpeg',
            alt: 'Sensory friendly event'
          },
          {
            url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/6732347678b9431938b76ca6.jpeg',
            alt: 'Sensory friendly event'
          },
          {
            url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/6732349d7f10cd2fc32ef839.jpeg',
            alt: 'Sensory friendly event'
          },
          {
            url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/673234e640b8723008d0ed7f.jpeg',
            alt: 'Sensory friendly event'
          },
          {
            url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/673234fa7f10cdb8d42ef864.jpeg',
            alt: 'Sensory friendly event'
          },
          {
            url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/6732351055af5c28665fee1e.jpeg',
            alt: 'Sensory friendly event'
          }
        ]
      },
      
      pricing: {
        heading: 'Sensory Friendly Pricing',
        description: [
          'We understand the importance of making Sensory Friendly Events engaging yet calming. With flexible pricing and customizable options, Emerald Owl Productions will work with your team to design an event tailored to sensory needs, all within your budget including foam, gunge, and other fun activities.',
          'Our package deals for multiple events can also help reduce costs, while providing continuity in planning for future sensory-friendly gatherings.'
        ],
        buttonText: 'Contact Us for Pricing',
        buttonLink: '/contact-us'
      }
    };
    
    // Try to extract content from the HTML if needed (for more advanced parsing)
    // This is where you could parse sections from the HTML content
    
    return structuredData;
  } catch (error) {
    console.error('Error parsing Sensory Friendly Experiences data:', error);
    
    // Return fallback data
    return createFallbackSensoryFriendlyExperiencesData();
  }
}

/**
 * Creates fallback data in case of parsing errors
 * @returns Default SensoryFriendlyExperiencesData object
 */
function createFallbackSensoryFriendlyExperiencesData(): SensoryFriendlyExperiencesData {
  return {
    title: 'Sensory Friendly Experiences',
    
    hero: {
      heading: 'Sensory Friendly Experiences',
      subheading: 'Inclusive experiences designed for everyone',
    },
    
    introduction: {
      heading: 'Plan An Event That Can Include Everyone',
      description: [
        'Our Sensory Friendly Experiences are designed to accommodate individuals with sensory sensitivities.'
      ]
    },
    
    features: {
      heading: 'What Makes Us Different',
      items: [
        {
          title: 'Specialized Scheduling',
          description: 'Events scheduled during quieter times'
        },
        {
          title: 'Modified Lights & Sound',
          description: 'Gentle light transitions and reduced sound'
        },
        {
          title: 'Calm Areas',
          description: 'Quiet spaces for breaks as needed'
        }
      ]
    },
    
    director: {
      heading: 'Meet Our Director',
      name: 'Ali Cheely',
      title: 'Director of Neurodivergent Events',
      image: '/images/placeholder.jpg',
      bio: [
        'Ali Cheely is our Director of Neurodivergent Events.'
      ]
    },
    
    gallery: {
      heading: 'Event Gallery',
      images: []
    },
    
    pricing: {
      heading: 'Pricing',
      description: [
        'Contact us for customized pricing options.'
      ],
      buttonText: 'Contact Us',
      buttonLink: '/contact-us'
    }
  };
}

/**
 * Utility function to extract image URLs from HTML content
 * @param html HTML content
 * @param sectionId The section ID to look for
 * @param prefix Prefix for the image URL in CSS
 * @returns The extracted image URL or undefined
 */
function extractImageFromHTML(html: string, sectionId: string, prefix: string): string | undefined {
  try {
    const sectionRegex = new RegExp(`class="[^"]*section-${sectionId}[^"]*"`, 'i');
    const sectionMatch = html.match(sectionRegex);
    
    if (sectionMatch) {
      // Find the section's position in the HTML
      const sectionStartPos = html.indexOf(sectionMatch[0]);
      
      // Look for a background image URL after this position
      const bgStyleRegex = new RegExp(`${prefix}[^:]*:\\s*url\\(['"](https?://[^'"]+)['"]\\)`, 'i');
      const styleMatch = html.substring(sectionStartPos).match(bgStyleRegex);
      
      if (styleMatch && styleMatch[1]) {
        return styleMatch[1];
      }
    }
    
    return undefined;
  } catch (error) {
    console.error('Error extracting image from HTML:', error);
    return undefined;
  }
} 