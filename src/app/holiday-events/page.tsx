import React from 'react';
import { Metadata } from 'next';
import Header from '../../components/shared/Layout/Header';
import Footer from '../../components/shared/Layout/Footer';
import Image from 'next/image';
import Link from 'next/link';
import './holiday-events.css';
import { HolidayEventsData } from '../../types/holidayEvents';
import { parseHolidayEventsData } from '../../utils/holidayEventsParser';
import { getHolidayEventsData } from '../../services/contentService';
import ResponsiveImage from '../../components/shared/Image/ResponsiveImage';

// This generates metadata for the page
export async function generateMetadata(): Promise<Metadata> {
  const data = await getHolidayEventsData();
  
  return {
    title: data.meta.title,
    description: data.meta.description,
    keywords: data.meta.keywords,
  };
}

// Fetch the holiday events data from the API
export default async function HolidayEventsPage() {
  // Fetch the content data
  const data = await getHolidayEventsData();

  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero Banner */}
        <section className="relative min-h-[600px] flex items-center bg-gradient-to-b from-emerald-900 via-emerald-800 to-blue-900 text-white">
          <div className="absolute inset-0 overflow-hidden">
            {data.hero.backgroundImage && (
              <ResponsiveImage 
                src={data.hero.backgroundImage.url}
                alt={data.hero.backgroundImage.alt}
                fill
                className="object-cover opacity-50"
                sizes="100vw"
                priority
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/70 via-emerald-800/70 to-blue-900/70 backdrop-blur-[2px]" />
            
            {/* Decorative elements */}
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-emerald-500/20 opacity-70 animate-pulse"></div>
            <div className="absolute top-32 -left-32 w-64 h-64 rounded-full bg-white/10 opacity-60 animate-pulse" style={{ animationDuration: '8s' }}></div>
            <div className="absolute -bottom-32 right-32 w-80 h-80 rounded-full bg-emerald-500/20 opacity-70 animate-pulse" style={{ animationDuration: '12s' }}></div>
          </div>
          
          <div className="container mx-auto px-6 z-10 relative py-20">
            <div className="max-w-4xl">
              <div className="inline-block px-6 py-2 bg-emerald-600/80 rounded-lg backdrop-blur-sm mb-6 transform -rotate-1">
                <span className="text-sm font-medium text-white uppercase tracking-wider">Seasonal Magic</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-white relative drop-shadow-lg">
                  Spectacular <span className="text-emerald-300">Holiday</span> Events
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-10 text-gray-100 font-light max-w-2xl leading-relaxed">
                {data.contentSection.description.split('.')[0] + '.'}
              </p>
              <div className="flex flex-wrap gap-5">
                <Link 
                  href={data.cta.url}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-xl hover:shadow-emerald-300/30 hover:-translate-y-1 transform"
                  style={{ backgroundColor: data.cta.backgroundColor || '#059669' }}
                >
                  {data.cta.text}
                </Link>
                <Link 
                  href="#holiday-events"
                  className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-xl hover:shadow-white/20 hover:-translate-y-1 transform"
                >
                  Explore Events
                </Link>
              </div>
            </div>
          </div>
          
          {/* Decorative snowflakes for winter vibes */}
          <div className="relative z-10 w-full h-full">
            <div className="absolute top-20 right-20 w-8 h-8 text-white/30 animate-float" style={{ animationDuration: '6s' }}>❄️</div>
            <div className="absolute top-40 right-40 w-8 h-8 text-white/30 animate-float" style={{ animationDuration: '8s' }}>❄️</div>
            <div className="absolute bottom-20 left-30 w-8 h-8 text-white/30 animate-float" style={{ animationDuration: '7s' }}>❄️</div>
            
            {/* Additional dynamic snowflakes */}
            {Array.from({ length: 10 }).map((_, index) => (
              <div 
                key={index}
                className="snowflake"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: '-5%',
                  animationDuration: `${Math.random() * 10 + 5}s`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              >
                ❄️
              </div>
            ))}
          </div>
        </section>

        {/* Main Content */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-center mb-12">
              <div className="w-20 h-1 bg-emerald-200 rounded mr-4"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                <span className="text-emerald-600">{data.contentSection.title}</span>
              </h2>
              <div className="w-20 h-1 bg-emerald-200 rounded ml-4"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-20">
              <div className="order-2 lg:order-1">
                <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                  {data.contentSection.description}
                </p>
                
                {data.contentSection.features && (
                  <ul className="space-y-4 mt-8">
                    {data.contentSection.features.map((feature, index) => (
                      <li key={index} className="flex items-start bg-emerald-50 p-4 rounded-lg shadow-sm transform transition-transform hover:scale-102 hover:shadow-md">
                        <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-emerald-500 text-white mr-4 flex-shrink-0 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-2 transform rotate-1">
                {data.holidayEvents[0] && (
                  <ResponsiveImage 
                    src={data.holidayEvents[0].image.url}
                    alt={data.holidayEvents[0].image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/70 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <span className="bg-emerald-600/90 rounded-full px-4 py-1 text-sm font-medium">Featured Event</span>
                </div>
              </div>
            </div>
            
            {/* Holiday Events */}
            <div id="holiday-events" className="space-y-24 mb-20 scroll-mt-20">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="inline-block bg-emerald-100 text-emerald-800 rounded-full px-4 py-1 text-sm font-medium mb-3">Our Offerings</span>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Featured Holiday Events</h3>
                <p className="text-gray-600">From spooky Halloween festivities to elegant New Year&apos;s celebrations, we create unforgettable seasonal experiences.</p>
              </div>
              
              {data.holidayEvents.map((event, index) => (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:grid-flow-dense' : ''}`}>
                  <div className={`${index % 2 !== 0 ? 'lg:col-start-2' : ''}`}>
                    <span className="inline-block bg-emerald-100 text-emerald-800 rounded-full px-4 py-1 text-sm font-medium mb-3">Holiday Event</span>
                    <h4 className="text-3xl font-bold text-gray-900 mb-4">{event.name}</h4>
                    <p className="text-gray-700 mb-8 leading-relaxed">{event.description}</p>
                    
                    {event.features && (
                      <ul className="space-y-3 bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100">
                        {event.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-emerald-500 text-white mr-3 flex-shrink-0">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </span>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    
                    <div className="mt-8">
                      <Link href={data.cta.url} className="text-emerald-600 font-medium flex items-center hover:text-emerald-700 transition-colors">
                        Learn more about this event
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  <div className={`relative h-[400px] rounded-2xl overflow-hidden shadow-xl ${index % 2 !== 0 ? 'lg:col-start-1' : ''} transform ${index % 2 !== 0 ? 'rotate-1' : '-rotate-1'}`}>
                    <ResponsiveImage 
                      src={event.image.url}
                      alt={event.image.alt}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        {data.gallery && data.gallery.length > 0 && (
          <section className="bg-emerald-50 py-20 overflow-hidden">
            <div className="container mx-auto px-6">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="inline-block bg-emerald-100 text-emerald-800 rounded-full px-4 py-1 text-sm font-medium mb-3">Event Gallery</span>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Magical Moments</h2>
                <p className="text-gray-600">See the joy and wonder we create at our seasonal celebrations</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative">
                <div className="col-span-2 aspect-[4/3] relative rounded-xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
                  <ResponsiveImage
                    src="https://i.ibb.co/CmwQKbP/christmas-lights-display.jpg"
                    alt="Christmas light display"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-square relative rounded-xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
                  <ResponsiveImage
                    src="https://i.ibb.co/4MnmZLK/halloween-decoration.jpg"
                    alt="Halloween celebration"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-square relative rounded-xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
                  <ResponsiveImage
                    src="https://i.ibb.co/YDVbMNd/thanksgiving-decoration.jpg"
                    alt="Thanksgiving feast"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-square relative rounded-xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
                  <ResponsiveImage
                    src="https://i.ibb.co/6sFc1QM/new-year-fireworks.jpg"
                    alt="New Year fireworks"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-square relative rounded-xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
                  <ResponsiveImage
                    src="https://i.ibb.co/vwsymkD/holiday-decorations.jpg"
                    alt="Festive decorations"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="col-span-2 aspect-[4/3] relative rounded-xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
                  <ResponsiveImage
                    src="https://i.ibb.co/SQ0YQzX/new-year-celebration.jpg"
                    alt="New Year celebration"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* FAQ Section */}
        {data.faqs && data.faqs.length > 0 && (
          <section className="bg-white py-20">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                  <span className="inline-block bg-emerald-100 text-emerald-800 rounded-full px-4 py-1 text-sm font-medium mb-3">Questions & Answers</span>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Frequently Asked Questions
                  </h2>
                  <p className="text-gray-600">Find answers to common questions about our holiday event services</p>
                </div>
                
                <div className="space-y-6">
                  {data.faqs.map((faq, index) => (
                    <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-emerald-700 mb-4">{faq.question}</h3>
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Testimonials Section */}
        {data.testimonials && data.testimonials.length > 0 && (
          <section className="bg-emerald-900 py-20 text-white">
            <div className="container mx-auto px-6">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="inline-block bg-emerald-800 text-emerald-200 rounded-full px-4 py-1 text-sm font-medium mb-3">Testimonials</span>
                <h2 className="text-3xl font-bold text-white mb-4">
                  What Our Clients Say
                </h2>
                <p className="text-emerald-100">Hear from those who&apos;ve experienced the magic of our holiday events</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                {data.testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-emerald-800/50 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-emerald-700 transform hover:-translate-y-1 transition-transform">
                    <svg className="h-10 w-10 text-emerald-300 mb-6" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="text-white text-lg italic mb-6">&quot;{testimonial.quote}&quot;</p>
                    <div className="flex items-center">
                      <div className="h-12 w-12 rounded-full bg-emerald-600 flex items-center justify-center mr-4">
                        <span className="font-bold text-white">{testimonial.author.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="font-bold text-white">{testimonial.author}</p>
                        {testimonial.role && (
                          <p className="text-emerald-200 text-sm">{testimonial.role}</p>
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
        <section className="bg-gradient-to-r from-emerald-800 to-emerald-900 py-20 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center relative">
              {/* Decorative elements */}
              <div className="absolute -top-12 -left-12 w-24 h-24 rounded-full bg-emerald-500/10 opacity-70 animate-pulse"></div>
              <div className="absolute -bottom-12 -right-12 w-32 h-32 rounded-full bg-emerald-500/10 opacity-70 animate-pulse" style={{ animationDuration: '10s' }}></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold mb-6">Ready to Plan Your Holiday Event?</h2>
                <p className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto">
                  Contact us today to discuss how we can make your holiday celebration truly special and memorable.
                </p>
                <div className="flex gap-4 flex-wrap justify-center">
                  <Link 
                    href={data.cta.url}
                    className="inline-block px-10 py-4 bg-white text-emerald-700 font-bold rounded-full hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-transform"
                  >
                    {data.cta.text}
                  </Link>
                  <Link 
                    href="/gallery"
                    className="inline-block px-10 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-colors shadow-lg"
                  >
                    View More Events
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 