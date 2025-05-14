export default function VideoSection() {
  return (
    <section className="py-16 bg-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            See Our American Anniversary Celebration in Action
          </h2>
          <p className="text-yellow-400 font-bold">
            PLEASE UNMUTE TO HEAR INFORMATION
          </p>
        </div>
        
        <div className="relative max-w-3xl mx-auto aspect-video">
          <video 
            className="w-full h-full object-cover"
            controls
            autoPlay
            muted
            playsInline
          >
            <source 
              src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/673c32fe15ee06bf5fbfeed7.mp4" 
              type="video/mp4" 
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}