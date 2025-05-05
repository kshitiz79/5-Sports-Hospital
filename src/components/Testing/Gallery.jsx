'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function GalleryLayout() {
  const [moved, setMoved] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      id: 1,
      src: '/fracture.jpg',
      alt: 'Kevin JZ Prodigy',
      description: 'ICON KEVIN JZ PRODIGY',
    },
    {
      id: 2,
      src: '/fracture.jpg',
      alt: 'Ballroom Performance',
      description: 'BALLROOM PERFORMANCE',
    },
    {
      id: 3,
      src: '/fracture.jpg',
      alt: 'Speaker and audience',
      description: 'SPEAKER AND AUDIENCE',
    },
    {
      id: 4,
      src: '/fracture.jpg',
      alt: 'Jazmine Miyake-Mugler',
      description: 'JAZMINE MIYAKE-MUGLER',
    },
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClosePopup = () => {
    setSelectedImage(null);
  };

  return (
    <section className="w-full bg-white py-10 px-4 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Top Left Image with purple background */}
        <div className="col-span-1 bg-[#AF92D4] p-16 flex items-center justify-center relative">
          <div className="w-full h-64 relative">
            <Image
              src={images[0].src}
              alt={images[0].alt}
              fill
              className="object-contain"
              onClick={() => handleImageClick(images[0])}
            />
          </div>
          <p className="absolute bottom-2 text-center w-full text-sm text-black font-semibold">
            {images[0].description}
          </p>
        </div>

        {/* Right Tall Image */}
        <div className="col-span-1 md:col-span-1 row-span-2 relative h-[800px]">
          <Image
            src={images[1].src}
            alt={images[1].alt}
            fill
            className="object-cover"
            onClick={() => handleImageClick(images[1])}
          />
        </div>

        {/* Bottom Row Images */}
        <div className="flex flex-row  mt-4 md:mt-0">
          {/* Bottom Left Lecture Image - Larger */}
          <div className="w-2/3 relative h-96">
            <Image
              src={images[2].src}
              alt={images[2].alt}
              fill
              className="object-cover"
              onClick={() => handleImageClick(images[2])}
            />
          </div>

          {/* Bottom Center Glamour Portrait - Smaller */}
          <div className="w-2/3 bg-white p-2">
            <div className="relative h-72 w-full">
              <Image
                src={images[3].src}
                alt={images[3].alt}
                fill
                className="object-cover"
                onClick={() => handleImageClick(images[3])}
              />
            </div>
            <p
              className={`mt-2 text-sm font-medium pr-2 cursor-pointer transition-transform duration-500 ${
                moved ? '-translate-x-20 text-left' : 'text-right'
              }`}
              onClick={() => setMoved(!moved)}
            >
              {images[3].description}
            </p>
          </div>
        </div>
      </div>

      {/* Popup Modal for Image Details */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-end z-50"
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <div className="bg-white w-full md:w-2/3 p-6 relative">
            <button
              onClick={handleClosePopup}
              className="absolute top-4 right-4 text-xl font-bold text-gray-600"
            >
              X
            </button>
            <div className="w-full h-96 relative">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
              />
            </div>
            <p className="mt-4 text-lg font-semibold">{selectedImage.description}</p>
          </div>
        </motion.div>
      )}
    </section>
  );
}
