export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-6">
      <div className="w-10 h-10 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin mb-4"></div>
      <p className="text-emerald-600">Loading...</p>
    </div>
  );
} 