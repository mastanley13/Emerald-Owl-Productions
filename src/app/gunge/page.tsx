import React from 'react';
import { Metadata } from 'next';
import Header from '../../components/shared/Layout/Header';
import Footer from '../../components/shared/Layout/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { getGungeData } from '../../services/contentService';
import { parseGungeData } from '../../utils/gungeParser';

// Hardcoded fallback data for critical error cases
const FALLBACK_DATA = parseGungeData({
  title: 'Gunge & Slime Experiences | Emerald Owl Productions',
  meta: {
    description: 'Create messy, fun-filled gunge experiences for fundraisers, charity events, and special occasions!',
    keywords: ''
  },
  resources: [
    {
      type: 'image',
      url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/671125656eaeb07042dfb1e5.png',
      alt: 'Gunge',
      width: '',
      height: ''
    }
  ]
});

export async function generateMetadata(): Promise<Metadata> {
  try {
    // Fetch the data
    console.log('Generating metadata for gunge page');
    const data = await getGungeData();
    
    return {
      title: data.meta.title,
      description: data.meta.description,
      keywords: data.meta.keywords,
    };
  } catch (error) {
    console.error('Error generating metadata for gunge page:', error);
    // Fallback metadata in case of error
    return {
      title: FALLBACK_DATA.meta.title,
      description: FALLBACK_DATA.meta.description,
      keywords: FALLBACK_DATA.meta.keywords,
    };
  }
}

export default async function GungePage() {
  try {
    console.log('Rendering gunge page');
    // Fetch the content data
    const data = await getGungeData();
    console.log('Successfully loaded gunge data');

    return (
      <>
        <Header />
        <main className="pt-16">
          {/* Hero Banner */}
          <section className="relative min-h-[500px] flex items-center bg-gradient-to-b from-black via-black to-green-950 text-white">
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
                <Link 
                  href="/dripping-in-confidence"
                  className="inline-flex items-center text-gray-300 hover:text-green-400 mb-4 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back to Dripping in Confidence
                </Link>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  <span className="text-green-400 relative drop-shadow-md">
                    {data.hero.title}
                  </span>
                </h1>
                <p className="text-xl md:text-2xl mb-10 text-gray-100 font-light max-w-2xl">
                  {data.contentSection.description.split('.')[0]}
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

          {/* Content Section */}
          <section className="bg-white py-16">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  <span className="text-green-600">{data.contentSection.title}</span>
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  {data.contentSection.description}
                </p>
                {data.contentSection.features && (
                  <ul className="mt-6 space-y-2">
                    {data.contentSection.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-600 mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span className="text-gray-700 text-left">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </section>

          {/* Package Options */}
          {data.packages && data.packages.length > 0 && (
            <section className="bg-gray-100 py-16">
              <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                  <span className="text-green-600">Our Gunge Packages</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  {data.packages.map((option, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                      <div className="relative h-64">
                        <Image 
                          src={option.image.url}
                          alt={option.image.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-green-600 mb-3">{option.title}</h3>
                        {option.price && (
                          <p className="text-lg font-semibold text-gray-700 mb-3">{option.price}</p>
                        )}
                        <p className="text-gray-700 mb-4">
                          {option.description}
                        </p>
                        {option.features && (
                          <ul className="space-y-2">
                            {option.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-600 mr-3">
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
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                  <span className="text-green-600">Gallery</span>
                </h2>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {data.gallery.slice(0, 8).map((item, index) => (
                    <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                      <Image 
                        src={item.image.url}
                        alt={item.caption || item.image.alt}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* FAQs Section */}
          {data.faqs && data.faqs.length > 0 && (
            <section className="bg-gray-100 py-16">
              <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                  <span className="text-green-600">Frequently Asked Questions</span>
                </h2>
                
                <div className="max-w-4xl mx-auto space-y-6">
                  {data.faqs.map((faq, index) => (
                    <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{faq.question}</h3>
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Testimonials */}
          {data.testimonials && data.testimonials.length > 0 && (
            <section className="bg-white py-16">
              <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                  <span className="text-green-600">What People Say</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  {data.testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-md">
                      <div className="flex flex-col h-full">
                        <div className="mb-4">
                          <svg className="h-8 w-8 text-green-400" fill="currentColor" viewBox="0 0 32 32">
                            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                          </svg>
                        </div>
                        <p className="text-gray-700 mb-4 flex-grow">{testimonial.quote}</p>
                        <div>
                          <p className="font-bold text-gray-900">{testimonial.author}</p>
                          {testimonial.role && (
                            <p className="text-gray-500 text-sm">{testimonial.role}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* CTA Section */}
          <section className="bg-green-50 py-16">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  <span className="text-green-600">Ready for Messy Fun?</span>
                </h2>
                <p className="text-lg text-gray-700 mb-10">
                  Contact us today to discuss your event needs, get pricing information, and book your unforgettable gunge experience!
                </p>
                <Link 
                  href={data.cta.url}
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-xl hover:shadow-green-300/60 hover:-translate-y-1 transform inline-block"
                  style={{ backgroundColor: data.cta.backgroundColor || '#22c55e' }}
                >
                  {data.cta.text}
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  } catch (error) {
    console.error('Error rendering Gunge page:', error);
    
    // Fallback UI in case of error
    return (
      <>
        <Header />
        <main className="pt-16">
          {/* Hero Banner */}
          <section className="relative min-h-[500px] flex items-center bg-gradient-to-b from-black via-black to-green-950 text-white">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-green-950/80 backdrop-blur-[2px]" />
              
              {/* Decorative elements */}
              <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-green-500/10 opacity-70 animate-pulse"></div>
              <div className="absolute top-32 -left-32 w-64 h-64 rounded-full bg-yellow-400/10 opacity-60 animate-pulse" style={{ animationDuration: '8s' }}></div>
              <div className="absolute -bottom-32 right-32 w-80 h-80 rounded-full bg-green-500/10 opacity-70 animate-pulse" style={{ animationDuration: '12s' }}></div>
            </div>
            
            <div className="container mx-auto px-6 z-10 relative py-16">
              <div className="max-w-4xl">
                <Link 
                  href="/dripping-in-confidence"
                  className="inline-flex items-center text-gray-300 hover:text-green-400 mb-4 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back to Dripping in Confidence
                </Link>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  <span className="text-green-400 relative drop-shadow-md">
                    Gunge
                  </span>
                </h1>
                <p className="text-xl md:text-2xl mb-10 text-gray-100 font-light max-w-2xl">
                  Exciting and messy fun experiences with colorful slime
                </p>
                <div className="flex flex-wrap gap-5">
                  <Link 
                    href="/contact-us" 
                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-xl hover:shadow-green-300/60 hover:-translate-y-1 transform"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Basic Content Section */}
          <section className="bg-white py-16">
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                <span className="text-green-600">Technical Difficulty</span>
              </h2>
              <p className="text-gray-700 mb-4">
                We're experiencing technical difficulties loading the full page content. 
              </p>
              <p className="text-gray-700 mb-8">
                Please try refreshing the page or contact us directly for information about our gunge experiences.
              </p>
              <Link 
                href="/contact-us" 
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-green-300/40 hover:-translate-y-1 transform inline-block"
              >
                Contact Us
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}
