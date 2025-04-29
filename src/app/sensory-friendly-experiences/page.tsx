
import Link from 'next/link';
import Image from 'next/image';
import Header from '../../components/shared/Layout/Header';
import Footer from '../../components/shared/Layout/Footer';
import Newsletter from '../../components/shared/UI/Newsletter';

export default function SensoryFriendlyExperiencesPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero Banner */}
        <section className="relative min-h-[500px] flex items-center bg-gradient-to-b from-black via-black to-emerald-950 text-white">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-emerald-950/80 backdrop-blur-[2px]" />
            
            {/* Decorative elements */}
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-emerald-500/10 opacity-70 animate-pulse"></div>
            <div className="absolute top-32 -left-32 w-64 h-64 rounded-full bg-blue-400/10 opacity-60 animate-pulse" style={{ animationDuration: '8s' }}></div>
            <div className="absolute -bottom-32 right-32 w-80 h-80 rounded-full bg-emerald-500/10 opacity-70 animate-pulse" style={{ animationDuration: '12s' }}></div>
          </div>
          
          <div className="container mx-auto px-6 z-10 relative py-16">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-emerald-400 relative drop-shadow-md">
                  Sensory Friendly Experiences
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-10 text-gray-100 font-light max-w-2xl">
                Inclusive experiences designed for everyone to enjoy
              </p>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span className="text-emerald-600">Plan An Event That Can Include Everyone</span>
                </h2>
                <p className="text-gray-700 mb-6">
                  At Emerald Owl Productions, we believe that everyone deserves to experience joy and fun. 
                  Our Sensory Friendly Experiences are specially designed to accommodate individuals 
                  with sensory sensitivities, creating a welcoming environment for all participants.
                </p>
                <p className="text-gray-700 mb-6">
                  In response to parent feedback about sensory sensitivities preventing their children from attending 
                  our events, we collaborated with Ali Cheely, our Director of Neurodivergent Events, to create 
                  experiences that are both exciting and comfortable for everyone.
                </p>
              </div>
              <div className="md:w-1/2 relative h-[400px]">
                <Image 
                  src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67ab91924dcedf6404738967.png"
                  alt="Sensory friendly experience" 
                  fill
                  className="object-cover rounded-lg shadow-xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              <span className="text-emerald-600">What Separates This From Others</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="h-12 w-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-emerald-600 text-xl">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Specialized Scheduling</h3>
                <p className="text-gray-700">
                  We carefully schedule events during quieter times to avoid overwhelming crowds and create a more comfortable environment.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="h-12 w-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-emerald-600 text-xl">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Modified Lights & Sound</h3>
                <p className="text-gray-700">
                  Our light displays use gentle transitions and reduced flashing, while sound levels are carefully monitored and kept at comfortable volumes.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="h-12 w-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-emerald-600 text-xl">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Calm Areas</h3>
                <p className="text-gray-700">
                  We designate specific quiet spaces where participants can take breaks if they feel overwhelmed at any point during the event.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Director Profile */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              <span className="text-emerald-600">Meet Our Director</span>
            </h2>
            
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="md:w-1/3 relative h-[350px] mb-8 md:mb-0">
                <Image 
                  src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67144f7bf312d46538860eaa.jpeg"
                  alt="Ali Cheely" 
                  fill
                  className="object-cover rounded-lg shadow-xl"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-emerald-600 mb-4">
                  Ali Cheely - Director of Neurodivergent Events
                </h3>
                <p className="text-gray-700 mb-4">
                  Ali Cheely is a mother of 4 children, 3 of which have special needs, including neurological differences. 
                  She brings her teaching and coaching experience from school, church, and home settings to Emerald Owl Productions.
                </p>
                <p className="text-gray-700 mb-4">
                  She has worked with children and adults with autism, Down syndrome, Split brain syndrome, Cerebral palsy, 
                  OCD, ADHD, global cognitive delays, and short stature/dwarfism. Ali has also worked with individuals who 
                  are non-verbal and non-ambulatory.
                </p>
                <blockquote className="border-l-4 border-emerald-600 pl-4 italic text-gray-600 my-6">
                  "I know how hard it is when you feel there are no events that meet the unique needs of your kids. 
                  As Director of Neurodivergent Events, my job is to create specific experiences that meet the needs 
                  of populations that are often overlooked by event planners. It is truly humbling to use my knowledge 
                  and background to create memories via epic events for these populations."
                </blockquote>
                <p className="text-gray-700">
                  Contact: <a href="mailto:ali@emeraldowlproductions.com" className="text-emerald-600 hover:underline">ali@emeraldowlproductions.com</a> | Phone: (252) 570-9453
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              <span className="text-emerald-600">Sensory Friendly Event Gallery</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative h-[250px] group">
                <Image 
                  src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/6732347e70d7a32506175fd9.jpeg"
                  alt="Sensory friendly event" 
                  fill
                  className="object-cover rounded-lg shadow-md transition-transform group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="relative h-[250px] group">
                <Image 
                  src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/6732347678b9431938b76ca6.jpeg"
                  alt="Sensory friendly event" 
                  fill
                  className="object-cover rounded-lg shadow-md transition-transform group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="relative h-[250px] group">
                <Image 
                  src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/6732349d7f10cd2fc32ef839.jpeg"
                  alt="Sensory friendly event" 
                  fill
                  className="object-cover rounded-lg shadow-md transition-transform group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="relative h-[250px] group">
                <Image 
                  src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/673234e640b8723008d0ed7f.jpeg"
                  alt="Sensory friendly event" 
                  fill
                  className="object-cover rounded-lg shadow-md transition-transform group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="relative h-[250px] group">
                <Image 
                  src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/673234fa7f10cdb8d42ef864.jpeg"
                  alt="Sensory friendly event" 
                  fill
                  className="object-cover rounded-lg shadow-md transition-transform group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="relative h-[250px] group">
                <Image 
                  src="https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/6732351055af5c28665fee1e.jpeg"
                  alt="Sensory friendly event" 
                  fill
                  className="object-cover rounded-lg shadow-md transition-transform group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Pricing Section */}
        <section className="bg-emerald-700 text-white py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              Sensory Friendly Pricing
            </h2>
            
            <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-lg">
              <p className="text-white/90 mb-6">
                We understand the importance of making Sensory Friendly Events engaging yet calming. With flexible 
                pricing and customizable options, Emerald Owl Productions will work with your team to design an event 
                tailored to sensory needs, all within your budget including foam, gunge, and other fun activities.
              </p>
              
              <p className="text-white/90 mb-6">
                Our package deals for multiple events can also help reduce costs, while providing continuity in planning 
                for future sensory-friendly gatherings.
              </p>
              
              <div className="mt-10 text-center">
                <Link
                  href="/contact-us"
                  className="bg-white text-emerald-700 hover:bg-emerald-100 px-8 py-3 rounded-full font-bold inline-block transition-colors"
                >
                  Contact Us for Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
