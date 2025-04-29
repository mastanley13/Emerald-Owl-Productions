"use client";

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally handle form submission to your API
    console.log('Email submitted:', email);
    setIsSubmitted(true);
    setEmail('');
  };

  return (
    <section className="bg-green-900 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Our Newsletter
          </h2>
          <p className="text-green-200 mb-8">
            Stay updated with our latest events, promotions, and experiences. Be the first to know about special offers and upcoming experiences.
          </p>
          
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-grow px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <button
                type="submit"
                className="bg-green-400 hover:bg-green-500 text-black font-bold py-3 px-6 rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          ) : (
            <div className="bg-green-800 text-white p-4 rounded-md inline-block">
              <p className="font-semibold">Thank you for subscribing!</p>
              <p className="text-sm text-green-200">You'll hear from us soon.</p>
            </div>
          )}
          
          <p className="text-sm text-green-300 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
} 