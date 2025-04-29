"use client";

import Link from 'next/link';
import ImageSlider from '../shared/UI/ImageSlider';

export default function FeaturedSlider() {
  // Images from the JSON resource data
  const americaAnniversaryImages = [
    'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/678fb2f55c784c14e19cfdfb.jpeg',
    'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67b17f8970fcfe8794242cee.jpeg',
    'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67a4d1ca9769a795ba5981de.jpeg',
    'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67a44608aa4eed6d00f735bd.jpeg',
    'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67a4d18823290240bf390f2f.jpeg'
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Column */}
          <div className="text-gray-900">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-red-600">America's 250th</span> <span className="text-blue-600">Anniversary</span>
            </h2>
            <p className="text-lg mb-6 text-gray-700">
              Join us in celebrating America's 250th anniversary with a spectacular laser light show experience. Our patriotic displays bring American history to life in a breathtaking visual celebration.
            </p>
            <ul className="mb-8 space-y-2">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-400 mr-2 flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Stunning patriotic visuals</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-400 mr-2 flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Historical narration and music</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-400 mr-2 flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Perfect for community events and celebrations</span>
              </li>
            </ul>
            <Link 
              href="/american-anniversary-celebration" 
              className="inline-block bg-gradient-to-r from-blue-600 to-red-600 text-white font-bold py-3 px-8 rounded-full hover:from-blue-700 hover:to-red-700 transition-all shadow-lg"
            >
              Learn More
            </Link>
          </div>
          
          {/* Slider Column */}
          <div>
            <ImageSlider images={americaAnniversaryImages} interval={4000} />
          </div>
        </div>
      </div>
    </section>
  );
} 