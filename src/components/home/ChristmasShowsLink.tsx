import Link from 'next/link';
import React from 'react';

export default function ChristmasShowsLink() {
  return (
    <div className="bg-emerald-900 text-white">
      <div className="max-w-[1400px] mx-auto px-6 py-3 flex items-center justify-center text-center">
        <Link
          href="/holiday-events/laser-shows-2025"
          className="inline-flex items-center gap-2 text-sm md:text-base font-semibold underline underline-offset-4 decoration-2"
        >
          click here for information on upcoming Christmas shows
        </Link>
      </div>
    </div>
  );
}
