'use client';

import React, { useState } from 'react';
import Header from '../../components/shared/Layout/Header';
import Footer from '../../components/shared/Layout/Footer';

const benefits = [
  {
    id: 1,
    title: 'Customizable and Scalable',
    summary: 'Fully tailored to your event&apos;s theme, goals, and venue with scalable budgets',
    details: `Unlike pre-packaged entertainment acts, laser shows can be fully tailored to your event&apos;s theme, goals, and venue. Whether you&apos;re planning for a small town or a major festival, laser shows are scalable to a wide range of budgets.

Our team at EOP will work with you to tailor the ideal show format and optional experiences that best align with your venue, market, budget, and objectives.`
  },
  {
    id: 2,
    title: 'Extra Shows and Nights Are Extremely Cost-Effective',
    summary: 'Minimal consumables make additional showtimes highly economical',
    details: `Laser shows involve minimal consumables. Once the show is designed, set up, and networked, adding additional showtimes or nights is simple and highly economical.

This is especially valuable if your event is designed as a fundraiser or revenue-generating attraction.`
  },
  {
    id: 3,
    title: 'Fully Synchronized to Music — Customize It Your Way',
    summary: 'Choreographed to fit any mood or message with seamless themed transitions',
    details: `From Celebrate America and Christmas Spectaculars to Blast to the Past or even solemn memorials, laser shows can be choreographed to fit any mood or message.

Want to run multiple themed shows in one night? No problem — our programming allows for seamless transitions between unique segments.`
  },
  {
    id: 4,
    title: 'Sponsorship Opportunities With Custom Logos and Text',
    summary: 'Project sponsor logos and brand messages in brilliant laser light',
    details: `Looking for a fresh way to engage sponsors?

We can project your sponsors&apos; logos, taglines, or brand messages in brilliant laser light, giving them premium visibility like never before. You can also highlight your own event branding to reinforce your identity.`
  },
  {
    id: 5,
    title: 'Versatile in Nearly Any Environment',
    summary: 'Perform indoors or outdoors, rain or shine, with enhanced visual impact',
    details: `Laser shows are incredibly flexible and can be performed indoors or outdoors, rain or shine—even in snow.

Because they involve no pyrotechnics, they&apos;re safe for almost any setting. In fact, rain and snow actually enhances the visual impact of the lasers.`
  },
  {
    id: 6,
    title: 'A Standalone Experience or Stunning Add-On',
    summary: 'Main event or powerful addition to live music, DJs, and concerts',
    details: `Laser shows can be the main event or a visually powerful addition to live music, DJs, dance performances, or concerts—creating a rich, multi-layered production.`
  },
  {
    id: 7,
    title: 'Laser Shows Draw Crowds to Your Venue',
    summary: 'Perfect for centralizing audiences and revitalizing foot traffic',
    details: `Since laser shows are best viewed from specific angles or locations, they&apos;re ideal for drawing people to a centralized space—whether it&apos;s your downtown area or park, festival grounds, or school athletic field. They are perfect for revitalizing foot traffic for downtown revitalization or bringing a crowd to seasonal venues in the off-season.`
  },
  {
    id: 8,
    title: 'Ideal for Ticketed Events',
    summary: 'Best experienced within the venue, perfect for exclusive revenue generation',
    details: `Unlike fireworks or drone shows that can be viewed from miles away, laser shows are best experienced within the venue. This makes them perfect for ticketed events, where exclusivity adds value and helps maximize revenue.`
  },
  {
    id: 9,
    title: 'Among the Safest Entertainment Options in the Sky',
    summary: 'No explosives or flying objects, operated under strict ILDA safety standards',
    details: `With no explosives or flying objects, laser shows are among the safest forms of aerial entertainment.

All of our shows are operated under strict ILDA (International Laser Display Association) safety standards, ensuring peace of mind for both organizers and attendees.`
  }
];

export default function LaserShowBenefitsPage() {
  const [expandedBenefit, setExpandedBenefit] = useState<number | null>(null);

  const toggleBenefit = (id: number) => {
    setExpandedBenefit(expandedBenefit === id ? null : id);
  };

  return (
    <>
      <Header />
      <main className="pt-0">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-emerald-900 to-emerald-700 text-white py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">Unique Benefits of Hosting a Laser Show</h1>
              <p className="text-xl text-emerald-100 mb-8">
                Laser shows offer a dynamic, customizable, and highly memorable experience unlike anything else. 
                Here&apos;s why they&apos;re an exceptional choice for your next event.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Overview */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Click on any benefit to learn more
            </h2>
            
            {/* Benefits Grid */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {benefits.map((benefit) => (
                <div
                  key={benefit.id}
                  onClick={() => toggleBenefit(benefit.id)}
                  className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-emerald-500 transform hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-bold text-emerald-600">#{benefit.id}</span>
                    <svg 
                      className={`w-5 h-5 text-emerald-600 transition-transform duration-300 ${
                        expandedBenefit === benefit.id ? 'rotate-180' : ''
                      }`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.summary}</p>
                </div>
              ))}
            </div>

            {/* Expanded Benefit Details */}
            {expandedBenefit && (
              <div className="max-w-4xl mx-auto">
                <div className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-8 shadow-lg animate-fade-in">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-emerald-800">
                      #{expandedBenefit}. {benefits.find(b => b.id === expandedBenefit)?.title}
                    </h3>
                    <button
                      onClick={() => setExpandedBenefit(null)}
                      className="text-emerald-600 hover:text-emerald-800 text-2xl font-bold"
                    >
                      ×
                    </button>
                  </div>
                  <div className="prose prose-lg text-gray-700 max-w-none">
                    {benefits.find(b => b.id === expandedBenefit)?.details.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="mb-4">{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-emerald-900 text-white py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Experience These Benefits?</h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how a laser show can transform your event and provide these unique advantages for your audience.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a
                href="/contact-us"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                Get Started Today
              </a>
              <a
                href="/laser-safety"
                className="bg-white hover:bg-gray-100 text-emerald-900 font-semibold py-3 px-8 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                Learn About Safety
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}