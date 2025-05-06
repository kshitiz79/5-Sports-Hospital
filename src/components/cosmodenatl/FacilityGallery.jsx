'use client';

import Image from 'next/image';

const images = [
  '/facility/1.jpg',
  '/facility/2.jpg',
  '/facility/3.jpg',
  '/facility/4.jpg',
  '/facility/5.jpg',
  '/facility/6.jpg',
  '/facility/7.jpg',
  '/facility/8.jpg',
];

export default function FacilityGallery() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-2 tracking-wide">
          THE FACILITY
        </h2>
        <div className="w-16 h-0.5 bg-gray-400 mx-auto mb-10" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-sm">
              <Image
                src={src}
                alt={`Facility image ${index + 1}`}
                width={600}
                height={400}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
