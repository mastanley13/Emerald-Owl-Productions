import React from 'react';
import { Metadata } from 'next';
import Header from '../../components/shared/Layout/Header';
import Footer from '../../components/shared/Layout/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { GungeData } from '../../types/gunge';
import { parseGungeData } from '../../utils/gungeParser';
import { getGungeData } from '../../services/contentService';

// This generates metadata for the page
export async function generateMetadata(): Promise<Metadata> {
  const data = await getGungeData();
  
  return {
    title: data.meta.title,
    description: data.meta.description,
    keywords: data.meta.keywords,
  };
}

// Fetch the gunge data from the API
export default async function GungePage() {
  // Fetch the content data
  const data = await getGungeData();

  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero Banner */}
        <section className="relative min-h-[600px] flex items-center bg-gradient-to-b from-black via-black to-green-950 text-white">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-green-950/80 backdrop-blur-[2px]" />
            
            {/* Decorative elements */}
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-green-500/10 opacity-70 animate-pulse"></div>
            <div className="absolute top-32 -left-32 w-64 h-64 rounded-full bg-yellow-400/10 opacity-60 animate-pulse" style={{ animationDuration: '8s' }}></div>
            <div className="absolute -bottom-32 right-32 w-80 h-80 rounded-full bg-green-500/10 opacity-70 animate-pulse" style={{ animationDuration: '12s' }}></div>
            
            {/* Background Image */}
            {data.hero.backgroundImage && (
              <Image 
                src={data.hero.backgroundImage.url} 
                alt={data.hero.backgroundImage.alt} 
                fill
                priority
                className="object-cover opacity-30"
              />
            )}
          </div>
          
          <div className="container mx-auto px-6 z-10 relative py-16">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-green-400 relative drop-shadow-md">
                  {data.hero.title}
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-10 text-gray-100 font-light max-w-2xl">
                {data.contentSection.description.split('.')[0]}.
              </p>
              <div className="flex flex-wrap gap-5">
                <Link 
                  href={data.cta.url}
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-xl hover:shadow-green-300/60 hover:-translate-y-1 transform"
                  style={{ backgroundColor: data.cta.backgroundColor || '#22c55e' }}
                >
                  {data.cta.text}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        {data.videoContent && (
          <section className="py-16 bg-gradient-to-b from-green-950/40 to-black">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                {data.videoContent.title && (
                  <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">
                    <span className="text-green-400">{data.videoContent.title}</span>
                  </h2>
                )}
                
                <div className="relative rounded-xl overflow-hidden shadow-2xl mb-5">
                  <div className="aspect-w-16 aspect-h-9 bg-black">
                    <video 
                      controls 
                      poster={data.videoContent.thumbnailUrl}
                      className="w-full h-full object-cover"
                    >
                      <source src={data.videoContent.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
                
                {data.videoContent.note && (
                  <p className="text-center text-white/80 text-sm font-medium mt-2">{data.videoContent.note}</p>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Content Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
                <span className="text-green-600 relative">
                  {data.contentSection.title}
                  <span className="absolute -bottom-2 left-0 right-0 h-1 bg-green-200 rounded-full opacity-50"></span>
                </span>
              </h2>
              
              <p className="text-lg text-gray-700 mb-10 leading-relaxed">
                {data.contentSection.description}
              </p>
              
              {data.contentSection.features && (
                <div className="bg-gray-50 p-8 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Key Features:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {data.contentSection.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-600 flex-shrink-0 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Package Options */}
        {data.packages && data.packages.length > 0 && (
          <section className="bg-gradient-to-br from-gray-50 to-green-50 py-16">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                <span className="text-green-600 relative">
                  Our Gunge Packages
                  <span className="absolute -bottom-2 left-0 right-0 h-1 bg-green-200 rounded-full opacity-50"></span>
                </span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                {data.packages.map((option, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                  >
                    <div className="relative h-64">
                      <Image 
                        src={option.image.url}
                        alt={option.image.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-2xl font-bold text-white mb-1">{option.title}</h3>
                        {option.price && (
                          <p className="text-lg font-semibold text-green-300">{option.price}</p>
                        )}
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
                              <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-green-100 text-green-600 mr-3 mt-0.5">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              </span>
                              <span className="text-gray-600 text-sm">{feature}</span>
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
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                <span className="text-green-600 relative">
                  Gallery
                  <span className="absolute -bottom-2 left-0 right-0 h-1 bg-green-200 rounded-full opacity-50"></span>
                </span>
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {data.gallery.slice(0, 8).map((item, index) => (
                  <div 
                    key={index} 
                    className="relative aspect-square rounded-lg overflow-hidden shadow-md transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <Image 
                      src={item.image.url}
                      alt={item.caption || item.image.alt}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                      {item.caption && (
                        <div className="w-full p-3 bg-black/60 text-white text-sm">
                          {item.caption}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Testimonials */}
        {data.testimonials && data.testimonials.length > 0 && (
          <section className="bg-gradient-to-br from-gray-900 to-green-900 py-16 text-white">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                <span className="text-green-300">What People Say</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {data.testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-md">
                    <div className="flex flex-col h-full">
                      <div className="mb-4">
                        <svg className="h-8 w-8 text-green-400 opacity-80" fill="currentColor" viewBox="0 0 32 32">
                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                      </div>
                      <p className="text-white/90 italic mb-6 flex-grow">{testimonial.quote}</p>
                      <div>
                        <p className="font-semibold text-green-300">{testimonial.author}</p>
                        {testimonial.role && (
                          <p className="text-white/60 text-sm">{testimonial.role}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQs Section */}
        {data.faqs && data.faqs.length > 0 && (
          <section className="bg-white py-16">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                <span className="text-green-600 relative">
                  Frequently Asked Questions
                  <span className="absolute -bottom-2 left-0 right-0 h-1 bg-green-200 rounded-full opacity-50"></span>
                </span>
              </h2>
              
              <div className="max-w-3xl mx-auto space-y-6">
                {data.faqs.map((faq, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                      <span className="text-green-500 mr-3">Q:</span>
                      <span>{faq.question}</span>
                    </h3>
                    <div className="pl-7 text-gray-700">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-green-700 to-green-900 py-16 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Messy Fun?</h2>
            <p className="text-xl max-w-2xl mx-auto mb-10 text-white/90">
              Book your unforgettable Gunge experience today and give your event the wow factor everyone will remember!
            </p>
            <Link 
              href={data.cta.url}
              className="inline-block bg-white text-green-700 font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-xl hover:shadow-white/30 hover:-translate-y-1 transform text-lg"
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
