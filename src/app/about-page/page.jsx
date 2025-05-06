'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contex/ThemeContext';
import { Space_Grotesk } from 'next/font/google';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['300', '400', '500', '600', '700'],
});

// Reusable Section Wrapper Component
const SectionWrapper = ({ children, className }) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${className}`}
    >
      {children}
    </motion.section>
  );
};

const foundersData = [
  {
    name: 'Dr. Pooja',
    imageSrc: '/doctor1.png',
    heading: 'Dr. Pooja -Consultant Physiotherapist & Sports Medicine',
    subheading: 'Founder & Director, Sports Medicine Specialist',
    description: `BPT, MPT in Orthopaedics, Certified Sports Physiotherapist
Dr. Pooja is a distinguished Consultant Physiotherapist at 5 Sports Hospital, specializing in sports rehabilitation, orthopaedic physiotherapy, and musculoskeletal disorders. With a remarkable academic background and extensive clinical expertise, Dr. Pooja has earned a reputation as one of the most sought-after physiotherapists in the field.
Educational Excellence & Advanced Training:
Dr. Pooja holds a Bachelor of Physiotherapy (BPT) and a Master of Physiotherapy (MPT) in Orthopaedics, which laid the foundation for her deep understanding of musculoskeletal function and rehabilitation. She is also a certified sports physiotherapist, with specialized training in treating sports injuries and enhancing athletic performance through rehabilitation.
Her commitment to ongoing learning and clinical innovation has set her apart as a leader in her field. Dr. Pooja continually updates her skills with advanced training, ensuring she provides the highest standard of care to her patients.
Areas of Expertise:
Sports Rehabilitation: Dr. Pooja is known for her advanced techniques in sports injury recovery, helping athletes at all levels recover quickly and effectively. She excels in treating sprains, strains, fractures, and ligament injuries, tailoring each treatment to the individual’s specific needs.


Orthopaedic Physiotherapy: With a specialization in orthopaedic rehabilitation, Dr. Pooja is expert in managing joint replacement recovery, post-surgical rehabilitation, and chronic pain management, using evidence-based physiotherapy techniques to restore function and mobility.


Manual Therapy: Dr. Pooja employs hands-on techniques such as joint mobilizations, soft tissue manipulation, and myofascial release to relieve pain, improve range of motion, and promote faster recovery.


Prevention & Performance Enhancement: She is a leader in injury prevention, focusing on muscle imbalances, postural corrections, and strengthening programs to prevent re-injury and optimize athletic performance.


Sports Taping and Modalities: Dr. Pooja is highly skilled in Kinesiology Taping, Electrotherapy, and other physical modalities that support healing, reduce pain, and enhance recovery.
Approach to Patient Care:
Dr. Pooja combines her exceptional technical knowledge with a patient-centered approach, ensuring each patient receives a personalized rehabilitation plan. Known for her compassionate care and dedication, Dr. Pooja has earned the trust of her patients, from elite athletes to individuals recovering from injuries or surgery. Her ability to empower patients to take control of their recovery is what sets her apart as a leading physiotherapist in the region.
With a focus on achieving lasting results, Dr. Pooja emphasizes holistic care, educating her patients on self-management techniques and providing them with the tools needed to avoid future injuries and maintain long-term physical health.

`,
    position: 'left',
  },
  {
    name: 'Dr. Nataraj',
    imageSrc: '/doctor2.png',
    heading: 'Dr. Nataraj HM',
    subheading: 'Dr. Nataraj HM - Head of Department Orthopaedics & Sports Surgery',
    description: `MBBS, MS Orthopaedics, MCh Orthopaedics (USAIM)
  Fellowship in Knee and Shoulder Surgery (Italy)
  Fellowship in Arthroscopy and Sports Medicine (ISAKOS)
  Fellowship in Joint Replacement (ISHKS)
  
  Dr. Nataraj HM is a renowned Senior Consultant and Head of the Orthopaedic Department at 5 Sports Hospital. He is a highly skilled and experienced surgeon, widely recognized for his contributions to orthopaedics and sports medicine. Dr. Nataraj’s journey began with a MBBS from KIMS, Bangalore, followed by an MS in Orthopaedics from KSHEMA, Mangalore, and an MCh in Orthopaedics from the University of Seychelles. His passion for the field drove him to pursue advanced fellowships in Knee and Shoulder Surgery in Italy and Arthroscopy & Sports Medicine with the International Society of Arthroscopy (ISAKOS).
  
  Key Achievements:
  - First surgeon in Southeast Asia to perform knee arthroscopic meniscal repair using the Zimmer-Biomet meniscal repair device.
  - First in India to perform computer navigated total shoulder replacement and arthroscopic ACL reconstruction with ‘button fix’ adjustable loop anchors.
  - Recognized for groundbreaking surgeries in rotator cuff repair, shoulder dislocation surgeries, and minimally invasive joint replacements.
  - Specializes in robotic knee replacements, PRP injections, and stem cell therapies.
  
  Dr. Nataraj is a member of ISAKOS, the Indian Arthroscopy Society, and other prestigious bodies. His focus on precision, innovation, and patient care makes him a leader in Indian orthopaedics.`,
    position: 'right',
  },
  
];


const teamMembers = [
  {
    name: 'Dr. Pooja Jhade',
    title: 'Founder | Director',
    phone: '+91 9353 555 755 | +91 9353 555 855',
    email: 'dr.pooja@5sportshealth.com',
    address: 'No 40 & 41, Ambedkar Nagar, Mullur, Sarjapur Road, Bangalore 560003',
    website: '5sportshealth.com',
  },
  {
    name: 'Dr. Nataraj H M',
    title: 'HOD - ORTHOPAEDICS, Specialist in Sports Surgery',
    phone: '+91 9353 555 755 | +91 9353 555 855',
    email: 'dr.nataraj@5sportshealth.com',
    address: 'No 40 & 41, Ambedkar Nagar, Mullur, Sarjapur Road, Bangalore 560003',
    website: '5sportshealth.com',
  },
  {
    name: 'Dr. Radhesh R Menon',
    title: 'Consultant Orthopaedic Hand & Upperlimb Surgeon',
    phone: '+91 9353 555 755 | +91 9353 555 855',
    email: 'dr.radhesh@5sportshealth.com',
    address: 'No 40 & 41, Ambedkar Nagar, Mullur, Sarjapur Road, Bangalore 560003',
    website: '5sportshealth.com',
  },
  
];

const features = [
  {
    title: 'Expert Team',
    desc: 'Led by Dr. Pooja and Dr. Nataraj, our team brings decades of experience in sports medicine.'
  },
  {
    title: 'Personalized Care',
    desc: 'Each athlete receives customized treatment plans for optimized recovery and performance.'
  },
  {
    title: 'Cutting-edge Technology',
    desc: 'We use the latest medical and sports science tools for accurate diagnostics and treatment.'
  },
  {
    title: 'Holistic Approach',
    desc: 'From nutrition to physiotherapy, we address every aspect of athletic well-being.'
  }
];


export default function AboutUs() {
  const { darkMode } = useTheme();
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [popupContent, setPopupContent] = useState({});

  const handleImageClick = (content) => {
    setPopupContent(content);
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className={`min-h-screen font-space-grotesk transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} ${spaceGrotesk.variable}`}>
      {/* Hero Section */}
      <SectionWrapper className={`bg-gradient-to-br ${darkMode ? 'from-gray-900 to-gray-800' : 'from-green-50 to-white'}`}>
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' ...")`,
            }}
          />
        </div>
        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <motion.nav variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex justify-center text-sm mb-6" aria-label="Breadcrumb">
            <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors">Home</Link>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-green-600 dark:text-green-500">About Us</span>
          </motion.nav>
          <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-400 dark:from-green-400 dark:to-green-200">About Us</motion.h2>
          <motion.p variants={itemVariants} className="text-lg sm:text-xl leading-relaxed mb-10 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            At 5 Sports, we redefine sports medicine with a focus on unlocking athletic potential. Our team, with over 18 years of expertise, delivers innovative diagnostics, rapid recovery protocols, and personalized injury prevention strategies.
          </motion.p>
          <motion.button variants={itemVariants} className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${darkMode ? 'bg-green-500 hover:bg-green-600 text-white' : 'bg-green-600 hover:bg-green-700 text-white'}`}>Watch Our Story</motion.button>
        </div>
      </SectionWrapper>

      {/* 5 Sports Hospital Section */}
      <SectionWrapper className="bg-transparent">
        <div className="container mx-auto max-w-5xl">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`rounded-2xl shadow-2xl p-8 ${darkMode ? 'bg-gray-800' : 'bg-white'} transform hover:shadow-3xl transition-all duration-300`}>
            <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold mb-6 text-green-600 dark:text-green-400">Why Choose 5 Sports?</motion.h2>
            <motion.ul variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
  {features.map((item, index) => (
    <motion.li key={index} variants={itemVariants} className={`flex items-start space-x-4 p-4 rounded-lg hover:bg-opacity-10 transition-colors duration-200 ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-green-50'}`}>
      <span className="text-green-500 text-2xl">●</span>
      <div>
        <strong className="text-green-600 dark:text-green-400 text-lg sm:text-xl">{item.title}</strong>
        <p className="text-gray-700 dark:text-gray-300 text-base">{item.desc}</p>
      </div>
    </motion.li>
  ))}
</motion.ul>

            <motion.p variants={itemVariants} className="mt-8 text-lg text-gray-700 dark:text-gray-300">Partner with us to achieve peak performance through world-class care.</motion.p>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Founders Popup Section */}
      <div className="p-8">
        <h1 className='text-3xl font-bold text-center mb-4'>OUR FOUNDERS</h1>
        <div className='flex flex-row justify-center gap-4'>
          {foundersData.map((founder, index) => (
            <div key={index} className='w-full sm:w-1/2 text-center'>
              <h1 className='text-3xl text-bold p-4 uppercase'>{founder.name}</h1>
              <img
                src={founder.imageSrc}
                alt={founder.name}
                className='cursor-pointer'
                onClick={() => handleImageClick(founder)}
              />
            </div>
          ))}
        </div>
        {isPopupVisible && (
  <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4'>
    <motion.div
      initial={{ x: popupContent.position === 'left' ? '-100%' : '100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 15 }}
      className='bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-7xl w-full max-h-[90vh] overflow-y-auto p-8 relative'

    >
      <button
        onClick={closePopup}
        className='absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white'
      >
        ✕
      </button>
      <img
        src={popupContent.imageSrc}
        alt={popupContent.name}
        className='w-full max-h-80 object-contain rounded-md mb-4'
      />
      <h2 className='text-2xl font-bold mb-1'>{popupContent.heading}</h2>
      <h3 className='text-lg font-medium text-green-600 dark:text-green-400 mb-4'>{popupContent.subheading}</h3>

      {/* Render the description with proper formatting */}
      <div className='text-gray-700 dark:text-gray-300 space-y-4'>
        {popupContent.description.split('\n').map((line, index) => {
          if (line.trim() === '') {
            return null; // Skip empty lines
          } else if (line.trim().endsWith(':')) {
            // Render as subheading
            return (
              <h4 key={index} className='text-lg font-semibold mt-4'>
                {line.trim()}
              </h4>
            );
          } else if (line.trim().startsWith('-')) {
            // Render as list item
            return (
              <ul key={index} className='list-disc list-inside'>
                <li>{line.trim().substring(1).trim()}</li>
              </ul>
            );
          } else {
          //   <div>
          //   <p>
          //   MBBS, MS Orthopaedics, MCh Orthopaedics (USAIM)<br />
          //   Fellowship in Knee and Shoulder Surgery (Italy)<br />
          //   Fellowship in Arthroscopy and Sports Medicine (ISAKOS)<br />
          //   Fellowship in Joint Replacement (ISHKS)
          // </p>

          // <p>
          //   Dr. Nataraj HM is a renowned Senior Consultant and Head of the Orthopaedic Department at 5 Sports Hospital. He is a highly skilled and experienced surgeon, widely recognized for his contributions to orthopaedics and sports medicine.
          // </p>

          // <p>
          //   Dr. Nataraj’s journey began with an MBBS from KIMS, Bangalore, followed by an MS in Orthopaedics from KSHEMA, Mangalore, and an MCh in Orthopaedics from the University of Seychelles. His passion for the field drove him to pursue advanced fellowships in Knee and Shoulder Surgery in Italy and Arthroscopy & Sports Medicine with the International Society of Arthroscopy (ISAKOS).
          // </p>

          // <h3 className="text-lg font-semibold text-gray-800 mt-4">Key Achievements:</h3>
          // <ul className="list-disc pl-5 space-y-1">
          //   <li>First surgeon in Southeast Asia to perform knee arthroscopic meniscal repair using the Zimmer-Biomet meniscal repair device.</li>
          //   <li>First in India to perform computer-navigated total shoulder replacement and arthroscopic ACL reconstruction with ‘button fix’ adjustable loop anchors.</li>
          //   <li>Recognized for groundbreaking surgeries in rotator cuff repair, shoulder dislocation surgeries, and minimally invasive joint replacements.</li>
          //   <li>Specializes in robotic knee replacements, PRP injections, and stem cell therapies.</li>
          // </ul>

          // <p>
          //   Dr. Nataraj is a member of ISAKOS, the Indian Arthroscopy Society, and other prestigious bodies.
          // </p>

          // <p>
          //   His focus on precision, innovation, and patient care makes him a leader in Indian orthopaedics.
          // </p>
          // </div>
            // Render as paragraph
            return <p key={index}>{line.trim()}</p>;
          }
        })}
      </div>
    </motion.div>
  </div>
)}


      </div>

      {/* Team Section */}
      <section className="py-10 px-4 md:px-12 lg:px-24 bg-gray-50 dark:bg-gray-900">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className="rounded-2xl shadow-md hover:shadow-xl transition">
              <CardContent className="p-5 space-y-2">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-sm">{member.title}</p>
                <p className="text-sm">📞 {member.phone}</p>
                <p className="text-sm">📧 <a href={`mailto:${member.email}`} className="text-blue-600">{member.email}</a></p>
                <p className="text-sm">📍 {member.address}</p>
                <p className="text-sm">🌐 <a href={`https://${member.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-600">{member.website}</a></p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
