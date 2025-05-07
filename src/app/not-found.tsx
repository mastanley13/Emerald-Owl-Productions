import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-emerald-600 mb-2">404</h1>
      <h2 className="text-xl mb-4">Page Not Found</h2>
      <p className="mb-6 text-gray-600 max-w-md text-center">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link 
        href="/"
        className="px-6 py-2 bg-emerald-600 text-white rounded-lg"
      >
        Return Home
      </Link>
    </div>
  );
} 