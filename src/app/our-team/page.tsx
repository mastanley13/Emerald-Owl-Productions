import React from 'react';
import Header from '../../components/shared/Layout/Header';
import Footer from '../../components/shared/Layout/Footer';
import { Metadata } from 'next';
import Image from 'next/image';
import { Mail, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Team | Emerald Owl Productions',
  description: 'Meet the dedicated team behind Emerald Owl Productions, committed to creating unforgettable experiences.',
};

const teamMembers = [
  {
    name: 'KRISTA STROSNIDER',
    title: 'Chief Executive Officer',
    imageUrl: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67144dd476829a3a3d2c1651.jpeg',
    emails: ['krista@emeraldowlproductions.com', 'ceo@emeraldowlproductions.com'],
    bio: [
      "Krista Strosnider was elected in May, 2022 by the EOP Board to serve as the company's first CEO. Her banking background, combined with a passion for the performing arts, make Krista the ideal candidate to lead EOP. She resides in Pittsburgh, PA with her husband, and their 3 boys, ages 14, 7 and 2.",
      "When Krista takes some time for herself, you might find her onstage with some of Pittsburgh's local theater companies, helping to direct the musical at Bishop Canevin High School, or performing the National Anthem at various Pittsburgh sporting events.",
      "Krista can be reached at krista@emeraldowlproductions.com"
    ]
  },
  {
    name: 'MICHAEL MEYER',
    title: 'Chief Operating Officer - President',
    imageUrl: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67144ee3529e43260aa718de.jpeg',
    phone: '(252) 764-7628',
    emails: ['mike@emeraldowlproductions.com'],
    bio: [
      "Mike brings extensive fundraising and event planning experience to Emerald Owl Productions. He holds a Bachelor's degree in Psychology from Allegheny College (Meadville, PA) and a Master's degree in School Counseling from Penn State. With EOP since its' inception in 2015, he has overseen countless EOP Experiences from small birthday parties to large holiday light shows.",
      "Mike has always had a passion for bringing the fun in a unique way. After visiting a neighbor's haunted house when he was in the 2nd grade, Mike convinced his parents to host a haunted house of his own the next year. A six year tradition began, eventually raising thousands of dollars for the Children's Hospital of Pittsburgh, Pennsylvania and attracting hundreds of people per year to walk through his parents house! Since 1984 as a 3rd grader, Mike has been planning events that are fun, bring people together, and give back to others. Mike is based in Emerald Isle."
    ]
  },
  {
    name: 'ALI CHEELY',
    title: 'Director of Partnership Development - Director of Neurodivergent Events',
    imageUrl: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67144f7bf312d46538860eaa.jpeg',
    phone: '(252)570-9453',
    emails: ['ali@emeraldowlproductions.com'],
    bio: [
      "Ali Cheely is a mother of 4 children, 3 of which have special needs, including neurological differences. Ali brings her teaching and coaching experience from school, church, and home settings to EOP. She has worked with children and adults with autism, Down syndrome, Split brain syndrome, Cerebral palsy, OCD, ADHD, global cognitive delays, and short stature/dwarfism. Ali has also worked with individuals who are non verbal and non ambulatory.",
      '"I know how hard it is when you feel there are no events that meet the unique needs of your kids. As Director of Neurodivergent Events, my job is to create specific experiences that meet the needs of populations that are often overlooked by event planners. It is truly humbling to use my knowledge and background to create memories via epic events for these populations."'
    ]
  }
];

export default function OurTeamPage() {
  return (
    <>
      <Header />
      <main className="pt-20 bg-gray-50 min-h-screen">
        <section className="bg-gradient-to-r from-emerald-700 to-emerald-900 text-white py-16 shadow-lg">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold tracking-tight">Meet The Team</h1>
            <p className="mt-4 text-xl text-emerald-100 max-w-2xl mx-auto">
              The passionate individuals dedicated to bringing unforgettable experiences to life.
            </p>
          </div>
        </section>
        
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-emerald-700 mb-12 text-center tracking-tight">
              Our Directors
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 lg:gap-16">
              {teamMembers.map((member, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row transform transition-all duration-300 hover:scale-105"
                >
                  <div className="md:w-1/3 relative h-80 md:h-auto">
                    <Image 
                      src={member.imageUrl} 
                      alt={member.name} 
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain object-center" 
                      priority={index < 2}
                    />
                  </div>
                  <div className="md:w-2/3 p-6 md:p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-emerald-600 mb-1 tracking-tight">{member.name}</h3>
                    <p className="text-md font-semibold text-emerald-500 mb-4">{member.title}</p>
                    
                    <div className="space-y-3 mb-6">
                      {member.emails && member.emails.map((email, i) => (
                        <a 
                          key={i}
                          href={`mailto:${email}`} 
                          className="flex items-center text-gray-700 hover:text-emerald-600 transition-colors group"
                        >
                          <Mail className="w-5 h-5 mr-3 text-emerald-500 group-hover:text-emerald-600 transition-colors" />
                          <span>{email}</span>
                        </a>
                      ))}
                      {member.phone && (
                        <a 
                          href={`tel:${member.phone.replace(/\\(|\\)|\\s|-/g, '')}`}
                          className="flex items-center text-gray-700 hover:text-emerald-600 transition-colors group"
                        >
                          <Phone className="w-5 h-5 mr-3 text-emerald-500 group-hover:text-emerald-600 transition-colors" />
                          <span>{member.phone}</span>
                        </a>
                      )}
                    </div>
                    
                    <div className="text-gray-600 space-y-4 text-sm leading-relaxed">
                      {member.bio.map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-16 lg:mt-20">
              <a 
                href="/careers" 
                className="inline-block px-8 py-4 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Join Our Team
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 