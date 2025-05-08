import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

/**
 * GET handler for neon nights content
 * Reads and serves neon-nights.json file
 */
export async function GET() {
  try {
    // Try to read from page-content directory first
    const filePath = path.join(process.cwd(), 'page-content', 'neon-nights.json');
    
    // If file doesn't exist in page-content, try legacy-site directory
    if (!fs.existsSync(filePath)) {
      const legacyFilePath = path.join(process.cwd(), 'legacy-site', 'neon-nights.json');
      
      if (!fs.existsSync(legacyFilePath)) {
        return NextResponse.json(
          { error: 'Neon Nights content not found' },
          { status: 404 }
        );
      }
      
      const rawData = fs.readFileSync(legacyFilePath, 'utf8');
      // Extract the actual content from the legacy site format
      const parsedData = JSON.parse(rawData);
      
      if (!parsedData) {
        return NextResponse.json(
          { error: 'Invalid Neon Nights content' },
          { status: 500 }
        );
      }
      
      // For legacy data, we need to extract the HTML and extract structured data
      // This is a simplified approach - the actual parsing should be done in the service layer
      return NextResponse.json(parsedData);
    }
    
    // If we have a properly formatted content file in page-content
    const rawData = fs.readFileSync(filePath, 'utf8');
    const parsedData = JSON.parse(rawData);
    
    return NextResponse.json(parsedData);
  } catch (error) {
    console.error('Error reading Neon Nights content:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve Neon Nights content' },
      { status: 500 }
    );
  }
} 