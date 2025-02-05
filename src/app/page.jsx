'use client';



import AboutUs from "@/components/Home/AboutUs";
import BlogAndHealthTips from "@/components/Home/BlogAndHealthTips";
import ContactUs from "@/components/Home/ContactUs";
import FAQ from "@/components/Home/Faq";
import Hero from "@/components/Home/Hero";
import MeetOurExperts from "@/components/Home/MeetOurExperts";
import PartneredTeams from "@/components/Home/PartneredTeams";
import Services from "@/components/Home/Services";
import SuccessStories from "@/components/Home/Success";
import WhyChooseUs from "@/components/Home/WhyChooseUs";



export default function Home() {
  return (
    <div >
      <Hero />
      <PartneredTeams />
      <AboutUs />
      <Services />
      <WhyChooseUs />
      <SuccessStories />
      <MeetOurExperts />
      <BlogAndHealthTips />
   
      <FAQ />
      <ContactUs />
    </div>
  );
}
