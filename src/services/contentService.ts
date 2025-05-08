import { HomepageData } from '../types/homepage';
import { AmericanAnniversaryData } from '../types/americanAnniversary';
import { DrippingInConfidenceData } from '../types/drippingInConfidence';
import { FoamPartiesData } from '../types/foamParties';
import { GungeData } from '../types/gunge';
import { WaterGamesData } from '../types/waterGames';
import { LaserLightShowData } from '../types/laserLightShow';
import { NeonNightsData } from '../types/neonNights';
import { SensoryFriendlyExperiencesData } from '../types/sensoryFriendlyExperiences';
import { HolidayEventsData } from '../types/holidayEvents';
import { parseHomepageData } from '../utils/homepageDataParser';
import { parseAmericanAnniversaryData } from '../utils/americanAnniversaryParser';
import { parseDrippingInConfidenceData } from '../utils/drippingInConfidenceParser';
import { parseFoamPartiesData } from '../utils/foamPartiesParser';
import { parseGungeData } from '../utils/gungeParser';
import { parseWaterGamesData } from '../utils/waterGamesParser';
import { parseLaserLightShowData } from '../utils/laserLightShowParser';
import { parseNeonNightsData } from '../utils/neonNightsParser';
import { parseSensoryFriendlyExperiencesData } from '../utils/sensoryFriendlyExperiencesParser';
import { parseHolidayEventsData } from '../utils/holidayEventsParser';
import fs from 'fs';
import path from 'path';

// Cache for content data to avoid multiple fetches
let homepageDataCache: HomepageData | null = null;
let americanAnniversaryDataCache: AmericanAnniversaryData | null = null;
let drippingInConfidenceDataCache: DrippingInConfidenceData | null = null;
let foamPartiesDataCache: FoamPartiesData | null = null;
let gungeDataCache: GungeData | null = null;
let waterGamesDataCache: WaterGamesData | null = null;
let laserLightShowDataCache: LaserLightShowData | null = null;
let neonNightsDataCache: NeonNightsData | null = null;
let sensoryFriendlyExperiencesDataCache: SensoryFriendlyExperiencesData | null = null;

/**
 * Fetches the homepage content data
 * Uses caching for improved performance
 */
export async function getHomepageData(): Promise<HomepageData> {
  // Return cached data if available
  if (homepageDataCache) {
    return homepageDataCache;
  }

  try {
    // Direct file access (works in both server and client components in Next.js)
    let rawData;
    
    // Server-side: Direct file reading
    if (typeof window === 'undefined') {
      try {
        // Try to read from page-content directory first
        const filePath = path.join(process.cwd(), 'page-content', 'homepage.json');
        
        // If file doesn't exist in page-content, try legacy-site directory
        if (!fs.existsSync(filePath)) {
          const legacyFilePath = path.join(process.cwd(), 'legacy-site', 'homepage.json');
          if (!fs.existsSync(legacyFilePath)) {
            throw new Error('Homepage content not found');
          }
          const fileData = fs.readFileSync(legacyFilePath, 'utf8');
          rawData = JSON.parse(fileData);
        } else {
          const fileData = fs.readFileSync(filePath, 'utf8');
          rawData = JSON.parse(fileData);
        }
      } catch (fileReadError) {
        console.error('Error reading from filesystem:', fileReadError);
        throw fileReadError;
      }
    } 
    // Client-side: Fetch via API
    else {
      const response = await fetch('/api/content/homepage');
      if (!response.ok) {
        throw new Error(`Failed to fetch homepage data: ${response.status}`);
      }
      rawData = await response.json();
    }
    
    // Parse and structure the data
    const parsedData = parseHomepageData(rawData);
    
    // Cache the result
    homepageDataCache = parsedData;
    
    return parsedData;
  } catch (error) {
    console.error('Error fetching homepage data:', error);
    
    // Return fallback data in case of error
    return createFallbackHomepageData();
  }
}

/**
 * Fetches the American Anniversary content data
 * Uses caching for improved performance
 */
export async function getAmericanAnniversaryData(): Promise<AmericanAnniversaryData> {
  // Return cached data if available
  if (americanAnniversaryDataCache) {
    return americanAnniversaryDataCache;
  }

  try {
    // Direct file access (works in both server and client components in Next.js)
    let rawData;
    
    // Server-side: Direct file reading
    if (typeof window === 'undefined') {
      try {
        const filePath = path.join(process.cwd(), 'page-content', 'american-anniversary-celebration.json');
        // If the file doesn't exist in page-content, try the legacy-site directory
        if (!fs.existsSync(filePath)) {
          const legacyFilePath = path.join(process.cwd(), 'legacy-site', 'american-anniversary-celebration.json');
          if (!fs.existsSync(legacyFilePath)) {
            throw new Error('American Anniversary content not found');
          }
          const fileData = fs.readFileSync(legacyFilePath, 'utf8');
          rawData = JSON.parse(fileData);
        } else {
          const fileData = fs.readFileSync(filePath, 'utf8');
          rawData = JSON.parse(fileData);
        }
      } catch (fileReadError) {
        console.error('Error reading from filesystem:', fileReadError);
        throw fileReadError;
      }
    } 
    // Client-side: Fetch via API
    else {
      const response = await fetch('/api/content/american-anniversary');
      if (!response.ok) {
        throw new Error(`Failed to fetch American Anniversary data: ${response.status}`);
      }
      rawData = await response.json();
    }
    
    // Parse and structure the data
    const parsedData = parseAmericanAnniversaryData(rawData);
    
    // Cache the result
    americanAnniversaryDataCache = parsedData;
    
    return parsedData;
  } catch (error) {
    console.error('Error fetching American Anniversary data:', error);
    
    // Return fallback data in case of error
    return createFallbackAmericanAnniversaryData();
  }
}

/**
 * Fetches the Dripping in Confidence content data
 * Uses caching for improved performance
 */
export async function getDrippingInConfidenceData(): Promise<DrippingInConfidenceData> {
  // Return cached data if available
  if (drippingInConfidenceDataCache) {
    return drippingInConfidenceDataCache;
  }

  try {
    // Direct file access (works in both server and client components in Next.js)
    let rawData;
    
    // Server-side: Direct file reading
    if (typeof window === 'undefined') {
      try {
        const filePath = path.join(process.cwd(), 'page-content', 'dripping-in-confidence.json');
        // If the file doesn't exist in page-content, try the legacy-site directory
        if (!fs.existsSync(filePath)) {
          const legacyFilePath = path.join(process.cwd(), 'legacy-site', 'dripping-in-confidence.json');
          if (!fs.existsSync(legacyFilePath)) {
            throw new Error('Dripping in Confidence content not found');
          }
          const fileData = fs.readFileSync(legacyFilePath, 'utf8');
          rawData = JSON.parse(fileData);
        } else {
          const fileData = fs.readFileSync(filePath, 'utf8');
          rawData = JSON.parse(fileData);
        }
      } catch (fileReadError) {
        console.error('Error reading from filesystem:', fileReadError);
        throw fileReadError;
      }
    } 
    // Client-side: Fetch via API
    else {
      const response = await fetch('/api/content/dripping-in-confidence');
      if (!response.ok) {
        throw new Error(`Failed to fetch Dripping in Confidence data: ${response.status}`);
      }
      rawData = await response.json();
    }
    
    // Parse and structure the data
    const parsedData = parseDrippingInConfidenceData(rawData);
    
    // Cache the result
    drippingInConfidenceDataCache = parsedData;
    
    return parsedData;
  } catch (error) {
    console.error('Error fetching Dripping in Confidence data:', error);
    
    // Return fallback data in case of error
    return createFallbackDrippingInConfidenceData();
  }
}

/**
 * Fetches the Foam Parties content data
 * Uses caching for improved performance
 */
export async function getFoamPartiesData(): Promise<FoamPartiesData> {
  // Return cached data if available
  if (foamPartiesDataCache) {
    return foamPartiesDataCache;
  }

  try {
    // Direct file access (works in both server and client components in Next.js)
    let rawData;
    
    // Server-side: Direct file reading
    if (typeof window === 'undefined') {
      try {
        const filePath = path.join(process.cwd(), 'page-content', 'foam-parties.json');
        // If the file doesn't exist in page-content, try the legacy-site directory
        if (!fs.existsSync(filePath)) {
          const legacyFilePath = path.join(process.cwd(), 'legacy-site', 'foam-parties.json');
          if (!fs.existsSync(legacyFilePath)) {
            throw new Error('Foam Parties content not found');
          }
          const fileData = fs.readFileSync(legacyFilePath, 'utf8');
          rawData = JSON.parse(fileData);
        } else {
          const fileData = fs.readFileSync(filePath, 'utf8');
          rawData = JSON.parse(fileData);
        }
      } catch (fileReadError) {
        console.error('Error reading from filesystem:', fileReadError);
        throw fileReadError;
      }
    } 
    // Client-side: Fetch via API
    else {
      const response = await fetch('/api/content/foam-parties');
      if (!response.ok) {
        throw new Error(`Failed to fetch Foam Parties data: ${response.status}`);
      }
      rawData = await response.json();
    }
    
    // Parse and structure the data
    const parsedData = parseFoamPartiesData(rawData);
    
    // Cache the result
    foamPartiesDataCache = parsedData;
    
    return parsedData;
  } catch (error) {
    console.error('Error fetching Foam Parties data:', error);
    
    // Return fallback data in case of error
    return createFallbackFoamPartiesData();
  }
}

/**
 * Fetches the Gunge content data
 * Uses caching for improved performance
 */
export async function getGungeData(): Promise<GungeData> {
  // Return cached data if available
  if (gungeDataCache) {
    return gungeDataCache;
  }

  try {
    // Direct file access (works in both server and client components in Next.js)
    let rawData;
    
    // Server-side: Direct file reading
    if (typeof window === 'undefined') {
      try {
        const filePath = path.join(process.cwd(), 'page-content', 'gunge.json');
        // If the file doesn't exist in page-content, try the legacy-site directory
        if (!fs.existsSync(filePath)) {
          const legacyFilePath = path.join(process.cwd(), 'legacy-site', 'gunge.json');
          if (!fs.existsSync(legacyFilePath)) {
            throw new Error('Gunge content not found');
          }
          const fileData = fs.readFileSync(legacyFilePath, 'utf8');
          rawData = JSON.parse(fileData);
        } else {
          const fileData = fs.readFileSync(filePath, 'utf8');
          rawData = JSON.parse(fileData);
        }
      } catch (fileReadError) {
        console.error('Error reading from filesystem:', fileReadError);
        throw fileReadError;
      }
    } 
    // Client-side: Fetch via API
    else {
      const response = await fetch('/api/content/gunge');
      if (!response.ok) {
        throw new Error(`Failed to fetch Gunge data: ${response.status}`);
      }
      rawData = await response.json();
    }
    
    // Parse and structure the data
    const parsedData = parseGungeData(rawData);
    
    // Cache the result
    gungeDataCache = parsedData;
    
    return parsedData;
  } catch (error) {
    console.error('Error fetching Gunge data:', error);
    
    // Return fallback data in case of error
    return createFallbackGungeData();
  }
}

/**
 * Fetches the Water Games content data
 * Uses caching for improved performance
 */
export async function getWaterGamesData(): Promise<WaterGamesData> {
  // Return cached data if available
  if (waterGamesDataCache) {
    return waterGamesDataCache;
  }

  try {
    // Direct file access (works in both server and client components in Next.js)
    let rawData;
    
    // Server-side: Direct file reading
    if (typeof window === 'undefined') {
      try {
        const filePath = path.join(process.cwd(), 'page-content', 'water-games.json');
        // If the file doesn't exist in page-content, try the legacy-site directory
        if (!fs.existsSync(filePath)) {
          const legacyFilePath = path.join(process.cwd(), 'legacy-site', 'water-games.json');
          if (!fs.existsSync(legacyFilePath)) {
            throw new Error('Water Games content not found');
          }
          const fileData = fs.readFileSync(legacyFilePath, 'utf8');
          rawData = JSON.parse(fileData);
        } else {
          const fileData = fs.readFileSync(filePath, 'utf8');
          rawData = JSON.parse(fileData);
        }
      } catch (fileReadError) {
        console.error('Error reading from filesystem:', fileReadError);
        throw fileReadError;
      }
    } 
    // Client-side: Fetch via API
    else {
      const response = await fetch('/api/content/water-games');
      if (!response.ok) {
        throw new Error(`Failed to fetch Water Games data: ${response.status}`);
      }
      rawData = await response.json();
    }
    
    // Parse and structure the data
    const parsedData = parseWaterGamesData(rawData);
    
    // Cache the result
    waterGamesDataCache = parsedData;
    
    return parsedData;
  } catch (error) {
    console.error('Error fetching Water Games data:', error);
    
    // Return fallback data in case of error
    return createFallbackWaterGamesData();
  }
}

/**
 * Fetches the Laser Light Show content data
 * Uses caching for improved performance
 */
export async function getLaserLightShowData(): Promise<LaserLightShowData> {
  // Return cached data if available
  if (laserLightShowDataCache) {
    return laserLightShowDataCache;
  }

  try {
    // Direct file access (works in both server and client components in Next.js)
    let rawData;
    
    // Server-side: Direct file reading
    if (typeof window === 'undefined') {
      try {
        const filePath = path.join(process.cwd(), 'page-content', 'laser-light-show.json');
        // If the file doesn't exist in page-content, try the legacy-site directory
        if (!fs.existsSync(filePath)) {
          const legacyFilePath = path.join(process.cwd(), 'legacy-site', 'laser-light-show.json');
          if (!fs.existsSync(legacyFilePath)) {
            throw new Error('Laser Light Show content not found');
          }
          const fileData = fs.readFileSync(legacyFilePath, 'utf8');
          rawData = JSON.parse(fileData);
        } else {
          const fileData = fs.readFileSync(filePath, 'utf8');
          rawData = JSON.parse(fileData);
        }
      } catch (fileReadError) {
        console.error('Error reading from filesystem:', fileReadError);
        throw fileReadError;
      }
    } 
    // Client-side: Fetch via API
    else {
      const response = await fetch('/api/content/laser-light-show');
      if (!response.ok) {
        throw new Error(`Failed to fetch Laser Light Show data: ${response.status}`);
      }
      rawData = await response.json();
    }
    
    // Parse and structure the data
    const parsedData = parseLaserLightShowData(rawData);
    
    // Cache the result
    laserLightShowDataCache = parsedData;
    
    return parsedData;
  } catch (error) {
    console.error('Error fetching Laser Light Show data:', error);
    
    // Return fallback data in case of error
    return createFallbackLaserLightShowData();
  }
}

/**
 * Fetches the Neon Nights content data
 * Uses caching for improved performance
 */
export async function getNeonNightsData(): Promise<NeonNightsData> {
  // Return cached data if available
  if (neonNightsDataCache) {
    return neonNightsDataCache;
  }

  try {
    // Direct file access (works in both server and client components in Next.js)
    let rawData;
    
    // Server-side: Direct file reading
    if (typeof window === 'undefined') {
      try {
        const filePath = path.join(process.cwd(), 'page-content', 'neon-nights.json');
        // If the file doesn't exist in page-content, try the legacy-site directory
        if (!fs.existsSync(filePath)) {
          const legacyFilePath = path.join(process.cwd(), 'legacy-site', 'neon-nights.json');
          if (!fs.existsSync(legacyFilePath)) {
            throw new Error('Neon Nights content not found');
          }
          const fileData = fs.readFileSync(legacyFilePath, 'utf8');
          rawData = JSON.parse(fileData);
        } else {
          const fileData = fs.readFileSync(filePath, 'utf8');
          rawData = JSON.parse(fileData);
        }
      } catch (fileReadError) {
        console.error('Error reading from filesystem:', fileReadError);
        throw fileReadError;
      }
    } 
    // Client-side: Fetch via API
    else {
      const response = await fetch('/api/content/neon-nights');
      if (!response.ok) {
        throw new Error(`Failed to fetch Neon Nights data: ${response.status}`);
      }
      rawData = await response.json();
    }
    
    // Parse and structure the data
    const parsedData = parseNeonNightsData(rawData);
    
    // Cache the result
    neonNightsDataCache = parsedData;
    
    return parsedData;
  } catch (error) {
    console.error('Error fetching Neon Nights data:', error);
    
    // Return fallback data in case of error
    return createFallbackNeonNightsData();
  }
}

/**
 * Fetches the Sensory Friendly Experiences content data
 * Uses caching for improved performance
 */
export async function getSensoryFriendlyExperiencesData(): Promise<SensoryFriendlyExperiencesData> {
  // Return cached data if available
  if (sensoryFriendlyExperiencesDataCache) {
    return sensoryFriendlyExperiencesDataCache;
  }

  try {
    // Direct file access (works in both server and client components in Next.js)
    let rawData;
    
    // Server-side: Direct file reading
    if (typeof window === 'undefined') {
      try {
        // Try to read from page-content directory first
        const filePath = path.join(process.cwd(), 'page-content', 'sensory-friendly-experiences.json');
        
        // If file doesn't exist in page-content, try legacy-site directory
        if (!fs.existsSync(filePath)) {
          const legacyFilePath = path.join(process.cwd(), 'legacy-site', 'sensory-friendly-experiences.json');
          if (!fs.existsSync(legacyFilePath)) {
            throw new Error('Sensory Friendly Experiences content not found');
          }
          const fileData = fs.readFileSync(legacyFilePath, 'utf8');
          rawData = JSON.parse(fileData);
        } else {
          const fileData = fs.readFileSync(filePath, 'utf8');
          rawData = JSON.parse(fileData);
        }
      } catch (fileReadError) {
        console.error('Error reading from filesystem:', fileReadError);
        throw fileReadError;
      }
    } 
    // Client-side: Fetch via API
    else {
      const response = await fetch('/api/content/sensory-friendly-experiences');
      if (!response.ok) {
        throw new Error(`Failed to fetch Sensory Friendly Experiences data: ${response.status}`);
      }
      rawData = await response.json();
    }
    
    // Parse and structure the data
    const parsedData = parseSensoryFriendlyExperiencesData(rawData);
    
    // Cache the result
    sensoryFriendlyExperiencesDataCache = parsedData;
    
    return parsedData;
  } catch (error) {
    console.error('Error fetching Sensory Friendly Experiences data:', error);
    
    // Return fallback data in case of error
    return createFallbackSensoryFriendlyExperiencesData();
  }
}

/**
 * Fetches the Holiday Events content data
 * Uses caching for improved performance
 */
export async function getHolidayEventsData(): Promise<HolidayEventsData> {
  try {
    // Direct file access (works in both server and client components in Next.js)
    let rawData;
    
    // Server-side: Direct file reading
    if (typeof window === 'undefined') {
      try {
        const filePath = path.join(process.cwd(), 'page-content', 'holiday-events.json');
        // If the file doesn't exist in page-content, try the legacy-site directory
        if (!fs.existsSync(filePath)) {
          const legacyFilePath = path.join(process.cwd(), 'legacy-site', 'holiday-events.json');
          if (!fs.existsSync(legacyFilePath)) {
            throw new Error('Holiday Events content not found');
          }
          const fileData = fs.readFileSync(legacyFilePath, 'utf8');
          rawData = JSON.parse(fileData);
        } else {
          const fileData = fs.readFileSync(filePath, 'utf8');
          rawData = JSON.parse(fileData);
        }
      } catch (fileReadError) {
        console.error('Error reading from filesystem:', fileReadError);
        // Return fallback data if file read fails
        return createFallbackHolidayEventsData();
      }
    } 
    // Client-side: Fetch via API
    else {
      try {
        const response = await fetch('/api/content/holiday-events');
        if (!response.ok) {
          throw new Error(`Failed to fetch Holiday Events data: ${response.status}`);
        }
        rawData = await response.json();
      } catch (fetchError) {
        console.error('Error fetching Holiday Events data:', fetchError);
        // Return fallback data if fetch fails
        return createFallbackHolidayEventsData();
      }
    }
    
    // Parse and structure the data
    return parseHolidayEventsData(rawData);
    
  } catch (error) {
    console.error('Error in getHolidayEventsData:', error);
    // Return fallback data in case of any error
    return createFallbackHolidayEventsData();
  }
}

/**
 * Creates fallback homepage data in case the API fetch fails
 */
function createFallbackHomepageData(): HomepageData {
  // This is a simplified version of the homepage data with essential information
  return parseHomepageData({
    title: 'Emerald Owl Productions Home',
    meta: {
      description: 'Creating unforgettable experiences and magical moments for events of all kinds.',
      keywords: ''
    },
    resources: [
      {
        type: 'image',
        url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/6704204d9d9a095a00d5b580.png',
        alt: 'Emerald Owl Productions',
        width: '',
        height: ''
      }
    ]
  });
}

/**
 * Creates fallback American Anniversary data in case the API fetch fails
 */
function createFallbackAmericanAnniversaryData(): AmericanAnniversaryData {
  // This is a simplified version of the American Anniversary data with essential information
  return parseAmericanAnniversaryData({
    title: 'America\'s 250th Anniversary Celebration',
    meta: {
      description: 'Experience America\'s 250th Anniversary with our Revolutionary Light Show Celebration',
      keywords: ''
    },
    resources: [
      {
        type: 'image',
        url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/673652882fd9d4e5aaea654c.png',
        alt: 'America\'s 250th Anniversary Celebration',
        width: '',
        height: ''
      }
    ]
  });
}

/**
 * Creates fallback Dripping in Confidence data in case the API fetch fails
 */
function createFallbackDrippingInConfidenceData(): DrippingInConfidenceData {
  // This is a simplified version of the Dripping in Confidence data with essential information
  return parseDrippingInConfidenceData({
    title: 'Dripping in Confidence | Emerald Owl Productions',
    meta: {
      description: 'Experience the most fun and messy slime activities for events and fundraisers!',
      keywords: ''
    },
    resources: [
      {
        type: 'image',
        url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67ab94d979284b777a6a7660.jpeg',
        alt: 'Dripping in Confidence',
        width: '',
        height: ''
      }
    ]
  });
}

/**
 * Creates fallback Foam Parties data in case the API fetch fails
 */
function createFallbackFoamPartiesData(): FoamPartiesData {
  // This is a simplified version of the Foam Parties data with essential information
  return parseFoamPartiesData({
    title: 'Foam Parties & Color Run | Emerald Owl Productions',
    meta: {
      description: 'Create high-energy, fun-filled foam parties and color run events for any occasion!',
      keywords: ''
    },
    resources: [
      {
        type: 'image',
        url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67a453fb7ee1c12aa7752dcc.jpeg',
        alt: 'Foam Parties',
        width: '',
        height: ''
      }
    ]
  });
}

/**
 * Creates fallback Gunge data in case the API fetch fails
 */
function createFallbackGungeData(): GungeData {
  // This is a simplified version of the Gunge data with essential information
  return parseGungeData({
    title: 'Gunge & Slime Experiences | Emerald Owl Productions',
    meta: {
      description: 'Create messy, fun-filled gunge experiences for fundraisers, charity events, and special occasions!',
      keywords: ''
    },
    resources: [
      {
        type: 'image',
        url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/671125656eaeb07042dfb1e5.png',
        alt: 'Gunge',
        width: '',
        height: ''
      }
    ]
  });
}

/**
 * Creates fallback data for Water Games page in case of errors
 */
function createFallbackWaterGamesData(): WaterGamesData {
  return parseWaterGamesData({
    title: 'Water Games | Emerald Owl Productions',
    meta: {
      description: 'Experience the most fun water games and activities for events and celebrations!',
      keywords: ''
    },
    resources: []
  });
}

/**
 * Creates fallback Laser Light Show data in case of data fetch errors
 */
function createFallbackLaserLightShowData(): LaserLightShowData {
  return {
    meta: {
      title: 'Laser Light Show | Emerald Owl Productions',
      description: 'Experience spectacular laser light shows for any event, creating unforgettable visual experiences!',
      keywords: ''
    },
    hero: {
      title: 'Laser Light Show',
      backgroundImage: {
        type: 'image',
        url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/671d07f56bdb4dfd0c0a60c4.jpeg',
        alt: 'Laser Light Show Hero'
      }
    },
    videoContent: {
      videoUrl: 'https://www.youtube.com/embed/97L5BAhkWY0',
      thumbnailUrl: 'https://img.youtube.com/vi/97L5BAhkWY0/maxresdefault.jpg',
      title: 'See Our Laser Light Shows in Action',
      note: 'PLEASE UNMUTE FOR BEST EXPERIENCE'
    },
    contentSection: {
      title: 'Standard In-Person Light Show',
      description: 'Laser light shows offer a spectacular visual experience for any event.',
      features: [
        'Customizable music themes',
        'Perfect for indoor or outdoor events',
        'Can run multiple times at minimal extra cost'
      ]
    },
    benefits: [
      {
        title: 'Vibrant Visual Experience',
        description: 'Lasers offer the most vibrant colors for captivating, dreamlike light displays',
        icon: 'star'
      }
    ],
    safetyFeatures: [
      {
        title: 'Environmentally Friendly',
        description: 'No debris, smoke, or chemical residue - just pure light entertainment',
        icon: 'leaf'
      }
    ],
    packages: [
      {
        title: 'Beam Show',
        description: 'Your audience will be captivated by the illusion of "structures" floating mid-air.',
        image: {
          type: 'image',
          url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/671d07f56bdb4dfd0c0a60c4.jpeg',
          alt: 'Beam Show'
        },
        features: ['Floating structures of light'],
        price: 'Contact for pricing'
      }
    ],
    gallery: [
      {
        image: {
          type: 'image',
          url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/671d07f56bdb4dfd0c0a60c4.jpeg',
          alt: 'Laser Light Show Experience'
        },
        caption: 'Laser Light Show Experience'
      }
    ],
    testimonials: [],
    faqs: [],
    cta: {
      text: 'Contact Us',
      url: '/contact-us',
      backgroundColor: '#10b981'
    },
    resources: {
      byCategory: {
        heroBackground: [],
        videoThumbnails: [],
        galleryImages: [],
        packageImages: [],
        all: []
      }
    }
  };
}

/**
 * Creates fallback Neon Nights data in case the API fetch fails
 */
function createFallbackNeonNightsData(): NeonNightsData {
  return {
    meta: {
      title: 'Neon Nights | Emerald Owl Productions',
      description: 'Experience the vibrant energy of our Neon Nights events.',
      keywords: ['neon nights', 'neon event', 'uv party', 'glow party', 'nighttime event']
    },
    hero: {
      title: 'Neon Nights',
      subtitle: 'Glow Up Your Event',
      description: 'Transform your event into a vibrant, glowing adventure with our Neon Nights experience.',
      backgroundImage: undefined
    },
    cta: {
      text: 'Book Your Neon Experience',
      url: '/contact'
    },
    contentSection: {
      title: 'Illuminate Your Event',
      description: 'Our Neon Nights experiences transform any venue into a vibrant, glowing wonderland of color and excitement.',
      features: [
        'UV lighting setup',
        'Glow-in-the-dark elements',
        'Neon decorations',
        'Interactive glow activities',
        'Custom color schemes available'
      ]
    },
    faqs: [
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
    ],
    testimonials: [],
    gallery: [],
    resources: []
  };
}

/**
 * Creates fallback data for Sensory Friendly Experiences in case of fetch errors
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
 * Creates fallback Holiday Events data in case the API fetch fails
 */
function createFallbackHolidayEventsData(): HolidayEventsData {
  return parseHolidayEventsData({
    meta: {
      title: 'Holiday Events | Emerald Owl Productions',
      description: 'Celebrate holidays with special themed events from Emerald Owl Productions',
      keywords: ['holiday events', 'seasonal celebrations', 'christmas events', 'halloween events']
    },
    hero: {
      title: 'Holiday Events',
      backgroundImage: {
        url: 'https://i.ibb.co/g91CSwK/christmas-tree-lights.jpg',
        alt: 'Christmas Wonderland with festive lights'
      }
    },
    contentSection: {
      title: 'Celebrate the Seasons',
      description: 'Transform your holiday gatherings into spectacular experiences with our themed entertainment and production services. From Halloween spooktaculars to Christmas wonderlands, our professional team brings the magic of each season to life with immersive decorations, special effects, and interactive activities.'
    },
    holidayEvents: [
      {
        id: 1,
        name: "Halloween Spooktacular",
        description: "A family-friendly Halloween experience featuring fog effects, laser mazes, and themed activities. Our Halloween productions provide the perfect amount of spooky fun without being too scary for younger guests.",
        image: {
          url: "https://i.ibb.co/5FKt0qM/halloween-pumpkins.jpg",
          alt: "Halloween Event with Jack-o-lanterns"
        },
        features: [
          "Atmospheric fog and lighting effects",
          "Themed decorations and environments",
          "Interactive activities and games",
          "Professional entertainers and actors",
          "Customizable scare levels"
        ]
      },
      {
        id: 2,
        name: "Christmas Wonderland",
        description: "Create a magical winter wonderland with our Christmas event productions, featuring artificial snow, light displays, and festive entertainment. Perfect for community events, corporate parties, or school celebrations.",
        image: {
          url: "https://i.ibb.co/f2jQQQ5/christmas-lights.jpg",
          alt: "Christmas Event with magical lights and decorations"
        },
        features: [
          "Professional light displays and installations",
          "Artificial snow machines",
          "Santa's grotto and photo opportunities",
          "Live holiday music and performances",
          "Interactive festive activities"
        ]
      },
      {
        id: 3,
        name: "Thanksgiving Harvest Festival",
        description: "Celebrate the season of gratitude with our harvest-themed events and festivals. We provide all the elements for a perfect fall celebration including decorations, activities, and entertainment.",
        image: {
          url: "https://i.ibb.co/djwxdTq/thanksgiving-harvest.jpg",
          alt: "Thanksgiving harvest display with pumpkins and autumn decorations"
        },
        features: [
          "Seasonal harvest decorations",
          "Pumpkin carving stations",
          "Apple bobbing and traditional games",
          "Hay rides and corn mazes",
          "Hot cider and seasonal treats stations"
        ]
      },
      {
        id: 4,
        name: "New Year's Spectacular",
        description: "Ring in the new year with a dazzling celebration featuring lighting effects, countdown experiences, and festive entertainment. Our New Year's productions can be customized for family-friendly events or adult celebrations.",
        image: {
          url: "https://i.ibb.co/WpqQc88/new-years-fireworks.jpg",
          alt: "New Year's Event with fireworks display"
        },
        features: [
          "Spectacular lighting and special effects",
          "Custom countdown experiences",
          "Confetti and balloon drops",
          "DJ services and dance floors",
          "Themed photo opportunities"
        ]
      }
    ],
    gallery: [
      {
        image: {
          url: "https://i.ibb.co/CmwQKbP/christmas-lights-display.jpg",
          alt: "Christmas light display"
        }
      },
      {
        image: {
          url: "https://i.ibb.co/4MnmZLK/halloween-decoration.jpg",
          alt: "Halloween celebration"
        }
      },
      {
        image: {
          url: "https://i.ibb.co/YDVbMNd/thanksgiving-decoration.jpg",
          alt: "Thanksgiving feast"
        }
      },
      {
        image: {
          url: "https://i.ibb.co/6sFc1QM/new-year-fireworks.jpg",
          alt: "New Year fireworks"
        }
      },
      {
        image: {
          url: "https://i.ibb.co/vwsymkD/holiday-decorations.jpg",
          alt: "Festive decorations"
        }
      },
      {
        image: {
          url: "https://i.ibb.co/SQ0YQzX/new-year-celebration.jpg",
          alt: "New Year celebration"
        }
      }
    ],
    testimonials: [
      {
        quote: "Emerald Owl Productions transformed our community center into an amazing winter wonderland. The children were mesmerized by the snow effects and light displays!",
        author: "Maria Rodriguez",
        role: "Community Center Director"
      },
      {
        quote: "The Halloween production exceeded our expectations. The atmospheric effects and interactive elements created the perfect spooky-but-fun environment our school was looking for.",
        author: "James Wilson",
        role: "PTA President"
      }
    ],
    faqs: [
      {
        question: "How far in advance should I book a holiday event?",
        answer: "We recommend booking holiday events at least 3-6 months in advance, especially for popular dates in October, November, and December. Some clients secure their dates up to a year in advance for major holiday productions."
      },
      {
        question: "Can you customize the holiday theme to match our brand or community?",
        answer: "Absolutely! We specialize in creating custom-themed holiday experiences that reflect your brand, community, or specific vision. Our team will work closely with you to incorporate your logos, colors, and messaging into the event design."
      },
      {
        question: "Do you provide both indoor and outdoor holiday events?",
        answer: "Yes, we create both indoor and outdoor holiday productions. Our team evaluates your venue and recommends the best approach based on available space, expected attendance, and weather considerations for the season."
      }
    ],
    cta: {
      text: "Book Your Holiday Event",
      url: "/contact-us",
      backgroundColor: "#059669"
    }
  });
} 