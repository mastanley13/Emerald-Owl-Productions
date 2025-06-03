import Image from 'next/image';

export default function GallerySection() {
  const galleryItems = [
    {
      caption: "Patriotic laser light display with American flag projection",
      image: {
        url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67b17f8970fcfe8794242cee.jpeg"
      }
    },
    {
      caption: "Spectacular red, white, and blue laser show",
      image: {
        url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67a4d1ca9769a795ba5981de.jpeg"
      }
    },
    {
      caption: "Dynamic patriotic light beams in celebration",
      image: {
        url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67a4d1281890c66c679de1bb.jpeg"
      }
    },
    {
      caption: "Community gathering with patriotic laser backdrop",
      image: {
        url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67a4d1603553cd59a0a68f21.png"
      }
    },
    {
      caption: "Evening laser light show featuring American themes",
      image: {
        url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67a4d18823290240bf390f2f.jpeg"
      }
    },
    {
      caption: "Immersive patriotic visual experience",
      image: {
        url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67a4d14f9769a74712598159.jpeg"
      }
    },
    {
      caption: "Advanced laser technology showcasing American history",
      image: {
        url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67a44608aa4eed6d00f735bd.jpeg"
      }
    },
    {
      caption: "Breathtaking anniversary celebration light display",
      image: {
        url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67a445db9b155f2998700f62.jpeg"
      }
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-slate-300"></div>
              <span className="px-6 text-sm font-medium text-slate-500 tracking-wider uppercase">Experience Gallery</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-slate-300"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              See the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">Revolution</span> in Action
            </h2>
            
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Witness the spectacular laser light displays that bring America's 250-year journey to life through cutting-edge visual technology
            </p>
          </div>

          {/* Perfect Grid Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryItems.map((item, index) => (
              <div 
                key={index} 
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image.url}
                    alt={item.caption}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-white text-sm leading-relaxed">
                        {item.caption}
                      </p>
                    </div>
                  </div>

                  {/* Subtle Border Accent */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-2xl transition-colors duration-300"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 max-w-2xl mx-auto shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Ready to Experience History?
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                These images represent just a glimpse of what your community will experience during America's 250th Anniversary celebration.
              </p>
              <a 
                href="/contact-us"
                className="inline-flex items-center justify-center px-8 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Plan Your Celebration
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 