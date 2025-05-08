export default function GallerySection() {
  const galleryItems = [
    {
      caption: "Laser show patriotic display",
      image: {
        url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/673652882fd9d4e5aaea654c.png"
      }
    },
    {
      caption: "Independence Day celebration",
      image: {
        url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/673652882fd9d4e5aaea654c.png"
      }
    },
    {
      caption: "American flag projection",
      image: {
        url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/673652882fd9d4e5aaea654c.png"
      }
    }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-700 text-center mb-10">
          Gallery
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {galleryItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md group">
              <div className="relative aspect-video bg-gray-200">
                <img
                  src={item.image.url}
                  alt={item.caption}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-gray-700 font-medium text-center">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 