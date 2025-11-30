import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

export default function HolidayLaserShowPromo() {
  return (
    <section className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-700 text-white py-10 md:py-14">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
          <div className="flex-1 space-y-5">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm font-semibold tracking-wide uppercase">
              Christmas Holiday Laser Shows 2025
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Drive-in holiday magic with <span className="text-emerald-200">BYOP</span> fun built in.
            </h2>
            <p className="text-lg text-emerald-50 max-w-2xl">
              Cozy up in the car, light up the night with your own props, and enjoy the most affordable, flexible, and accessible holiday laser experience for families.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 max-w-3xl">
              {[
                {
                  title: 'Bring Your Own Props',
                  detail: 'Hula hoops, lights, bells, sweaters, and Frosty kits to join the show.',
                },
                { title: 'Flexible & Accessible', detail: 'Drive-in comfort for all ages with easy showtimes and cozy tailgating.' },
                { title: 'Budget Friendly', detail: 'Seasonal memories without premium pricing or long lines.' },
              ].map((item) => (
                <div key={item.title} className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-4 h-full">
                  <h3 className="text-lg font-semibold mb-2 text-white">{item.title}</h3>
                  <p className="text-sm text-emerald-100 leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/holiday-events/laser-shows-2025"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-emerald-800 font-semibold rounded-lg shadow-lg hover:-translate-y-0.5 transition-transform"
              >
                Explore the 2025 Show
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg border border-emerald-300/30 hover:bg-emerald-500 transition"
              >
                Book Your Date
              </Link>
            </div>
          </div>

          <div className="flex-1 w-full">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-white/10 bg-white/5 aspect-[4/3]">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/80 via-transparent to-white/20" />
              <Image
                src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67c28e437ee1c1aacb7fe9d3.png"
                alt="Family enjoying a Christmas drive-in laser show with props"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority={false}
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-3 bg-gradient-to-t from-emerald-900/90 via-emerald-900/70 to-transparent">
                <p className="text-sm uppercase tracking-widest text-emerald-100">New This Year</p>
                <p className="text-xl font-semibold leading-snug">BYOP moments like Build Frosty, Hula Hoop contests, and more interactive fun.</p>
                <p className="text-sm text-emerald-100">Tag your memories with #ChristmasHulaHoops • #BuildFrosty • #SweaterDance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
