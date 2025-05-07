import { HomepageData } from '../types/homepage';
import { AmericanAnniversaryData } from '../types/americanAnniversary';
import { DrippingInConfidenceData } from '../types/drippingInConfidence';
import { FoamPartiesData } from '../types/foamParties';
import { GungeData } from '../types/gunge';
import { parseHomepageData } from '../utils/homepageDataParser';
import { parseAmericanAnniversaryData } from '../utils/americanAnniversaryParser';
import { parseDrippingInConfidenceData } from '../utils/drippingInConfidenceParser';
import { parseFoamPartiesData } from '../utils/foamPartiesParser';
import { parseGungeData } from '../utils/gungeParser';
import fs from 'fs';
import path from 'path';

// Cache for content data to avoid multiple fetches
let homepageDataCache: HomepageData | null = null;
let americanAnniversaryDataCache: AmericanAnniversaryData | null = null;
let drippingInConfidenceDataCache: DrippingInConfidenceData | null = null;
let foamPartiesDataCache: FoamPartiesData | null = null;
let gungeDataCache: GungeData | null = null;

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