'use client';



import AboutUs from "@/components/Home/AboutUs";
import AthleticHealthCards from "@/components/Home/AthleticHealthCards";
import BlogAndHealthTips from "@/components/Home/BlogAndHealthTips";
import ContactUs from "@/components/Home/ContactUs";
import FAQ from "@/components/Home/Faq";
import Hero from "@/components/Home/Hero";
import MeetOurExperts from "@/components/Home/MeetOurExperts";
import AthleteTruthSection from "@/components/Home/PartneredTeams";
import PerformanceQnA from "@/components/Home/PerformanceQnA";
import RecoverySystem from "@/components/Home/RecoverSystem";
import RecoveryProgram from "@/components/Home/RecoveryProgram";

import Services from "@/components/Home/Services";
import SuccessStories from "@/components/Home/Success";
import WhyChooseUs from "@/components/Home/WhyChooseUs";



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
