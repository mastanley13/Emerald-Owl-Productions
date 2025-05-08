import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

/**
 * GET handler for Sensory Friendly Experiences content
 * Reads the content from the JSON file and returns it as a response
 */
export async function GET() {
  try {
    // Try to read from page-content directory first
    let filePath = path.join(process.cwd(), 'page-content', 'sensory-friendly-experiences.json');
    
    // If the file doesn't exist in page-content, try the legacy-site directory
    if (!fs.existsSync(filePath)) {
      filePath = path.join(process.cwd(), 'legacy-site', 'sensory-friendly-experiences.json');
      if (!fs.existsSync(filePath)) {
        // Return a 404 response if the file is not found in either location
        return NextResponse.json({ error: 'Sensory Friendly Experiences content not found' }, { status: 404 });
      }
    }
    
    // Read the file
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContent);
    
    // Return the data as JSON
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error in Sensory Friendly Experiences API route:', error);
    
    // Return a 500 response for server errors
    return NextResponse.json({ error: 'Failed to fetch Sensory Friendly Experiences content' }, { status: 500 });
  }
} 