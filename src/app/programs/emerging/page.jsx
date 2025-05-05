import Image from "next/image";

export default function EmergingAthleteProgram() {
  return (
    <section className="bg-gray-800 py-16 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-100">From Local to Legendary – Your Journey Starts Here</h2>
          <p className="text-lg text-gray-200">
            We believe every child with a spark deserves a shot at greatness. Our Emerging Athlete Program is tailored for young, upcoming talent with potential to go pro.
          </p>

          <div>
            <h3 className="text-xl font-semibold text-gray-100 mb-2">Who’s It For?</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-200">
              <li>Kids aged 8 to 18 showing early promise in sports</li>
              <li>School and college athletes</li>
              <li>Sports academies looking for structured grooming</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-100 mb-2">What We Offer:</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-200">
              <li>Talent assessments & growth tracking</li>
              <li>Training plans for growth stages</li>
              <li>Nutrition support for teens</li>
              <li>Injury prevention & safe load management</li>
              <li>Regular reporting to parents/coaches</li>
            </ul>
          </div>

          <p className="text-md font-semibold text-orange-700">
            Is your child training with intent—or just playing around?
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="relative w-full h-60 rounded-xl overflow-hidden shadow-md">
            <Image src="/images/emerging1.jpg" alt="Young athlete training" fill className="object-cover" />
          </div>
          <div className="relative w-full h-60 rounded-xl overflow-hidden shadow-md">
            <Image src="/images/emerging2.jpg" alt="Talent assessment in progress" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
