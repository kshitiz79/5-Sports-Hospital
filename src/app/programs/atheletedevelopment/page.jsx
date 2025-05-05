import Image from "next/image";

export default function AthleteDevelopmentProgram() {
  return (
    <section className="bg-gray-800 py-16 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-100">Building Champions from the Ground Up</h2>
          <p className="text-lg text-gray-200">
            Whether you're just starting out or looking to take your game to the next level, our Athlete Development Program is designed for progressive, long-term growth.
          </p>

          <div>
            <h3 className="text-xl font-semibold text-gray-100 mb-2">Who is it for?</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-200">
              <li>Young athletes with raw talent</li>
              <li>Intermediate-level players seeking structure</li>
              <li>Athletes returning post-injury</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-100 mb-2">What’s Included:</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-200">
              <li>Customized physical training plans</li>
              <li>Biomechanics & movement correction</li>
              <li>Sport-specific skill enhancement</li>
              <li>Nutrition & recovery routines</li>
              <li>Mental resilience coaching</li>
            </ul>
          </div>

          <p className="text-md font-semibold text-indigo-700">
            Talent or training—what really makes a champion?
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="relative w-full h-60 rounded-xl overflow-hidden shadow-md">
            <Image src="/images/development1.jpg" alt="Athlete training session" fill className="object-cover" />
          </div>
          <div className="relative w-full h-60 rounded-xl overflow-hidden shadow-md">
            <Image src="/images/development2.jpg" alt="Skill enhancement drill" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}