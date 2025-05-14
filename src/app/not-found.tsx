import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center p-6">
      <Image
        src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/671fb8ddd063eb113a750e1b.jpeg"
        alt="Emmy the Owl looking surprised"
        width={200}
        height={200}
        className="mb-8 rounded-full shadow-lg"
      />
      <h1 className="text-5xl font-bold text-emerald-600 mb-4">Whoops!</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-3">
        Looks like Emmy flew off with this page!
      </h2>
      <p className="mb-8 text-gray-600 max-w-md">
        Or maybe it&apos;s just playing hide and seek. While we send out a search party (or finish our coding), 
        why not head back to safety?
      </p>
      <Link 
        href="/"
        className="px-8 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors duration-300 shadow-md hover:shadow-lg"
      >
        Return to Homepage
      </Link>
    </div>
  );
} 