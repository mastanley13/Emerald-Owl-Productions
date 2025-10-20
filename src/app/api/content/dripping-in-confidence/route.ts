import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(
    { error: 'Dripping in Confidence content has been archived' },
    { status: 410 }
  );
}
