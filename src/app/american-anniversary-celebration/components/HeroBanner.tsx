export default function HeroBanner() {
  return (
    <section className="relative w-full h-screen bg-slate-900 overflow-hidden">
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
        
        {/* Sophisticated Badge */}
        <div className="mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
            <span className="text-white/90 text-sm font-medium tracking-wide">HISTORIC MILESTONE</span>
            <div className="w-2 h-2 bg-blue-500 rounded-full ml-3"></div>
          </div>
        </div>

        {/* Main Headline - More Sophisticated Typography */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
          <span className="block text-white mb-2">America at</span>
          <span className="block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-white to-blue-400 font-black">
              250 Years
            </span>
          </span>
        </h1>

        {/* Refined Subtitle */}
        <div className="mb-12 max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl text-white/90 font-light mb-4 leading-relaxed">
            A Revolutionary Laser Light Experience
          </p>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto">
            Commemorating two and a half centuries of innovation, democracy, and the American spirit through cutting-edge visual storytelling
          </p>
        </div>

        {/* Clean Timeline */}
        <div className="mb-10 flex items-center justify-center space-x-8 text-white">
          <div className="text-center">
            <div className="text-3xl font-light text-blue-300">1776</div>
            <div className="text-xs text-white/60 tracking-wider">FOUNDED</div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-8 h-px bg-gradient-to-r from-blue-400 to-red-400"></div>
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="w-8 h-px bg-gradient-to-r from-red-400 to-blue-400"></div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-light text-red-300">2026</div>
            <div className="text-xs text-white/60 tracking-wider">ANNIVERSARY</div>
          </div>
        </div>

        {/* Professional CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <a 
            href="/contact-us"
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 font-semibold text-lg rounded-lg transition-all duration-300 hover:bg-white/90 hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-1"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Plan Your Celebration
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
          
          <a 
            href="#experience"
            className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white font-semibold text-lg rounded-lg transition-all duration-300 hover:bg-white/10 hover:border-white/50 backdrop-blur-sm"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            Learn More
          </a>
        </div>

        {/* Subtle Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center text-white/50 animate-bounce">
            <span className="text-xs mb-2 tracking-wider">EXPLORE</span>
            <div className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent"></div>
          </div>
        </div>
      </div>
      
      {/* Professional Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </section>
  );
} 