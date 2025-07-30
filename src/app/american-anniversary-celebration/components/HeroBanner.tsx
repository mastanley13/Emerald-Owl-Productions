import VideoWithOverlay from '../../../components/VideoWithOverlay';

export default function HeroBanner() {
  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] pt-32 pb-16 bg-slate-900 overflow-hidden">
      {/* Background Image with Professional Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/673652882fd9d4e5aaea654c.png)` }}
      ></div>
      
      {/* Sophisticated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-blue-900/75 to-slate-800/90"></div>
      
      {/* Subtle Geometric Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center items-center px-6 text-center">
        
        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
          <span className="block text-white mb-2">CELEBRATE AMERICA</span>
          <span className="block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-white to-blue-400 font-black">
              LASER SHOW
            </span>
          </span>
        </h1>

        {/* Subtitle */}
        <div className="mb-6 max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl text-white/90 font-light mb-4 leading-relaxed">
            Reserve Your Historic Celebration NOW
          </p>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto">
            Shows Start at $7,676.76
          </p>
        </div>

        {/* Video Section */}
        <div className="flex flex-col items-center w-full max-w-2xl mx-auto mb-8">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg bg-black">
            <VideoWithOverlay
              src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/673c32fe15ee06bf5fbfeed7.mp4"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Professional CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center mb-6">
          <a 
            href="/contact-us"
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 font-semibold text-lg rounded-lg transition-all duration-300 hover:bg-white/90 hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-1"
          >
            Reserve Your Historic Celebration
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Explore Indicator */}
        <div className="flex flex-col items-center mb-12">
          <span className="text-xs text-white/70 tracking-wider mb-2">EXPLORE</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent animate-bounce"></div>
        </div>

      </div>
      
      {/* Professional Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none"></div>
    </section>
  );
} 