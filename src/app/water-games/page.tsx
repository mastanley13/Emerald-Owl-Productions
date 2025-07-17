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
    title: "Water Battle Games | Emerald Owl Productions",
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
      // Fallback to default data if API fails or if content is not found for this specific page structure
      console.warn('Failed to fetch water games data or data structure mismatch, using default Water Wars content.');
      return getDefaultWaterWarsData();
    }
    
    const rawData = await res.json();
    let parsedData = parseWaterGamesData(rawData);

    // Overwrite with Water Wars specific content
    parsedData.meta.title = "Water Battle Games | Emerald Owl Productions";
    parsedData.meta.description = "Get ready for an all-out water war! Fun for kids and adults, complete with water blasters, buckets, and filling stations.";
    parsedData.meta.keywords = 'water wars, water battle, water games, outdoor activities, event entertainment, slime wars, paint wars';
    parsedData.hero.title = "Water Battle Games";
    // Update hero description to be the first sentence of the new content
    parsedData.hero.description = "Who does not love a great all out water war? This activity is fun for kids and adults!"; 
    
    // Replace contentSection with new Water Wars text
    parsedData.contentSection = {
      title: "Water Wars!",
      description: "Who does not love a great all out water war? This activity is fun for kids and adults!\n\nIf you are just wanting to get a little splashed, THIS IS NOT FOR YOU! Our water wars are TOTAL & COMPLETE DRENCHERS! We bring the water blasters, plastic buckets for dumping, and the containers your participants will use as filling stations.\n\nYou just provide the running water. Call us to discuss the best way to create a super fun water war!\n\nWant to add a get messy dimension to this? Ask us about adding slime or paint for your war!!!",
      features: [ // Extracted some key points as features
        "Fun for kids and adults!",
        "TOTAL & COMPLETE DRENCHERS!",
        "Water blasters, buckets & filling stations provided.",
        "Option to add slime or paint!"
      ],
      // Remove or update image if it doesn't fit Water Wars
      image: parsedData.gallery?.[0]?.image || { type: 'image', url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/673c35f2d88b411473f4fc7d.jpeg', alt: 'Water battle in action' }, 
    };

    // Update CTA text if necessary
    parsedData.cta.text = "Plan Your Water War!";

    // Remove video, testimonials if they don't fit the new focus or are replaced by new content section
    delete parsedData.videoContent;
    delete parsedData.testimonials;

    // Add water games gallery images
    parsedData.gallery = [
      {
        image: { 
          type: 'image', 
          url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67a44b5e53f26ce4fe5ef5bd.jpeg', 
          alt: 'Water games participants' 
        },
        caption: 'Participants enjoying water games'
      },
      {
        image: { 
          type: 'image', 
          url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67a44b545186f71bdfdbd9a0.jpeg', 
          alt: 'Water war event' 
        },
        caption: 'Community water war event'
      },
      {
        image: { 
          type: 'image', 
          url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/673c32981385f7109596a4ab.jpeg', 
          alt: 'Water battle equipment' 
        },
        caption: 'Water battle equipment and setup'
      },
      {
        image: { 
          type: 'image', 
          url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/673c32c817d9a9423c4436fa.jpeg', 
          alt: 'Water games fun' 
        },
        caption: 'Having a blast with water games'
      },
      {
        image: { 
          type: 'image', 
          url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/673c326cd88b41d2e8f4f981.png', 
          alt: 'Water war participants' 
        },
        caption: 'Water war participants ready for action'
      },
      {
        image: { 
          type: 'image', 
          url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/673c31fdd88b41b904f4f905.jpeg', 
          alt: 'Water battle activity' 
        },
        caption: 'Water battle activity in full swing'
      }
    ];

    // Add the event idea as a new section or part of contentSection
    // For simplicity, adding it to the description. Can be a separate component/section.
    parsedData.eventIdea = {
        title: "EVENT IDEA:",
        description: "Organize a high school vs elementary school water war in your community— there will be volunteer hours for the high school students and the elementary school students will LOVE soaking the big kids!",
        footer: "This is often combined with a Foam Party"
    };

    return parsedData;

  } catch (error) {
    console.error('Error in getWaterGamesData:', error);
    return getDefaultWaterWarsData();
  }
}

function getDefaultWaterWarsData(): WaterGamesData {
  return {
    meta: {
      title: "Water Battle Games | Emerald Owl Productions",
      description: "Get ready for an all-out water war! Fun for kids and adults, complete with water blasters, buckets, and filling stations.",
      keywords: 'water wars, water battle, water games, outdoor activities, event entertainment, slime wars, paint wars',
    },
    hero: {
      title: "Water Battle Games",
      description: "Who does not love a great all out water war? This activity is fun for kids and adults!",
      backgroundImage: {
        type: 'image',
        url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/673c35f2d88b411473f4fc7d.jpeg', // Default image
        alt: 'Water Battle Action'
      }
    },
    contentSection: {
      title: "Water Wars!",
      description: "Who does not love a great all out water war? This activity is fun for kids and adults!\n\nIf you are just wanting to get a little splashed, THIS IS NOT FOR YOU! Our water wars are TOTAL & COMPLETE DRENCHERS! We bring the water blasters, plastic buckets for dumping, and the containers your participants will use as filling stations.\n\nYou just provide the running water. Call us to discuss the best way to create a super fun water war!\n\nWant to add a get messy dimension to this? Ask us about adding slime or paint for your war!!!",
      features: [
        "Fun for kids and adults!",
        "TOTAL & COMPLETE DRENCHERS!",
        "Water blasters, buckets & filling stations provided.",
        "Option to add slime or paint!"
      ],
      image: { 
        type: 'image', 
        url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/673c35f2d88b411473f4fc7d.jpeg', 
        alt: 'Water battle with water guns' 
      },
    },
    cta: {
      text: "Plan Your Water War!",
      url: "/contact-us",
      backgroundColor: '#2563eb' 
    },
    eventIdea: {
        title: "EVENT IDEA:",
        description: "Organize a high school vs elementary school water war in your community— there will be volunteer hours for the high school students and the elementary school students will LOVE soaking the big kids!",
        footer: "This is often combined with a Foam Party"
    },
    // Ensure other fields expected by the page are present, even if empty or with defaults
    gallery: [
      {
        image: { 
          type: 'image', 
          url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67ad1519ab36b0cd8b78150d.jpeg', 
          alt: 'Water battle action' 
        },
        caption: 'Epic water battle in action'
      },
      {
        image: { 
          type: 'image', 
          url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67a44b5e53f26ce4fe5ef5bd.jpeg', 
          alt: 'Water games participants' 
        },
        caption: 'Participants enjoying water games'
      },
      {
        image: { 
          type: 'image', 
          url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67a44b545186f71bdfdbd9a0.jpeg', 
          alt: 'Water war event' 
        },
        caption: 'Community water war event'
      },
      {
        image: { 
          type: 'image', 
          url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/673c32981385f7109596a4ab.jpeg', 
          alt: 'Water battle equipment' 
        },
        caption: 'Water battle equipment and setup'
      },
      {
        image: { 
          type: 'image', 
          url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/673c32c817d9a9423c4436fa.jpeg', 
          alt: 'Water games fun' 
        },
        caption: 'Having a blast with water games'
      },
      {
        image: { 
          type: 'image', 
          url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/673c326cd88b41d2e8f4f981.png', 
          alt: 'Water war participants' 
        },
        caption: 'Water war participants ready for action'
      },
      {
        image: { 
          type: 'image', 
          url: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/673c31fdd88b41b904f4f905.jpeg', 
          alt: 'Water battle activity' 
        },
        caption: 'Water battle activity in full swing'
      }
    ],
    faqs: [],
    resources: { byCategory: { heroBackground:[], videoThumbnails:[], galleryImages:[], packageImages:[], colorRunImages:[], all:[] }}
  };
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
              {data.hero.description && (
                <p className="text-xl md:text-2xl mb-10 text-gray-100 font-light max-w-2xl">
                  {data.hero.description}
                </p>
              )}
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

        {/* Main Content Section for Water Wars */}
        <section className="bg-gradient-to-r from-blue-50 via-white to-cyan-50 py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto prose prose-lg prose-blue text-gray-700">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-8">
                {data.contentSection.title} {/* Should be "Water Wars!" */}
              </h2>
              {/* Split description into paragraphs for better readability */}
              {data.contentSection.description.split('\n\n').map((paragraph, index) => (
                <p key={index} className={paragraph.includes("THIS IS NOT FOR YOU!") ? "font-bold text-red-600 uppercase" : ""}>
                  {paragraph}
                </p>
              ))}

              {data.contentSection.features && data.contentSection.features.length > 0 && (
                <>
                  <h3 className="text-2xl font-semibold text-blue-600 mt-8 mb-4">What We Provide:</h3>
                  <ul className="space-y-2 pl-5 list-disc marker:text-blue-500">
                    {data.contentSection.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            {/* Event Idea Section */}
            {data.eventIdea && (
              <div className="max-w-3xl mx-auto mt-12 bg-blue-100 p-6 rounded-xl shadow-lg text-center">
                <h3 className="text-2xl font-bold text-blue-700 mb-3">
                  {data.eventIdea.title}
                </h3>
                <p className="text-blue-900 text-lg mb-4">
                  {data.eventIdea.description}
                </p>
                {data.eventIdea.footer && (
                  <p className="text-lg font-semibold text-blue-600">
                    {data.eventIdea.footer}
                  </p>
                )}
              </div>
            )}
          </div>
        </section>

        {/* Gallery Section - Kept for now, can be updated with Water War specific images */}
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

              {/* Improved Gallery Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left: Tall Vertical Image */}
                {data.gallery.length > 0 && (
                  <div className="lg:col-span-1 relative rounded-xl overflow-hidden shadow-lg aspect-[3/4]">
                    <Image 
                      src={data.gallery[0].image.url}
                      alt={data.gallery[0].caption || data.gallery[0].image.alt}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {data.gallery[0].caption && (
                      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                        <p className="text-white text-xl p-6 font-medium">{data.gallery[0].caption}</p>
                      </div>
                    )}
                  </div>
                )}
                
                {/* Right: 2x2 Grid instead of tall column */}
                <div className="lg:col-span-2 grid grid-cols-2 gap-4">
                  {/* Top row: 2 images */}
                  {data.gallery.slice(1, 3).map((item, index) => (
                    <div key={index} className="relative rounded-xl overflow-hidden shadow-lg aspect-[3/2]">
                      <Image 
                        src={item.image.url}
                        alt={item.caption || item.image.alt}
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      {item.caption && (
                        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity">
                          <p className="text-white text-sm p-3 font-medium">{item.caption}</p>
                        </div>
                      )}
                    </div>
                  ))}
                  
                  {/* 3rd image: smaller and better proportioned */}
                  {data.gallery.length > 3 && (
                    <div className="col-span-2 relative rounded-xl overflow-hidden shadow-lg aspect-[3/1]">
                      <Image 
                        src={data.gallery[3].image.url}
                        alt={data.gallery[3].caption || data.gallery[3].image.alt}
                        fill
                        className="object-cover object-[center_30%] hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 66vw"
                      />
                      {data.gallery[3].caption && (
                        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity">
                          <p className="text-white text-sm p-3 font-medium">{data.gallery[3].caption}</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom: 2 images side by side */}
              <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {data.gallery.slice(4, 6).map((item, index) => (
                  <div key={index} className="relative rounded-xl overflow-hidden shadow-lg aspect-[16/9]">
                    <Image 
                      src={item.image.url}
                      alt={item.caption || item.image.alt}
                      fill
                      className={`object-cover hover:scale-110 transition-transform duration-500${index === 1 ? ' object-[center_25%]' : ''}`}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {item.caption && (
                      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity">
                        <p className="text-white text-sm p-3 font-medium">{item.caption}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Additional Images in Grid */}
              {data.gallery.length > 6 && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  {data.gallery.slice(6, 10).map((item, index) => (
                    <div key={index} className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                      <Image 
                        src={item.image.url}
                        alt={item.caption || item.image.alt}
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 50vw, 25vw"
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
            </div>
          </section>
        )}

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
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
