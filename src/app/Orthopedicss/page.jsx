// pages/index.js

import Orthobiologicals from "@/components/Orthopedic/Orthopedic";
import OrthopedicCareSection from "@/components/Orthopedic/OrthopedicCareSection";




export default function page() {
  return (
    <div>
      <Orthobiologicals/>
      {/* <ServicesPage/> */}
      <OrthopedicCareSection/>
    </div>
  );
}