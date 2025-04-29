
import React from 'react';
import Link from 'next/link';

const safetyFeatures = [
  {
    title: "Environmentally Friendly",
    description: "No debris, smoke, or chemical residue - just pure light entertainment"
  },
  {
    title: "Weather Resilient",
    description: "Shows go on in various weather conditions, reducing last-minute cancellations"
  },
  {
    title: "Noise-Friendly",
    description: "Silent operation perfect for sensitive communities and wildlife"
  }
];

export default function LaserShowSafety() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/30 via-black to-black"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-white to-emerald-400 bg-clip-text text-transparent">
              The Safest Experience in the Sky
            </span>
          </h2>
          
          <div className="bg-gradient-to-br from-black/80 to-emerald-950/20 border border-emerald-900/30 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-emerald-400">
              Why Are Laser Shows the Safest Option for Entertainment?
            </h3>
            
            <div className="space-y-6 my-8">
              {safetyFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start p-4 bg-black/30 rounded-xl border border-emerald-900/30 transition-all duration-300 hover:border-emerald-500/40"
                >
                  <span className="text-emerald-500 text-2xl mr-4 mt-1">✓</span>
                  <div>
                    <h4 className="font-bold text-lg text-emerald-400">{feature.title}</h4>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Link 
                href="/the-safest-experience-in-the-sky" 
                className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-emerald-500/30"
              >
                Learn More About Laser Show Safety
                <span className="ml-2">→</span>
              </Link>
            </div>
            
            <div className="mt-8 p-4 bg-black/20 rounded-lg">
              <p className="text-gray-300 flex items-center">
                <span className="text-emerald-400 mr-2">🔒</span>
                All our shows are fully compliant with FDA regulations and operated by certified technicians
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
