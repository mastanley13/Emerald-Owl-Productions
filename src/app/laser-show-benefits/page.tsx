import Header from '../../components/shared/Layout/Header';
import Footer from '../../components/shared/Layout/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Unique Benefits of Hosting a Laser Show | Emerald Owl Productions',
  description: 'Discover the unique benefits of hosting a laser show for your event. Customizable, scalable, cost-effective, and perfect for any venue or occasion.',
  keywords: 'laser show benefits, event entertainment, laser light show, customizable shows, scalable entertainment, sponsorship opportunities, safe entertainment',
};

export default function LaserShowBenefitsPage() {
  return (
    <div>
      <Header />
      <main className="pt-0">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-emerald-900 to-emerald-700 text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold mb-6">
              Unique Benefits of Hosting a Laser Show
            </h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Laser shows offer a dynamic, customizable, and highly memorable experience unlike anything else. Here's why they're an exceptional choice for your next event.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              
              {/* Benefit 1 */}
              <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
                <div className="flex items-start mb-4">
                  <div className="bg-emerald-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
                    1
                  </div>
                  <h3 className="text-2xl font-bold text-emerald-600">Customizable and Scalable</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Unlike pre-packaged entertainment acts, laser shows can be fully tailored to your event's theme, goals, and venue. Whether you're planning for a small town or a major festival, laser shows are scalable to a wide range of budgets.
                </p>
                <p className="text-gray-700">
                  Our team at EOP will work with you to tailor the ideal show format and optional experiences that best align with your venue, market, budget, and objectives.
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
                <div className="flex items-start mb-4">
                  <div className="bg-emerald-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
                    2
                  </div>
                  <h3 className="text-2xl font-bold text-emerald-600">Extra Shows Are Extremely Cost-Effective</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Laser shows involve minimal consumables. Once the show is designed, set up, and networked, adding additional showtimes or nights is simple and highly economical.
                </p>
                <p className="text-gray-700">
                  This is especially valuable if your event is designed as a fundraiser or revenue-generating attraction.
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
                <div className="flex items-start mb-4">
                  <div className="bg-emerald-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
                    3
                  </div>
                  <h3 className="text-2xl font-bold text-emerald-600">Fully Synchronized to Music — Customize It Your Way</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  From Celebrate America and Christmas Spectaculars to Blast to the Past or even solemn memorials, laser shows can be choreographed to fit any mood or message.
                </p>
                <p className="text-gray-700">
                  Want to run multiple themed shows in one night? No problem — our programming allows for seamless transitions between unique segments.
                </p>
              </div>

              {/* Benefit 4 */}
              <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
                <div className="flex items-start mb-4">
                  <div className="bg-emerald-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
                    4
                  </div>
                  <h3 className="text-2xl font-bold text-emerald-600">Sponsorship Opportunities With Custom Logos and Text</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Looking for a fresh way to engage sponsors?
                </p>
                <p className="text-gray-700">
                  We can project your sponsors' logos, taglines, or brand messages in brilliant laser light, giving them premium visibility like never before. You can also highlight your own event branding to reinforce your identity.
                </p>
              </div>

              {/* Benefit 5 */}
              <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
                <div className="flex items-start mb-4">
                  <div className="bg-emerald-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
                    5
                  </div>
                  <h3 className="text-2xl font-bold text-emerald-600">Versatile in Nearly Any Environment</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Laser shows are incredibly flexible and can be performed indoors or outdoors, rain or shine—even in snow.
                </p>
                <p className="text-gray-700">
                  Because they involve no pyrotechnics, they're safe for almost any setting. In fact, rain and snow actually enhances the visual impact of the lasers.
                </p>
              </div>

              {/* Benefit 6 */}
              <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
                <div className="flex items-start mb-4">
                  <div className="bg-emerald-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
                    6
                  </div>
                  <h3 className="text-2xl font-bold text-emerald-600">A Standalone Experience or Stunning Add-On</h3>
                </div>
                <p className="text-gray-700">
                  Laser shows can be the main event or a visually powerful addition to live music, DJs, dance performances, or concerts—creating a rich, multi-layered production.
                </p>
              </div>

              {/* Benefit 7 */}
              <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
                <div className="flex items-start mb-4">
                  <div className="bg-emerald-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
                    7
                  </div>
                  <h3 className="text-2xl font-bold text-emerald-600">Laser Shows Draw Crowds to Your Venue</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Since laser shows are best viewed from specific angles or locations, they're ideal for drawing people to a centralized space—whether it's your downtown area or park, festival grounds, or school athletic field.
                </p>
                <p className="text-gray-700">
                  They are perfect for revitalizing foot traffic for downtown revitalization or bringing a crowd to seasonal venues in the off-season.
                </p>
              </div>

              {/* Benefit 8 */}
              <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
                <div className="flex items-start mb-4">
                  <div className="bg-emerald-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
                    8
                  </div>
                  <h3 className="text-2xl font-bold text-emerald-600">Ideal for Ticketed Events</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Unlike fireworks or drone shows that can be viewed from miles away, laser shows are best experienced within the venue.
                </p>
                <p className="text-gray-700">
                  This makes them perfect for ticketed events, where exclusivity adds value and helps maximize revenue.
                </p>
              </div>

              {/* Benefit 9 */}
              <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
                <div className="flex items-start mb-4">
                  <div className="bg-emerald-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
                    9
                  </div>
                  <h3 className="text-2xl font-bold text-emerald-600">Among the Safest Entertainment Options in the Sky</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  With no explosives or flying objects, laser shows are among the safest forms of aerial entertainment.
                </p>
                <p className="text-gray-700 mb-4">
                  All of our shows are operated under strict ILDA (International Laser Display Association) safety standards, ensuring peace of mind for both organizers and attendees.
                </p>
                <p className="text-gray-700">
                  (For more on laser safety, visit our <a href="/laser-safety" className="text-emerald-600 hover:text-emerald-700 underline">Laser Safety page</a>.)
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-emerald-950 text-white py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Event?</h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Let's work together to create an unforgettable laser show experience that perfectly aligns with your vision and budget.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a 
                href="/contact-us"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                Get Your Quote Today
              </a>
              <a 
                href="/laser-light-show"
                className="bg-transparent border-2 border-emerald-600 hover:bg-emerald-600 text-emerald-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                View Our Laser Shows
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}