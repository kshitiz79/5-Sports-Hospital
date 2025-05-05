'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

// Reusable component with hover zoom and padding effect
const HoverZoomImage = ({ img, onClick }) => (
  <div className="relative w-full h-full overflow-hidden group cursor-pointer">
    <div className="relative w-full h-full transition-all duration-300 transform group-hover:p-4 group-hover:scale-105">
      <Image
        src={img.src}
        alt={img.alt}
        fill
        className="object-cover transition-transform duration-300"
        onClick={onClick}
      />
    </div>
  </div>
);

export default function GalleryLayout() {
  const [moved, setMoved] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { id: 1, src: '/game1.png', alt: 'Kevin JZ Prodigy', description: 'BADMINTON' },
    { id: 2, src: '/game2.png', alt: 'Ballroom Performance', description: 'BALLROOM PERFORMANCE' },
    { id: 3, src: '/game3.png', alt: 'Speaker and audience', description: 'SPEAKER AND AUDIENCE' },
    { id: 4, src: '/game4.png', alt: 'Jazmine Miyake-Mugler', description: 'WHERE SPORTS MEET HEALTH EXCELLENCE' },
    { id: 5, src: '/game5.png', alt: 'Performer 1', description: 'RUNNING' },
    { id: 6, src: '/game6.png', alt: 'Performer 2', description: 'PERFORMER 2' },
    { id: 7, src: '/game7.png', alt: 'Crowd Shot', description: 'CROWD SHOT' },
    { id: 8, src: '/game8.png', alt: 'Backstage', description: 'SWIMMING' },
    { id: 9, src: '/game9.png', alt: 'Judge Panel', description: 'DRUMMER' },
    { id: 10, src: '/game10.png', alt: 'Voguing Moment', description: 'GOLF' },
  ];

  const handleImageClick = (image) => setSelectedImage(image);
  const handleClosePopup = () => setSelectedImage(null);

  const renderSection = (img) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
      {/* Top Left */}
      <div className="col-span-1 bg-[#53c8e9] p-16 flex items-center justify-center relative">
        <div className="w-full h-64 relative">
          <HoverZoomImage img={img[0]} onClick={() => handleImageClick(img[0])} />
        </div>
        <p className="absolute bottom-2 text-center w-full text-sm text-white font-semibold">
          {img[0].description}
        </p>
      </div>

      {/* Right Tall */}
      <div className="col-span-1 md:col-span-1 row-span-2 relative h-[800px]">
        <HoverZoomImage img={img[1]} onClick={() => handleImageClick(img[1])} />
      </div>

      {/* Bottom Row */}
      <div className="flex flex-row mt-4 md:mt-0 w-full gap-4">
        <div className="w-2/3 relative h-96">
          <HoverZoomImage img={img[2]} onClick={() => handleImageClick(img[2])} />
        </div>
        <div className="w-2/3 bg-black p-2">
          <div className="relative h-72 w-full">
            <HoverZoomImage img={img[3]} onClick={() => handleImageClick(img[3])} />
          </div>
          <p
            className={`mt-2 text-sm font-medium pr-2 cursor-pointer transition-transform duration-500 ${
              moved ? '-translate-x-20 text-left' : 'text-right'
            }`}
            onClick={() => setMoved(!moved)}
          >
            {img[3].description}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="w-full bg-black text-white py-10 px-4 md:px-16">
      {renderSection(images.slice(0, 4))}
      {renderSection(images.slice(4, 8))}

      {/* Final 2 Images */}
      <div className="grid grid-cols-2 gap-4">
        {images.slice(8).map((img) => (
          <div key={img.id} className="relative h-[400px]">
            <HoverZoomImage img={img} onClick={() => handleImageClick(img)} />
            <p className="absolute bottom-2 left-2 bg-black bg-opacity-70 px-2 py-1 text-sm font-semibold">
              {img.description}
            </p>
          </div>
        ))}
      </div>

      {/* Scrollable Popup */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-end z-50"
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <div className="bg-white w-full md:w-2/3 max-h-[90vh] rounded-t-lg overflow-y-auto p-6 relative text-black">
            <button
              onClick={handleClosePopup}
              className="absolute top-4 right-4 text-xl font-bold text-gray-600"
            >
              X
            </button>
            <div className="w-full h-96 relative mb-6">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
              />
            </div>
            <p className="text-lg font-semibold mb-4">
              {selectedImage.description}
            </p>
            <div className="space-y-4">
              <p>
                This is a placeholder for detailed content. You can describe the context, background,
                and story of the selected image here.
              </p>
              <p>
                Add more paragraphs, videos, or embedded links as needed. The modal will scroll if the
                content height exceeds 90% of the screen.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vehicula libero at nulla
                porttitor, non fermentum eros laoreet.
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
}
