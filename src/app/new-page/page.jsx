"use client";
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const NewPage = () => {
  const { scrollYProgress } = useScroll();

  // Transformations
  const width = useTransform(scrollYProgress, [0, 0.3], ['18rem', '100vw']);
  const height = useTransform(scrollYProgress, [0, 0.3], ['9rem', '100vh']);
  const borderRadius = useTransform(scrollYProgress, [0.2, 0.5], ['1rem', '0rem']);
  const x = useTransform(scrollYProgress, [0, 0.3], ['40rem', '0rem']);
  const y = useTransform(scrollYProgress, [0, 0.2], ['-18rem', '20rem']);
  const rotate = useTransform(scrollYProgress, [0, 0.3], ['-12deg', '0deg']);

  return (
    <div>
      <div className="relative w-screen min-h-[200vh] overflow-x-hidden">
        {/* Initial Letters Layer */}
        <div className="flex items-center h-[50vh] justify-center text-[16rem] z-10 bg-white">
          <span>R</span>
          <span className="relative z-20">B</span>
          <span>S</span>
          <span>H</span>
        </div>

        {/* Animated Video */}
        <motion.video
          autoPlay
          loop
          muted
          className="absolute h-[100vh] object-cover"
          style={{
            width,
            height,
            rotate,
            x,
            y,
            borderRadius,
            zIndex: 5,
          }}
        >
          <source src="./video.webm" type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>

      </div>
      <div className="h-screen"></div>
    </div>
  );
};

export default NewPage;