"use client";

import GallerySection from "./GallerySection";
import { useState, useEffect, useMemo, useCallback } from 'react';
import Image from 'next/image';

export default function ContentSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageLoadError, setImageLoadError] = useState(false);
  
  // Optimized image data with dimensions for better loading
  const rainSnowImages = useMemo(() => [
    { src: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688a995639cd1d11c457e868.jpeg", width: 1920, height: 1080 },
    { src: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688a99565a3e64d03074b341.jpeg", width: 1920, height: 1080 },
    { src: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688a995608dbc3685520fcf6.jpeg", width: 1920, height: 1080 },
    { src: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688a9956fbf2c50b3fd47332.jpeg", width: 1920, height: 1080 },
    { src: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688a995609e236bc54e84a26.jpeg", width: 1920, height: 1080 },
    { src: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688a99560299a16564192056.jpeg", width: 1920, height: 1080 },
    { src: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688a995605df827fd5967228.jpeg", width: 1920, height: 1080 },
    { src: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688a9956fbf2c5daccd47331.jpeg", width: 1920, height: 1080 },
    { src: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688a99569bf0200e99c0f803.jpeg", width: 1920, height: 1080 },
    { src: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688a995629d04a4b68e016b3.jpeg", width: 1920, height: 1080 }
  ], []);

  // Preload images for smoother transitions
  const preloadImages = useCallback(() => {
    rainSnowImages.forEach((image) => {
      const img = new window.Image();
      img.src = image.src;
    });
  }, [rainSnowImages]);

  // Preload images on component mount and preload next image
  useEffect(() => {
    preloadImages();
  }, [preloadImages]);

  // Preload next image when current image changes
  useEffect(() => {
    const nextIndex = (currentImageIndex + 1) % rainSnowImages.length;
    const nextImage = new window.Image();
    nextImage.src = rainSnowImages[nextIndex].src;
  }, [currentImageIndex, rainSnowImages]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % rainSnowImages.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + rainSnowImages.length) % rainSnowImages.length);
  };

  return (
    <>
      {/* Main Description Section - Upgraded Design */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Main Content Card */}
            <div className="bg-white rounded-3xl shadow-2xl shadow-slate-900/10 border border-slate-200/50 p-6 sm:p-8 md:p-12 lg:p-16 relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-red-400/10 to-blue-400/10 rounded-full -translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-blue-400/10 to-red-400/10 rounded-full translate-x-12 translate-y-12"></div>
              
              {/* Content */}
              <div className="relative z-10 space-y-6 sm:space-y-8">
                {/* First Paragraph with Red Circle */}
                <div className="flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-medium">
                      Emerald Owl Productions is designing a special laser show to celebrate America&apos;s 250th Anniversary in 2026.
                    </p>
                  </div>
                </div>

                {/* Second Paragraph with Blue Circle */}
                <div className="flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <p className="text-lg sm:text-xl text-slate-700 leading-relaxed">
                      This one-of-a-kind experience will feature brilliant laser beams projecting over your audience, all choreographed to a mix of patriotic music, famous quotes, and a journey through some of the greatest decades in American music history.
                    </p>
                  </div>
                </div>

                {/* Third Paragraph with Red Circle */}
                <div className="flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <p className="text-lg sm:text-xl text-slate-700 leading-relaxed">
                      The show length is fully customizable. Our standard version runs 30–40 minutes, but many clients choose a shorter version to serve as a grand finale for an evening of activities.
                    </p>
                  </div>
                </div>

                {/* Fourth Paragraph with Blue Circle */}
                <div className="flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <p className="text-lg sm:text-xl text-slate-700 leading-relaxed">
                      The Celebrate America Laser Show can be held indoors or outdoors. If outdoors, EOP handles all required FAA paperwork and approvals. Please note that we want to start that process no less than 2 months prior to your show and the earlier the better in case adjustments are needed.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-blue-500 to-red-500"></div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12">
              <a 
                href="/contact-us"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-red-500 to-blue-500 text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Start Planning Your Celebration
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <GallerySection />

      {/* Why Choose a Laser Show Section - Redesigned */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            
            {/* Main Content Card */}
            <div className="bg-white rounded-3xl shadow-2xl shadow-slate-900/10 border border-slate-200/50 p-6 sm:p-8 md:p-12 lg:p-16 relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-red-400/10 to-blue-400/10 rounded-full -translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-blue-400/10 to-red-400/10 rounded-full translate-x-12 translate-y-12"></div>
              
              {/* Content */}
              <div className="relative z-10 text-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 sm:mb-8">
                  Why Choose a <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600">Laser Show</span>?
                </h2>
                
                <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-slate-700 leading-relaxed max-w-4xl mx-auto">
                  <p>
                    Laser shows are more than just beautiful and unique, they&apos;re strategic.
                  </p>
                  
                  <p>
                    Because the lasers are projected over the audience, not straight up into the sky, they naturally draw people into a specific space. This makes them an excellent tool for boosting foot traffic in places like downtown areas, parks, stadiums, or festival grounds. And they can often still run in rainy, or even snowy weather!
                  </p>
                  
                  <p>
                    They&apos;re also the safest entertainment in the sky — with no pyrotechnics, no loud explosions, and no physical objects or debris in the air. The only thing in the sky is light!
                  </p>
                </div>
              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-blue-500 to-red-500"></div>
            </div>

            {/* CTA Buttons */}
            <div className="text-center mt-8 sm:mt-12">
              <p className="text-lg sm:text-xl text-slate-700 leading-relaxed mb-6 sm:mb-8">
                Learn more about safety and benefits of laser shows here:
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                <a
                  href="/laser-safety"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  SAFEST ENTERTAINMENT IN SKY
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                
                <a
                  href="/laser-show-benefits"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  BENEFITS OF A LASER SHOW
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Carousel Section - Rain & Snow Laser Photos */}
            <div className="bg-white rounded-3xl shadow-2xl shadow-slate-900/10 border border-slate-200/50 p-6 sm:p-8 md:p-10 mt-8 sm:mt-12">
              <div className="text-center">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-6 sm:mb-8">
                  LASERS IN{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300">
                    RAIN
                  </span>{" "}
                  &{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 via-slate-400 to-slate-200">
                    SNOW
                  </span>
                </h3>
                
                {/* Image Carousel */}
                <div className="relative max-w-2xl mx-auto">
                  {/* Main Image Container */}
                  <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-slate-100">
                    {/* Current Image with Optimized Loading */}
                    <Image 
                      src={rainSnowImages[currentImageIndex].src}
                      alt={`Laser show in rain/snow - Image ${currentImageIndex + 1}`}
                      fill
                      className="object-cover transition-opacity duration-300 ease-in-out"
                      priority={currentImageIndex === 0}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      quality={85}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                      onError={() => setImageLoadError(true)}
                      onLoad={() => setImageLoadError(false)}
                    />
                    
                    {/* Fallback Content if Image Fails to Load */}
                    {imageLoadError && (
                      <div className="absolute inset-0 flex items-center justify-center bg-slate-200">
                        <div className="text-center text-slate-600">
                          <svg className="w-16 h-16 mx-auto mb-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <p className="text-lg font-medium">Image {currentImageIndex + 1}</p>
                          <p className="text-sm">Laser show in rain/snow</p>
                        </div>
                      </div>
                    )}
                    
                    {/* Navigation Arrows */}
                    <button 
                      onClick={previousImage}
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
                      {rainSnowImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
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
                      {currentImageIndex + 1} of {rainSnowImages.length}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Neon Nights Section - Upgraded Design with Emerald Owl Brand Colors */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-green-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Main Content Card */}
            <div className="bg-white rounded-3xl shadow-2xl shadow-slate-900/10 border border-emerald-200/50 p-6 sm:p-8 md:p-12 lg:p-16 relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-emerald-400/10 to-green-400/10 rounded-full -translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-green-400/10 to-emerald-400/10 rounded-full translate-x-12 translate-y-12"></div>
              
              {/* Content */}
              <div className="relative z-10 space-y-6 sm:space-y-8">
                {/* Main Title */}
                <div className="text-center">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 sm:mb-6">
                    Want to Make It Even <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">Bigger</span> And Get More Value From Your Investment?
                  </h2>
                  <p className="text-lg sm:text-xl text-slate-700 leading-relaxed max-w-4xl mx-auto">
                    Once we are already at your venue, additional experiences become quite cost effective. Our most popular is:
                  </p>
                </div>

                {/* Neon Nights Highlight Card */}
                <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-6 sm:p-8 md:p-10 border border-emerald-200/50">
                  <div className="text-center mb-6 sm:mb-8">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">Neon Nights</span>
                    </h3>
                    <p className="text-lg sm:text-xl text-slate-700 leading-relaxed">
                      This high-energy experience turns your event into an interactive celebration that can last for hours. Participants don&apos;t just watch — they become a part of the show. And that interaction is what creates lifelong memories.
                    </p>
                  </div>

                  {/* Analogy Section */}
                  <div className="bg-white rounded-xl p-4 sm:p-6 md:p-8 shadow-lg">
                    <h4 className="text-lg sm:text-xl font-semibold text-slate-900 mb-4 sm:mb-6 text-center">
                      Think of it this way:
                    </h4>
                    
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex flex-col sm:flex-row items-start space-y-2 sm:space-y-0 sm:space-x-4">
                        <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-red-500 rounded-full flex items-center justify-center">
                          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full"></div>
                        </div>
                        <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                          If you record a laser show today, will you watch it with your family 10 years from now? Honestly……probably not.
                        </p>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row items-start space-y-2 sm:space-y-0 sm:space-x-4">
                        <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full"></div>
                        </div>
                        <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                          But if you record your kids dancing with grandma under lasers, black lights, and maybe even in a foam pit...
                        </p>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row items-start space-y-2 sm:space-y-0 sm:space-x-4">
                        <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center">
                          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full"></div>
                        </div>
                        <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
                          You&apos;ll save that video to the cloud so you never lose it.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Themes Section */}
                <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-6 sm:p-8 md:p-10 border border-emerald-200/50">
                  <h4 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6 text-center">
                    Available Neon Nights themes include:
                  </h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-3xl mx-auto">
                    <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                        <span className="text-lg text-slate-700 font-medium">Blast to the Past</span>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-lg text-slate-700 font-medium">A Mix of Past and Current</span>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                        <span className="text-lg text-slate-700 font-medium">The Many Genres of American Music</span>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-lg text-slate-700 font-medium">Custom themes available upon request</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-500"></div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12">
              <a 
                href="/neon-nights"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                CLICK HERE TO LEARN MORE ABOUT NEON NIGHTS
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Rates & Booking Section - Upgraded Design */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Main Content Card */}
            <div className="bg-white rounded-3xl shadow-2xl shadow-slate-900/10 border border-slate-200/50 p-6 sm:p-8 md:p-12 lg:p-16 relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-slate-400/10 to-gray-400/10 rounded-full -translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-gray-400/10 to-slate-400/10 rounded-full translate-x-12 translate-y-12"></div>
              
              {/* Content */}
              <div className="relative z-10 space-y-6 sm:space-y-8">
                {/* Main Title */}
                <div className="text-center">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 sm:mb-8">
                    Rates & <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-gray-600">Booking Info</span>
                  </h2>
                </div>

                {/* Information Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                  {/* First Card */}
                  <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-2xl p-4 sm:p-6 md:p-8 border border-slate-200/50">
                    <div className="flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-slate-500 rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                          Just like weddings, laser shows are highly scalable. Each event deserves personal attention as they each have different goals, venues, crowds, and budgets. We&apos;re here to help you find the right fit without overpaying or settling for something that doesn&apos;t match your vision.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Second Card */}
                  <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-2xl p-4 sm:p-6 md:p-8 border border-slate-200/50">
                    <div className="flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-slate-500 rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                          We don&apos;t offer one-size-fits-all pricing because we don&apos;t believe in forcing a sale that doesn&apos;t serve your needs. Instead, a short conversation helps us give you a fair and accurate quote.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Third Card - Full Width */}
                <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-2xl p-4 sm:p-6 md:p-8 border border-slate-200/50">
                  <div className="flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-slate-500 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                        Good to know: Show length typically doesn&apos;t have a major impact on cost. Whether your show runs 10 minutes or 40, most of the expense comes from setup, equipment, and staffing.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Fourth Card - Full Width */}
                <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-2xl p-4 sm:p-6 md:p-8 border border-slate-200/50">
                  <div className="flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-slate-500 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                        Extremely cost effective for additional shows and nights: That is great news if you decide to run your show more than one night or have more than one show in a single night.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Pricing Highlight */}
                <div className="bg-gradient-to-br from-slate-100 to-gray-100 rounded-2xl p-6 sm:p-8 md:p-10 border-2 border-slate-300/50 text-center">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">
                    Celebrate America Laser Show packages start at
                  </h3>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
                    $7,676.76
                  </div>
                </div>

                {/* Call to Action */}
                <div className="text-center">
                  <p className="text-lg sm:text-xl text-slate-700 leading-relaxed mb-6 sm:mb-8">
                    Let&apos;s talk about what&apos;s possible:
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                    <a 
                      href="tel:252-764-7628"
                      className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                      (252) 764-7628
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                    
                    <a 
                      href="mailto:info@emeraldowlproductions.com"
                      className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                      info@emeraldowlproductions.com
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-500 via-gray-500 to-slate-500"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 