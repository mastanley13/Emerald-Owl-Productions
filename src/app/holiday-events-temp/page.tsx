import React from 'react';
import { Metadata } from 'next';
import Header from '../../components/shared/Layout/Header';
import Footer from '../../components/shared/Layout/Footer';
import Image from 'next/image';
import Link from 'next/link';
import './holiday-events.css';
import ResponsiveImage from '../../components/shared/Image/ResponsiveImage';

export const metadata: Metadata = {
  title: 'Holiday Events | Emerald Owl Productions',
  description: 'Celebrate holidays with special themed events from Emerald Owl Productions',
};

// Static data for the page
const pageData = {
  hero: {
    title: 'Holiday Events',
    backgroundImage: {
      url: 'https://i.ibb.co/g91CSwK/christmas-tree-lights.jpg',
      alt: 'Christmas Wonderland with festive lights'
    }
  },
  // Fallback image as data URL
  fallbackImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEGAIUZxbMZgAAAABJRU5ErkJggg==',
  contentSection: {
    title: 'Celebrate the Seasons',
    description: 'Transform your holiday gatherings into spectacular experiences with our themed entertainment and production services. From Halloween spooktaculars to Christmas wonderlands, our professional team brings the magic of each season to life with immersive decorations, special effects, and interactive activities.',
    features: [
      'Custom themed holiday productions',
      'Professional event planning and management',
      'Special effects including fog, lighting, and sound',
      'Seasonal decorations and themed environments',
      'Interactive activities and entertainment'
    ]
  },
  holidayEvents: [
    {
      id: 1,
      name: "Halloween Spooktacular",
      description: "A family-friendly Halloween experience featuring fog effects, laser mazes, and themed activities. Our Halloween productions provide the perfect amount of spooky fun without being too scary for younger guests.",
      image: {
        url: "https://i.ibb.co/5FKt0qM/halloween-pumpkins.jpg",
        alt: "Halloween Event with Jack-o-lanterns"
      },
      features: [
        "Atmospheric fog and lighting effects",
        "Themed decorations and environments",
        "Interactive activities and games",
        "Professional entertainers and actors",
        "Customizable scare levels"
      ]
    },
    {
      id: 2,
      name: "Christmas Wonderland",
      description: "Create a magical winter wonderland with our Christmas event productions, featuring artificial snow, light displays, and festive entertainment. Perfect for community events, corporate parties, or school celebrations.",
      image: {
        url: "https://i.ibb.co/f2jQQQ5/christmas-lights.jpg",
        alt: "Christmas Event with magical lights and decorations"
      },
      features: [
        "Professional light displays and installations",
        "Artificial snow machines",
        "Santa's grotto and photo opportunities",
        "Live holiday music and performances",
        "Interactive festive activities"
      ]
    },
    {
      id: 3,
      name: "Thanksgiving Harvest Festival",
      description: "Celebrate the season of gratitude with our harvest-themed events and festivals. We provide all the elements for a perfect fall celebration including decorations, activities, and entertainment.",
      image: {
        url: "https://i.ibb.co/djwxdTq/thanksgiving-harvest.jpg",
        alt: "Thanksgiving harvest display with pumpkins and autumn decorations"
      },
      features: [
        "Seasonal harvest decorations",
        "Pumpkin carving stations",
        "Apple bobbing and traditional games",
        "Hay rides and corn mazes",
        "Hot cider and seasonal treats stations"
      ]
    },
    {
      id: 4,
      name: "New Year's Spectacular",
      description: "Ring in the new year with a dazzling celebration featuring lighting effects, countdown experiences, and festive entertainment. Our New Year's productions can be customized for family-friendly events or adult celebrations.",
      image: {
        url: "https://i.ibb.co/WpqQc88/new-years-fireworks.jpg",
        alt: "New Year's Event with fireworks display"
      },
      features: [
        "Spectacular lighting and special effects",
        "Custom countdown experiences",
        "Confetti and balloon drops",
        "DJ services and dance floors",
        "Themed photo opportunities"
      ]
    }
  ],
  faqs: [
    {
      question: "How far in advance should I book a holiday event?",
      answer: "We recommend booking holiday events at least 3-6 months in advance, especially for popular dates in October, November, and December. Some clients secure their dates up to a year in advance for major holiday productions."
    },
    {
      question: "Can you customize the holiday theme to match our brand or community?",
      answer: "Absolutely! We specialize in creating custom-themed holiday experiences that reflect your brand, community, or specific vision. Our team will work closely with you to incorporate your logos, colors, and messaging into the event design."
    },
    {
      question: "Do you provide both indoor and outdoor holiday events?",
      answer: "Yes, we create both indoor and outdoor holiday productions. Our team evaluates your venue and recommends the best approach based on available space, expected attendance, and weather considerations for the season."
    }
  ],
  testimonials: [
    {
      quote: "Emerald Owl Productions transformed our community center into an amazing winter wonderland. The children were mesmerized by the snow effects and light displays!",
      author: "Maria Rodriguez",
      role: "Community Center Director"
    },
    {
      quote: "The Halloween production exceeded our expectations. The atmospheric effects and interactive elements created the perfect spooky-but-fun environment our school was looking for.",
      author: "James Wilson",
      role: "PTA President"
    }
  ],
  cta: {
    text: "Book Your Holiday Event",
    url: "/contact-us",
    backgroundColor: "#059669"
  }
};

export default function HolidayEventsPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="relative min-h-[600px] flex items-center bg-gradient-to-b from-emerald-900 via-emerald-800 to-blue-900 text-white">
          <div className="container mx-auto px-6 z-10 relative py-20">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-white relative drop-shadow-lg">
                  Spectacular <span className="text-emerald-300">Holiday</span> Events
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-10 text-gray-100 font-light max-w-2xl leading-relaxed">
                Transform your holiday gatherings into spectacular experiences with our themed entertainment.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 