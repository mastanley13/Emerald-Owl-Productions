'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function RainSnowGallery() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryItems = [
    {
      image: {
        url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688a995639cd1d11c457e868.jpeg"
      }
    },
    {
      image: {
        url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688a99565a3e64d03074b341.jpeg"
      }
    },
    {
      image: {
        url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688a995608dbc3685520fcf6.jpeg"
      }
    },
    {
      image: {
        url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688a9956fbf2c50b3fd47332.jpeg"
      }
    },
    {
      image: {
        url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688a995609e236bc54e84a26.jpeg"
      }
    },
    {
      image: {
        url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688a99560299a16564192056.jpeg"
      }
    },
    {
      image: {
        url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688a995605df827fd5967228.jpeg"
      }
    },
    {
      image: {
        url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688a9956fbf2c5daccd47331.jpeg"
      }
    },
    {
      image: {
        url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688a99569bf0200e99c0f803.jpeg"
      }
    },
    {
      image: {
        url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688a995629d04a4b68e016b3.jpeg"
      }
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === galleryItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? galleryItems.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <section className="py-12 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          


          {/* Carousel Container */}
          <div className="bg-white rounded-3xl shadow-2xl shadow-slate-900/10 border border-slate-200/50 p-6 sm:p-8 md:p-10 max-w-4xl mx-auto">
            {/* Title */}
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
                LASERS IN{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300">
                  RAIN
                </span>{" "}
                &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 via-slate-400 to-slate-200">
                  SNOW
                </span>
              </h3>
            </div>

            {/* Carousel Display */}
            <div className="relative max-w-2xl mx-auto">
              {/* Main Image Container */}
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-slate-100">
                <Image
                  src={galleryItems[currentImageIndex].image.url}
                  alt={`Laser show in rain/snow - Image ${currentImageIndex + 1}`}
                  fill
                  className="object-cover transition-opacity duration-300 ease-in-out"
                  priority={currentImageIndex === 0}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={85}
                />
                
                {/* Navigation Arrows */}
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-slate-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
                  aria-label="Previous image"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-slate-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
                  aria-label="Next image"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              {/* Image Counter with Progress Bar */}
              <div className="text-center mt-4 space-y-2">
                <div className="flex justify-center space-x-1">
                  {galleryItems.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        index === currentImageIndex 
                          ? 'bg-blue-500 scale-125' 
                          : 'bg-slate-300 hover:bg-slate-400'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
                <span className="text-slate-600 font-medium">
                  {currentImageIndex + 1} of {galleryItems.length}
                </span>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
} 