import Link from 'next/link';
import Image from 'next/image';
import Header from '../../components/shared/Layout/Header';
import Footer from '../../components/shared/Layout/Footer';
import Newsletter from '../../components/shared/UI/Newsletter';
import { getSensoryFriendlyExperiencesData } from '../../services/contentService';
import { Metadata } from 'next';

// Generate metadata for the page
export async function generateMetadata(): Promise<Metadata> {
  const data = await getSensoryFriendlyExperiencesData();
  
  return {
    title: `${data.title} | Emerald Owl Productions`,
    description: data.hero.subheading,
  }
}

export default async function SensoryFriendlyExperiencesPage() {
  // Fetch the data
  const data = await getSensoryFriendlyExperiencesData();
  
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero Banner */}
        <section className="relative min-h-[600px] flex items-center bg-gradient-to-b from-black via-black to-emerald-950 text-white">
          <div className="absolute inset-0 overflow-hidden">
            {data.hero.backgroundImage && (
              <Image 
                src={data.hero.backgroundImage}
                alt={data.hero.heading}
                fill
                className="object-cover opacity-30"
                priority
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-emerald-950/80 backdrop-blur-[2px]" />
            
            {/* Decorative elements */}
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-emerald-500/10 opacity-70 animate-pulse"></div>
            <div className="absolute top-32 -left-32 w-64 h-64 rounded-full bg-blue-400/10 opacity-60 animate-pulse" style={{ animationDuration: '8s' }}></div>
            <div className="absolute -bottom-32 right-32 w-80 h-80 rounded-full bg-emerald-500/10 opacity-70 animate-pulse" style={{ animationDuration: '12s' }}></div>
          </div>
          
          <div className="container mx-auto px-6 z-10 relative py-16">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-emerald-400 relative drop-shadow-md">
                  {data.hero.heading}
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-10 text-gray-100 font-light max-w-2xl">
                {data.hero.subheading}
              </p>
              <Link 
                href="/contact-us"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-xl hover:shadow-emerald-300/60 hover:-translate-y-1 transform inline-block"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                  <span className="text-emerald-600 relative">
                    {data.introduction.heading}
                    <span className="absolute -bottom-2 left-0 right-0 h-1 bg-emerald-200 rounded-full opacity-50"></span>
                  </span>
                </h2>
                {data.introduction.description.map((paragraph, index) => (
                  <p key={index} className="text-gray-700 mb-6 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
              {data.introduction.image && (
                <div className="md:w-1/2 relative h-[400px] overflow-hidden rounded-xl shadow-2xl transform transition-all duration-500 hover:scale-[1.02]">
                  <Image 
                    src={data.introduction.image}
                    alt="Sensory friendly experience" 
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60"></div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="bg-gradient-to-br from-gray-50 to-emerald-50 py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              <span className="text-emerald-600 relative">
                {data.features.heading}
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-emerald-200 rounded-full opacity-50"></span>
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.features.items.map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-emerald-100">
                  <div className="h-16 w-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                    <span className="text-emerald-600 text-2xl font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-emerald-700 mb-4">{feature.title}</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Director Profile */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
              <span className="text-emerald-600 relative">
                {data.director.heading}
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-emerald-200 rounded-full opacity-50"></span>
              </span>
            </h2>
            
            <div className="flex flex-col md:flex-row gap-10 items-center bg-gray-50 rounded-2xl p-8 shadow-lg">
              <div className="md:w-1/3 relative h-[400px] mb-8 md:mb-0 overflow-hidden rounded-xl">
                <Image 
                  src={data.director.image}
                  alt={data.director.name} 
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-emerald-700 mb-4">
                  {data.director.name}
                </h3>
                <p className="text-lg font-medium text-emerald-600 mb-6">{data.director.title}</p>
                {data.director.bio.map((paragraph, index) => (
                  <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
                {data.director.quote && (
                  <blockquote className="border-l-4 border-emerald-500 pl-5 py-2 my-8 bg-emerald-50 rounded-r-lg pr-5">
                    <p className="italic text-gray-700">&quot;{data.director.quote}&quot;</p>
                  </blockquote>
                )}
                {data.director.contact && (
                  <div className="mt-6 bg-white p-4 rounded-lg shadow-sm border border-emerald-100">
                    <p className="text-gray-700 font-medium">
                      {data.director.contact.email && (
                        <>
                          <span className="text-emerald-700">Email:</span> <a href={`mailto:${data.director.contact.email}`} className="text-emerald-600 hover:underline">{data.director.contact.email}</a>
                        </>
                      )}
                      {data.director.contact.phone && (
                        <>
                          {data.director.contact.email && <span className="mx-2">|</span>}
                          <span className="text-emerald-700">Phone:</span> <span>{data.director.contact.phone}</span>
                        </>
                      )}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        {data.gallery.images.length > 0 && (
          <section className="bg-gradient-to-br from-gray-50 to-emerald-50 py-20">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
                <span className="text-emerald-600 relative">
                  {data.gallery.heading}
                  <span className="absolute -bottom-2 left-0 right-0 h-1 bg-emerald-200 rounded-full opacity-50"></span>
                </span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.gallery.images.map((image, index) => (
                  <div key={index} className="relative h-[300px] group overflow-hidden rounded-xl shadow-lg">
                    <Image 
                      src={image.url}
                      alt={image.alt} 
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <p className="text-white p-4 text-sm">{image.alt}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
        
        {/* Pricing Section */}
        <section className="bg-gradient-to-br from-emerald-700 to-emerald-900 text-white py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              {data.pricing.heading}
            </h2>
            
            <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-sm p-10 rounded-xl shadow-2xl border border-white/20">
              {data.pricing.description.map((paragraph, index) => (
                <p key={index} className="text-white/90 mb-6 leading-relaxed">
                  {paragraph}
                </p>
              ))}
              
              <div className="mt-10 text-center">
                <Link
                  href={data.pricing.buttonLink}
                  className="bg-white text-emerald-700 hover:bg-emerald-100 px-10 py-4 rounded-full font-bold inline-block transition-all duration-300 shadow-xl hover:shadow-white/30 hover:-translate-y-1 transform text-lg"
                >
                  {data.pricing.buttonText}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Call To Action Section */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              <span className="text-emerald-600">Ready to Create Inclusive Experiences?</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto mb-10 text-gray-700">
              Contact us today to plan a sensory-friendly event that provides a comfortable and enjoyable experience for everyone.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                href="/contact-us"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-xl hover:shadow-emerald-300/60 hover:-translate-y-1 transform"
              >
                Contact Us
              </Link>
              <Link 
                href="#"
                className="bg-white border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-xl hover:-translate-y-1 transform"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
