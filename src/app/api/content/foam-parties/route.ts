import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

/**
 * GET handler for Foam Parties content
 * Reads and serves foam-parties.json file
 */
export async function GET() {
  try {
    // Try to read from page-content directory first
    const filePath = path.join(process.cwd(), 'page-content', 'foam-parties.json');
    
    // If file doesn't exist in page-content, try legacy-site directory
    if (!fs.existsSync(filePath)) {
      const legacyFilePath = path.join(process.cwd(), 'legacy-site', 'foam-parties.json');
      
      if (!fs.existsSync(legacyFilePath)) {
        return NextResponse.json(
          { error: 'Foam Parties content not found' },
          { status: 404 }
        );
      }
      
      const fileData = fs.readFileSync(legacyFilePath, 'utf8');
      return NextResponse.json(JSON.parse(fileData), { 
        status: 200,
        headers: {
          'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400'
        }
      });
    }
    
    // Read the file
    const fileData = fs.readFileSync(filePath, 'utf8');
    
    // Parse the JSON
    const data = JSON.parse(fileData);
    
    // Return the data as JSON response
    return NextResponse.json(data, { 
      status: 200,
      headers: {
        'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400'
      }
    });
    
  } catch (error) {
    console.error('Error reading Foam Parties content:', error);
    
    // Return error response
    return NextResponse.json(
      { error: 'Failed to load Foam Parties content' },
      { status: 500 }
    );
  }
} 