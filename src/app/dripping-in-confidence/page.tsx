gitimport React from 'react';
import { Metadata } from 'next';
import Header from '../../components/shared/Layout/Header';
import Footer from '../../components/shared/Layout/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { DrippingInConfidenceData } from '../../types/drippingInConfidence';
import { parseDrippingInConfidenceData } from '../../utils/drippingInConfidenceParser';
import IframeVideoWithOverlay from '../../components/IframeVideoWithOverlay';

// This generates metadata for the page
export async function generateMetadata(): Promise<Metadata> {
  const data = await getDrippingInConfidenceData();
  
  return {
    title: data.meta.title,
    description: data.meta.description,
    keywords: data.meta.keywords,
  };
}

// Fetch the dripping in confidence data from the API
async function getDrippingInConfidenceData(): Promise<DrippingInConfidenceData> {
  try {
    // Set the base URL based on environment
    const baseUrl = process.env.NODE_ENV === 'development' 
      ? 'http://localhost:3000' 
      : 'https://emeraldowlproductions.com';
    
    // Fetch data from the API route
    const res = await fetch(`${baseUrl}/api/content/dripping-in-confidence`, {
      next: { revalidate: 3600 } // Revalidate every hour
    });
    
    if (!res.ok) {
      throw new Error('Failed to fetch dripping in confidence data');
    }
    
    // Parse the raw data into our typed data model
    const rawData = await res.json();
    return parseDrippingInConfidenceData(rawData);
  } catch (error) {
    console.error('Error fetching dripping in confidence data:', error);
    
    // Return a default data structure in case of error
    return parseDrippingInConfidenceData({
      title: 'Dripping in Confidence | Emerald Owl Productions',
      meta: {
        description: 'Experience the most fun and messy slime activities for events and fundraisers!',
        keywords: ''
      },
      resources: []
    });
  }
}

export default async function DrippingInConfidencePage() {
  // Fetch the data
  const data = await getDrippingInConfidenceData();

  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero Banner */}
        <section className="relative min-h-[500px] flex items-center bg-gradient-to-b from-pink-900 via-pink-800 to-rose-900 text-white">
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
            <div className="absolute inset-0 bg-gradient-to-b from-pink-900/70 via-pink-800/70 to-rose-900/70 backdrop-blur-[2px]" />
            
            {/* Decorative elements */}
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-pink-500/10 opacity-70"></div>
            <div className="absolute top-32 -left-32 w-64 h-64 rounded-full bg-rose-500/10 opacity-60"></div>
            <div className="absolute -bottom-32 right-32 w-80 h-80 rounded-full bg-pink-500/10 opacity-70"></div>
          </div>
          
          <div className="container mx-auto px-6 z-10 relative py-16">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-pink-400 relative drop-shadow-md">
                  {data.hero.title}
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-10 text-gray-100 font-light max-w-2xl">
                {data.contentSection.description.split('.')[0] + '.'}
              </p>
              <div className="flex flex-wrap gap-5">
                <Link 
                  href={data.cta.url}
                  className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-xl hover:shadow-pink-300/20 hover:-translate-y-1 transform"
                  style={{ backgroundColor: data.cta.backgroundColor || '#be185d' }}
                >
                  {data.cta.text}
                </Link>
                <Link 
                  href="/gunge" 
                  className="bg-transparent border-2 border-pink-400 hover:bg-pink-600/10 text-white font-bold py-4 px-10 rounded-full transition-all duration-300"
                >
                  Learn About Gunge
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section - if available */}
        {data.videoContent && data.videoContent.videoUrl && (
          <section className="bg-gradient-to-r from-pink-50 via-white to-rose-50 py-16">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  <span className="text-pink-600">{data.videoContent.title || 'See Our Slime Experiences In Action'}</span>
                </h2>
                {data.videoContent.note && (
                  <p className="text-gray-700 text-lg font-medium">{data.videoContent.note}</p>
                )}
              </div>
              
              <div className="relative aspect-video max-w-4xl mx-auto overflow-hidden rounded-xl shadow-xl">
                <IframeVideoWithOverlay
                  src={data.videoContent.videoUrl}
                  className="absolute top-0 left-0 w-full h-full"
                  title="Dripping in Confidence Video"
                />
              </div>
            </div>
          </section>
        )}

        {/* Content Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 relative">
                <span className="relative inline-block text-pink-600">
                  {data.contentSection.title}
                  <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-pink-500 rounded-full"></span>
                </span>
              </h2>
              
              <div className="text-center mb-10">
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  {data.contentSection.description}
                </p>
                
                {data.contentSection.features && (
                  <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.contentSection.features.map((feature, index) => (
                      <div key={index} className="bg-pink-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-pink-100 text-pink-600 mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-gray-700">{feature}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Product Options */}
        {data.productOptions && data.productOptions.length > 0 && (
          <section className="bg-gradient-to-br from-pink-50 to-rose-50 py-16">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                <span className="text-pink-600">Our Slime Experiences</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {data.productOptions.map((option, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
                    <div className="relative h-64">
                      <Image 
                        src={option.image.url}
                        alt={option.image.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-pink-900/70 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-2xl font-bold text-white">{option.title}</h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-700 mb-4">
                        {option.description}
                      </p>
                      {option.features && (
                        <ul className="space-y-2">
                          {option.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-pink-100 text-pink-600 mr-3">
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
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Gallery Section */}
        {data.gallery && data.gallery.length > 0 && (
          <section className="bg-white py-16">
            <div className="container mx-auto px-6">
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold text-pink-600 mb-3">
                  Gallery
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Check out our slime experiences in action
                </p>
              </div>
              
              <div className="grid grid-cols-12 gap-4">
                {data.gallery.length > 0 && (
                  <div className="col-span-12 md:col-span-6 lg:col-span-8 relative rounded-xl overflow-hidden shadow-lg h-[500px]">
                    <Image 
                      src={data.gallery[0].image.url}
                      alt={data.gallery[0].caption || data.gallery[0].image.alt}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 66vw"
                    />
                    {data.gallery[0].caption && (
                      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                        <p className="text-white text-xl p-6 font-medium">{data.gallery[0].caption}</p>
                      </div>
                    )}
                  </div>
                )}
                
                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                  <div className="grid grid-cols-2 gap-4 h-full">
                    {data.gallery.slice(1, 5).map((item, index) => (
                      <div key={index} className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                        <Image 
                          src={item.image.url}
                          alt={item.caption || item.image.alt}
                          fill
                          className="object-cover hover:scale-110 transition-transform duration-500"
                          sizes="(max-width: 768px) 50vw, 20vw"
                        />
                        {item.caption && (
                          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity">
                            <p className="text-white text-sm p-3 font-medium">{item.caption}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {data.gallery.length > 5 && (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                  {data.gallery.slice(5, 9).map((item, index) => (
                    <div key={index} className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                      <Image 
                        src={item.image.url}
                        alt={item.caption || item.image.alt}
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                      {item.caption && (
                        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity">
                          <p className="text-white text-sm p-3 font-medium">{item.caption}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
              
              <div className="mt-8 text-center">
                <Link 
                  href="/gallery" 
                  className="inline-flex items-center gap-2 bg-pink-100 hover:bg-pink-200 text-pink-800 font-medium py-3 px-6 rounded-full transition-all duration-300 shadow-sm"
                >
                  View Full Gallery
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Testimonials */}
        {data.testimonials && data.testimonials.length > 0 && (
          <section className="bg-gradient-to-r from-pink-50 via-white to-rose-50 py-20">
            <div className="container mx-auto px-6">
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold text-pink-600 mb-3">
                  What People Say
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Hear from our clients about their unforgettable experiences with our slime events
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {data.testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-pink-100 relative">
                    {/* Decorative element */}
                    <div className="absolute top-3 right-3 text-pink-200">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 opacity-20" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex flex-col h-full relative z-10">
                      <div className="mb-6">
                        <svg className="h-10 w-10 text-pink-500" fill="currentColor" viewBox="0 0 32 32">
                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                      </div>
                      <p className="text-gray-700 text-lg mb-6 flex-grow leading-relaxed">{testimonial.quote}</p>
                      <div className="flex items-center border-t border-pink-100 pt-4">
                        <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                          <span className="text-pink-700 font-bold text-xl">{testimonial.author.charAt(0)}</span>
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 text-lg">{testimonial.author}</p>
                          {testimonial.role && (
                            <p className="text-pink-600">{testimonial.role}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
        
        {/* CTA Section */}
        <section className="bg-gradient-to-br from-pink-700 to-rose-900 py-20 text-white relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-pink-500/20 blur-3xl"></div>
          <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-rose-500/20 blur-3xl"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Create Messy Memories?</h2>
              <p className="text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                Contact us today to discuss how we can make your next event unforgettable with our slime experiences! Perfect for schools, fundraisers, birthday parties, and more.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link 
                  href={data.cta.url}
                  className="inline-block px-10 py-5 bg-white text-pink-700 font-bold rounded-full hover:bg-pink-50 transition-colors shadow-xl hover:shadow-2xl hover:-translate-y-1 transform transition-transform"
                >
                  {data.cta.text}
                </Link>
                <Link 
                  href="/gallery" 
                  className="inline-block px-10 py-5 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-colors shadow-lg"
                >
                  View Our Gallery
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
