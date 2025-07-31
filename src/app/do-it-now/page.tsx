'use client';
import React, { useState, useEffect } from 'react';
import Header from '../../components/shared/Layout/Header';
import Footer from '../../components/shared/Layout/Footer';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export default function DoItNowPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688ae4d305df82d77099f57a.jpeg',
    'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688ae4d305df827bb299f578.jpeg',
    'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688ae4d3a4c55f47f0549d3a.jpeg',
    'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688ae4d329d04a50eae3e03a.jpeg',
    'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688ae4d305df826dd599f579.jpeg',
    'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688ae4d329d04af48fe3e039.jpeg',
    'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688ae4d305df82083799f57b.jpeg',
    'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688ae4d3ba7d045db22d0437.jpeg'
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };
  return (
    <>
      <Header />
      <main className="pt-20">
                 {/* Hero Section */}
         <section className="relative min-h-[400px] flex items-center bg-gradient-to-br from-red-800 via-red-900 to-blue-950 text-white">
           <div className="absolute inset-0 overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-blue-950/70 backdrop-blur-[1px]" />
             
             {/* Decorative elements */}
             <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-red-500/10 opacity-70 animate-pulse"></div>
             <div className="absolute top-32 -left-32 w-64 h-64 rounded-full bg-blue-600/10 opacity-60 animate-pulse" style={{ animationDuration: '8s' }}></div>
           </div>
          
          <div className="container mx-auto px-6 z-10 relative py-16">
            <div className="max-w-4xl">
              <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-8">
                <div className="w-48 h-48 md:w-64 md:h-64 relative">
                  <Image 
                    src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/6824cdd59cd8fb53e599ef0b.jpeg"
                    alt="Do It Now Logo"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 192px, 256px"
                  />
                </div>
                                 <div className="text-center md:text-left">
                   <h1 className="text-4xl md:text-5xl font-bold mb-4">
                     <span className="text-red-300 relative drop-shadow-md">
                       The Do It Now Initiative
                     </span>
                   </h1>
                                       <p className="text-lg md:text-xl mb-6 text-blue-100 font-light max-w-3xl">
                      In Loving Memory of Matthew Keenan
                    </p>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              
              {/* Introduction */}
              <div className="mb-12">
                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                  On August 14, we lost our Vice President and dear friend, Matthew Keenan, in a tragic car accident. He was 100% not at fault. He was only 35.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  In the days following Matt&apos;s passing, something became painfully clear: many people at his wake shared regrets, messages they had meant to share but never did. One friend said their last interaction had been an argument. Others simply wished they had told Matt how much he meant to them.
                </p>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  That realization inspired us to create the Do It Now Initiative. This isn&apos;t just a tribute to Matt. It&apos;s a mission. A movement. A chance for people to act on something they might otherwise put off until it&apos;s too late — saying the thing that matters, before it&apos;s too late to say it.
                </p>
              </div>

                                                           {/* How It Works Section */}
                                 <div className="mb-12">
                   <h2 className="text-3xl font-bold text-blue-900 mb-6">How It Works</h2>
                   <div className="bg-blue-50 p-8 rounded-xl shadow-lg border-l-4 border-blue-800">
                   <p className="text-gray-700 mb-6 leading-relaxed">
                     At EOP events — and eventually, we hope, at festivals, schools, and community gatherings everywhere — guests will find a simple, striking red mailbox. We provide everything:
                   </p>
                   <ul className="list-disc list-outside space-y-3 mb-6 pl-6 text-gray-700 leading-relaxed">
                     <li>A card</li>
                     <li>An envelope</li>
                     <li>A pen</li>
                     <li>A stamp (if needed)</li>
                     <li>A quiet space to write</li>
                   </ul>
                   <p className="text-gray-700 leading-relaxed">
                     Guests are encouraged to write a heartfelt message to someone in their life. It could be a thank you. An apology. Or just a simple &quot;I love you.&quot; They place the letter in our red mailbox, and EOP delivers it to the post office the next day.
                   </p>
                 </div>
               </div>

                             {/* Why a Red Mailbox Section */}
               <div className="mb-12">
                 <h2 className="text-3xl font-bold text-red-700 mb-6">Why a Red Mailbox?</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Just days before his death, Matt was excitedly working on plans for a new laser show themed concept: The British Invasion. As part of that idea, he was going to travel to England and personally find and inspect a real black taxi cab — a one-of-a-kind photo prop for our events. As a skilled mechanic, this hands-on adventure was right up his alley.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  He never got the chance. But to honor his vision, we&apos;ve decided to invest in props Matt would have loved. We&apos;ve purchased four authentic UK red mailboxes from an antique shop in South Carolina. They&apos;ve become the first physical symbols of the Do It Now Initiative: eye-catching, interactive, and emotionally powerful.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  In the future, we hope to add authentic red phone booths. That way, guests can also choose to make a meaningful phone call in the moment.
                </p>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  We have created a logo and bought a website (www.ididitnow.com) where people will be able to share the stories of what transpired with their Do It Now Experience.
                </p>
              </div>

                                                           {/* A Living Legacy Section */}
                                 <div className="mb-12">
                   <h2 className="text-3xl font-bold text-blue-900 mb-6">A Living Legacy</h2>
                   <p className="text-gray-700 mb-6 leading-relaxed">
                     The Do It Now Initiative is:
                   </p>
                   <div className="grid md:grid-cols-2 gap-6 mb-8">
                     <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-800">
                       <h3 className="text-xl font-bold text-blue-900 mb-3">Mission-driven</h3>
                       <p className="text-gray-700">Reminding people not to wait to say what matters</p>
                     </div>
                     <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500">
                       <h3 className="text-xl font-bold text-red-700 mb-3">Cost-effective</h3>
                       <p className="text-gray-700">No power or water required; one person can manage the station</p>
                     </div>
                     <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-800">
                       <h3 className="text-xl font-bold text-blue-900 mb-3">Scalable</h3>
                       <p className="text-gray-700">Easy to bring to schools, towns, churches, or festivals</p>
                     </div>
                     <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500">
                       <h3 className="text-xl font-bold text-red-700 mb-3">Shareable</h3>
                       <p className="text-gray-700">The red mailbox is a built-in photo op that draws attention and spreads the message</p>
                     </div>
                   </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    We believe this initiative is something Matt would have been proud of. It carries his spirit of being practical, caring, and creative. If the idea spreads, we will gladly help other communities and schools set up their own mailboxes and phone booths. Our message is simple:
                  </p>
                                     <div className="bg-gradient-to-r from-red-100 to-blue-200 p-8 rounded-xl text-center">
                     <p className="text-2xl font-bold text-gray-800 italic">
                       Life is unpredictable. Don&apos;t wait. Do it now.
                     </p>
                   </div>
                </div>

                                                           {/* Photo Gallery Section */}
                                 <div className="mb-12">
                   <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Gallery</h2>
                   <div className="relative max-w-4xl mx-auto">
                     <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                       <div className="relative h-96 md:h-[500px]">
                         {/* Current Image */}
                         <Image 
                           src={images[currentImageIndex]}
                           alt={`Do It Now Gallery Image ${currentImageIndex + 1}`}
                           fill
                           className="object-contain transition-opacity duration-500"
                           sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 1200px"
                         />
                         
                         {/* Navigation arrows */}
                         <button 
                           onClick={prevImage}
                           className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-blue-800 p-2 rounded-full shadow-lg transition-all duration-200 z-10"
                         >
                           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                           </svg>
                         </button>
                         <button 
                           onClick={nextImage}
                           className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-blue-800 p-2 rounded-full shadow-lg transition-all duration-200 z-10"
                         >
                           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                           </svg>
                         </button>
                         
                         {/* Pagination dots */}
                         <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                           {images.map((_, index) => (
                             <button
                               key={index}
                               onClick={() => goToImage(index)}
                               className={`w-3 h-3 rounded-full transition-all duration-200 ${
                                 index === currentImageIndex ? 'bg-blue-800' : 'bg-blue-400 hover:bg-blue-600'
                               }`}
                             />
                           ))}
                         </div>
                         
                         {/* Image counter */}
                         <div className="absolute bottom-4 right-4 bg-white/80 px-3 py-1 rounded-full text-sm text-blue-800 font-medium">
                           {currentImageIndex + 1} of {images.length}
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>

               {/* Call to Action */}
               <div className="text-center mt-12">
                 <button 
                   className="inline-block px-8 py-4 bg-gray-400 text-white font-bold rounded-md cursor-not-allowed text-lg"
                   disabled
                 >
                   Share Your Story - Coming Soon
                 </button>
               </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 