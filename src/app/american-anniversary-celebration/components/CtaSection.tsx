export default function CtaSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      {/* Sophisticated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M50 40c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm0 20c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm0 20c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10z'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Section Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8">
            <svg className="w-4 h-4 text-white/80 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <span className="text-white/90 text-sm font-medium tracking-wider">SECURE YOUR PLACE IN HISTORY</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            <span className="block mb-2">Reserve Your</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-white to-blue-400">
              Historic Celebration
            </span>
          </h2>

          {/* Description */}
          <div className="mb-12 max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-6 font-light">
              Join communities nationwide in commemorating America's most significant milestone
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              Our 250th Anniversary laser light experience is designed exclusively for this historic moment. 
              <span className="text-white font-medium"> Limited availability for 2026 celebrations.</span>
            </p>
          </div>

          {/* Availability Alert */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 mb-12 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-3">
              <svg className="w-5 h-5 text-red-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              <span className="text-white font-semibold">Limited 2026 Availability</span>
            </div>
            <p className="text-white/80 text-sm">
              Communities are already securing their dates for this once-in-250-years celebration
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a 
              href="/contact-us" 
              className="group relative inline-flex items-center justify-center px-10 py-4 bg-white text-slate-900 font-bold text-lg rounded-xl transition-all duration-300 hover:bg-white/90 hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-1"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Reserve Your Anniversary Celebration
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            
            <div className="flex items-center space-x-4">
              <div className="h-8 w-px bg-white/20"></div>
              <div className="text-center">
                <p className="text-white/60 text-sm mb-1">Direct Contact</p>
                <a 
                  href="tel:252-563-5436" 
                  className="text-white font-semibold text-lg hover:text-blue-300 transition-colors flex items-center"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (252) 563-5436
                </a>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="border-t border-white/10 pt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="group">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg mb-4 group-hover:bg-white/20 transition-colors">
                  <svg className="w-6 h-6 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">Professional Excellence</h3>
                <p className="text-white/60 text-sm">Industry-leading event production and laser technology</p>
              </div>
              
              <div className="group">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg mb-4 group-hover:bg-white/20 transition-colors">
                  <svg className="w-6 h-6 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">Custom Design</h3>
                <p className="text-white/60 text-sm">Tailored specifically for your venue and community</p>
              </div>
              
              <div className="group">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg mb-4 group-hover:bg-white/20 transition-colors">
                  <svg className="w-6 h-6 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">Community Focused</h3>
                <p className="text-white/60 text-sm">Celebrating American heritage with local communities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 