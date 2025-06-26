import React from 'react';
import Header from '../../components/shared/Layout/Header';
import Footer from '../../components/shared/Layout/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { getExperiencesData } from '../../services/contentService';
import ExperienceMenu from '../../components/home/ExperienceMenu';

// Define a type for the color names
type ServiceColor = 'emerald' | 'purple' | 'pink' | 'blue' | 'teal' | 'sky';

// Define an interface for a single service
interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  color: ServiceColor;
}

// Services data
const services: Service[] = [
  {
    id: 'laser-show',
    title: 'Laser Light Shows',
    description: 'Spectacular laser displays for any event',
    image: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/678fb2d6141a590c80b64c99.jpeg',
    link: '/laser-light-show',
    color: 'emerald'
  },
  {
    id: 'neon-nights',
    title: 'Neon Nights',
    description: 'Glow in the dark party experiences',
    image: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67a4558baa4eed1400f75c3a.jpeg',
    link: '/neon-nights',
    color: 'purple'
  },
  {
    id: 'dripping',
    title: 'Dripping in Confidence',
    description: 'Fun and messy experiences',
    image: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67ab94d979284b777a6a7660.jpeg',
    link: 'https://drippinginconfidence.com',
    color: 'pink'
  },
  {
    id: 'foam-parties',
    title: 'Foam Party & Color Run',
    description: 'Exciting foam activities and entertainment',
    image: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67a453fb7ee1c12aa7752dcc.jpeg',
    link: '/foam-parties',
    color: 'blue'
  },
  {
    id: 'sensory',
    title: 'Sensory Friendly Experiences',
    description: 'Inclusive experiences for all',
    image: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67a4cd3916dadebb8d0b3c22.jpeg',
    link: '/sensory-friendly-experiences',
    color: 'teal'
  },
  {
    id: 'water-games',
    title: 'Water Games',
    description: 'Splash into fun with exciting water activities',
    image: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/673c35f2d88b411473f4fc7d.jpeg',
    link: '/water-games',
    color: 'sky'
  }
];

// Function to get appropriate color classes
const getColorClasses = (color: ServiceColor) => {
  const colorMap: Record<ServiceColor, { bg: string; hover: string; shadow: string; text: string }> = {
    emerald: {
      bg: 'bg-emerald-600',
      hover: 'hover:bg-emerald-700',
      shadow: 'shadow-emerald-100/40',
      text: 'text-emerald-600'
    },
    purple: {
      bg: 'bg-purple-600',
      hover: 'hover:bg-purple-700',
      shadow: 'shadow-purple-100/40',
      text: 'text-purple-600'
    },
    pink: {
      bg: 'bg-pink-600',
      hover: 'hover:bg-pink-700',
      shadow: 'shadow-pink-100/40',
      text: 'text-pink-600'
    },
    blue: {
      bg: 'bg-blue-600',
      hover: 'hover:bg-blue-700',
      shadow: 'shadow-blue-100/40',
      text: 'text-blue-600'
    },
    teal: {
      bg: 'bg-teal-600',
      hover: 'hover:bg-teal-700',
      shadow: 'shadow-teal-100/40',
      text: 'text-teal-600'
    },
    sky: {
      bg: 'bg-sky-600',
      hover: 'hover:bg-sky-700',
      shadow: 'shadow-sky-100/40',
      text: 'text-sky-600'
    }
  };
  
  return colorMap[color] || colorMap.emerald;
};

export default async function OurExperiencesPage() {
  const experiencesData = await getExperiencesData();

  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero Banner */}
        <section className="relative min-h-[400px] flex items-center bg-gradient-to-b from-black via-black to-emerald-950 text-white">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-emerald-950/80 backdrop-blur-[2px]" />
            
            {/* Decorative elements */}
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-emerald-500/10 opacity-70 animate-pulse"></div>
            <div className="absolute top-32 -left-32 w-64 h-64 rounded-full bg-emerald-400/10 opacity-60 animate-pulse" style={{ animationDuration: '8s' }}></div>
            <div className="absolute -bottom-32 right-32 w-80 h-80 rounded-full bg-emerald-500/10 opacity-70 animate-pulse" style={{ animationDuration: '12s' }}></div>
          </div>
          
          <div className="container mx-auto px-6 z-10 relative py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-emerald-400 relative drop-shadow-md">
                  Our Experiences
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-gray-100 font-light">
                Explore our range of unforgettable entertainment experiences
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {services.map(service => {
                const colors = getColorClasses(service.color);
                const isExternalUrl = service.link.startsWith('http');
                
                return (
                  <Link 
                    href={service.link} 
                    key={service.id} 
                    className="group"
                    target={isExternalUrl ? "_blank" : undefined}
                    rel={isExternalUrl ? "noopener noreferrer" : undefined}
                  >
                    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg h-full flex flex-col">
                      <div className="relative h-64">
                        <Image 
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors" />
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className={`text-xl font-bold ${colors.text} mb-2`}>{service.title}</h3>
                        <p className="text-gray-700 mb-6">{service.description}</p>
                        <div className="mt-auto">
                          <span className={`inline-flex items-center ${colors.text} font-medium`}>
                            Learn More
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <p className="text-gray-700 max-w-2xl mx-auto mb-8">
                Can&apos;t decide which experience is right for your event? Contact our team for personalized recommendations and custom packages.
              </p>
              <Link 
                href="/contact-us" 
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full transition-colors inline-block"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* Added ExperienceMenu component */}
        {experiencesData && (
          <ExperienceMenu experiences={experiencesData} />
        )}

      </main>
      <Footer />
    </>
  );
}
