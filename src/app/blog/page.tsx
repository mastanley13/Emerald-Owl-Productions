import React from 'react';
import Header from '../../components/shared/Layout/Header';
import Footer from '../../components/shared/Layout/Footer';
import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog | Emerald Owl Productions',
  description: 'News, insights, and stories from Emerald Owl Productions',
};

export default function BlogPage() {
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "5 Ways to Make Your Corporate Event Memorable",
      excerpt: "Corporate events don't have to be boring. Learn how to create engaging experiences that employees will talk about for months.",
      author: "Emma Mitchell",
      date: "June 15, 2023",
      category: "Event Planning",
      featured: true,
      image: "https://via.placeholder.com/800x500/86efac/1e3a8a",
    },
    {
      id: 2,
      title: "Creating Sensory-Friendly Events: A Comprehensive Guide",
      excerpt: "Making events accessible to everyone means considering sensory needs. Here's how we approach inclusive event design.",
      author: "Michael Johnson",
      date: "May 22, 2023",
      category: "Inclusion",
      featured: true,
      image: "https://via.placeholder.com/800x500/86efac/1e3a8a",
    },
    {
      id: 3,
      title: "The Science Behind Foam Parties: How We Create the Perfect Foam",
      excerpt: "Ever wondered what goes into creating the perfect foam for events? We break down the science and technology behind our popular foam parties.",
      author: "David Lee",
      date: "April 10, 2023",
      category: "Technology",
      featured: false,
      image: "https://via.placeholder.com/800x500/86efac/1e3a8a",
    },
    {
      id: 4,
      title: "Summer Event Trends for 2023",
      excerpt: "Stay ahead of the curve with these trending event ideas that are set to make a splash this summer season.",
      author: "Sofia Rodriguez",
      date: "March 28, 2023",
      category: "Trends",
      featured: false,
      image: "https://via.placeholder.com/800x500/86efac/1e3a8a",
    },
    {
      id: 5,
      title: "How We Reduced Our Environmental Impact at Events by 40%",
      excerpt: "Sustainability is a priority for Emerald Owl Productions. Learn about the changes we've implemented to make our events more eco-friendly.",
      author: "James Chen",
      date: "February 15, 2023",
      category: "Sustainability",
      featured: false,
      image: "https://via.placeholder.com/800x500/86efac/1e3a8a",
    },
    {
      id: 6,
      title: "Client Spotlight: Henderson Elementary School Fundraiser",
      excerpt: "How we helped Henderson Elementary raise over $15,000 with an unforgettable community event that brought together students, parents, and local businesses.",
      author: "Aisha Williams",
      date: "January 30, 2023",
      category: "Case Study",
      featured: false,
      image: "https://via.placeholder.com/800x500/86efac/1e3a8a",
    },
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

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
                  Our Blog
                </span>
              </h1>
              <p className="text-lg md:text-xl mb-6 text-gray-100 font-light max-w-2xl text-center md:text-left">
                News, insights, and stories from the world of event production
              </p>
            </div>
          </div>
        </section>

        {/* Featured Posts Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-emerald-700 mb-12 text-center">
              Featured Articles
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <div className="relative">
                    <Image 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-64 object-cover"
                      width={800}
                      height={500}
                      unoptimized={true}
                    />
                    <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-emerald-800 mb-3">
                      <Link href={`/blog/${post.id}`} className="hover:text-emerald-600 transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                          <svg className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{post.author}</p>
                          <p className="text-xs text-gray-500">{post.date}</p>
                        </div>
                      </div>
                      <Link 
                        href={`/blog/${post.id}`}
                        className="inline-flex items-center font-medium text-emerald-600 hover:text-emerald-800"
                      >
                        Read more
                        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* All Posts Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap items-center justify-between mb-12">
              <h2 className="text-3xl font-bold text-emerald-700 mb-4 md:mb-0">
                Latest Articles
              </h2>
              
              <div className="w-full md:w-auto flex flex-wrap gap-3">
                <button className="px-4 py-2 bg-emerald-600 text-white rounded-full font-medium">
                  All
                </button>
                <button className="px-4 py-2 bg-white text-gray-700 hover:bg-emerald-100 hover:text-emerald-700 rounded-full font-medium transition-colors">
                  Event Planning
                </button>
                <button className="px-4 py-2 bg-white text-gray-700 hover:bg-emerald-100 hover:text-emerald-700 rounded-full font-medium transition-colors">
                  Technology
                </button>
                <button className="px-4 py-2 bg-white text-gray-700 hover:bg-emerald-100 hover:text-emerald-700 rounded-full font-medium transition-colors">
                  Inclusion
                </button>
                <button className="px-4 py-2 bg-white text-gray-700 hover:bg-emerald-100 hover:text-emerald-700 rounded-full font-medium transition-colors">
                  Sustainability
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                  <Image 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover"
                    width={800}
                    height={500}
                    unoptimized={true}
                  />
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="text-xs font-medium bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="mx-2 text-gray-500 text-sm">•</span>
                      <span className="text-sm text-gray-500">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-emerald-800 mb-2">
                      <Link href={`/blog/${post.id}`} className="hover:text-emerald-600 transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mr-2">
                          <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                          </svg>
                        </div>
                        <p className="text-sm font-medium text-gray-900">{post.author}</p>
                      </div>
                      <Link 
                        href={`/blog/${post.id}`}
                        className="text-sm font-medium text-emerald-600 hover:text-emerald-800"
                      >
                        Read more
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <nav className="inline-flex rounded-md shadow-sm">
                <a
                  href="#"
                  className="relative inline-flex items-center px-3 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Previous</span>
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-emerald-600 text-sm font-medium text-white"
                >
                  1
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  2
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  3
                </a>
                <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                  ...
                </span>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  8
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-3 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Next</span>
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </a>
              </nav>
            </div>
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto bg-emerald-50 rounded-lg shadow-md overflow-hidden">
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-emerald-700 mb-4">
                  Subscribe to Our Newsletter
                </h3>
                <p className="text-gray-700 mb-6">
                  Stay updated with the latest event industry trends, tips, and news from our team.
                  We&apos;ll send you our best content once a month - no spam, we promise!
                </p>
                <form className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    required
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-emerald-600 text-white font-bold rounded-md hover:bg-emerald-700 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 