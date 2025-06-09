'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function CircularTextEffect() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section className="py-20 text-white relative overflow-hidden bg-black">
      <div className="container mx-auto px-4">
        <div ref={containerRef} className="relative h-[200px] overflow-hidden my-20">
          {/* Elliptical hollow with blur effect */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[100px] rounded-full bg-white/5 backdrop-blur-md overflow-hidden">
            {/* Blur overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
            
            {/* Text container */}
            <motion.div 
              className="absolute left-1/2 top-1/2 -translate-y-1/2 whitespace-nowrap"
              style={{ x, opacity }}
            >
              <span className="text-3xl font-bold text-white">
                TRADE • EARN • GROW • SUCCEED • TRADE • EARN • GROW • SUCCEED
              </span>
            </motion.div>
          </div>
        </div>

        {/* App Store and Play Store Buttons */}
        <div className="flex justify-center items-center gap-6 mt-8">
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hover:scale-105 transition-transform"
          >
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
              alt="Download on App Store"
              width={160}
              height={48}
              className="h-12 w-auto"
            />
          </motion.a>
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hover:scale-105 transition-transform"
          >
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Get it on Google Play"
              width={180}
              height={54}
              className="h-12 w-auto"
            />
          </motion.a>
        </div>
      </div>
    </section>
  );
} 