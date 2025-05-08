import Header from '../../components/shared/Layout/Header';
import Footer from '../../components/shared/Layout/Footer';
import Newsletter from '../../components/shared/UI/Newsletter';
import Image from 'next/image';
import Link from 'next/link';
import { getNeonNightsData } from '../../services/contentService';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  // Fetch data
  const data = await getNeonNightsData();
  
  return {
    title: data.meta.title,
    description: data.meta.description,
    keywords: data.meta.keywords,
  };
}

export default async function NeonNightsPage() {
  // Fetch data
  const data = await getNeonNightsData();
  
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero Banner */}
        <section className="relative min-h-[500px] flex items-center bg-gradient-to-b from-black via-black to-purple-950 text-white">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-purple-950/80 backdrop-blur-[2px]" />
            
            {/* Decorative neon elements */}
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-purple-500/10 opacity-70 animate-pulse"></div>
            <div className="absolute top-32 -left-32 w-64 h-64 rounded-full bg-pink-400/10 opacity-60 animate-pulse" style={{ animationDuration: '8s' }}></div>
            <div className="absolute -bottom-32 right-32 w-80 h-80 rounded-full bg-blue-500/10 opacity-70 animate-pulse" style={{ animationDuration: '12s' }}></div>
            
            {/* Background Image (if available) */}
            {data.hero.backgroundImage && (
              <Image 
                src={data.hero.backgroundImage.url} 
                alt={data.hero.backgroundImage.alt || "Neon Nights"} 
                fill
                priority
                className="object-cover opacity-30"
              />
            )}
          </div>
          
          <div className="container mx-auto px-6 z-10 relative py-16">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-purple-400 relative drop-shadow-md">
                  {data.hero.title}
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-10 text-gray-100 font-light max-w-2xl">
                {data.hero.description || "Glow in the dark party experiences that transform any venue into a vibrant wonderland"}
              </p>
              <div className="flex flex-wrap gap-5">
                <Link 
                  href={data.cta.url} 
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-xl hover:shadow-purple-300/30"
                >
                  {data.cta.text}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="bg-black text-white py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-purple-400">
                  {data.contentSection.title}
                </h2>
                <p className="mb-4">
                  {data.contentSection.description}
                </p>
                {data.contentSection.features && data.contentSection.features.length > 0 && (
                  <ul className="mt-6 space-y-2">
                    {data.contentSection.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-purple-900 text-purple-400 mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl shadow-purple-500/20">
                {data.hero.backgroundImage ? (
                  <Image 
                    src={data.hero.backgroundImage.url}
                    alt={data.hero.backgroundImage.alt || "Neon Nights Experience"}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                ) : (
                  <Image 
                    src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67a4558baa4eed1400f75c3a.jpeg"
                    alt="Neon Nights Experience"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Video Section (if available) */}
        {data.videoContent && (
          <section className="bg-black py-16">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold mb-10 text-center text-purple-400">
                Watch Neon Nights in Action
              </h2>
              <div className="max-w-4xl mx-auto aspect-video relative">
                <iframe 
                  className="w-full h-full rounded-lg shadow-xl"
                  src={data.videoContent.videoUrl} 
                  title="Neon Nights Experience"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-center text-white mt-6">
                FUN MUSIC INCLUDED! DON&apos;T FORGET TO UNMUTE!
              </p>
            </div>
          </section>
        )}

        {/* Neon Nights Activities */}
        <section className="bg-gray-900 text-white py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center text-purple-400">
              Glow in the Dark Activities
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
              <div className="bg-black/50 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">Glow in the Dark Foam & Paint</h3>
                <p className="mb-4">
                  If you think the foam party looks fun, imagine at night with glow in the dark foam and paint! Bring a change of clothes and a towel for this one - the fun memories you'll leave with are going to last a long time!
                </p>
                <p>
                  These can be done as stand-alone smaller events, or add a "SPLASH ZONE" at your outdoor laser light glow party!
                </p>
              </div>
              
              <div className="bg-black/50 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">Glow in the Dark Sports</h3>
                <p className="mb-4">
                  We take any fun activity to a new level by making it glow in the dark. Some ideas include:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Glow in the Dark Dodgeball</li>
                  <li>Glow in the Dark Basketball</li>
                  <li>Glow in the Dark Kickball</li>
                </ul>
              </div>
            </div>
            
            {/* Gallery Section (if available from data) */}
            {data.gallery && data.gallery.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {data.gallery.slice(0, 3).map((item, index) => (
                  <div key={index} className="relative h-[250px] rounded-lg overflow-hidden">
                    <Image 
                      src={item.image.url}
                      alt={item.image.alt || `Glow Activity ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="relative h-[250px] rounded-lg overflow-hidden">
                  <Image 
                    src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67104d556dbca5b137091876.jpeg"
                    alt="Glow Activity 1"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="relative h-[250px] rounded-lg overflow-hidden">
                  <Image 
                    src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67104d5aaf962467f724d4ee.jpeg"
                    alt="Glow Activity 2"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="relative h-[250px] rounded-lg overflow-hidden">
                  <Image 
                    src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67104d8c97369c8df9ed80c9.jpeg"
                    alt="Glow Activity 3"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>
            )}
          </div>
        </section>

        {/* FAQ Section */}
        {data.faqs && data.faqs.length > 0 && (
          <section className="bg-black text-white py-16">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold mb-10 text-center text-purple-400">
                Frequently Asked Questions
              </h2>
              <div className="max-w-4xl mx-auto space-y-6">
                {data.faqs.map((faq, index) => (
                  <div key={index} className="bg-gray-900 p-6 rounded-lg shadow">
                    <h3 className="text-xl font-bold text-purple-400 mb-2">{faq.question}</h3>
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Packages Section (if available) */}
        {data.packages && data.packages.length > 0 && (
          <section className="bg-gray-900 text-white py-16">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold mb-10 text-center text-purple-400">
                Our Packages
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {data.packages.map((pkg, index) => (
                  <div key={index} className="bg-black p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-colors duration-300">
                    <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                      <Image
                        src={pkg.image.url}
                        alt={pkg.image.alt || `${pkg.title} package`}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-purple-400">{pkg.title}</h3>
                    <p className="text-gray-300 mb-4">{pkg.description}</p>
                    
                    {pkg.price && (
                      <p className="text-xl font-bold mb-4 text-purple-300">{pkg.price}</p>
                    )}
                    
                    {pkg.features && pkg.features.length > 0 && (
                      <ul className="mb-6 space-y-2">
                        {pkg.features.map((feature, i) => (
                          <li key={i} className="flex items-start text-gray-300">
                            <span className="text-purple-400 mr-2">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    
                    <Link href={pkg.ctaUrl || data.cta.url}>
                      <span className="block w-full px-6 py-3 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition duration-300 text-center">
                        {pkg.ctaText || "Book Now"}
                      </span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Pricing & Booking */}
        <section className="bg-gray-900 text-white py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8 text-purple-400">
                Pricing Information
              </h2>
              <p className="mb-6 text-lg">
                Neon Nights are priced uniquely based on your specific needs. Different needs and budgets can be accommodated, scaling the spectacle up or down to meet your requirements.
              </p>
              <p className="mb-8 text-lg">
                To discuss Neon Nights for your event, call us at <a href="tel:252-764-7628" className="text-purple-400 font-bold">252-764-7628</a> without any sales pressure.
              </p>
              <Link 
                href={data.cta.url} 
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 inline-block"
              >
                {data.cta.text || "Contact Us for a Quote"}
              </Link>
            </div>
          </div>
        </section>

        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
