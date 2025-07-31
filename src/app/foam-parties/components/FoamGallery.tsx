'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function FoamGallery() {
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 9; // Show 9 images per page (3 rows of 3 on desktop)

  const galleryImages = [
    { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688afde0a4c55f80495542ad.jpeg", alt: "Foam Party Event" },
    { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688afde0417b030e0e60ffdb.jpeg", alt: "Foam Party Display" },
    { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688afde0417b03061460ffdc.jpeg", alt: "Foam Party Performance" },
    { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688afde008dbc328cd250885.jpeg", alt: "Foam Party Reflection" },
    { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688afde0417b03522660ffda.jpeg", alt: "Foam Party Experience" },
    { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688afde1a4c55f58cb5542b1.jpeg", alt: "Foam Party Setup" },
    { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688afde0ba7d04776b2de535.jpeg", alt: "Foam Party in Action" },
    { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688afde005df82e2919a8c16.jpeg", alt: "Foam Party Audience" },
    { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688afde005df82ea359a8c13.jpeg", alt: "Foam Party Beams" },
    { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688afde005df82d6d39a8c18.jpeg", alt: "Foam Party Display" },
    { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688afde0a4c55f85955542ae.jpeg", alt: "Foam Party Performance" },
    { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688afde0417b03ffca60ffdd.jpeg", alt: "Foam Party Experience" },
    { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688afde0417b03030a60ffe0.jpeg", alt: "Foam Party Setup" },
    { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688afde0417b038b1660ffde.jpeg", alt: "Foam Party in Action" },
    { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688afde008dbc35ba4250882.jpeg", alt: "Foam Party Audience" },
    { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688afde005df82398a9a8c17.jpeg", alt: "Foam Party Beams" },
    { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688afde0a4c55f6ae15542ac.jpeg", alt: "Foam Party Display" },
    { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688afde008dbc39eda250884.jpeg", alt: "Foam Party Performance" },
    { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688afde008dbc3ed5b250886.png", alt: "Foam Party Experience" },
    { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688afde0ba7d04b7082de534.jpeg", alt: "Foam Party Setup" },
    { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688afde008dbc3f895250883.jpeg", alt: "Foam Party in Action" },
    { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688afde0ba7d04548d2de536.jpeg", alt: "Foam Party Audience" },
    { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688afde005df82947a9a8c15.jpeg", alt: "Foam Party Beams" },
    { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688afde0417b031f1760ffdf.jpeg", alt: "Foam Party Display" },
    { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688afde0a4c55f27ba5542af.jpeg", alt: "Foam Party Performance" },
    { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688afde0417b03514e60ffd9.jpeg", alt: "Foam Party Experience" },
    { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688afde005df82f9069a8c14.jpeg", alt: "Foam Party Setup" }
  ];

  const imagesToDisplay = galleryImages.map(img => ({ image: { url: img.url, alt: img.alt }, caption: null }));
  
  // Calculate pagination
  const totalPages = Math.ceil(imagesToDisplay.length / imagesPerPage);
  const startIndex = (currentPage - 1) * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;
  const currentImages = imagesToDisplay.slice(startIndex, endIndex);

  // Determine number of columns based on image count for better responsiveness
  let gridColsClass = "lg:grid-cols-3"; // Default for many images
  if (currentImages.length <= 4) {
    gridColsClass = "lg:grid-cols-4";
  } else if (currentImages.length === 5) {
    gridColsClass = "lg:grid-cols-5";
  } else if (currentImages.length === 6) {
    gridColsClass = "lg:grid-cols-3";
  }

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      // Show all pages if total is small
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Show current page and surrounding pages
      const start = Math.max(1, currentPage - 2);
      const end = Math.min(totalPages, currentPage + 2);
      
      if (start > 1) {
        pages.push(1);
        if (start > 2) pages.push('...');
      }
      
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      
      if (end < totalPages) {
        if (end < totalPages - 1) pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-emerald-600 mb-6">Event Gallery</h2>
        
        {/* Gallery Grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 ${gridColsClass} gap-3 md:gap-4 mb-6`}>
          {currentImages.map((item, index) => (
            <div key={startIndex + index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
              <div className="relative aspect-[4/3] w-full">
                {item.image && (
                  <Image 
                    src={item.image.url}
                    alt={item.image.alt || 'Foam Party Gallery Image'}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    style={{ objectPosition: 'center' }}
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Page Info */}
            <div className="text-sm text-gray-600">
              Showing {startIndex + 1}-{Math.min(endIndex, imagesToDisplay.length)} of {imagesToDisplay.length} images
            </div>

            {/* Pagination Buttons */}
            <div className="flex items-center gap-2">
              {/* Previous Button */}
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Previous
              </button>

              {/* Page Numbers */}
              <div className="flex items-center gap-1">
                {getPageNumbers().map((page, index) => (
                  <button
                    key={index}
                    onClick={() => typeof page === 'number' ? goToPage(page) : null}
                    disabled={typeof page !== 'number'}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      page === currentPage
                        ? 'bg-emerald-600 text-white'
                        : typeof page === 'number'
                        ? 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'
                        : 'text-gray-400 cursor-default'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
} 