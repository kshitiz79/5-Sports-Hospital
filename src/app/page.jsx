'use client';



import AboutUs from "@/components/Home/AboutUs";
import AthleticHealthCards from "@/components/Home/AthleticHealthCards";
import ContactUs from "@/components/Home/ContactUs";
import FAQ from "@/components/Home/Faq";
import Hero from "@/components/Home/Hero";
import MeetOurExperts from "@/components/Home/MeetOurExperts";
import AthleteTruthSection from "@/components/Home/PartneredTeams";
import PerformanceQnA from "@/components/Home/PerformanceQnA";
import RecoverySystem from "@/components/Home/RecoverSystem";
import RecoveryProgram from "@/components/Home/RecoveryProgram";
import SuccessStories from "@/components/Home/Success";
import WhyChooseUs from "@/components/Home/WhyChooseUs";

import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['300', '400', '500', '600', '700'],
});

export default function Home() {
  return (
    <>
      <Hero />
      <AthleteTruthSection/>
      <PerformanceQnA/>
      <AthleticHealthCards/>
      <AboutUs />
      <RecoverySystem/>
      <WhyChooseUs />
      <RecoveryProgram/>
      <SuccessStories />
      <MeetOurExperts />
      <FAQ />
      <ContactUs />
    </>
  );
}
