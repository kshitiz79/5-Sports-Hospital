'use client';

import Image from 'next/image';

export default function ExpertDoctors() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold mb-6 tracking-wide">
          Our Expert Doctors
        </h2>

        <p className="max-w-2xl mx-auto text-gray-700 text-lg mb-10">
          Meet our highly experienced dental professionals committed to providing 
          personalized, compassionate care using the latest techniques and technology. 
          Their dedication ensures you receive the best treatment with comfort and confidence.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-8">
          <div className="flex-1">
            <Image
              src="/doctors/doctor1.jpg"
              alt="Doctor 1"
              width={400}
              height={500}
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="flex-1">
            <Image
              src="/doctors/doctor2.jpg"
              alt="Doctor 2"
              width={400}
              height={500}
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
