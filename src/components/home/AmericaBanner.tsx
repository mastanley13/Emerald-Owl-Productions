"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AmericaBannerData } from '../../types/homepage';

interface AmericaBannerProps {
  data: AmericaBannerData;
}

export default function AmericaBanner({ data }: AmericaBannerProps) {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-16 overflow-hidden">
      {/* Sophisticated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M50 40c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm0 20c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm0 20c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10z'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Content Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                <span className="text-white/90 text-sm font-medium tracking-wider uppercase">Historic Milestone</span>
                <div className="w-2 h-2 bg-blue-500 rounded-full ml-3"></div>
              </div>

              {/* Title */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                <span className="block">{data.title.split(' ').slice(0, 2).join(' ')}</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-white to-blue-400">
                  {data.title.split(' ').slice(2).join(' ')}
                </span>
              </h2>

              {/* Subtitle */}
              <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
                {data.subtitle}
              </p>

              {/* Timeline */}
              <div className="flex items-center justify-center lg:justify-start space-x-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-light text-blue-300">1776</div>
                  <div className="text-xs text-white/60 tracking-wider">FOUNDED</div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-px bg-gradient-to-r from-blue-400 to-red-400"></div>
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <div className="w-6 h-px bg-gradient-to-r from-red-400 to-blue-400"></div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-light text-red-300">2026</div>
                  <div className="text-xs text-white/60 tracking-wider">ANNIVERSARY</div>
                </div>
              </div>

              {/* CTA Button */}
              <Link 
                href={data.ctaUrl}
                className="group inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 font-bold text-lg rounded-xl transition-all duration-300 hover:bg-white/90 hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-1"
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

            {/* Visual Content */}
            <div className="relative">
              {/* Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-colors overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center rounded-xl"
                    style={{
                      backgroundImage: 'url(https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67a4d1ca9769a795ba5981de.jpeg)',
                      opacity: 0.3
                    }}
                  ></div>
                  <div className="relative z-10">
                    <h3 className="text-white font-semibold mb-2">Laser Technology</h3>
                    <p className="text-white/90 text-sm">Advanced visual storytelling</p>
                  </div>
                </div>

                <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-colors overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center rounded-xl"
                    style={{
                      backgroundImage: 'url(https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67a4d1281890c66c679de1bb.jpeg)',
                      opacity: 0.3
                    }}
                  ></div>
                  <div className="relative z-10">
                    <h3 className="text-white font-semibold mb-2">Audio Experience</h3>
                    <p className="text-white/90 text-sm">Historical soundscapes</p>
                  </div>
                </div>

                <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-colors overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center rounded-xl"
                    style={{
                      backgroundImage: 'url(https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67a4d14f9769a74712598159.jpeg)',
                      opacity: 0.3
                    }}
                  ></div>
                  <div className="relative z-10">
                    <h3 className="text-white font-semibold mb-2">Community Focus</h3>
                    <p className="text-white/90 text-sm">Celebrations for all</p>
                  </div>
                </div>

                <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-colors overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center rounded-xl"
                    style={{
                      backgroundImage: 'url(https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67a445db9b155f2998700f62.jpeg)',
                      opacity: 0.3
                    }}
                  ></div>
                  <div className="relative z-10">
                    <h3 className="text-white font-semibold mb-2">Custom Design</h3>
                    <p className="text-white/90 text-sm">Tailored experiences</p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-red-400/20 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>

          {/* Bottom Trust Indicator */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="text-center">
              <p className="text-white/60 text-sm mb-2">Limited Availability for 2026</p>
              <p className="text-white font-medium">
                Communities nationwide are securing their historic celebration dates
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 