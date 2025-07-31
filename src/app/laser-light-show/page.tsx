import Header from '../../components/shared/Layout/Header';
import Footer from '../../components/shared/Layout/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { getLaserLightShowData } from '../../services/contentService';
import { Metadata } from 'next';
import VideoWithOverlay from '../../components/VideoWithOverlay';
import ExperienceHeadline from '../../components/experiences/ExperienceHeadline';
import RainSnowGallery from './components/RainSnowGallery';
import EventGallery from './components/EventGallery';

export async function generateMetadata(): Promise<Metadata> {
  // Fetch data
  const data = await getLaserLightShowData();
  
  return {
    title: data.meta.title,
    description: data.meta.description,
    keywords: data.meta.keywords,
  };
}

export default async function LaserLightShowPage() {
  // Fetch data
  const data = await getLaserLightShowData();
  
  const VideoSection = () => (
    data.videoContent ? (
      <section className="bg-black">
        <div className="container mx-auto px-0">
          <div className="relative aspect-video w-full">
            {/* Small YouTube Icon Overlay - Debug Version */}
            <a
              href="https://www.youtube.com/@emeraldowlproductions9615"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-2 right-2 z-50 opacity-90 hover:opacity-100 transition-opacity border-2 border-yellow-400 rounded-full shadow-lg"
              aria-label="Visit our YouTube Channel"
              style={{ pointerEvents: 'auto', background: 'rgba(0,0,0,0.3)' }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-red-500 drop-shadow-md">
                <path d="M23.498 6.186a2.994 2.994 0 00-2.107-2.117C19.228 3.5 12 3.5 12 3.5s-7.228 0-9.391.569A2.994 2.994 0 00.502 6.186C0 8.36 0 12 0 12s0 3.64.502 5.814a2.994 2.994 0 002.107 2.117C4.772 20.5 12 20.5 12 20.5s7.228 0 9.391-.569a2.994 2.994 0 002.107-2.117C24 15.64 24 12 24 12s0-3.64-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <VideoWithOverlay
              src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/673c32fe15ee06bf5fbfeed7.mp4"
              className="absolute inset-0"
            />
          </div>
        </div>
      </section>
    ) : null
  );

  // Why Lasers Section - NEW
  const WhyLasersSection = () => (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-emerald-600 mb-12">Why Lasers?</h2>
          
          {/* ILDA Quote */}
          <div className="bg-emerald-50 border-l-4 border-emerald-600 p-8 mb-12 rounded-r-lg">
            <blockquote className="text-lg text-gray-700 italic leading-relaxed mb-4">
              &ldquo;There&apos;s no light like it. Lasers create the most vivid and saturated color palette available. We can shower an audience with cascades of three dimensional beams and waves of moving light.&rdquo;
            </blockquote>
            <div className="space-y-2 text-gray-600 mb-4">
              <p>• It&apos;s about enchanting an audience with dreamlike visions.</p>
              <p>• It&apos;s about exciting crowds with visual effects that move faster than any other light-form.</p>
              <p>• It&apos;s about captivating people with images that move with a unique animation style.</p>
            </div>
            <cite className="text-sm text-emerald-600 font-medium">- International Laser Display Association (ILDA)</cite>
          </div>

          {/* Event Gallery moved here */}
          <EventGallery />

          {/* Advantages Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">The Advantages of Laser Shows</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Can be performed outdoors or indoors (Drive-in shows are also possible, most often in winter months!)</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Can be replayed several times in one evening on a single set-up and rate</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Multiple night events can often be profitable for the venue/host</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">No pyrotechnics if fire is a concern to your area</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Safety & Uniqueness</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-sky-600 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">They are the safest entertainment in the sky - no objects are projected into the sky</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-sky-600 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Project over your audience in a designated viewing area - perfect for ticketed events</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-sky-600 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Can draw people to specific areas, such as downtown Main Street</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-sky-600 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">They are unique, creative, and beautiful</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Fireworks Alternative */}
          <div className="mt-12 bg-gradient-to-r from-emerald-600 to-sky-600 text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">A Great Alternative to Fireworks</h3>
            <p className="text-lg leading-relaxed mb-4">
              Laser Shows can be a great alternative to fireworks. If your budget allows, a laser show combined with a fireworks show can truly take your event to a new level most people have never seen or imagined possible.
            </p>
            <p className="text-sm opacity-90">
              <em>Note: EOP does not provide fireworks, however, we are happy to collaborate with a fireworks company.</em>
            </p>
          </div>
        </div>
      </div>
    </section>
  );

  // Helper for Descriptive Content - MODIFIED
  const DescriptiveContentSection = () => (
    <>
      {/* "Standard In-Person Light Show Section" (data.contentSection) REMOVED */}
      
      {/* "Choosing the Right Format" section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
            In-Person or Drive-In?
          </h2>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-emerald-600 mb-4">Laser Shows for Every Season and Setting</h3>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              At Emerald Owl Productions, our laser shows can be experienced in two exciting formats: in-person or drive-in. Each offers its own unique advantages—and the right choice often depends on the time of year.
            </p>
          </div>

          {/* A Quick History */}
          <div className="max-w-4xl mx-auto mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">A Quick History</h3>
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-emerald-600">
              <p className="text-gray-700 mb-4">
                Before 2020, laser shows were exclusively in-person events, held in parks, amphitheaters, and large outdoor venues&mdash;making them a mostly summer and warm-weather experience.
              </p>
              <p className="text-gray-700">
                Then came 2020, and the rise of the drive-in laser show. As a creative response to COVID restrictions, we launched drive-in holiday shows in Wilson, NC (near Raleigh) and Pittsburgh, PA. These shows proved not only feasible&mdash;but wildly popular.
              </p>
            </div>
          </div>

          {/* Why Drive-In Shows Work */}
          <div className="max-w-4xl mx-auto mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Drive-In Shows Work So Well</h3>
            <div className="bg-emerald-50 p-6 rounded-lg">
              <p className="text-gray-700 text-lg">
                Laser beams are projected out over the audience, not straight up. This means the show can be enjoyed through a car&apos;s front windshield, offering a comfortable, weather-resistant option that still feels magical.
              </p>
            </div>
          </div>

          {/* Why Drive-In Shows Thrive in Winter */}
          <div className="max-w-6xl mx-auto mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Why Drive-In Laser Shows Thrive in Winter</h3>
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Cold & Wet Weather Friendly */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-sky-600 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">Cold & Wet Weather Friendly</h4>
                </div>
                <p className="text-gray-700">
                  Drive-in shows can run in rain or snow, and in many cases, the weather enhances the experience&mdash;millions of raindrops or snowflakes catch and reflect the laser beams, creating a mesmerizing effect. Guests can stay warm in their vehicles or step outside for fresh air and a front-row feel.
                </p>
              </div>

              {/* Early Start Times */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">Early Start Times</h4>
                </div>
                <p className="text-gray-700">
                  Short winter days mean the show can begin earlier&mdash;perfect for families with young children, grandparents, or anyone with an early bedtime.
                </p>
              </div>

              {/* Multiple Showings */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">Multiple Showings = Less Wait Time = More Tickets Sold</h4>
                </div>
                <p className="text-gray-700 mb-3">
                  Winter&apos;s early sunsets allow for multiple showtimes per evening&mdash;often two, three, or even four. This format offers flexibility and efficiency:
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• More families can attend without overcrowding</li>
                  <li>• Increased ticket availability leads to higher total sales and fundraising potential</li>
                  <li>• Scheduled showtimes help reduce long lines and traffic congestion</li>
                  <li>• Shorter, more frequent shows improve flow and guest satisfaction</li>
                </ul>
              </div>

              {/* Accessibility */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">Accessibility</h4>
                </div>
                <p className="text-gray-700 mb-3">
                  Drive-in laser shows are incredibly accessible. Anyone who can ride in a car can attend&mdash;even those with mobility limitations. Families often share that this is the only holiday event a certain loved one can enjoy.
                </p>
                <p className="text-gray-700 text-sm">
                  We&apos;ve even welcomed buses from senior living communities. Residents can watch from inside or step outside. We simply park the bus sideways so everyone has a clear view.
                </p>
              </div>

              {/* Affordability */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">Affordability</h4>
                </div>
                <p className="text-gray-700">
                  Drive-in shows charge per vehicle, not per person&mdash;making it an affordable holiday outing for families of all sizes compared to per-ticket attractions.
                </p>
              </div>

              {/* No Noise Issues */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM15.657 6.343a1 1 0 011.414 0A9.972 9.972 0 0119 12a9.972 9.972 0 01-1.929 5.657 1 1 0 11-1.414-1.414A7.971 7.971 0 0017 12c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 12a5.984 5.984 0 01-.757 2.828 1 1 0 11-1.415-1.414A3.987 3.987 0 0013 12a3.988 3.988 0 00-.172-1.414 1 1 0 010-1.415z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">No Noise Issues</h4>
                </div>
                <p className="text-gray-700">
                  Music is broadcast via FM radio, so there&apos;s virtually no ambient sound&mdash;ideal for areas with noise restrictions. Optional speaker systems can also be added so guests can spread out around their vehicles and still hear the show clearly.
                </p>
              </div>

            </div>
          </div>

          {/* Laser Show Tailgating */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-gradient-to-r from-emerald-600 to-sky-600 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Laser Show Tailgating!</h3>
              <p className="text-lg leading-relaxed">
                A new tradition has emerged: laser show tailgating! Guests bring crock pots, hot cocoa, and festive treats, dress in holiday gear, and enjoy food and fun before the show starts. It&apos;s become part of the magic.
              </p>
            </div>
          </div>

          {/* The Best of Both Worlds */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">The Best of Both Worlds</h3>
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-emerald-200">
              <p className="text-gray-700 mb-4">
                While both in-person and drive-in shows can be done year-round, we find that:
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 2L3 7v11a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V7l-7-5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-emerald-600 mb-2">In-Person Shows</h4>
                  <p className="text-gray-600">Ideal for spring and summer events</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-sky-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8 2a2 2 0 00-2 2v1.528A6.001 6.001 0 008 17h4a6.001 6.001 0 002-11.472V4a2 2 0 00-2-2H8zM7 4a1 1 0 011-1h4a1 1 0 011 1v1.528a6.001 6.001 0 01-6 0V4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-sky-600 mb-2">Drive-In Shows</h4>
                  <p className="text-gray-600">Thrive during the colder months, especially for Christmas and holiday celebrations</p>
                </div>
              </div>
              <p className="text-gray-700 text-center text-lg font-medium">
                No matter the format, you&apos;ll get the same spectacular lasers, synchronized music, and unforgettable experience that only The EOP Experience can deliver.
              </p>
            </div>
          </div>
          {/* CTAs for Laser Safety and Benefits */}
          <div className="mt-10 text-center flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link 
              href="/laser-safety"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Learn About Laser Safety
            </Link>
            <Link 
              href="/laser-show-benefits"
              className="bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Discover Laser Show Benefits
            </Link>
          </div>
        </div>
      </section>

      {/* "Why Lasers Section" (data.benefits) REMOVED - Content moving to a new page */}
      
      {/* Types of Laser Shows Section (simplified, no pricing focus) */}
      {/* This section will be updated once data source for Beam/Graphic shows is clear */}
      {data.packages && data.packages.length > 0 && (
        <section className="bg-white py-16">
          <div className="container mx-auto px-6">
            {/* Title for this section might need to be dynamic if main headline changes */}
            <h2 className="text-4xl font-bold text-center text-emerald-600 mb-12">Types of Laser Shows We Offer</h2>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12">
              {data.packages
                .filter(pkg => !pkg.title.toLowerCase().includes("water effect")) // Filter out "Water Effects"
                // .filter(pkg => pkg.title.includes("Beam") || pkg.title.includes("Graphic")) // Keep this for later when data source is clear
                .map((pkg, index) => (
                <div key={index} className="flex flex-col bg-gray-50 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl">
                  {pkg.image && (
                    <div className="relative h-64 w-full">
                      <Image 
                        src={pkg.image.url}
                        alt={pkg.image.alt || pkg.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-emerald-600 mb-3">{pkg.title}</h3>
                    <p className="text-gray-700 mb-4 text-base flex-grow">{pkg.description}</p>
                    {pkg.features && pkg.features.length > 0 && (
                      <>
                        <h4 className="text-md font-semibold text-gray-800 mt-3 mb-2">Includes:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                          {pkg.features.map((feature, fidx) => (
                            <li key={fidx}>{feature}</li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Rain & Snow Gallery */}
      <RainSnowGallery />

      {/* "Safety Section" (data.safetyFeatures) REMOVED - Content moving to a new page */}
    </>
  );



  const FaqSection = () => (
    data.faqs && data.faqs.length > 0 ? (
        <section className="bg-emerald-950 text-white py-16">
        <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center"><span className="text-emerald-400">Frequently Asked Questions</span></h2>
            <div className="space-y-6">
                {data.faqs.map((faq, index) => (
                <details key={index} className="bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-emerald-500/10 group">
                    <summary className="flex justify-between items-center cursor-pointer text-xl font-medium text-emerald-300 group-hover:text-emerald-200">
                    {faq.question}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform transition-transform duration-200 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    </summary>
                    <p className="text-gray-300 mt-3 pt-3 border-t border-emerald-500/20">{faq.answer}</p>
                </details>
                ))}
            </div>
            </div>
        </div>
        </section>
    ) : null
  );

  const TestimonialsSection = () => (
    data.testimonials && data.testimonials.length > 0 ? (
        <section className="bg-white py-16">
        <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-emerald-600 mb-12">What Our Clients Say</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {data.testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-lg border border-gray-100 flex flex-col">
                <p className="text-gray-700 italic mb-4 flex-grow">&quot;{testimonial.quote}&quot;</p>
                <div className="mt-auto">
                    <p className="font-bold text-gray-900">{testimonial.author}</p>
                    {testimonial.role && (
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    )}
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>
    ) : null
  );

  return (
    <>
      <Header />
      <main className="pt-20">
        <VideoSection />
        <ExperienceHeadline heroData={data.hero} /> {/* Title here is still data.hero.title */}
        <WhyLasersSection />
        <DescriptiveContentSection />
        <FaqSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
}
