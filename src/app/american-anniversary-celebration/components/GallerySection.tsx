import Image from 'next/image';

export default function GallerySection() {
  const galleryItems = [
    {
      image: {
        url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688aeb5b417b03865d60ca30.jpeg"
      }
    },
    {
      image: {
        url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688aeb5b05df82c5a39a5c04.jpeg"
      }
    },
    {
      image: {
        url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688aeb5b08dbc31a2224d6d3.jpeg"
      }
    },
    {
      image: {
        url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688aeb5ba4c55fecb4550bd0.jpeg"
      }
    },
    {
      image: {
        url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688aeb5b08dbc3463024d6d2.png"
      }
    }
  ];

  return (
    <section className="py-12 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-slate-300"></div>
              <span className="px-4 text-sm font-medium text-slate-500 tracking-wider uppercase">Experience Gallery</span>
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-slate-300"></div>
            </div>
          </div>

          {/* 1-2-2 Layout Gallery - Compact */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Top Row - 1 wide image */}
            <div className="lg:col-span-4">
              <div className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={galleryItems[0].image.url}
                    alt="Patriotic laser light display - featured"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-xl transition-colors duration-300"></div>
                </div>
              </div>
            </div>

            {/* Middle Row - 2 images */}
            <div className="lg:col-span-2">
              <div className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={galleryItems[1].image.url}
                    alt="Patriotic laser light display 1"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-xl transition-colors duration-300"></div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={galleryItems[2].image.url}
                    alt="Patriotic laser light display 2"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-xl transition-colors duration-300"></div>
                </div>
              </div>
            </div>

            {/* Bottom Row - 2 images */}
            <div className="lg:col-span-2">
              <div className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={galleryItems[3].image.url}
                    alt="Patriotic laser light display 3"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-xl transition-colors duration-300"></div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={galleryItems[4].image.url}
                    alt="Patriotic laser light display 4"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-xl transition-colors duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 