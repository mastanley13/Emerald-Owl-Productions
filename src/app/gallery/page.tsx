import React from 'react';
import Header from '../../components/shared/Layout/Header';
import Footer from '../../components/shared/Layout/Footer';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery | Emerald Owl Productions',
  description: 'Browse photos from our past events and productions',
};

export default function GalleryPage() {
  // Placeholder for gallery images
  const galleryImages = [
    {
      id: 1,
      src: 'https://via.placeholder.com/600x400/86efac/1e3a8a',
      alt: 'Laser light show event',
      caption: 'Laser Light Show - Summer Festival 2023',
      category: 'Laser Shows',
    },
    {
      id: 2,
      src: 'https://via.placeholder.com/600x400/86efac/1e3a8a',
      alt: 'Foam party event',
      caption: 'Foam Party - College Welcome Week',
      category: 'Foam Parties',
    },
    {
      id: 3,
      src: 'https://via.placeholder.com/600x400/86efac/1e3a8a',
      alt: 'Sensory friendly experience',
      caption: 'Sensory Friendly Community Event',
      category: 'Sensory Friendly',
    },
    {
      id: 4,
      src: 'https://via.placeholder.com/600x400/86efac/1e3a8a',
      alt: 'Neon nights event',
      caption: 'Neon Nights - Downtown Block Party',
      category: 'Neon Nights',
    },
    {
      id: 5,
      src: 'https://via.placeholder.com/600x400/86efac/1e3a8a',
      alt: 'Water games event',
      caption: 'Water Games Festival - City Park',
      category: 'Water Games',
    },
    {
      id: 6,
      src: 'https://via.placeholder.com/600x400/86efac/1e3a8a',
              alt: 'Slime event',
        caption: 'Charity Slime Tank Challenge',
        category: 'Slime',
    },
    {
      id: 7,
      src: 'https://via.placeholder.com/600x400/86efac/1e3a8a',
      alt: 'School fundraiser event',
      caption: 'Elementary School Fundraiser',
      category: 'Fundraisers',
    },
    {
      id: 8,
      src: 'https://via.placeholder.com/600x400/86efac/1e3a8a',
      alt: 'Community celebration',
      caption: 'Community Summer Celebration',
      category: 'Special Events',
    },
  ];

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[300px] flex items-center bg-gradient-to-br from-emerald-800 to-emerald-950 text-white">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-emerald-950/70 backdrop-blur-[1px]" />
            
            {/* Decorative elements */}
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-emerald-500/10 opacity-70 animate-pulse"></div>
            <div className="absolute top-32 -left-32 w-64 h-64 rounded-full bg-emerald-400/10 opacity-60 animate-pulse" style={{ animationDuration: '8s' }}></div>
          </div>
          
          <div className="container mx-auto px-6 z-10 relative py-16">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center md:text-left">
                <span className="text-emerald-300 relative drop-shadow-md">
                  Gallery
                </span>
              </h1>
              <p className="text-lg md:text-xl mb-6 text-gray-100 font-light max-w-2xl text-center md:text-left">
                Explore photos from our past events and productions
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-emerald-700 mb-6">
                Our Event Gallery
              </h2>
              <p className="text-gray-700">
                Browse through our collection of photos showcasing the variety of events and experiences 
                we&apos;ve had the pleasure of producing. From high-energy foam parties to serene sensory-friendly 
                experiences, these images capture the joy, wonder, and community connections we create.
              </p>
            </div>
            
            {/* Filter buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              <button className="px-4 py-2 bg-emerald-600 text-white rounded-full font-medium">
                All
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-emerald-100 hover:text-emerald-700 rounded-full font-medium transition-colors">
                Laser Shows
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-emerald-100 hover:text-emerald-700 rounded-full font-medium transition-colors">
                Foam Parties
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-emerald-100 hover:text-emerald-700 rounded-full font-medium transition-colors">
                Neon Nights
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-emerald-100 hover:text-emerald-700 rounded-full font-medium transition-colors">
                Water Games
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-emerald-100 hover:text-emerald-700 rounded-full font-medium transition-colors">
                Sensory Friendly
              </button>
            </div>
            
            {/* Gallery grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {galleryImages.map((imageItem) => (
                <div key={imageItem.id} className="group relative rounded-lg overflow-hidden shadow-md">
                  <div className="aspect-w-4 aspect-h-3 bg-gray-200">
                    <Image 
                      src={imageItem.src} 
                      alt={imageItem.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      width={600} 
                      height={400}
                      unoptimized={true}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                    <p className="text-white font-bold text-lg">{imageItem.caption}</p>
                    <p className="text-emerald-300 text-sm">{imageItem.category}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Load more button */}
            <div className="flex justify-center mt-12">
              <button className="px-6 py-3 bg-emerald-600 text-white font-bold rounded-md hover:bg-emerald-700 transition-colors">
                Load More Photos
              </button>
            </div>
          </div>
        </section>
        
        {/* Testimonial Section */}
        {/* <section className="py-16 bg-emerald-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-emerald-700 mb-6 text-center">
                  Client Testimonials
                </h3>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-emerald-800">Sarah Johnson</h4>
                        <p className="text-sm text-gray-600">Community Center Director</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">
                      &quot;The sensory-friendly event that Emerald Owl produced for our community center was 
                      amazing. They paid attention to every detail and created an inclusive environment 
                      that all of our attendees could enjoy.&quot;
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-emerald-800">Mark Thompson</h4>
                        <p className="text-sm text-gray-600">University Event Coordinator</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">
                      &quot;Our students couldn&apos;t stop talking about the foam party! Emerald Owl&apos;s team was 
                      professional, safety-conscious, and delivered an experience that exceeded all 
                      expectations. We&apos;ll definitely be booking them again.&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}        
        {/* Call To Action */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-emerald-700 mb-6">
                Ready to Create Your Own Memorable Event?
              </h2>
              <p className="text-gray-700 mb-8">
                Contact us today to discuss how we can bring your vision to life with our 
                innovative and engaging event experiences.
              </p>
              <a 
                href="/contact-us" 
                className="inline-block px-8 py-4 bg-emerald-600 text-white font-bold rounded-md hover:bg-emerald-700 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 