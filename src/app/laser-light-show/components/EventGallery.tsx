'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function EventGallery() {
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 12; // Show 12 images per page (3 rows of 4 on desktop)

  const galleryImages = [
    { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688af241417b030d6860e160.jpeg", alt: "Laser Show Event" },
    { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688af24105df825a2e9a728d.jpeg", alt: "Laser Show Display" },
    { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688af241a4c55f77685525f2.jpeg", alt: "Laser Show Performance" },
    { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688af241a4c55f41395525f1.jpeg", alt: "Laser Show Reflection" },
    { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688af241a4c55f0b815525ef.jpeg", alt: "Laser Show Experience" },
    { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688af241417b0373e960e15a.jpeg", alt: "Laser Show Setup" },
    { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688af24105df8261b49a728c.jpeg", alt: "Laser Show in Action" },
    { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688af241a4c55f21775525f0.png", alt: "Laser Show Audience" },
    { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688af241a4c55f6cc45525f5.jpeg", alt: "Laser Show Beams" },
    { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688af241ba7d0456322dc683.jpeg", alt: "Laser Show Display" },
    { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688af24105df82483c9a728a.jpeg", alt: "Laser Show Performance" },
    { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688af241ba7d04bcfa2dc67a.jpeg", alt: "Laser Show Experience" },
    { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688af241417b032b1a60e15c.jpeg", alt: "Laser Show Setup" },
    { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688af24105df8298779a728e.jpeg", alt: "Laser Show in Action" },
    { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688af24108dbc330b624ed32.jpeg", alt: "Laser Show Audience" },
    { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688af241ba7d0490a32dc685.jpeg", alt: "Laser Show Beams" },
    { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688af241417b03730b60e15e.jpeg", alt: "Laser Show Display" },
    { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688af241ba7d0401732dc681.jpeg", alt: "Laser Show Performance" },
    { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688af24108dbc313de24ed33.jpeg", alt: "Laser Show Experience" },
    { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688af241ba7d046f1a2dc680.jpeg", alt: "Laser Show Setup" },
    { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688af241a4c55f7c3f5525f4.jpeg", alt: "Laser Show in Action" },
    { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688af241ba7d04c9cc2dc679.jpeg", alt: "Laser Show Audience" },
    { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688af241ba7d04140e2dc67e.jpeg", alt: "Laser Show Beams" },
    { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688af241ba7d04e3bd2dc67b.jpeg", alt: "Laser Show Display" },
    { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688af241ba7d0425ce2dc67f.jpeg", alt: "Laser Show Performance" },
    { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688af241a4c55ff3885525f3.jpeg", alt: "Laser Show Experience" },
    { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688af24108dbc3afb724ed36.jpeg", alt: "Laser Show Setup" },
    { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688af241ba7d042d062dc675.jpeg", alt: "Laser Show in Action" },
    { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688af241417b03512f60e15f.jpeg", alt: "Laser Show Audience" },
    { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688af241ba7d0446b82dc67c.jpeg", alt: "Laser Show Beams" },
    { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688af24108dbc301b924ed31.jpeg", alt: "Laser Show Display" },
    { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688af241ba7d04f2592dc684.jpeg", alt: "Laser Show Performance" },
    { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688af241417b033a8d60e15d.jpeg", alt: "Laser Show Experience" },
    { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688af24108dbc33c8824ed34.jpeg", alt: "Laser Show Setup" },
    { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688af24108dbc37bdc24ed30.jpeg", alt: "Laser Show in Action" },
    { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688af241417b03307660e15b.jpeg", alt: "Laser Show Audience" },
    { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688af241417b03166560e159.jpeg", alt: "Laser Show Beams" },
    { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688af24108dbc3318a24ed2f.jpeg", alt: "Laser Show Display" },
    { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688af24105df82f7919a7289.jpeg", alt: "Laser Show Performance" },
    { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688af241ba7d041cb92dc686.jpeg", alt: "Laser Show Experience" },
    { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688af24108dbc38b3324ed35.jpeg", alt: "Laser Show Setup" },
    { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688af241ba7d0416132dc67d.jpeg", alt: "Laser Show in Action" },
    { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688af24105df827ac29a728b.jpeg", alt: "Laser Show Audience" },
    { url: "https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/688af241a4c55fb3895525ee.jpeg", alt: "Laser Show Beams" }
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
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-emerald-600 mb-12">Event Gallery</h2>
        
        {/* Gallery Grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 ${gridColsClass} gap-4 md:gap-6 mb-8`}>
          {currentImages.map((item, index) => (
            <div key={startIndex + index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
              <div className="relative aspect-[4/3] w-full">
                {item.image && (
                                     <Image 
                     src={item.image.url}
                     alt={item.image.alt || 'Laser Light Show Gallery Image'}
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