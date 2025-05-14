import React from 'react';
import Header from '../../components/shared/Layout/Header';
import Footer from '../../components/shared/Layout/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Emmy The Owl | Emerald Owl Productions',
  description: 'Meet Emmy, the beloved mascot of Emerald Owl Productions',
};

export default function EmmyTheOwlPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-emerald-800 to-emerald-950 text-white py-12">
          <div className="container mx-auto px-6">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-emerald-300 mb-4">Emmy The Owl</h1>
            <p className="text-lg text-center max-w-2xl mx-auto">
              Meet our beloved mascot and event ambassador
            </p>
          </div>
        </section>

        {/* About Emmy Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-bold text-emerald-700 mb-6">
                  Meet Emmy!
                </h2>
                <p className="text-gray-700 mb-4">
                  Emmy is the beloved mascot and ambassador of Emerald Owl Productions. With her 
                  bright emerald feathers and friendly personality, Emmy brings joy and excitement 
                  to our events and helps create magical moments for children and families.
                </p>
                <p className="text-gray-700 mb-4">
                  Emmy&apos;s character embodies our company values of creativity, fun, and inclusivity. 
                  She loves dancing, high-fives, and making new friends at every event she attends.
                </p>
                <div className="bg-emerald-50 p-4 rounded-lg mb-6">
                  <h3 className="font-bold text-emerald-700 mb-2">Emmy&apos;s Favorites</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-emerald-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span><strong>Favorite Activity:</strong> Dancing in foam parties</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-emerald-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span><strong>Favorite Food:</strong> Chocolate chip cookies</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-emerald-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span><strong>Favorite Color:</strong> Emerald green (of course!)</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-emerald-100 rounded-lg p-12 flex items-center justify-center">
                <div className="w-48 h-48 bg-emerald-200 rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-24 h-24 text-emerald-700 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                    <p className="text-emerald-800 mt-2 font-medium">Emmy&apos;s photo would appear here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emmy's Role Section */}
        <section className="py-12 bg-emerald-50">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-2xl font-bold text-emerald-700 mb-8 text-center">
              Emmy&apos;s Special Role
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-emerald-700 mb-2 text-center">Event Ambassador</h3>
                <p className="text-gray-700 text-center">
                  Emmy makes special appearances at many of our events, interacting with guests 
                  and creating memorable photo opportunities.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-emerald-700 mb-2 text-center">Literacy Advocate</h3>
                <p className="text-gray-700 text-center">
                  Emmy visits schools and libraries to promote reading and participates in our 
                  children's literacy initiatives.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-emerald-700 mb-2 text-center">Community Friend</h3>
                <p className="text-gray-700 text-center">
                  Emmy makes special appearances at community events, hospitals, and charity 
                  fundraisers to bring joy and support good causes.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-emerald-700 mb-4 text-center">Emmy&apos;s Story</h3>
              <p className="text-gray-700 mb-4">
                Emmy was born in the Emerald Forest (a magical place where creativity flourishes) 
                and came to join our team when we founded Emerald Owl Productions. As a wise and 
                playful owl, Emmy represents our commitment to wisdom in business and playfulness 
                in our events.
              </p>
              <p className="text-gray-700">
                Over the years, Emmy has become a beloved character for many children who attend 
                our events regularly. Her friendly nature and special connection with children make 
                her an important part of our community outreach and event experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Book Emmy Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-emerald-700 mb-4">
              Book Emmy for Your Event
            </h2>
            <p className="text-gray-700 mb-8">
              Emmy is available for special appearances at events, school visits, and 
              community functions. Having Emmy at your event adds an extra element of fun 
              and creates photo opportunities that attendees will cherish.
            </p>
            <div className="bg-emerald-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-bold text-emerald-700 mb-3">Emmy Can Attend:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-left max-w-lg mx-auto">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-emerald-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Birthday parties</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-emerald-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">School assemblies</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-emerald-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Library events</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-emerald-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Community festivals</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-emerald-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Charity fundraisers</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-emerald-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Hospital visits</span>
                </li>
              </ul>
            </div>
            <a 
              href="/contact-us" 
              className="inline-block px-6 py-3 bg-emerald-600 text-white font-bold rounded-md hover:bg-emerald-700 transition-colors"
            >
              Book Emmy Today
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 