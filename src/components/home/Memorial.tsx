import React from 'react';
import Image from 'next/image';

const Memorial: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-emerald-300 mb-4">
              In Loving Memory
            </h2>
            <div className="w-24 h-1 bg-emerald-400 mx-auto rounded"></div>
          </div>

          {/* Memorial Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="lg:text-left">
              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-semibold text-emerald-300 mb-2">
                  OUR PARTNER - OUR FRIEND - OUR FAMILY
                </h3>
                <h4 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  MATTHEW KEENAN
                </h4>
                <p className="text-lg md:text-xl text-gray-300 font-medium">
                  JUNE 28, 1979 ~ AUGUST 14, 2024
                </p>
              </div>
              
              <div className="bg-gray-700/50 p-6 rounded-lg border-l-4 border-emerald-400">
                <p className="text-gray-200 leading-relaxed text-sm md:text-base">
                  Emerald Owl Productions mourns the tragic loss of Vice President and Head 
                  Laser Technician, Mr. Matthew Keenan, who died in an auto accident on August 
                  14 in North Carolina. His passion, creativity, and dedication to EOP were 
                  unparalleled, and he cherished making children smile with his work. Matt 
                  shared the vision for EOP's future and will always be remembered and missed 
                  by the team.
                </p>
                <p className="text-emerald-300 font-semibold mt-4 text-lg">
                  Thank you, Matt; we love you!
                </p>
              </div>
            </div>

            {/* Image Section */}
            <div className="flex justify-center">
              <div className="relative">
                {/* Memorial Photo */}
                <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-emerald-400 shadow-2xl">
                  <Image
                    src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/683e6137ce30b519148fe2eb.jpeg"
                    alt="Matthew Keenan - In Loving Memory"
                    fill
                    className="object-cover object-center"
                    sizes="320px"
                  />
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-400 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-emerald-300 rounded-full animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>

          {/* Bottom Message */}
          <div className="mt-12 pt-8 border-t border-gray-700">
            <p className="text-gray-300 text-lg italic">
              "His legacy lives on in every smile we create and every magical moment we bring to life."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Memorial; 