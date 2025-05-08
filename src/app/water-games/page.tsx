import React from 'react';
import { Metadata } from 'next';
import Header from '../../components/shared/Layout/Header';
import Footer from '../../components/shared/Layout/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { WaterGamesData } from '../../types/waterGames';
import { parseWaterGamesData } from '../../utils/waterGamesParser';

// This generates metadata for the page
export async function generateMetadata(): Promise<Metadata> {
  const data = await getWaterGamesData();
  
  return {
    title: data.meta.title,
    description: data.meta.description,
    keywords: data.meta.keywords,
  };
}

// Fetch the water games data from the API
async function getWaterGamesData(): Promise<WaterGamesData> {
  try {
    // Set the base URL based on environment
    const baseUrl = process.env.NODE_ENV === 'development' 
      ? 'http://localhost:3000' 
      : 'https://emeraldowlproductions.com';
    
    // Fetch data from the API route
    const res = await fetch(`${baseUrl}/api/content/water-games`, {
      next: { revalidate: 3600 } // Revalidate every hour
    });
    
    if (!res.ok) {
      throw new Error('Failed to fetch water games data');
    }
    
    // Parse the raw data into our typed data model
    const rawData = await res.json();
    return parseWaterGamesData(rawData);
  } catch (error) {
    console.error('Error fetching water games data:', error);
    
    // Return a default data structure in case of error
    return parseWaterGamesData({
      title: 'Water Games | Emerald Owl Productions',
      meta: {
        description: 'Experience the most fun water games and activities for events and celebrations!',
        keywords: ''
      },
      resources: []
    });
  }
}

export default async function WaterGamesPage() {
  // Fetch the data
  const data = await getWaterGamesData();

  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero Banner */}
        <section className="relative min-h-[500px] flex items-center bg-gradient-to-b from-blue-900 via-blue-800 to-cyan-900 text-white">
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
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-blue-800/70 to-cyan-900/70 backdrop-blur-[2px]" />
            
            {/* Decorative elements */}
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-500/10 opacity-70"></div>
            <div className="absolute top-32 -left-32 w-64 h-64 rounded-full bg-white/10 opacity-60"></div>
            <div className="absolute -bottom-32 right-32 w-80 h-80 rounded-full bg-cyan-500/10 opacity-70"></div>
          </div>
          
          <div className="container mx-auto px-6 z-10 relative py-16">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-blue-400 relative drop-shadow-md">
                  {data.hero.title}
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-10 text-gray-100 font-light max-w-2xl">
                {data.contentSection.description.split('.')[0]}
              </p>
              <div className="flex flex-wrap gap-5">
                <Link 
                  href={data.cta.url}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-xl hover:shadow-blue-300/20 hover:-translate-y-1 transform"
                  style={{ backgroundColor: data.cta.backgroundColor || '#2563eb' }}
                >
                  {data.cta.text}
                </Link>
                <Link 
                  href="/foam-parties" 
                  className="bg-transparent border-2 border-blue-400 hover:bg-blue-600/10 text-white font-bold py-4 px-10 rounded-full transition-all duration-300"
                >
                  Check Out Foam Parties
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section - if available */}
        {data.videoContent && data.videoContent.videoUrl && (
        <section className="bg-white py-16">
          <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  <span className="text-blue-600">{data.videoContent.title || 'See Water Games In Action'}</span>
                </h2>
                {data.videoContent.note && (
                  <p className="text-gray-700 text-lg">{data.videoContent.note}</p>
                )}
              </div>
              
              <div className="relative aspect-video max-w-4xl mx-auto overflow-hidden rounded-xl shadow-xl">
                <iframe 
                  src={data.videoContent.videoUrl} 
                  title="Water Games Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                ></iframe>
              </div>
            </div>
          </section>
        )}

        {/* Gallery Section */}
        {data.gallery && data.gallery.length > 0 && (
          <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-20">
            <div className="container mx-auto px-6">
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold text-blue-800 mb-3">
                  Event Gallery
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Explore our water games in action at various events. These memorable moments demonstrate the excitement and joy our activities bring to participants of all ages.
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
              
              {data.gallery.length > 4 && (
                <div className="mt-8 text-center">
                  <Link 
                    href="/gallery" 
                    className="inline-flex items-center gap-2 bg-blue-100 hover:bg-blue-200 text-blue-800 font-medium py-3 px-6 rounded-full transition-all duration-300 shadow-sm"
                  >
                    View Full Gallery
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    </Link>
                  </div>
              )}
            </div>
          </section>
        )}

        {/* Content Section - modify styling to reduce white space */}
        <section className="bg-gradient-to-r from-blue-50 via-white to-cyan-50 py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-12 relative">
                <span className="relative inline-block">
                  {data.contentSection.title}
                  <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-500 rounded-full"></span>
                </span>
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-10">
                <div className="order-2 lg:order-1">
                  <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                    {data.contentSection.description}
                  </p>
                  
                  {data.contentSection.features && (
                    <ul className="space-y-4 mt-6">
                      {data.contentSection.features.map((feature, index) => (
                        <li key={index} className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                          <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 text-blue-600 mr-4 mt-0.5 flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                
                <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-2">
                  {data.gallery[0] && (
                    <Image 
                      src={data.gallery[0].image.url}
                      alt={data.gallery[0].image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Water War Adventure</h3>
                    <p className="text-white/90">The ultimate water battle experience for all ages</p>
                  </div>
                  
                  {/* Decorative element */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-blue-300/20 z-0"></div>
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-cyan-300/20 z-0"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tip Section - enhanced design */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-16 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-cyan-500/20 -mt-32 -mr-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-blue-400/20 -mb-32 -ml-32"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center bg-blue-700/50 backdrop-blur-sm p-10 rounded-3xl shadow-xl border border-white/10">
              <div className="inline-block mb-6 p-3 bg-blue-500/30 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-6">EVENT IDEA:</h3>
              <p className="text-xl leading-relaxed mb-6">
                Organize a high school vs elementary school water war in your community— 
                there will be volunteer hours for the high school students and the elementary 
                school students will LOVE soaking the big kids!
              </p>
              <div className="inline-block mt-4 p-4 bg-blue-500/30 rounded-xl">
                <p className="text-lg font-bold">
                  This is often combined with a Foam Party for maximum fun!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials - modify to reduce white space */}
        {data.testimonials && data.testimonials.length > 0 && (
          <section className="bg-gradient-to-r from-cyan-50 via-white to-blue-50 py-20">
            <div className="container mx-auto px-6">
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold text-blue-800 mb-3">
                  What People Say
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Hear from our clients about their unforgettable experiences with our water games events
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {data.testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 relative">
                    {/* Decorative water droplets */}
                    <div className="absolute top-3 right-3 text-blue-200">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 opacity-20" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex flex-col h-full relative z-10">
                      <div className="mb-6">
                        <svg className="h-10 w-10 text-blue-500" fill="currentColor" viewBox="0 0 32 32">
                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                      </div>
                      <p className="text-gray-700 text-lg mb-6 flex-grow leading-relaxed">{testimonial.quote}</p>
                      <div className="flex items-center border-t border-blue-100 pt-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                          <span className="text-blue-700 font-bold text-xl">{testimonial.author.charAt(0)}</span>
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 text-lg">{testimonial.author}</p>
                          {testimonial.role && (
                            <p className="text-blue-600">{testimonial.role}</p>
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

        {/* FAQs Section - updated styling */}
        {data.faqs && data.faqs.length > 0 && (
          <section className="bg-gradient-to-b from-blue-50 to-white py-20">
            <div className="container mx-auto px-6">
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold text-blue-800 mb-3">
                  Frequently Asked Questions
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Everything you need to know about our water games and experiences
                </p>
              </div>
              
              <div className="max-w-3xl mx-auto space-y-6">
                {data.faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold text-blue-700 mb-3 flex items-center">
                      <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 text-blue-600 mr-3">
                        <span className="font-bold">Q</span>
                      </span>
                      {faq.question}
                    </h3>
                    <div className="pl-11">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
        
        {/* CTA Section - enhanced design */}
        <section className="bg-gradient-to-br from-blue-700 to-blue-900 py-20 text-white relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-20 bg-wave-pattern opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-full h-20 bg-wave-pattern opacity-10 transform rotate-180"></div>
          <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl"></div>
          <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-cyan-500/20 blur-3xl"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Splash into Fun?</h2>
              <p className="text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                Contact us today to discuss how we can make your next event unforgettable with our water games! Perfect for schools, community events, birthday parties, and more.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link 
                  href={data.cta.url}
                  className="inline-block px-10 py-5 bg-white text-blue-700 font-bold rounded-full hover:bg-blue-50 transition-colors shadow-xl hover:shadow-2xl hover:-translate-y-1 transform transition-transform"
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
