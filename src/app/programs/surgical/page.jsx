import Image from "next/image";

export default function SurgicalPrehabRehab() {
  return (
    <section className="bg-gray-800y py-16 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-100">A Full-Circle Support System for Surgical Success</h2>
          <p className="text-lg text-gray-200">
            Injury doesn’t stop with surgery—and neither does our care. Our Pre-Rehab and Post-Surgical Rehab Program ensures you recover faster, safer, and smarter.
          </p>

          <div>
            <h3 className="text-xl font-semibold text-gray-100 mb-2">Before Surgery (Prehab):</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-200">
              <li>Strengthening muscles around the injury</li>
              <li>Education on the surgical process</li>
              <li>Setting rehab goals early</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-100 mb-2">After Surgery (Rehab):</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-200">
              <li>Pain management</li>
              <li>Mobility and functional restoration</li>
              <li>Sport-specific re-integration</li>
              <li>Return-to-play clearance tests</li>
            </ul>
          </div>

          <p className="text-md font-semibold text-red-700">
            Recovery starts before the surgery. Are you preparing enough?
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="relative w-full h-60 rounded-xl overflow-hidden shadow-md">
            <Image src="/images/rehab1.jpg" alt="Prehab exercise" fill className="object-cover" />
          </div>
          <div className="relative w-full h-60 rounded-xl overflow-hidden shadow-md">
            <Image src="/images/rehab2.jpg" alt="Post-surgical mobility training" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
