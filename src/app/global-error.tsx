'use client';

import { useEffect } from 'react';
import { GeistSans } from 'geist/font/sans';

export default function GlobalError({
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
    <html lang="en" className={GeistSans.variable}>
      <body>
        <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
          <h1 className="text-4xl font-bold text-red-600 mb-4">Something went wrong!</h1>
          <p className="mb-6 text-lg text-center max-w-md">
            We encountered an unexpected error. Please try again.
          </p>
          <button
            onClick={() => reset()}
            className="px-6 py-3 bg-emerald-600 text-white rounded-lg"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
} 