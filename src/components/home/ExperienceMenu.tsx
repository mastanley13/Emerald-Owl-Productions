'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Experience, ExperienceCategory } from '../../types/experiences';
import Link from 'next/link';

interface ExperienceMenuProps {
  experiences: ExperienceCategory;
}

type CategoryKey = keyof ExperienceCategory | 'entireMenu';

const ExperienceMenu: React.FC<ExperienceMenuProps> = ({ experiences }) => {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('entireMenu');

  const categoryTitles: Record<CategoryKey, string> = {
    mainCourses: 'Entrees (Large Experiences)',
    appetizers: 'Appetizers (Small/Add-on Experiences)',
    desserts: 'Desserts (Initiatives)',
    entireMenu: 'Entire Menu (All Experiences)',
  };

  const categoryDescriptions: Record<CategoryKey, string> = {
    mainCourses: 'Our signature experiences that create unforgettable memories',
    appetizers: 'Perfect additions to enhance any main experience',
    desserts: 'Support our community through these meaningful initiatives',
    entireMenu: 'Browse our complete collection of experiences across all categories',
  };

  // Intelligent URL mapping function
  const getExperienceUrl = (experience: Experience): string => {
    // First check if the experience already has a valid link
    if (experience.link && experience.link !== '#' && !experience.link.includes('localhost')) {
      return experience.link;
    }

    // Create intelligent mapping based on title
    const title = experience.title.toLowerCase();
    
    // Map titles to their corresponding page URLs
    const urlMappings: Record<string, string> = {
      // Main experiences
      'foam parties': '/foam-parties',
      'foam party': '/foam-parties',
      'glow sports': '/glow-sports',
      'glow sport': '/glow-sports',
      'laser light show': '/laser-light-show',
      'laser show': '/laser-light-show',
      'laser light': '/laser-light-show',
      'neon nights': '/neon-nights',
      'neon night': '/neon-nights',
      'water games': '/water-games',
      'water game': '/water-games',
      'water wars': '/water-games',
      'water battle': '/water-games',
      'dripping in confidence': 'https://www.drippinginconfidence.com',
      'color run': '/color-run',
      'holiday events': '/holiday-events',
      'holiday event': '/holiday-events',
      'special occasions': '/special-occasions',
      'special occasion': '/special-occasions',
      'sensory friendly': '/sensory-friendly-experiences',
      'sensory-friendly': '/sensory-friendly-experiences',
      'america anniversary': '/american-anniversary-celebration',
      'american anniversary': '/american-anniversary-celebration',
      '250th anniversary': '/american-anniversary-celebration',
      'anniversary celebration': '/american-anniversary-celebration',
      
      // Community initiatives
      'emmy the owl': '/emmy-the-owl',
      'our initiatives': '/our-initiatives',
      'our initiative': '/our-initiatives',
      'fundraisers': '/fundraisers',
      'fundraising': '/fundraisers'
    };

    // Check for exact matches first
    if (urlMappings[title]) {
      return urlMappings[title];
    }

    // Check for partial matches
    for (const [key, url] of Object.entries(urlMappings)) {
      if (title.includes(key) || key.includes(title)) {
        return url;
      }
    }

    // Default fallback - go to our experiences page
    return '/our-experiences';
  };

  const renderExperienceCards = (items: Experience[], category: CategoryKey) => {
    if (!items || items.length === 0) {
      return (
        <div className="text-center py-12">
          <p className="text-white/70 text-lg">No experiences available in this category.</p>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => {
          const experienceUrl = getExperienceUrl(item);
          
          return (
            <Link 
              key={item.id} 
              href={experienceUrl}
              className="group block"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 h-full flex flex-col">
                <div className="relative w-full h-56">
                  <Image 
                    src={item.visual || '/images/placeholder.jpg'} 
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-emerald-700 mb-3 group-hover:text-emerald-800 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                    {item.hook}
                  </p>
                  
                  {/* CTA Button */}
                  <div className="mt-auto">
                    <div className="inline-flex items-center text-emerald-600 font-semibold group-hover:text-emerald-700 transition-colors">
                      <span>Learn More</span>
                      <svg 
                        className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    );
  };

  return (
    <section id="experience-menu" className="py-20 md:py-28 bg-gradient-to-br from-emerald-700 via-emerald-800 to-emerald-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -right-1/4 w-1/3 h-1/3 bg-purple-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Our <span className="text-emerald-300">Experience Menu</span>
          </h2>
          <p className="text-xl md:text-2xl text-emerald-100 mb-12 max-w-4xl mx-auto font-light leading-relaxed">
            Discover our full range of unforgettable experiences. From spectacular main events to exciting add-ons and meaningful community initiatives.
          </p>
        </div>
        
        {/* Category Navigation */}
        <div className="flex justify-center mb-16">
          <div className="bg-black/20 backdrop-blur-sm p-2 rounded-2xl shadow-xl border border-emerald-600/30">
            <div className="flex flex-col sm:flex-row gap-2">
              {(['entireMenu', 'mainCourses', 'appetizers', 'desserts'] as CategoryKey[]).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`px-6 py-4 text-center font-bold rounded-xl transition-all duration-300 ease-in-out whitespace-nowrap
                    ${activeCategory === key 
                      ? 'bg-emerald-500 text-white shadow-lg ring-2 ring-emerald-300' 
                      : 'bg-transparent text-emerald-200 hover:bg-emerald-600/40 hover:text-white'}
                    focus:outline-none focus:ring-4 focus:ring-emerald-400 focus:ring-opacity-60`}
                >
                  <div className="text-sm md:text-base">
                    {categoryTitles[key]}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Category Description */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-semibold text-emerald-200 mb-4">
            {categoryTitles[activeCategory]}
          </h3>
          <p className="text-lg text-emerald-100/80 max-w-2xl mx-auto">
            {categoryDescriptions[activeCategory]}
          </p>
        </div>

        {/* Experience Cards */}
        <div className="mb-16">
          {activeCategory === 'entireMenu' 
            ? renderExperienceCards(
                [...experiences.mainCourses, ...experiences.appetizers, ...experiences.desserts], 
                activeCategory
              )
            : renderExperienceCards(experiences[activeCategory as keyof ExperienceCategory], activeCategory)
          }
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Create Memories?
            </h3>
            <p className="text-emerald-100 text-lg mb-8 leading-relaxed">
              Every experience is customized to create the perfect event for your community, organization, or celebration.
            </p>
            <Link 
              href="/contact-us"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-700 font-bold text-lg rounded-xl hover:bg-emerald-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Get Started Today
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceMenu; 