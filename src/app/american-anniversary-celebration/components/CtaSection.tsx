export default function CtaSection() {
  return (
    <section className="py-12 bg-blue-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Book Your Anniversary Celebration
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Contact us today to learn more about our special America 250th Anniversary packages
          </p>
          <a 
            href="/contact-us" 
            className="inline-block px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
} 