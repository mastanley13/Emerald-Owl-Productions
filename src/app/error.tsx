'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-6">
      <div className="max-w-md text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">
          Something went wrong
        </h2>
        <p className="mb-6 text-gray-600">
          We encountered an error loading this page. You can try again or return home.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="px-6 py-2 bg-emerald-600 text-white rounded-lg"
          >
            Try again
          </button>
          <Link 
            href="/"
            className="px-6 py-2 border border-emerald-600 text-emerald-600 rounded-lg"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
} 