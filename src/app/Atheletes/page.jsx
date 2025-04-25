// pages/index.js

import ElevateProgramme from "@/components/programmes/ElevateProgram";
import Programmes from "@/components/programmes/programmes";


export default function page() {
  return (
    <div>
      <Programmes/>
      <ElevateProgramme/>
    </div>
  );
}