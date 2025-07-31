'use client';

import Image from 'next/image';
import Header from '@/components/shared/Layout/Header';
import Footer from '@/components/shared/Layout/Footer';

export default function GreenLightMovementPage() {

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[400px] flex items-center bg-gradient-to-br from-green-800 via-green-900 to-emerald-950 text-white">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-green-950/70 backdrop-blur-[1px]" />
            
            {/* Decorative elements */}
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-green-500/10 opacity-70 animate-pulse"></div>
            <div className="absolute top-32 -left-32 w-64 h-64 rounded-full bg-emerald-600/10 opacity-60 animate-pulse" style={{ animationDuration: '8s' }}></div>
          </div>
         
         <div className="container mx-auto px-6 z-10 relative py-16">
           <div className="max-w-4xl">
             <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-8">
               <div className="w-48 h-48 md:w-64 md:h-64 relative">
                                   <Image 
                    src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/687961aa02da47d0db454d31.jpeg"
                    alt="Green Light Movement Logo"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 192px, 256px"
                  />
               </div>
                                                               <div className="text-center md:text-left">
                                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                     <span className="text-green-300 relative drop-shadow-md">
                       The Green Light Movement
                     </span>
                   </h1>
                   <p className="text-lg md:text-xl text-emerald-100 font-light max-w-3xl">
                     Green is the official color of mental health awareness, symbolizing hope, strength, and renewal. It serves as a powerful visual reminder that no one is alone and that healing is possible.
                   </p>
                </div>
             </div>
           </div>
         </div>
       </section>

       {/* Main Content Section */}
       <section className="py-16 bg-white">
         <div className="container mx-auto px-6">
           <div className="max-w-4xl mx-auto">
             
                           

              {/* Event Experience Section */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-green-900 mb-6">The Event Experience</h2>
                <div className="bg-green-50 p-8 rounded-xl shadow-lg border-l-4 border-green-800">
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    At select EOP events, we will offer green, battery-powered light-up bracelets for $5.00. We will recover $2.00 to cover costs, and the remaining $3.00 will be donated to a previously approved local mental health program.
                  </p>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    At a special moment during the evening, all activities will pause. We will invite attendees to participate in a simple yet powerful gesture. We will ask attendees if they have ever personally faced an intense personal struggle, needed to ask for help, or wish they had at any time in their life, to please consider letting others know they are not alone by turning on their green light and raise their hand for the duration of the next song. Someone in the crowd tonight may be feeling alone—and their light could remind them that they're not.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    As "Brighter Days" by Blessing Offor plays, the entire venue will glow green. Lasers will freeze in soft, static green, and the space will fill with a shared sense of compassion and courage.
                  </p>
                </div>
              </div>

              {/* Share and Connect Section */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-green-700 mb-6">Share and Connect</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  We encourage guests to take a photo of themselves with their green light raised and share it on social media using #GreenLightMovement.
                </p>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  We are having a logo created for this movement as well, and we have purchased a website, www.greenlightmovement.us
                </p>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  This small moment has the power to create lasting connection……and let someone know they're not alone.
                </p>
              </div>

              {/* Continue the Movement Section */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-green-900 mb-6">Continue the Movement</h2>
                <div className="bg-green-50 p-8 rounded-xl shadow-lg border-l-4 border-green-800">
                  <p className="text-gray-700 leading-relaxed">
                    Permanent silicon bracelets will be available for the Green Light Movement. This bracelet will signify that people dealing with something, anything, even a stranger, have a "Green Light" to talk to the person wearing the bracelet.
                  </p>
                </div>
              </div>

             

           {/* Call to Action */}
           <div className="text-center mt-12">
             <button 
               className="inline-block px-8 py-4 bg-gray-400 text-white font-bold rounded-md cursor-not-allowed text-lg"
               disabled
             >
               Join the Movement - Coming Soon
             </button>
           </div>
         </div>
       </div>
     </section>
   </main>
   <Footer />
 </>
 );
} 