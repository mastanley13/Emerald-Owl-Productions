import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

/**
 * GET handler for Gunge content
 * Reads and serves gunge.json file
 */
export async function GET() {
  try {
    console.log('Gunge API route called');
    
    // Try to read from page-content directory first
    const filePath = path.join(process.cwd(), 'page-content', 'gunge.json');
    console.log('Checking page-content path:', filePath);
    
    // If file doesn't exist in page-content, try legacy-site directory
    if (!fs.existsSync(filePath)) {
      console.log('File not found in page-content, checking legacy-site');
      const legacyFilePath = path.join(process.cwd(), 'legacy-site', 'gunge.json');
      console.log('Checking legacy-site path:', legacyFilePath);
      
      if (!fs.existsSync(legacyFilePath)) {
        console.error('Gunge content not found in either location');
        return NextResponse.json(
          { error: 'Gunge content not found' },
          { status: 404 }
        );
      }
      
      console.log('Found in legacy-site, reading file');
      try {
        const fileData = fs.readFileSync(legacyFilePath, 'utf8');
        const jsonData = JSON.parse(fileData);
        console.log('Successfully parsed gunge.json from legacy-site');
        
        return NextResponse.json(jsonData, { 
          status: 200,
          headers: {
            'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400'
          }
        });
      } catch (readError) {
        console.error('Error reading from legacy-site:', readError);
        throw readError;
      }
    }
    
    // Read the file from page-content
    console.log('Found in page-content, reading file');
    try {
      const fileData = fs.readFileSync(filePath, 'utf8');
      
      // Parse the JSON
      const data = JSON.parse(fileData);
      console.log('Successfully parsed gunge.json from page-content');
      
      // Return the data as JSON response
      return NextResponse.json(data, { 
        status: 200,
        headers: {
          'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400'
        }
      });
    } catch (readError) {
      console.error('Error reading from page-content:', readError);
      throw readError;
    }
    
  } catch (error) {
    console.error('Error in Gunge content API route:', error);
    
    // Return error response with more details
    return NextResponse.json(
      { 
        error: 'Failed to load Gunge content', 
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
} 