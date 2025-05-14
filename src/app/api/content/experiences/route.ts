import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { ExperiencesData } from '@/types/experiences'; // Adjusted path assuming @ is src

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'src', 'app', 'api', 'content', 'experiences.json');
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ message: 'Experiences content not found' }, { status: 404 });
    }
    const fileData = fs.readFileSync(filePath, 'utf8');
    const jsonData = JSON.parse(fileData) as ExperiencesData;
    return NextResponse.json(jsonData);
  } catch (error) {
    console.error('Error serving experiences.json:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
} 