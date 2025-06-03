"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Logo and Description */}
          <div>
            <Link href="/">
              <Image 
                src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/6704204d9d9a095a00d5b580.png" 
                alt="Emerald Owl Productions" 
                width={150} 
                height={50}
                className="mb-4"
              />
            </Link>
            <p className="text-gray-600 mb-4">
              Creating unforgettable experiences and magical moments for events of all kinds.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/emeraldowlproductions/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-emerald-600">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="https://www.instagram.com/emeraldowlproductions/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-emerald-600">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/emerald-owl-productions-inc/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-emerald-600">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/channel/UCX5gmpLiKQgOwlcSOwZbUuQ" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-emerald-600">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.904 3.407 0 4.948 0 8.714v6.572c0 3.766.904 5.307 4.385 5.53 3.6.245 11.626.246 15.23 0 3.481-.223 4.385-1.764 4.385-5.53V8.714c0-3.766-.904-5.307-4.385-5.53zm-10.615 12.7V6.106l6.937 3.338-6.937 3.44z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Column 2: Services */}
          <div>
            <h3 className="text-emerald-600 font-bold text-lg mb-4">Our Experiences</h3>
            <ul className="space-y-2">
              <li><Link href="/laser-light-show" className="text-gray-600 hover:text-emerald-600">Laser Light Show</Link></li>
              <li><Link href="/neon-nights" className="text-gray-600 hover:text-emerald-600">Neon Nights</Link></li>
              <li><Link href="/foam-parties" className="text-gray-600 hover:text-emerald-600">Foam Parties</Link></li>
              <li><Link href="/water-games" className="text-gray-600 hover:text-emerald-600">Water Games</Link></li>
              <li><Link href="/sensory-friendly-experiences" className="text-gray-600 hover:text-emerald-600">Sensory Friendly Experiences</Link></li>
            </ul>
          </div>
          
          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-emerald-600 font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/our-story" className="text-gray-600 hover:text-emerald-600">Our Story</Link></li>
              <li><Link href="/gallery" className="text-gray-600 hover:text-emerald-600">Gallery</Link></li>
              <li><Link href="/blog" className="text-gray-600 hover:text-emerald-600">Blog</Link></li>
              <li><Link href="/contact-us" className="text-gray-600 hover:text-emerald-600">Contact Us</Link></li>
            </ul>
          </div>
          
          {/* Column 4: Contact */}
          <div>
            <h3 className="text-emerald-600 font-bold text-lg mb-4">Contact Us</h3>
            <address className="not-italic text-gray-600">
              <p className="mb-4">
                <a href="mailto:info@emeraldowlproductions.com" className="hover:text-emerald-600 transition-colors">
                  info@emeraldowlproductions.com
                </a>
              </p>
              <Link 
                href="/contact-us" 
                className="inline-block border border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white py-2 px-4 rounded transition-colors"
              >
                Get In Touch
              </Link>
            </address>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-gray-300 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Emerald Owl Productions. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-gray-500 text-sm hover:text-gray-700">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-500 text-sm hover:text-gray-700">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 