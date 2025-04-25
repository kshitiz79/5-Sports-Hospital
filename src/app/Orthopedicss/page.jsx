// pages/index.js

import Orthobiologicals from "@/components/Orthopedic/Orthopedic";
import OrthopedicCareSection from "@/components/Orthopedic/OrthopedicCareSection";
import ServicesPage from "@/components/Orthopedic/ServicePage";



export default function page() {
  return (
    <div>
      <Orthobiologicals/>
      <ServicesPage/>
      <OrthopedicCareSection/>
    </div>
  );
}