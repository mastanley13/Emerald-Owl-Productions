"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Service } from '../../types/homepage';

interface ServiceHighlightsProps {
  services: Service[];
}

export default function ServiceHighlights({ services }: ServiceHighlightsProps) {
  return (
    <section id="our-experiences" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Our <span className="text-emerald-600">Experiences</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => (
            <Link href={service.link} key={service.id} className="group">
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-emerald-100/40">
                <div className="relative h-64">
                  <Image 
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-emerald-600 mb-2">{service.title}</h3>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/our-experiences" 
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full transition-colors inline-block"
          >
            View All Experiences
          </Link>
        </div>
      </div>
    </section>
  );
}