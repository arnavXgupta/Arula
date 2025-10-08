'use client';

import { motion, useMotionValue, useTransform, useAnimationFrame } from 'framer-motion';
import Image from 'next/image';
import React, { useRef, useState, useEffect } from 'react';

const Partner = () => {
  const images = [
    '/Header-Logo.png',
    '/hero-bg.png',
    '/hero1.png',
    '/Header-Logo.png',
    '/hero-bg.png',
    '/hero1.png',
  ];

  const baseX = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [totalWidth, setTotalWidth] = useState(0);

  const speed = 0.6; // smaller = slower scroll

  // Measure total scroll width dynamically
  useEffect(() => {
    if (containerRef.current) {
      const total = containerRef.current.scrollWidth / 2; // half because we duplicate images
      setTotalWidth(total);
    }
  }, [images]);

  // Move logos continuously (pause on hover)
  useAnimationFrame(() => {
    if (!isHovered && totalWidth > 0) {
      const move = (baseX.get() - speed) % -totalWidth;
      baseX.set(move);
    }
  });

  const x = useTransform(baseX, (v) => `${v}px`);

  return (
    <section className="relative overflow-hidden bg-white py-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-900">
        Our Trusted Partners
      </h2>

      <div className="flex overflow-hidden">
        <motion.div
          ref={containerRef}
          className="flex gap-8 p-2"
          style={{ x }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Original + Duplicate for seamless loop */}
          {[...images, ...images].map((image, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="relative h-20 w-40 md:h-24 md:w-48 flex-shrink-0 border border-gray-300 rounded-lg p-2 bg-white"
            >
              <Image
                src={image}
                alt={`Partner ${index + 1}`}
                fill
                className="object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partner;
