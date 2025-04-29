
import React from 'react';
import Link from 'next/link';

const benefits = [
  {
    title: "Customizable & Scalable",
    description: "Perfect for any scale - from intimate gatherings to major festivals. Fully tailored to your event's theme and goals.",
    icon: "✦"
  },
  {
    title: "Cost-Effective",
    description: "Add extra shows or nights at minimal cost. Perfect for fundraising events and multi-day festivals.",
    icon: "✦"
  },
  {
    title: "Versatile Integration",
    description: "Works perfectly as a standalone event or enhances existing performances with live music and entertainment.",
    icon: "✦"
  },
  {
    title: "Weather Resilient",
    description: "Shows can go on in various weather conditions, reducing last-minute cancellations that plague other entertainment options.",
    icon: "✦"
  },
  {
    title: "Environmentally Friendly",
    description: "No debris, smoke, or chemical residue - just pure light entertainment that leaves no environmental impact.",
    icon: "✦"
  },
  {
    title: "Unique Sponsorship Opportunities",
    description: "Display sponsor logos and messages in brilliant laser projections, creating unique promotional opportunities.",
    icon: "✦"
  }
];

export default function LaserShowBenefits() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-emerald-950/30 to-black"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(2px_2px_at_20px_30px,rgba(0,255,0,0.2)_50%,transparent),radial-gradient(2px_2px_at_40px_70px,rgba(0,255,0,0.2)_50%,transparent),radial-gradient(2px_2px_at_50px_160px,rgba(0,255,0,0.2)_50%,transparent)] bg-[size:200px_200px] animate-[floatingStars_15s_linear_infinite]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Unique </span>
            <span className="text-emerald-400">Benefits</span>
            <span className="text-white"> of Hosting a Laser Show</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Transform your event into an unforgettable experience with these exclusive advantages
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-black/50 border border-emerald-900/50 rounded-xl p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-emerald-600/20"
            >
              <div className="text-emerald-400 text-3xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-emerald-400 mb-3">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link 
            href="/benefits-for-hosting-a-laser-show" 
            className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-emerald-500/30"
          >
            Discover All Benefits
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
