import React from 'react';
import Header from '../../components/shared/Layout/Header';
import Footer from '../../components/shared/Layout/Footer';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Careers | Emerald Owl Productions',
  description: 'Join our team at Emerald Owl Productions and help create extraordinary event experiences',
};

export default function CareersPage() {
  // Sample job listings data
  const jobListings = [
    {
      id: 1,
      title: "Event Production Specialist",
      department: "Production",
      location: "Henderson, NC",
      type: "Full-time",
      description: "We&apos;re looking for an experienced Event Production Specialist to join our team. The ideal candidate will have experience in event setup, technical operations, and client coordination.",
      responsibilities: [
        "Set up and operate production equipment including lighting, sound, and special effects",
        "Coordinate with venue staff and clients to ensure smooth event execution",
        "Troubleshoot technical issues during events",
        "Participate in client meetings and site surveys",
        "Maintain and inventory production equipment"
      ],
      requirements: [
        "2+ years of experience in event production or related field",
        "Knowledge of lighting and sound equipment",
        "Ability to lift 50+ pounds and work flexible hours including evenings and weekends",
        "Strong problem-solving skills and attention to detail",
        "Valid driver's license and clean driving record"
      ]
    },
    {
      id: 2,
      title: "Marketing Coordinator",
      department: "Marketing",
      location: "Henderson, NC",
      type: "Full-time",
      description: "We&apos;re seeking a creative and organized Marketing Coordinator to help promote our event experiences across multiple channels. This role will work closely with our creative and sales teams.",
      responsibilities: [
        "Develop and implement marketing campaigns for our various event offerings",
        "Manage social media accounts and create engaging content",
        "Update website content and track performance metrics",
        "Assist with the production of marketing materials",
        "Coordinate email marketing campaigns"
      ],
      requirements: [
        "Bachelor's degree in Marketing, Communications, or related field",
        "1-3 years of marketing experience, preferably in events or entertainment",
        "Proficiency in social media platforms and content creation",
        "Experience with email marketing and basic analytics tools",
        "Strong writing and communication skills"
      ]
    },
    {
      id: 3,
      title: "Event Sales Representative",
      department: "Sales",
      location: "Henderson, NC",
      type: "Full-time",
      description: "Join our sales team to help grow our client base and bring our innovative event experiences to new markets. This role involves both acquiring new clients and maintaining relationships with existing ones.",
      responsibilities: [
        "Develop sales strategies to reach potential clients in target markets",
        "Conduct sales presentations and consultations with potential clients",
        "Prepare and send proposals and contracts",
        "Coordinate with the production team to ensure client needs are met",
        "Attend networking events and industry trade shows"
      ],
      requirements: [
        "3+ years of sales experience, preferably in events or services",
        "Proven track record of meeting or exceeding sales targets",
        "Excellent presentation and negotiation skills",
        "Customer service orientation and ability to build relationships",
        "Willingness to travel locally and regionally"
      ]
    },
    {
      id: 4,
      title: "Seasonal Event Staff",
      department: "Operations",
      location: "Various Locations",
      type: "Part-time / Seasonal",
      description: "We&apos;re hiring seasonal team members to assist with our busy summer and holiday event seasons. This is a great opportunity to gain experience in the event industry while working with a fun, creative team.",
      responsibilities: [
        "Assist with event setup and breakdown",
        "Help operate equipment such as foam machines, water games, and more",
        "Engage with event attendees and ensure a positive experience",
        "Maintain cleanliness and safety at event sites",
        "Support full-time staff as needed during events"
      ],
      requirements: [
        "High school diploma or equivalent",
        "Ability to work evenings, weekends, and holidays",
        "Physical stamina to stand for long periods and lift up to 30 pounds",
        "Friendly, outgoing personality and customer service skills",
        "Reliable transportation to event locations"
      ]
    }
  ];

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[300px] flex items-center bg-gradient-to-br from-emerald-800 to-emerald-950 text-white">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-emerald-950/70 backdrop-blur-[1px]" />
            
            {/* Decorative elements */}
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-emerald-500/10 opacity-70 animate-pulse"></div>
            <div className="absolute top-32 -left-32 w-64 h-64 rounded-full bg-emerald-400/10 opacity-60 animate-pulse" style={{ animationDuration: '8s' }}></div>
          </div>
          
          <div className="container mx-auto px-6 z-10 relative py-16">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center md:text-left">
                <span className="text-emerald-300 relative drop-shadow-md">
                  Join Our Team
                </span>
              </h1>
              <p className="text-lg md:text-xl mb-6 text-gray-100 font-light max-w-2xl text-center md:text-left">
                Be part of creating extraordinary event experiences
              </p>
            </div>
          </div>
        </section>

        {/* Why Work With Us Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-emerald-700 mb-8 text-center">
                Why Work With Us
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-emerald-50 p-6 rounded-lg text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full mx-auto flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-emerald-700 mb-2">Positive Culture</h3>
                  <p className="text-gray-700">
                    Join a team that values creativity, collaboration, and fun. We believe that 
                    happy team members create the best experiences for our clients.
                  </p>
                </div>
                
                <div className="bg-emerald-50 p-6 rounded-lg text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full mx-auto flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-emerald-700 mb-2">Growth Opportunities</h3>
                  <p className="text-gray-700">
                    We&apos;re a growing company that invests in employee development. Take on new 
                    challenges and advance your career with us.
                  </p>
                </div>
                
                <div className="bg-emerald-50 p-6 rounded-lg text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full mx-auto flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-emerald-700 mb-2">Great Benefits</h3>
                  <p className="text-gray-700">
                    Enjoy competitive pay, health benefits, paid time off, and employee discounts 
                    as part of our comprehensive package.
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-emerald-700 mb-4">Our Values</h3>
                <p className="text-gray-700 mb-6">
                  At Emerald Owl Productions, our team members share these core values that guide 
                  everything we do, from creating unique event experiences to supporting each other 
                  in the workplace.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <h4 className="font-bold text-emerald-700 mb-1">Creativity</h4>
                      <p className="text-gray-700 text-sm">
                        We foster innovation and creative problem-solving to deliver unique experiences.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <h4 className="font-bold text-emerald-700 mb-1">Excellence</h4>
                      <p className="text-gray-700 text-sm">
                        We strive for the highest quality in everything we do, paying attention to every detail.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <h4 className="font-bold text-emerald-700 mb-1">Inclusivity</h4>
                      <p className="text-gray-700 text-sm">
                        We value diversity and create experiences that welcome and accommodate everyone.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <h4 className="font-bold text-emerald-700 mb-1">Teamwork</h4>
                      <p className="text-gray-700 text-sm">
                        We believe collaboration leads to better results and a more supportive workplace.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Open Positions Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-emerald-700 mb-12 text-center">
                Open Positions
              </h2>
              
              <div className="space-y-6">
                {jobListings.map((job) => (
                  <div key={job.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-6">
                      <div className="flex flex-wrap items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-emerald-700">{job.title}</h3>
                        <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
                          <span className="inline-block bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full">
                            {job.department}
                          </span>
                          <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                            {job.location}
                          </span>
                          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                            {job.type}
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-4">{job.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="font-bold text-emerald-700 mb-2">Responsibilities:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                          {job.responsibilities.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="font-bold text-emerald-700 mb-2">Requirements:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                          {job.requirements.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mt-6">
                        <Link 
                          href={`/careers/${job.id}`}
                          className="inline-block px-6 py-3 bg-emerald-600 text-white font-bold rounded-md hover:bg-emerald-700 transition-colors"
                        >
                          Apply Now
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 bg-emerald-50 p-6 rounded-lg text-center">
                <h3 className="text-xl font-bold text-emerald-700 mb-3">Don&apos;t see a position that fits?</h3>
                <p className="text-gray-700 mb-6">
                  We&apos;re always interested in connecting with talented people. Send us your resume and 
                  let us know how you could contribute to our team.
                </p>
                <Link 
                  href="/contact-us"
                  className="inline-block px-6 py-3 bg-emerald-600 text-white font-bold rounded-md hover:bg-emerald-700 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-emerald-700 mb-12 text-center">
                What Our Team Says
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-emerald-800">Michael Thompson</h4>
                      <p className="text-sm text-gray-600">Production Specialist, 3 years</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">
                    &quot;Working at Emerald Owl has been the most rewarding experience of my career. 
                    Every day brings new challenges and opportunities to create amazing 
                    experiences for our clients. The team really feels like family.&quot;
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-emerald-800">Amelia Rodriguez</h4>
                      <p className="text-sm text-gray-600">Marketing Coordinator, 2 years</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">
                    &quot;I started as an intern and have grown so much professionally since joining 
                    the team. The company really invests in employee development and creates paths 
                    for advancement. Plus, we have a lot of fun along the way!&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 