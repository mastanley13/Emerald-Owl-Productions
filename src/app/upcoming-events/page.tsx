import React from 'react';
import Header from '../../components/shared/Layout/Header';
import Footer from '../../components/shared/Layout/Footer';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Upcoming Events | Emerald Owl Productions',
  description: 'Find and register for upcoming events by Emerald Owl Productions',
};

export default function UpcomingEventsPage() {
  // Sample upcoming events data
  const upcomingEvents = [
    {
      id: 1,
      title: "Summer Splash Festival",
      date: "July 15, 2023",
      time: "12:00 PM - 6:00 PM",
      location: "City Park, Henderson, NC",
      description: "Join us for a day of water games, foam parties, and summer fun for the whole family. This community event features our popular water slides, foam party zone, and refreshments.",
      price: "Free admission",
      registrationRequired: true,
      category: "Community Event",
      image: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67a453fb7ee1c12aa7752dcc.jpeg"
    },
    {
      id: 2,
      title: "Neon Nights Dance Party",
      date: "August 5, 2023",
      time: "8:00 PM - 1:00 AM",
      location: "The Venue, Raleigh, NC",
      description: "Experience our signature Neon Nights production with UV lighting, glow-in-the-dark effects, and dance music. This 18+ event includes a DJ, light show, and neon body paint station.",
      price: "$25 per person",
      registrationRequired: true,
      category: "Entertainment",
      image: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/673652882fd9d4e5aaea654c.png"
    },
    {
      id: 3,
      title: "Back-to-School Celebration",
      date: "August 26, 2023",
      time: "3:00 PM - 7:00 PM",
      location: "Henderson Elementary School",
      description: "A special event for students and families to celebrate the new school year. Features foam parties, games, and a special appearance by Emmy the Owl.",
      price: "$5 per child, adults free",
      registrationRequired: false,
      category: "School Event",
      image: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67ab94d979284b777a6a7660.jpeg"
    },
    {
      id: 4,
      title: "Corporate Team Building Experience",
      date: "September 15, 2023",
      time: "1:00 PM - 5:00 PM",
      location: "Corporate Event Center, Durham, NC",
      description: "A specially designed team building event featuring our unique collaborative activities and experiences. Perfect for businesses looking to strengthen team bonds.",
      price: "Contact for pricing",
      registrationRequired: true,
      category: "Corporate",
      image: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67a453fb7ee1c12aa7752dcc.jpeg"
    },
    {
      id: 5,
      title: "Halloween Spooktacular",
      date: "October 28-31, 2023",
      time: "6:00 PM - 10:00 PM",
      location: "Community Center, Henderson, NC",
      description: "Our annual Halloween celebration with spooky (but not scary) activities for all ages. Featuring a laser light maze, fog effects, and themed stations.",
      price: "$10 per person",
      registrationRequired: true,
      category: "Holiday Event",
      image: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/673652882fd9d4e5aaea654c.png"
    }
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-emerald-800 via-emerald-900 to-black text-white overflow-hidden">
          {/* Background overlay */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/90 via-emerald-800/80 to-black/80 backdrop-blur-[2px]"></div>
            
            {/* Decorative elements */}
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-emerald-500/10 opacity-70"></div>
            <div className="absolute top-32 -left-32 w-64 h-64 rounded-full bg-white/10 opacity-60"></div>
            <div className="absolute -bottom-32 right-32 w-80 h-80 rounded-full bg-emerald-500/10 opacity-70"></div>
            
            {/* Background Image */}
            <Image 
              src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67a453fb7ee1c12aa7752dcc.jpeg"
              alt="Upcoming Events background"
              fill
              priority
              className="object-cover opacity-30"
            />
          </div>
          
          <div className="container mx-auto px-6 z-10 relative py-16 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-emerald-300 relative drop-shadow-md">
                Upcoming Events
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-100 font-light max-w-2xl mx-auto">
              Join us for these exciting upcoming experiences and create lasting memories
            </p>
            <div className="flex flex-wrap gap-5 justify-center">
              <Link 
                href="#events"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-xl hover:shadow-emerald-300/60 hover:-translate-y-1 transform"
              >
                View Events
              </Link>
              <Link 
                href="/contact-us" 
                className="bg-transparent border-2 border-emerald-500 hover:bg-emerald-600/10 text-white font-bold py-4 px-10 rounded-full transition-all duration-300"
              >
                Plan Your Event
              </Link>
            </div>
          </div>

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        {/* Events Listing */}
        <section id="events" className="py-16 bg-white">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-emerald-700 mb-6">
                Scheduled Events
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Browse our upcoming events and mark your calendar! Many events require pre-registration 
                due to limited capacity, so be sure to secure your spot early.
              </p>
            </div>

            {/* Filter options */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <button className="px-5 py-2.5 bg-emerald-600 text-white rounded-full text-sm font-medium shadow-sm">
                All Events
              </button>
              <button className="px-5 py-2.5 bg-gray-100 text-gray-700 hover:bg-emerald-100 hover:text-emerald-700 rounded-full text-sm font-medium transition-colors shadow-sm">
                Community Events
              </button>
              <button className="px-5 py-2.5 bg-gray-100 text-gray-700 hover:bg-emerald-100 hover:text-emerald-700 rounded-full text-sm font-medium transition-colors shadow-sm">
                Entertainment
              </button>
              <button className="px-5 py-2.5 bg-gray-100 text-gray-700 hover:bg-emerald-100 hover:text-emerald-700 rounded-full text-sm font-medium transition-colors shadow-sm">
                School Events
              </button>
              <button className="px-5 py-2.5 bg-gray-100 text-gray-700 hover:bg-emerald-100 hover:text-emerald-700 rounded-full text-sm font-medium transition-colors shadow-sm">
                Holiday Events
              </button>
            </div>

            {/* Events list */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  {/* Event image */}
                  <div className="relative h-56">
                    <Image 
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block bg-emerald-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                        {event.category}
                      </span>
                      <h3 className="text-xl font-bold text-white mt-2">{event.title}</h3>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {event.date}
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {event.time}
                      </span>
                    </div>
                    
                    <div className="flex items-start mb-4">
                      <svg className="w-5 h-5 mr-2 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-gray-700">{event.location}</span>
                    </div>
                    
                    <p className="text-gray-700 mb-6">
                      {event.description}
                    </p>
                    
                    <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-100">
                      <div>
                        <span className="text-emerald-700 font-bold">{event.price}</span>
                        {event.registrationRequired && (
                          <span className="ml-2 text-sm text-red-600 font-medium">Registration required</span>
                        )}
                      </div>
                      <Link 
                        href={`/events/${event.id}`}
                        className="inline-block px-5 py-2.5 bg-emerald-600 text-white text-sm font-medium rounded-md hover:bg-emerald-700 transition-colors shadow-sm"
                      >
                        Event Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-gradient-to-br from-emerald-50 to-emerald-100 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-200 rounded-full opacity-30 -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-200 rounded-full opacity-30 translate-y-1/3 -translate-x-1/4"></div>
          
          <div className="container mx-auto px-6 max-w-3xl text-center relative z-10">
            <h2 className="text-3xl font-bold text-emerald-800 mb-6">
              Stay Updated
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Subscribe to our newsletter to receive updates about new events, early access to tickets, 
              and special promotions.
            </p>
            <form className="flex flex-col sm:flex-row max-w-md mx-auto gap-3 mb-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 shadow-sm"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-emerald-600 text-white font-bold rounded-md hover:bg-emerald-700 transition-colors shadow-md hover:shadow-lg"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm text-gray-500">We respect your privacy and will never share your information.</p>
          </div>
        </section>
        
        {/* Custom Event CTA */}
        <section className="py-16 bg-white relative overflow-hidden">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-80 rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/673652882fd9d4e5aaea654c.png"
                  alt="Custom event planning"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/70 to-transparent"></div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-emerald-700 mb-6">
                  Plan Your Own Event
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Interested in creating a custom event for your organization, school, or community? 
                  Our team of experts will work with you to design a unique experience tailored to your needs.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 text-emerald-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Customized themes and experiences</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 text-emerald-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Professional event planning and coordination</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 text-emerald-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Flexible venue options - we come to you</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 text-emerald-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Packages for all budget ranges</span>
                  </li>
                </ul>
                <Link 
                  href="/contact-us" 
                  className="inline-block px-8 py-4 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-xl"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 