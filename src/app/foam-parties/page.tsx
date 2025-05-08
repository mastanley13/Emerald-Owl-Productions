import React from 'react';
import { Metadata } from 'next';
import Header from '../../components/shared/Layout/Header';
import Footer from '../../components/shared/Layout/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { FoamPartiesData } from '../../types/foamParties';
import { parseFoamPartiesData } from '../../utils/foamPartiesParser';

// This generates metadata for the page
export async function generateMetadata(): Promise<Metadata> {
    const data = await getFoamPartiesData();
    
    return {
      title: data.meta.title,
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
    return parseFoamPartiesData(rawData);
  } catch (error) {
    console.error('Error fetching foam parties data:', error);
    
    // Return a default data structure in case of error
    return {
      meta: {
        title: 'Foam Parties & Color Run | Emerald Owl Productions',
        description: 'Create high-energy, fun-filled foam parties and color run events for any occasion!',
        keywords: 'foam party, color run, events, kids activities, outdoor events',
      },
      hero: {
        title: 'Foam Parties & Color Run',
        backgroundImage: {
          type: 'image',
          url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67a453fb7ee1c12aa7752dcc.jpeg',
          alt: 'Foam Parties'
        }
      },
      contentSection: {
        title: 'High-Energy Fun for Any Occasion',
        description: 'Our foam parties and color runs create unforgettable experiences that bring joy and excitement to any event. Perfect for schools, birthday celebrations, community gatherings, and more, our professional equipment and dedicated team ensure safe, vibrant, and memorable activities for participants of all ages.',
        features: [
          'Professional foam machines with customizable settings',
          'Non-toxic, skin-friendly foam and color powder',
          'Experienced staff for setup and supervision',
          'Adaptable for indoor or outdoor venues',
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
            url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67a453fb7ee1c12aa7752dcc.jpeg',
            alt: 'Standard Foam Party'
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
            url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67a453fb7ee1c12aa7752dcc.jpeg',
            alt: 'Deluxe Foam Experience'
          }
        }
      ],
      colorRun: {
        title: 'Color Run Events',
        description: 'Our color run experiences bring vibrant energy to any event. Participants run, walk, or dance through stations where they are showered with brilliant, washable colored powder. It\'s perfect for school field days, fundraisers, or community celebrations.',
        benefits: [
          'Non-toxic, easily washable color powder',
          'Custom course design to fit your venue',
          'Multiple color stations with different hues',
          'Photography opportunities included',
          'Full setup and cleanup services'
        ],
        image: {
          type: 'image',
          url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67a453fb7ee1c12aa7752dcc.jpeg',
          alt: 'Color Run'
        }
      },
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
            url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67a453fb7ee1c12aa7752dcc.jpeg',
            alt: 'Birthday with foam machines'
          },
          caption: 'Birthday foam celebration'
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
        },
        {
          question: 'Can color run events be held indoors?',
          answer: 'While we primarily recommend outdoor venues for color runs, we do offer special indoor-safe color powder for gymnasium or large indoor spaces. Please inquire for specific requirements.'
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
          colorRunImages: [],
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
        <main className="pt-16">
          {/* Hero Banner */}
          <section className="relative min-h-[500px] flex items-center bg-gradient-to-b from-emerald-900 via-emerald-800 to-blue-900 text-white">
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
                    {data.hero.title}
                  </span>
                </h1>
                <p className="text-xl md:text-2xl mb-10 text-gray-100 font-light max-w-2xl">
                  {data.contentSection.description.split('.')[0]}
                </p>
                <div className="flex flex-wrap gap-5">
                  <Link 
                    href={data.cta.url}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-xl hover:shadow-emerald-300/60 hover:-translate-y-1 transform"
                    style={{ backgroundColor: data.cta.backgroundColor || '#059669' }}
                  >
                    {data.cta.text}
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <section className="bg-white py-16">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                <span className="text-emerald-600">{data.contentSection.title}</span>
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
                <div>
                  <p className="text-gray-700 text-lg mb-6">
                    {data.contentSection.description}
                  </p>
                  
                  {data.contentSection.features && (
                    <ul className="space-y-3 mt-6">
                      {data.contentSection.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-emerald-100 text-emerald-600 mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
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
              
              {/* Foam Packages */}
              {data.foamPackages && data.foamPackages.length > 0 && (
                <div className="mb-16">
                  <h3 className="text-2xl font-bold text-center text-emerald-600 mb-8">Foam Party Packages</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {data.foamPackages.map((pkg, index) => (
                      <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-emerald-100">
                        <div className="relative h-64">
                          <Image 
                            src={pkg.image.url}
                            alt={pkg.image.alt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                        <div className="p-6">
                          <h4 className="text-2xl font-bold text-emerald-600 mb-2">{pkg.title}</h4>
                          {pkg.price && (
                          <p className="text-lg text-emerald-500 font-semibold mb-3">{pkg.price}</p>
                          )}
                          <p className="text-gray-700 mb-4">{pkg.description}</p>
                        
                          {pkg.features && (
                            <ul className="space-y-2">
                              {pkg.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start">
                                <svg className="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                  <span className="text-gray-700">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        
                        <div className="mt-6 pt-4 border-t border-gray-100">
                          <Link 
                            href="/contact-us" 
                            className="inline-block px-6 py-2.5 bg-emerald-600 text-white font-medium rounded-full hover:bg-emerald-700 transition-colors shadow-sm hover:shadow-md"
                          >
                            Book This Package
                          </Link>
                        </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
            {/* Color Run Section */}
              {data.colorRun && (
              <div className="bg-emerald-50 rounded-xl p-8 mb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                  <div className="order-2 lg:order-1">
                    <h3 className="text-2xl font-bold text-emerald-700 mb-4">{data.colorRun.title}</h3>
                      <p className="text-gray-700 mb-6">{data.colorRun.description}</p>
                    
                      {data.colorRun.benefits && (
                        <ul className="space-y-2">
                          {data.colorRun.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start">
                            <svg className="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                              <span className="text-gray-700">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    
                    <div className="mt-6">
                      <Link 
                        href="/contact-us" 
                        className="inline-block px-6 py-2.5 bg-emerald-600 text-white font-medium rounded-full hover:bg-emerald-700 transition-colors shadow-sm hover:shadow-md"
                      >
                        Inquire About Color Runs
                      </Link>
                    </div>
                  </div>
                  <div className="relative h-[350px] rounded-lg overflow-hidden shadow-lg order-1 lg:order-2">
                      <Image 
                        src={data.colorRun.image.url}
                        alt={data.colorRun.image.alt}
                        fill
                        className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>
              )}
                      </div>
        </section>
            
              {/* Gallery Section */}
              {data.gallery && data.gallery.length > 0 && (
          <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold text-center text-emerald-700 mb-10">
                Event Gallery
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.gallery.map((item, index) => (
                  <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    <div className="relative h-64">
                        <Image 
                          src={item.image.url}
                        alt={item.image.alt}
                          fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                    </div>
                    {item.caption && (
                      <div className="p-4">
                        <p className="text-gray-700 font-medium text-center">{item.caption}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
        
        {/* FAQ Section */}
        {data.faqs && data.faqs.length > 0 && (
          <section className="bg-white py-16">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold text-center text-emerald-700 mb-10">
                Frequently Asked Questions
              </h2>
              
              <div className="max-w-3xl mx-auto space-y-6">
                {data.faqs.map((faq, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm">
                    <h3 className="text-xl font-semibold text-emerald-600 mb-3">{faq.question}</h3>
                    <p className="text-gray-700">{faq.answer}</p>
                </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="bg-emerald-700 py-16 text-white">
            <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Plan Your Foam Party?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today to discuss how we can make your next event unforgettable with our foam parties and color runs!
            </p>
            <Link 
              href={data.cta.url}
              className="inline-block px-8 py-4 bg-white text-emerald-700 font-bold rounded-full hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-transform"
            >
              {data.cta.text}
            </Link>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
}
