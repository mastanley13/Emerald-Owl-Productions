import React from 'react';
import { Metadata } from 'next';
import Header from '../../../components/shared/Layout/Header';
import Footer from '../../../components/shared/Layout/Footer';
import Link from 'next/link';
import Image from 'next/image';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Christmas Holiday Laser Shows 2025 | Emerald Owl Productions',
    description:
      'Discover our 2025 drive-in Christmas laser shows with Bring Your Own Props moments, family-friendly pricing, and flexible showtimes.',
    keywords: 'Christmas laser show, holiday laser shows 2025, drive-in laser show, bring your own props',
  };
}

const recommendedProps = {
  participants: ['Hula Hoop', 'Light-Up Wristband or Phone with Flashlight', 'Jingle or Sleigh Bells', 'Ugly Christmas Sweater'],
  frostyKit: ['Broomstick (Most important!)', 'Hat', 'Scarf', 'Pipe (real or pretend)'],
};

const hashtags = [
  { title: 'Hula Hoop Contest', tag: '#ChristmasHulaHoops' },
  { title: 'Lights of Hope', tag: '#GreenLightMovement' },
  { title: 'Building Frosty', tag: '#BuildFrosty' },
  { title: 'Frosty Dance Contest', tag: '#FrostyInHollis' },
  { title: 'Ugly Sweater Dance Contest', tag: '#SweaterDance' },
  { title: 'Jingle Bells', tag: '#JingleAllTheWay' },
];

const videoLinks = [
  {
    title: 'Carteret County Speedway Show',
    url: 'https://www.youtube.com/embed/xSQWb2_bm9w',
    location: 'Carteret County Speedway',
  },
  { title: 'Plymouth, NC', url: 'https://www.youtube.com/embed/cUf_zixDpZY', location: 'Plymouth, NC' },
  { title: 'Allegheny County, PA', url: 'https://www.youtube.com/embed/hb7_5cIOLKc', location: 'Allegheny County, PA' },
];

export default function HolidayLaserShows2025() {
  return (
    <>
      <Header />
      <main className="pt-16 bg-gray-50">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-800 to-slate-900 text-white">
          <div className="absolute inset-0">
            <Image
              src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67a44260aa4eedb151f721ee.jpeg"
              alt="Holiday drive-in laser show with Christmas colors"
              fill
              className="object-cover opacity-50"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/80 via-emerald-900/70 to-slate-900/80" />
          </div>
          <div className="container mx-auto px-6 py-20 lg:py-28 relative z-10">
            <div className="max-w-4xl space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm font-semibold tracking-wide uppercase">
                New for 2025: Bring Your Own Props
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Christmas Holiday Laser Shows 2025
              </h1>
              <p className="text-lg md:text-xl text-emerald-50 leading-relaxed">
                Experience the original drive-in holiday laser show built for families who love tradition, comfort, and interactive fun. Stay cozy in your vehicle, avoid long lines, and light up the night with your own props.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-emerald-800 font-semibold rounded-lg shadow-lg hover:-translate-y-0.5 transition-transform"
                >
                  Book a 2025 Show
                </Link>
                <Link
                  href="#byop"
                  className="inline-flex items-center justify-center px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg border border-emerald-300/40 hover:bg-emerald-500 transition"
                >
                  Explore BYOP Moments
                </Link>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                {[{ label: 'Drive-In Comfort', value: 'Flexible showtimes & cozy vehicles' }, { label: 'Family Friendly', value: 'All ages + accessibility in mind' }, { label: 'Affordable Fun', value: 'Seasonal magic without premium pricing' }].map((item) => (
                  <div key={item.label} className="bg-white/10 border border-white/10 rounded-xl p-4">
                    <p className="text-xs uppercase text-emerald-100 tracking-wider">{item.label}</p>
                    <p className="text-sm font-semibold text-white mt-2 leading-snug">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* BYOP */}
        <section id="byop" className="py-16 bg-white">
          <div className="container mx-auto px-6 space-y-12">
            <div className="max-w-4xl space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Bring Your Own Props (BYOP)</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                For 2025, guests can take part in the fun like never before with Bring Your Own Props. These simple, festive items help you become part of the show and light up the night while keeping things affordable and safe.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 bg-emerald-50 border border-emerald-100 rounded-2xl p-6 shadow-sm">
                <h3 className="text-2xl font-semibold text-emerald-900 mb-4">Recommended Props</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Per Participant</h4>
                    <ul className="space-y-3 text-gray-700">
                      {recommendedProps.participants.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Per Vehicle – “Frosty the Snowman” Kit</h4>
                    <ul className="space-y-3 text-gray-700">
                      {recommendedProps.frostyKit.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-emerald-700 to-emerald-500 text-white rounded-2xl p-6 flex flex-col justify-between shadow-lg">
                <div className="space-y-3">
                  <p className="text-sm uppercase tracking-widest text-emerald-100">Why BYOP?</p>
                  <h4 className="text-2xl font-semibold leading-tight">Interactive, memorable moments without extra cost.</h4>
                  <p className="text-emerald-50 leading-relaxed">
                    Families can create their own traditions, participate as much or as little as they want, and become part of the show itself.
                  </p>
                </div>
                <div className="mt-6 space-y-2 text-sm text-emerald-100">
                  <p>You&apos;re not just watching the magic—you&apos;re helping make it.</p>
                  <p>We can&apos;t wait to see the memories you create!</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tradition */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-5">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">How Drive-In Laser Shows Became a Holiday Tradition</h2>
              <p className="text-gray-700 leading-relaxed">
                The drive-in laser show concept was created in 2020 as a pandemic-friendly option. Families loved it, and we learned the drive-in format fills important needs:
              </p>
              <ul className="space-y-3 text-gray-700">
                {[ 'Affordable for families', 'Flexible showtimes that help you avoid long lines', 'Accessible for all ages, including those with mobility challenges or small children', 'Cozy and comfortable — enjoy the show from your own vehicle', 'Tailgating with hot chocolate, cookies, and warm holiday treats became part of the experience!' ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-5 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-900">Keeping the Show Fresh — Without Changing What Works</h3>
              <p className="text-gray-700 leading-relaxed">
                We update the show every year with a mix of new songs while keeping fan-favorite classics. Lasers project over the audience, ensuring great visibility without large projection screens or higher costs. Safety remains our top priority for nighttime drive-in settings.
              </p>
              <div className="space-y-3 text-gray-700">
                <p>• Affordable holiday experience without adding weatherproof screens or new production fees.</p>
                <p>• Overhead laser beams keep sightlines clear for every car.</p>
                <p>• New music and moments each season with the traditions audiences love.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why BYOP */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why BYOP?</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                BYOP lets us add interactivity, fun, and memorable moments without increasing costs or compromising safety. Families can participate on their own terms, create traditions, and be part of the show.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Ten years from now, you might not rewatch laser beams on a phone—but you will watch videos of the kids (now grown) dressed as Frosty or grandma rocking that ugly Christmas sweater in the car.
              </p>
            </div>
            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 shadow-sm space-y-4">
              <h3 className="text-2xl font-semibold text-emerald-900">Share Your Moments</h3>
              <p className="text-gray-700 leading-relaxed">Tag your memories with our 2025 hashtags so we can celebrate them online.</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {hashtags.map((item) => (
                  <div key={item.tag} className="bg-white border border-emerald-100 rounded-xl p-4">
                    <p className="text-sm text-emerald-600 font-semibold">{item.title}</p>
                    <p className="text-lg font-bold text-gray-900">{item.tag}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-emerald-700 font-semibold">Thank you for supporting the Drive-In Laser Show! Merry Christmas and Happy Hanukkah!</p>
            </div>
          </div>
        </section>

        {/* Videos */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-6 space-y-10">
            <div className="space-y-4 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold">See the Show in Action</h2>
              <p className="text-emerald-100 text-lg">Watch highlights from recent holiday laser shows across the East Coast and beyond.</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              {videoLinks.map((video) => (
                <div key={video.url} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-lg">
                  <div className="aspect-video">
                    <iframe
                      src={video.url}
                      title={video.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-4 space-y-1">
                    <p className="text-sm uppercase tracking-widest text-emerald-200">{video.location}</p>
                    <p className="text-lg font-semibold">{video.title}</p>
                    <Link href={video.url.replace('embed/', 'watch?v=')} className="text-emerald-200 hover:text-emerald-100 text-sm font-semibold">
                      Watch on YouTube →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-emerald-700 to-emerald-600 text-white">
          <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <p className="text-sm uppercase tracking-widest text-emerald-100">Holiday 2025 Bookings</p>
              <h2 className="text-3xl md:text-4xl font-bold">Ready to light up your community?</h2>
              <p className="text-emerald-50 text-lg leading-relaxed">
                Tell us your dates and goals. We&apos;ll bring the lasers, music, and BYOP moments to make your Christmas drive-in unforgettable.
              </p>
            </div>
            <div className="flex gap-4 flex-col sm:flex-row">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-emerald-800 font-semibold rounded-lg shadow-lg hover:-translate-y-0.5 transition-transform"
              >
                Get a Quote
              </Link>
              <Link
                href="tel:18334569367"
                className="inline-flex items-center justify-center px-6 py-3 bg-emerald-800 text-white font-semibold rounded-lg border border-emerald-300/40 hover:bg-emerald-700 transition"
              >
                Call 833-GLOW-EOP
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
