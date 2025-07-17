import React from 'react';
import Header from '../../components/shared/Layout/Header';
import Footer from '../../components/shared/Layout/Footer';
import { Metadata } from 'next';
import Image from 'next/image';
import { Mail, Phone, Link as LinkIcon, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Team | Emerald Owl Productions',
  description: 'Meet the dedicated team behind Emerald Owl Productions, committed to creating unforgettable experiences.',
};

const teamMembers = [
  // Directors
  {
    name: 'KRISTA STROSNIDER',
    title: 'Chief Executive Officer',
    category: 'Director',
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
    category: 'Director',
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
    category: 'Director',
    imageUrl: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/67144f7bf312d46538860eaa.jpeg',
    phone: '(252)570-9453',
    emails: ['ali@emeraldowlproductions.com'],
    bio: [
      "Ali Cheely is a mother of 4 children, 3 of which have special needs, including neurological differences. Ali brings her teaching and coaching experience from school, church, and home settings to EOP. She has worked with children and adults with autism, Down syndrome, Split brain syndrome, Cerebral palsy, OCD, ADHD, global cognitive delays, and short stature/dwarfism. Ali has also worked with individuals who are non verbal and non ambulatory.",
      '"I know how hard it is when you feel there are no events that meet the unique needs of your kids. As Director of Neurodivergent Events, my job is to create specific experiences that meet the needs of populations that are often overlooked by event planners. It is truly humbling to use my knowledge and background to create memories via epic events for these populations."'
    ]
  },

  {
    name: 'SUSAN KELLUM',
    title: 'Project & Event Consultant',
    category: 'Director',
    imageUrl: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/6717b82fa3c865455809f845.jpeg',
    emails: ['susan@emeraldowlproductions.com'],
    bio: [
      "Susan is an experienced and passionate project manager, and communications professional, and change agent. After a successful career as a private sector marketing entrepreneur, she transitioned to local, then state, government…..and lived to tell about it! Her skill sets and experience include small business consulting, traditional/digital marketing, packaging, and event creation/management.",
      "She builds community relations through many different channels. She has served on the boards of the Vollis Simpson Whirligig Park, North Carolina Whirligig Festival, St. John Community Development Corporation, Eyes on Main Street Outdoor Photo Festival, Wilson Forward, Wilson Arts, The Edna Boykin Cultural Center, and most recently for the new Wilson hub of the Raleigh chapter of Dress for Success.",
      "Her most exciting and successful endeavor was being part of a team that turned an outsider artist's massive kinetic creations into an arts-driven economic catalyst for Downtown revitalization. A close second was creating Electric Light Fantasy, a unique award-winning drive-in laser show that brought visitors downtown in 2020 during Covid 19 restrictions, and continued through 2023. This project is what connected Susan with Emerald Owl Productions and opened the door for this current opportunity."
    ]
  },
  {
    name: 'MICHAEL HARRIS',
    title: 'Greater Pittsburgh Regional Director',
    category: 'Director',
    imageUrl: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/6717b94566be90aff5254396.jpeg',
    emails: ['info@emeraldowlproductions.com'],
    bio: [
      "Michael was born, raised, and has lived most of his life in the Pittsburgh area. The Steel City is where he and his wife, Stephanie, chose to raise their three children, Hannah, Aaron, and Rachel. After graduating Penn State, Michael joined the rat race of the corporate world in various supply chain and logistics roles, which has given him a chance to travel throughout the USA and a few international destinations, as well. He has served in various community organizations, coached his kids' teams, and was a board member and president of his synagogue's religious school. Michael joined Emerald Owl after a chance meeting with founder Mike Meyer. He looks forward to leading and growing the Emerald Owl Experience throughout the Greater Pittsburgh region."
    ]
  },
  {
    name: 'ROD SHULER',
    title: 'Triangle Area Regional Director (Raleigh, Durham, Chapel Hill)',
    category: 'Director',
    imageUrl: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/6717b9bcea401bdb0e1a4157.jpeg',
    emails: ['info@emeraldowlproductions.com'],
    bio: [
      "Rod Shuler has spent more than two decades in the music industry; a marathon stretch of live and recorded performances that have allowed the Raleigh, NC, native to achieve critical acclaim in the music industry.",
      "In addition to being an educator, Rod is an accomplished songwriter, DJ, producer, and event manager. Since 2009, Shuler has promoted and managed large-scale, multi-artist concerts and fundraising events for NC-based Lucas Gambit Entertainment, hosting internationally regarded talent like Lecrae, Andy Mineo, Trip Lee, and Tenth Avenue North. Additionally, as DJ RS, he regularly performs and emcees events across North Carolina and beyond"
    ]
  },
  {
    name: 'CARRIE JONES',
    title: 'Western North Carolina Regional Director (Mountain Region)',
    category: 'Director',
    imageUrl: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/6717ba0df07441348bef13c2.jpeg',
    emails: ['info@emeraldowlproductions.com'],
    bio: [
      "Carrie grew up in a small town outside Raleigh, NC. During school, her past time consisted of drawing into the wee hours and competing in quite a few sports which carried over into college at St. Andrews University in Laurinburg, NC. An art major at SAU, her focus became painting and sculpture. Carrie then attended graduate school at UCF's Florida Interactive Entertainment Academy, where she studied concept art, texturing, & 3D modeling. She even designed Emmy the Owl and our logo! Now Carrie lives near Asheville, NC where she is a freelance scenic artist and muralist. Carrie is happy to bring her experience and creative eye to the Emerald Owl team!"
    ]
  },
  // Technicians
  {
    name: 'JASON SALT',
    title: 'Technician',
    category: 'Technician',
    imageUrl: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/673443ee17f51a11659a5d3b.jpeg',
    bio: [
      "Being in love with lasers his whole life, Jason has been providing immersive abstract laser art to the entertainment scene since 2007. His first show was at the IEEE annual banquet and featured a self-built single color laser projector and used function generators out of the college lab to perform live abstracts to music. Intrigued with how laser projectors work, Jason started building his own systems in his garage.",
      "In 2013 Jason built his first full color RGB system. This was also the first system that interfaced with control software providing recording capabilities. Using Mathematics and Science, Jason was able to transform a laser into an artistic display of abstract colors and patterns and sync it to music. Learning about various hardware and software platforms Jason decided to build a custom live performance console. The console features old school analog controls, as well as new school digital controls.",
      "Jason made his debut into the professional scene in 2017 by winning first place for abstract show, at the International Laser Display Association annual conference. He followed up the next year in 2018 by winning first place a second time for the best abstract show.",
      "With the power of the live console and the recognition of the community Jason formed Salty Robot Productions in 2018. Salty Robot Productions has been working out of the Charlotte NC area and has been able to provide laser FX for:",
      "Carolina Panthers (NFL football team)",
      "Charlotte FC (Professional Soccer)*",
      "All Elite Wrestling",
      "Western Piedmont Symphony ( Newton NC)",
      "Yuri's Night at The Kennedy Space Center",
      "Bach Akademie Charlotte",
      "Mallarme Chamber Players",
      "Jason also partnered with cellist Kelvin Chang to form Chromatic Strings in 2022, blending classical cello music with abstract laser entertainment."
    ]
  },
  {
    name: 'ADAM BURNS',
    title: 'Technician',
    category: 'Technician',
    imageUrl: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/673443d6353d38205ba403af.jpeg',
    bio: [
      "Adam has been fascinated by lasers and laser artwork for his entire life. This fascination started in the early 1990's by experimenting with simple laser effects. He then began working with other laser show companies on a part-time basis in the early 2000's to learn more about laser show production. He joined the International Laser Display Association in 2008, and in 2011 became an ILDA-certified laser safety officer.",
      "In 2012, Adam formed Coastal Laser Shows, performing for a diverse group of clients including:",
      "CBS Television Studios in Hollywood, California",
      "The Gaylord Opryland Events Center in Nashville, Tennessee",
      "NASA's Space Shuttle Atlantis Exhibit Hall at Kennedy Space Center in Florida",
      "The Navy Base in Guantanamo Bay, Cuba.",
      "Adam is very active with the laser hobbyist / enthusiast community. In 2007 he started SELEM, the South Eastern Laser Enthusiast's Meeting. SELEM is an annual event that aims to bring the laser community together with the goal of sharing knowledge and increasing people's appreciation of laser artwork. From its humble beginnings, SELEM has grown into a 6-day long event that draws people from all across the USA and beyond."
    ]
  },
  {
    name: 'ROMAN HINES',
    title: 'Chief Technician & DJ for North Carolina Region',
    category: 'Technician',
    imageUrl: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/6717bc9db5adc613303fb794.png',
    bio: [
      "Roman Keith Hines has been in the entertainment industry since 1984. His family owned a roller skating rink in Hillsborough, North Carolina where he started spinning records and serving as the rink dee-jay. Realizing his passion and strength, Roman went to broadcasting school in 1987 at Lenoir Community College in Kinston. While in broadcasting school, he worked for 106.5 WSFL (New Bern) and 90.5 WKNS (Kinston). After broadcasting school, Roman returned home to Durham where he became a dee-jay at WDNC (620 AM). In 1991, he opened his own mobile dee-jay company under the name Sights and Sounds. To supplement his income, he signed on as a teacher's assistant in Chapel Hill, North Carolina.",
      "Sights and Sounds started doing mostly school dances. Over time, the company specialized in professional lighting, including lasers. This set Sights and Sounds apart from other companies, which secured higher end laser light dance parties, often hosting thousands of people. The addition of the lights gave Sights and Sounds the opportunity to provide lighting at concerts of all kinds, including KC and the Sunshine Band, Technotronic, Crystal Waters, and Kool And the Gang.",
      "Roman's passion is working with youth as he is highly sought after for everything from small birthday parties to large high school proms. His enthusiasm and constant interaction with the crowd make him a favorite with everyone at the party.",
      "Roman takes pride in sharing his life story with others as a way to show youth what they can accomplish. As a child, Roman was diagnosed with a processing learning disability and dyscalculia. He had great difficulty with organization, mathematics, hearing the teacher, and often \"just felt clueless.\" School was a struggle for much of his life. After attending the Hill Learning Development Center in Durham, he learned how to adjust. While he struggled in English and Math, Roman always wanted to work in entertainment and thus began to read about the subject. Through mostly self-study, Roman learned the trade which allowed him to start his own business of Sights and Sounds.",
      "Roman shares this story of his youth with others because he wants kids who struggle with any disability to realize that they are capable of finding a marketable strength with which they can make a difference and make a living. Roman is based in Durham."
    ]
  },
  // Behind The Scenes
  {
    name: 'PATRICK NEWMAN, PA',
    title: 'EOP Attorney-at-Law',
    category: 'BehindTheScenes',
    imageUrl: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/6717bdf7b5adc6e2363fb7f4.jpeg',
    address: [
        "534 N. 35th St Unit I",
        "Morehead City, NC 28557"
    ],
    phone: '252-269-6485',
    officePhone: '252-222-5252',
    emails: ['patrickdonaldnewman@gmail.com'],
    website: 'http://patrickdnewmanpa.com',
    bio: [
      "Patrick has been with Emerald Owl Productions since our first day of business in 2015.",
      "Patrick's guidance as the company attorney has been critical to getting our business off the ground and ensuring we are in compliance with all legal requirements."
    ]
  },

  {
    name: 'MARK DISORA',
    title: 'Project Manager',
    category: 'BehindTheScenes',
    imageUrl: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/6717bec0dae31b34d4869e5d.jpeg',
    bio: [
      "Mark brings his Solutions Analyst background from FedEx to EOP. Behind the scenes, Mark designs and builds various contraptions to make providing the EOP Experience to you more efficient.",
      "You may also see Mark at events leading the set up and the strike (Take down), or running Pittsburgh based foam parties.",
      "Mark also the designed and built \"The Annihilator Slime Machine,\" EOP's newest experience, completed in September, 2021."
    ]
  },
  {
    name: 'NISHA RAMNATH',
    title: 'Laser Show Designer & Technician - Serves all regions',
    category: 'BehindTheScenes',
    imageUrl: 'https://storage.googleapis.com/msgsndr/d2BYZGOF7ecSj21A0t4N/media/6717bb126326423f7c7846d6.jpeg',
    bio: [
      "Nisha Ramnath, owner of Phase Designs, started her career in lasers at one of the large firms in the US. After 5 years of being their lead laser designer, she established her own company which partners with laserists around the world to create content for shows. No idea is too complex, no deadline too short. She uses her expertise of working for professional sports, top musicians, community events, corporate clients etc. to help lasers companies accomplish creative designs that attract social media buzz and create memories for attendees."
    ]
  }
];

interface TeamMember {
  name: string;
  title: string;
  category: 'Director' | 'Technician' | 'BehindTheScenes';
  imageUrl: string;
  emails?: string[];
  phone?: string;
  officePhone?: string;
  website?: string;
  address?: string[];
  bio: string[];
}

export default function OurTeamPage() {
  const directors = teamMembers.filter(member => member.category === 'Director') as TeamMember[];
  const technicians = teamMembers.filter(member => member.category === 'Technician') as TeamMember[];
  const behindTheScenes = teamMembers.filter(member => member.category === 'BehindTheScenes') as TeamMember[];

  const renderMember = (member: TeamMember, index: number) => (
    <div 
      key={member.name + index} 
      className="bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row transform transition-all duration-300 hover:scale-105"
    >
      <div className="md:w-1/3 relative h-80 md:h-auto">
        <Image 
          src={member.imageUrl} 
          alt={member.name} 
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain object-center" 
          priority={index < 2} // Prioritize loading images for the first few members in each section
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
          {member.officePhone && (
            <p className="flex items-center text-gray-700">
              <Phone className="w-5 h-5 mr-3 text-emerald-500" />
              <span>Office: {member.officePhone}</span>
            </p>
          )}
          {member.address && (
            <div className="flex items-start text-gray-700">
              <MapPin className="w-5 h-5 mr-3 text-emerald-500 flex-shrink-0 mt-1" />
              <div>
                {member.address.map((line, i) => <span key={i} className="block">{line}</span>)}
              </div>
            </div>
          )}
          {member.website && (
            <a 
              href={member.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 hover:text-emerald-600 transition-colors group"
            >
              <LinkIcon className="w-5 h-5 mr-3 text-emerald-500 group-hover:text-emerald-600 transition-colors" />
              <span>{member.website.replace(/^https?:\/\//, '')}</span>
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
  );

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

            {directors.length > 0 && (
              <>
                <h2 className="text-3xl font-bold text-emerald-700 mb-12 text-center tracking-tight">
                  Our Directors
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 lg:gap-16 mb-16 lg:mb-24">
                  {directors.map(renderMember)}
                </div>
              </>
            )}

            {technicians.length > 0 && (
              <>
                <h2 className="text-3xl font-bold text-emerald-700 mb-12 text-center tracking-tight">
                  Our Technicians
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 lg:gap-16 mb-16 lg:mb-24">
                  {technicians.map(renderMember)}
                </div>
              </>
            )}

            {behindTheScenes.length > 0 && (
              <>
                <h2 className="text-3xl font-bold text-emerald-700 mb-12 text-center tracking-tight">
                  Our Behind The Scenes Team
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 lg:gap-16">
                  {behindTheScenes.map(renderMember)}
                </div>
              </>
            )}
            
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 