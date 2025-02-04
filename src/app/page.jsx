'use client';

import Hero from "@/components/Home/Hero";
import AboutUs from "@/components/Home/AboutUs";
import Services from "@/components/Home/Services";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import SuccessStories from "@/components/Home/Success";
import MeetOurExperts from "@/components/Home/MeetOurExperts";
import BlogAndHealthTips from "@/components/Home/BlogAndHealthTips";
import PartneredTeams from "@/components/Home/PartneredTeams";
import FAQ from "@/components/Home/FAQ";
import ContactUs from "@/components/Home/ContactUs";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Services />
      <WhyChooseUs />
      <SuccessStories />
      <MeetOurExperts />
      <BlogAndHealthTips />
      <PartneredTeams />
      <FAQ />
      <ContactUs />
    </div>
  );
}
