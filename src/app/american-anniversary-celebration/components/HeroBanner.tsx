export default function HeroBanner() {
  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] bg-black overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url(https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/673652882fd9d4e5aaea654c.png)` }}
      ></div>
      
      {/* Stars background */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0 bg-[radial-gradient(white,rgba(255,255,255,.2)_2px,transparent_40px)] bg-[length:50px_50px]"
        ></div>
      </div>
      
      {/* Flag Stripes Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-700/40 via-white/30 to-blue-700/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center items-center px-4 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 drop-shadow-lg">
          <span className="text-white">America's </span>
          <span className="text-red-600">250th </span>
          <span className="text-blue-600">Anniversary</span>
        </h1>
        <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto mb-8 drop-shadow-md">
          Celebrate with a spectacular laser light show experience designed for this historic milestone
        </p>
      </div>
      
      {/* Bottom fade overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
} 