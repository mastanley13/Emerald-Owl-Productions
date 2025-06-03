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
    <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23374151' fill-opacity='0.4'%3E%3Ccircle cx='10' cy='10' r='1'/%3E%3Ccircle cx='30' cy='10' r='1'/%3E%3Ccircle cx='50' cy='10' r='1'/%3E%3Ccircle cx='10' cy='30' r='1'/%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3Ccircle cx='50' cy='30' r='1'/%3E%3Ccircle cx='10' cy='50' r='1'/%3E%3Ccircle cx='30' cy='50' r='1'/%3E%3Ccircle cx='50' cy='50' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Text Column */}
            <div className="text-gray-900">
              {/* Section Badge */}
              <div className="inline-flex items-center px-3 py-1 bg-blue-100 rounded-full border border-blue-200 mb-6">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                <span className="text-blue-700 text-sm font-medium tracking-wider uppercase">Featured Experience</span>
                <div className="w-2 h-2 bg-blue-500 rounded-full ml-2"></div>
              </div>

              {/* Title */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                <span className="text-red-600">{data.title.firstPart}</span>{' '}
                <span className="text-blue-600">{data.title.secondPart}</span>
              </h2>

              {/* Description */}
              <p className="text-lg md:text-xl mb-8 text-gray-600 leading-relaxed">
                {data.description}
              </p>

              {/* Features List */}
              <div className="mb-8">
                <ul className="space-y-3">
                  {data.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <Link 
                href={data.ctaUrl}
                className="group inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-red-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                {data.ctaText}
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            {/* Slider Column */}
            <div className="relative">
              {/* Enhanced slider container */}
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
                <ImageSlider images={data.images} interval={4000} />
                
                {/* Subtle overlay for better text contrast if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-blue-400/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-red-400/20 rounded-full animate-pulse delay-700"></div>
            </div>
          </div>

          {/* Bottom enhancement */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="text-center">
              <p className="text-gray-500 text-sm">
                Experience the future of patriotic celebrations with cutting-edge laser technology
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 