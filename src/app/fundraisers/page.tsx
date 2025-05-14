import React from 'react';
import Header from '../../components/shared/Layout/Header';
import Footer from '../../components/shared/Layout/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fundraisers | Emerald Owl Productions',
  description: 'Create successful fundraising events with engaging experiences from Emerald Owl Productions',
};

export default function FundraisersPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-emerald-800 to-emerald-950 text-white py-12">
          <div className="container mx-auto px-6">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-emerald-300 mb-4">Fundraisers</h1>
            <p className="text-lg text-center max-w-2xl mx-auto">
              Create memorable fundraising events that engage donors and maximize contributions
            </p>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-emerald-700 mb-4">
                Fundraising Experiences
              </h2>
              <p className="text-gray-700">
                Our fundraising events create unique, engaging experiences that attract donors, 
                increase participation, and maximize donations for your organization or cause. 
                From schools to non-profits, we help you exceed your fundraising goals while 
                providing incredible value to your donors and community.
              </p>
            </div>

            {/* Types of Fundraisers */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-emerald-700 mb-3">School Fundraisers</h3>
                <p className="text-gray-700 mb-4">
                  Our school fundraising events create excitement among students while raising 
                  funds for important programs. Popular options include foam parties, gunge tanks, 
                  and themed experience days.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Principal/teacher challenge events</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Reward day celebrations</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Family fun night events</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-emerald-700 mb-3">Community Fundraisers</h3>
                <p className="text-gray-700 mb-4">
                  Our community fundraising events bring people together for a good cause while 
                  providing unique entertainment that attendees can&apos;t experience elsewhere.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Charity gunge challenges</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Festival experiences with ticket sales</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Sponsorship-driven special events</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Popular Fundraising Events */}
            <h2 className="text-2xl font-bold text-emerald-700 mb-6 text-center">
              Popular Fundraising Experiences
            </h2>
            
            <div className="space-y-8">
              {/* Event 1 */}
              <div className="bg-emerald-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-emerald-700 mb-3">Gunge Tank Challenge</h3>
                <p className="text-gray-700 mb-4">
                  One of our most popular fundraising options! Participants raise pledges for the 
                  chance to &quot;gunge&quot; teachers, principals, or community leaders. The colorful, 
                  safe slime creates a memorable spectacle that generates excitement and donations.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-emerald-700 mb-2">How It Works:</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-emerald-500 mr-1 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Set fundraising targets for each volunteer</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-emerald-500 mr-1 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Students/participants collect donations</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-emerald-500 mr-1 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>When targets are met, volunteers get &quot;gunged&quot;</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-emerald-500 mr-1 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>We handle all equipment, setup, and cleanup</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-emerald-700 mb-2">Results:</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-emerald-500 mr-1 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Average of $2,500-$5,000 raised per event</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-emerald-500 mr-1 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Creates exciting, shareable moments</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-emerald-500 mr-1 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Builds community spirit and engagement</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Event 2 */}
              <div className="bg-emerald-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-emerald-700 mb-3">Foam Party Fundraiser</h3>
                <p className="text-gray-700 mb-4">
                  Our foam party fundraisers create a unique experience that participants are willing to 
                  pay for, making it an excellent ticket-based fundraising option. Perfect for schools, 
                  churches, and community organizations.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-emerald-700 mb-2">How It Works:</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-emerald-500 mr-1 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Sell tickets to a foam party experience</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-emerald-500 mr-1 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Add concessions or additional activities</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-emerald-500 mr-1 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>We provide all equipment and staffing</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-emerald-500 mr-1 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Setup and cleanup handled by our team</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-emerald-700 mb-2">Results:</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-emerald-500 mr-1 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Average profit of $10-15 per participant</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-emerald-500 mr-1 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>High participation rates among students</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-emerald-500 mr-1 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Potential for recurring annual events</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Event 3 */}
              <div className="bg-emerald-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-emerald-700 mb-3">Laser Light Show Benefit</h3>
                <p className="text-gray-700 mb-4">
                  Our laser light show events create a premium experience that&apos;s perfect for gala 
                  fundraisers, benefit concerts, and special community events. The immersive visual 
                  experience adds value that justifies higher ticket prices.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-emerald-700 mb-2">How It Works:</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-emerald-500 mr-1 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Host a premium ticketed event</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-emerald-500 mr-1 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Add silent auctions or donations</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-emerald-500 mr-1 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>We create a custom laser experience</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-emerald-500 mr-1 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Can be synchronized with live performances</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-emerald-700 mb-2">Results:</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-emerald-500 mr-1 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Supports premium ticket pricing</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-emerald-500 mr-1 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Creates a memorable donor experience</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-emerald-500 mr-1 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Excellent for corporate sponsorships</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-12 bg-emerald-50">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-2xl font-bold text-emerald-700 mb-8 text-center">
              Success Stories
            </h2>
            
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <h3 className="text-xl font-bold text-emerald-700">Henderson Elementary School</h3>
                <span className="inline-block bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full">
                  Raised: $15,250
                </span>
              </div>
              <p className="text-gray-700 mb-4">
                Henderson Elementary needed to raise funds for their new playground equipment. We worked 
                with them to create a &quot;Gunge the Principal&quot; campaign where students collected pledges 
                toward a $10,000 goal. The event exceeded expectations, raising over $15,000 and creating 
                a memorable experience for the entire school community.
              </p>
              <div className="flex items-center text-sm text-gray-600">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Goal exceeded by 50%</span>
                <span className="mx-2">•</span>
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>95% student participation</span>
                <span className="mx-2">•</span>
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Rebooked annually</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <h3 className="text-xl font-bold text-emerald-700">Hope Center Charity</h3>
                <span className="inline-block bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full">
                  Raised: $22,750
                </span>
              </div>
              <p className="text-gray-700 mb-4">
                The Hope Center needed to fund their summer meal program for underserved children. 
                We created a community laser light show benefit with tiered ticket pricing and 
                corporate sponsorship opportunities. The event attracted over 500 attendees and 
                secured 12 corporate sponsors, significantly exceeding their fundraising goal.
              </p>
              <div className="flex items-center text-sm text-gray-600">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>12 corporate sponsors</span>
                <span className="mx-2">•</span>
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>500+ attendees</span>
                <span className="mx-2">•</span>
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Goal exceeded by 75%</span>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-emerald-700 mb-4">
              Ready to Plan Your Fundraiser?
            </h2>
            <p className="text-gray-700 mb-8">
              Contact us today to discuss how we can help you create a successful fundraising 
              event that&apos;s both fun and profitable for your organization.
            </p>
            <a 
              href="/contact-us" 
              className="inline-block px-6 py-3 bg-emerald-600 text-white font-bold rounded-md hover:bg-emerald-700 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 