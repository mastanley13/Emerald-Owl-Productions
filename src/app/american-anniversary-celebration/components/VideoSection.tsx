interface VideoSectionProps {
  videoUrl: string;
  thumbnailUrl: string;
  title: string;
  note?: string;
}

export default function VideoSection({ videoUrl, thumbnailUrl, title, note }: VideoSectionProps) {
  return (
    <section className="py-16 bg-black w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
          {title}
        </h2>
        
        {/* Video Container */}
        <div className="max-w-5xl mx-auto relative">
          <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
            {/* Video Element */}
            <video 
              controls 
              poster={thumbnailUrl}
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          
          {/* Note */}
          {note && (
            <p className="text-center text-red-500 font-semibold mt-4 animate-pulse">
              {note}
            </p>
          )}
        </div>
      </div>
    </section>
  );
} 