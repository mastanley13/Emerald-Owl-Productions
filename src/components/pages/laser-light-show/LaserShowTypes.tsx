import React from 'react';
import Image from 'next/image';

const showTypes = [
  {
    id: 'beam-show',
    title: 'Beam Show',
    description: 'Your audience will be captivated by the illusion of "structures" floating mid-air, transforming the space with objects like rotating fans, geometric cones, and luminous shafts of light that seem to pierce the darkness.',
    image: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/671d07f56bdb4dfd0c0a60c4.jpeg'
  },
  {
    id: 'graphic-show',
    title: 'Graphic/Animation Show',
    description: 'Audience sees specific images displayed in laser light on a large flat surface. We can display seasonal characters, various themes, a client\'s/sponsor\'s logo, or tell a story. Custom designed event or sponsor logos are also possible.',
    image: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/671fc430bc925310f0743e06.jpeg'
  },
  {
    id: 'water-effects',
    title: 'Water Effects',
    description: 'For venues near bodies of water, we can create mesmerizing reflections that double the impact of your show. Our water screen technology creates a mystical display surface that appears to float in mid-air.',
    image: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/671fc47e40adeb606bb6b38f.jpeg'
  }
];

export default function LaserShowTypes() {
  return (
    <section id="laser-show-types-section" className="bg-gray-900 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-4">
          Types of <span className="text-emerald-400">Laser Shows</span>
        </h2>
        <p className="text-gray-300 text-center max-w-3xl mx-auto mb-16">
          Choose from a variety of stunning laser show formats or combine them for a truly unique experience
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {showTypes.map(type => (
            <div key={type.id} className="bg-black/50 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/20 group">
              <div className="relative h-64">
                <Image 
                  src={type.image}
                  alt={type.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-emerald-400 mb-3">{type.title}</h3>
                <p className="text-gray-300">{type.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-emerald-400 text-xl font-light mb-4">Need a combination of different effects?</p>
          <p className="text-white text-lg max-w-2xl mx-auto">
            We can customize your show to incorporate multiple laser techniques for a truly spectacular and memorable event.
          </p>
        </div>
      </div>
    </section>
  );
}