import Image from 'next/image';
import { GalleryItem } from '@/types/americanAnniversary';

interface GallerySectionProps {
  galleryItems: GalleryItem[];
}

export default function GallerySection({ galleryItems }: GallerySectionProps) {
  return (
    <section className="py-16 bg-gradient-to-b from-black to-gray-900 w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Gallery Preview</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {galleryItems.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg aspect-video">
              <div className="relative w-full h-full">
                <Image 
                  src={item.image.url}
                  alt={item.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.caption && (
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white text-sm">{item.caption}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 