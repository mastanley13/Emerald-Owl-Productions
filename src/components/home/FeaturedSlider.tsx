"use client";

import React from 'react';
import Link from 'next/link';
import ImageSlider from '../shared/UI/ImageSlider';
import { FeaturedContent } from '../../types/homepage';

interface FeaturedSliderProps {
  data: FeaturedContent;
}

export default function FeaturedSlider({ data }: FeaturedSliderProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Column */}
          <div className="text-gray-900">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-red-600">{data.title.firstPart}</span> <span className="text-blue-600">{data.title.secondPart}</span>
            </h2>
            <p className="text-lg mb-6 text-gray-700">
              {data.description}
            </p>
            <ul className="mb-8 space-y-2">
              {data.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-400 mr-2 flex-shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Link 
              href={data.ctaUrl}
              className="inline-block bg-gradient-to-r from-blue-600 to-red-600 text-white font-bold py-3 px-8 rounded-full hover:from-blue-700 hover:to-red-700 transition-all shadow-lg"
            >
              {data.ctaText}
            </Link>
          </div>
          
          {/* Slider Column */}
          <div>
            <ImageSlider images={data.images} interval={4000} />
          </div>
        </div>
      </div>
    </section>
  );
} 