import React from 'react';
import { Metadata } from 'next';
import Header from '../../components/shared/Layout/Header';
import Footer from '../../components/shared/Layout/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { FoamPartiesData } from '../../types/foamParties';
import { parseFoamPartiesData } from '../../utils/foamPartiesParser';
import FoamGallery from './components/FoamGallery';

// This generates metadata for the page
export async function generateMetadata(): Promise<Metadata> {
    const data = await getFoamPartiesData();
    
    return {
      title: "Foam Parties & Water Battles | Emerald Owl Productions",
      description: data.meta.description,
      keywords: data.meta.keywords,
    };
}

// Fetch the foam parties data from the API
async function getFoamPartiesData(): Promise<FoamPartiesData> {
  try {
    // Set the base URL based on environment
    const baseUrl = process.env.NODE_ENV === 'development' 
      ? 'http://localhost:3000' 
      : 'https://emeraldowlproductions.com';
    
    // Fetch data from the API route
    const res = await fetch(`${baseUrl}/api/content/foam-parties`, {
      next: { revalidate: 3600 } // Revalidate every hour
    });
    
    if (!res.ok) {
      throw new Error('Failed to fetch foam parties data');
    }
    
    // Parse the raw data into our typed data model
    const rawData = await res.json();
    const parsedData = parseFoamPartiesData(rawData);
    
    // Update title in the fetched data
    parsedData.meta.title = "Foam Parties & Water Battles | Emerald Owl Productions";
    parsedData.hero.title = "Foam Parties & Water Battles";
    parsedData.meta.description = "High-energy foam parties, perfect with our exciting Water Battle Games for unforgettable events!";
    parsedData.contentSection.description = parsedData.contentSection.description.replace("Our foam parties create", "Our exhilarating foam parties create");
    parsedData.meta.keywords = ['foam party', 'water battles', 'foam and water games', 'event entertainment', 'kids parties', 'outdoor fun'].join(', ');
    // Removed erroneous colorRun property deletion

    // Update the second gallery image if gallery exists and has at least two items
    if (parsedData.gallery && parsedData.gallery.length >= 2) {
      parsedData.gallery[1].image.url = 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67a4498d9b155f5f4b70128e.jpeg';
      parsedData.gallery[1].image.alt = 'Kids enjoying a foam party with colorful buckets'; // Update alt text accordingly
      // If there was a caption, you might want to update or remove it if it's no longer relevant
      // parsedData.gallery[1].caption = 'New Caption for Updated Image'; 
    }

    return parsedData;
  } catch (error) {
    console.error('Error fetching foam parties data:', error);
    
    // Return a default data structure in case of error, with updated titles
    return {
      meta: {
        title: 'Foam Parties & Water Battles | Emerald Owl Productions',
        description: 'High-energy foam parties, perfect with our exciting Water Battle Games for unforgettable events!',
        keywords: ['foam party', 'water battles', 'foam and water games', 'event entertainment', 'kids parties', 'outdoor fun'].join(', '),
      },
      hero: {
        title: 'Foam Parties & Water Battles',
        backgroundImage: {
          type: 'image',
          url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67a453fb7ee1c12aa7752dcc.jpeg',
          alt: 'Foam Parties'
        }
      },
      contentSection: {
        title: 'High-Energy Fun for Any Occasion',
        description: 'Our foam parties create unforgettable experiences that bring joy and excitement to any event. Perfect for schools, birthday celebrations, community gatherings, and more, our professional equipment and dedicated team ensure safe, vibrant, and memorable activities for participants of all ages.',
        features: [
          'Professional foam machines with customizable settings',
          'Non-toxic, skin-friendly foam',
          'Experienced staff for setup and supervision',
          'Perfect for fundraisers, celebrations, and community events'
        ]
      },
      foamPackages: [
        {
          title: 'Standard Foam Party',
          price: 'Starting at $549',
          description: 'Perfect for medium-sized events with up to 100 participants',
          features: [
            '1 professional foam machine',
            'Up to 2 hours of continuous foam',
            'Basic lighting setup',
            'Trained operator',
            'Setup and cleanup included'
          ],
          image: {
            type: 'image',
            url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67111c601ff902234d3256b4.jpeg',
            alt: 'Fun and affordable Basic Foam Package by Emerald Owl Productions, perfect for parties.'
          }
        },
        {
          title: 'Deluxe Foam Experience',
          price: 'Starting at $899',
          description: 'The ultimate foam party for larger events with 100+ participants',
          features: [
            '2 professional foam machines',
            'Up to 3 hours of continuous foam',
            'Advanced LED lighting system',
            'Music system with DJ options',
            '2 trained operators',
            'Setup and cleanup included'
          ],
          image: {
            type: 'image',
            url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67111c53970dedac4ff481a6.jpeg',
            alt: 'Ultimate Premium Foam Experience with extra foam and fun from Emerald Owl Productions.'
          }
        }
      ],
      gallery: [
        {
          image: {
            type: 'image',
            url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67a453fb7ee1c12aa7752dcc.jpeg',
            alt: 'School event with foam'
          },
          caption: 'School foam party'
        },
        {
          image: {
            type: 'image',
            url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67a4498d9b155f5f4b70128e.jpeg', // Updated image URL
            alt: 'Kids enjoying a foam party with colorful buckets' // Updated alt text
          },
          caption: 'Fun in the Foam' // Updated or generic caption
        }
      ],
      faqs: [
        {
          question: 'Is the foam safe for children and those with sensitive skin?',
          answer: 'Yes, we use hypoallergenic, non-toxic foam that is safe for all ages and skin types. Our foam is specifically formulated to be gentle on skin and eyes.'
        },
        {
          question: 'How much space is needed for a foam party?',
          answer: 'For a standard setup, we recommend at least 20x20 feet of open space. Larger events may require more area. We can adapt to your venue and will advise on the best setup during consultation.'
        }
      ],
      cta: {
        text: 'Book Your Foam Party',
        url: '/contact-us',
        backgroundColor: '#059669'
      },
      resources: {
        byCategory: {
          heroBackground: [],
          videoThumbnails: [],
          galleryImages: [],
          packageImages: [],
          all: []
        }
      }
    };
  }
}

export default async function FoamPartiesPage() {
  // Fetch the data
    const data = await getFoamPartiesData();

    return (
      <>
        <Header />
        <main className="pt-20">
          {/* Hero Banner */}
          <section className="relative min-h-[600px] flex items-center bg-gradient-to-b from-emerald-900 via-emerald-800 to-blue-900 text-white">
            <div className="absolute inset-0 overflow-hidden">
              {data.hero.backgroundImage && (
                <Image 
                  src={data.hero.backgroundImage.url}
                  alt={data.hero.backgroundImage.alt}
                  fill
                  className="object-cover opacity-40"
                  sizes="100vw"
                  priority
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/70 via-emerald-800/70 to-blue-900/70 backdrop-blur-[2px]" />
              
              {/* Decorative elements */}
              <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-emerald-500/10 opacity-70"></div>
              <div className="absolute top-32 -left-32 w-64 h-64 rounded-full bg-white/10 opacity-60"></div>
              <div className="absolute -bottom-32 right-32 w-80 h-80 rounded-full bg-emerald-500/10 opacity-70"></div>
            </div>
            
            <div className="container mx-auto px-6 z-10 relative py-16">
              <div className="max-w-4xl">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  <span className="text-emerald-400 relative drop-shadow-md">
                    Foam Parties & Water Battles
                  </span>
                </h1>
                <p className="text-xl md:text-2xl mb-10 text-gray-100 font-light max-w-2xl">
                  Let us turn your outdoor space into a HUGE bubble bath!
                </p>
                <div className="flex flex-wrap gap-5">
                  <Link 
                    href="/contact-us"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-xl hover:shadow-emerald-300/60 hover:-translate-y-1 transform"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Location Banner */}
          <section className="bg-emerald-600 text-white py-8">
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                NOW BASED IN EMERALD ISLE, NC & PITTSBURGH, PA
              </h2>
              <p className="text-lg font-semibold">(Yes, we do travel!)</p>
            </div>
          </section>

          {/* Main Content Section */}
          <section className="bg-white py-16">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                
                {/* What We Provide Section */}
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-emerald-600 mb-6">What We Provide</h2>
                  <div className="bg-emerald-50 border-l-4 border-emerald-600 p-8 mb-8 rounded-r-lg">
                    <p className="text-xl text-gray-700 font-semibold">
                      You provide the water and flat space! We provide the rest!
                    </p>
                  </div>
                </div>

                {/* All Ages Section */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Fun for All Ages</h3>
                    <p className="text-lg text-gray-700 mb-6">
                      This is a great activity for warm weather and fun for all ages! When we say all ages, we mean it! We have done foam parties for elementary schools, town parks, mom night outs, and 21 & up clubs.
                    </p>
                    <p className="text-lg text-gray-700 mb-6">
                      A foam party can be done with other outdoor packages or by itself! It is a safe way for participants to get splashed and cool off.
                    </p>
                    <div className="bg-gradient-to-r from-emerald-600 to-sky-600 text-white p-6 rounded-lg">
                      <p className="text-lg font-semibold">
                        This experience is often combined with an <strong>EPIC WATER WAR</strong>!
                      </p>
                    </div>
                  </div>
                  <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                    {data.gallery[0] && (
                      <Image 
                        src={data.gallery[0].image.url}
                        alt={data.gallery[0].image.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    )}
                  </div>
                </div>

                {/* Pricing Information */}
                <div className="bg-gray-50 p-8 rounded-lg mb-16">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Contact us to discuss rates</h3>
                  <p className="text-lg text-gray-700 text-center mb-6">
                    They will depend on several factors including the size and time length of your party, power and water availability, travel distance from Emerald Isle, NC or Pittsburgh, PA and our ability to easily access the foam area from where we will park our vehicle.
                  </p>
                  <div className="text-center">
                    <Link 
                      href="/contact-us"
                      className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-emerald-300/40"
                    >
                      Get a Quote Today
                    </Link>
                  </div>
                </div>

                {/* Package Integration */}
                <div className="bg-blue-50 p-8 rounded-lg mb-16">
                  <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">Package Integration</h3>
                  <p className="text-blue-800 text-lg text-center">
                    Foam parties can often be included when ordering a full laser show or Neon Nights package.
                  </p>
                </div>

              </div>
            </div>
          </section>

          {/* Foam Gallery Section */}
          <FoamGallery />

          {/* Safety & Environmental Information */}
          <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold text-center text-emerald-700 mb-10">
                Safety & Environmental Information
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-emerald-600 mb-4">Environmental Safety</h3>
                  <p className="text-gray-700 mb-4">
                    Foam is biodegradable and will evaporate within a couple hours. We highly recommend a grass surface so that falls and slides are fun. Foam by itself will not have any impact on grass.
                  </p>
                  <p className="text-gray-700 mb-4">
                    However, we do recommend having this in an area where some mud is acceptable because people running through it will inevitably create muddy conditions on some surfaces. Foam is water based so it is similar to playing an athletic event on a wet field.
                  </p>
                  <p className="text-gray-700">
                    <strong>Important:</strong> Tarps are not an option as they become a significant slip hazard.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-emerald-600 mb-4">Health & Safety</h3>
                  <p className="text-gray-700 mb-4">
                    Foam is environmentally friendly and not toxic. It has some of the same ingredients as baby shampoo so it is not designed to be ingested.
                  </p>
                  <div className="bg-red-50 border-l-4 border-red-500 p-4">
                    <p className="text-red-800 font-semibold">
                      <strong>CRITICAL SAFETY NOTICE:</strong> We will NEVER put foam into a swimming pool. Doing so is extremely dangerous as no one will be able to see anyone underneath the foam.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-emerald-700 py-16 text-white">
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Plan Your Foam Party?</h2>
              <Link 
                href="/contact-us"
                className="inline-block px-8 py-4 bg-white text-emerald-700 font-bold rounded-full hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-transform"
              >
                Contact Us Today
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
}
