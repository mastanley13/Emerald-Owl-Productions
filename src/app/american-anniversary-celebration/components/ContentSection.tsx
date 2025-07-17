import GallerySection from "./GallerySection";

export default function ContentSection() {
  const experienceFeatures = [
    {
      title: "Immersive Visual Storytelling",
      description: "State-of-the-art laser technology creates breathtaking displays that chronicle America&apos;s remarkable journey from colonial beginnings to modern innovation",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Historical Audio Experience", 
      description: "Professionally curated soundtrack featuring period music, inspiring speeches, and narrative that brings 250 years of American history to life",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M9 12h.01M15 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Custom Event Design",
                    description: "Each celebration is uniquely tailored to your venue, audience, and community, ensuring an authentic and memorable anniversary experience",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a1 1 0 01-1-1V9a1 1 0 011-1h1a2 2 0 100-4H4a1 1 0 01-1-1V4a1 1 0 011-1h3a1 1 0 001-1z" />
        </svg>
      )
    },
    {
      title: "Community Celebration Focus",
      description: "Perfect for municipal events, school programs, community gatherings, and Independence Day celebrations of all sizes",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  return (
    <>
      {/* 1. Video at the top */}
      {/* <VideoSection /> */}

      {/* 2. Short Description (no duplicate heading) */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-8">
            {/* Section Label */}
            <div className="inline-flex items-center justify-center mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-slate-300"></div>
              <span className="px-6 text-sm font-medium text-slate-500 tracking-wider uppercase">Featured Experience</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-slate-300"></div>
            </div>
            {/* Gradient Header - improved readability */}
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-pink-400 to-blue-600 drop-shadow-md" style={{ WebkitTextStroke: '1px rgba(30,41,59,0.10)' }}>
                Celebrate America: 250 Years of Freedom & Light
              </span>
            </h2>
            <p className="text-xl text-slate-700 leading-relaxed mb-2">
              In honor of the United States’ 250th anniversary, we’re proud to present our most spectacular EOP Experience yet:
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              <strong>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-pink-400 to-blue-600">Celebrate America:</span>
                <span className="text-slate-900 font-bold"> A Laser Show Experience Like No Other</span>
              </strong><br/>
              Touring up and down the coast in 2026, this breathtaking show fuses cutting-edge laser technology with patriotic music, heart-pounding effects, and a sky-filling spectacle. Whether you’re hosting a community or school celebration, a city-wide festival, or a private gathering, this is your chance to be part of a once-in-a-generation milestone.<br/>
              July 4th? Absolutely.<br/>
              We are accepting July 4th dates for larger-scale clients ready to go big and make a huge impact.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Photo Gallery */}
      <GallerySection />

      {/* 4. Specifics and Longer Description (Features grid and quote) */}
      <section id="experience" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* Features Grid */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center justify-center mb-6">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-slate-300"></div>
                <span className="px-6 text-sm font-medium text-slate-500 tracking-wider uppercase">Revolutionary Experience</span>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-slate-300"></div>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-slate-900">
                <span className="block">Celebrating America&apos;s</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">
                  Historic Milestone
                </span>
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
              {experienceFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className="group relative bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-500 hover:-translate-y-1"
                >
                  {/* Icon */}
                  <div className="flex items-center justify-center w-16 h-16 bg-slate-50 text-slate-700 rounded-xl mb-6 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all duration-300">
                    {feature.icon}
                  </div>
                  {/* Content */}
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                  {/* Subtle accent */}
                  <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
            {/* Featured Quote Section */}
            <div className="relative">
              <div className="bg-slate-900 rounded-3xl p-12 md:p-16 relative overflow-hidden">
                {/* Subtle background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3Ccircle cx='30' cy='10' r='2'/%3E%3Ccircle cx='50' cy='10' r='2'/%3E%3Ccircle cx='10' cy='30' r='2'/%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3Ccircle cx='50' cy='30' r='2'/%3E%3Ccircle cx='10' cy='50' r='2'/%3E%3Ccircle cx='30' cy='50' r='2'/%3E%3Ccircle cx='50' cy='50' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                  }}></div>
                </div>
                <div className="relative z-10 text-center">
                  {/* Quote icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-8">
                    <svg className="w-8 h-8 text-white/80" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                    </svg>
                  </div>
                  <blockquote className="text-2xl md:text-3xl text-white font-light italic leading-relaxed mb-8 max-w-4xl mx-auto">
                    &quot;America was not built on fear. America was built on courage, on imagination, and an unbeatable determination to do the job at hand.&quot;
                  </blockquote>
                  <cite className="text-slate-300 font-medium">— Harry S. Truman</cite>
                  <div className="mt-10 flex items-center justify-center space-x-6">
                    <div className="flex items-center space-x-3 text-blue-300">
                      <div className="w-8 h-px bg-blue-400"></div>
                      <span className="text-sm font-medium">1776</span>
                    </div>
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <div className="flex items-center space-x-3 text-red-300">
                      <span className="text-sm font-medium">2026</span>
                      <div className="w-8 h-px bg-red-400"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 