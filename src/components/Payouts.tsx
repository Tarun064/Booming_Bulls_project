'use client';

import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/AnimatedSection";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Payouts() {
  const [count, setCount] = useState(1234567);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-20"
        >
          <source src="/videos/trading-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-8 text-white"
          >
            Fast & Secure Payouts
          </AnimatedSection>
          <AnimatedSection
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-300 mb-12"
          >
            Get your earnings instantly with our advanced payment system
          </AnimatedSection>
          <AnimatedSection
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-xl">
              Start Trading Now
            </Button>
          </AnimatedSection>

          <p className="text-gray-300 mb-8">
            Experience lightning-fast withdrawals with our advanced payment system. Get your earnings instantly, anytime, anywhere.
          </p>
          <motion.div 
            className="text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            ${count.toLocaleString()}
          </motion.div>
          <p className="text-gray-400">
            Total Payouts to Traders
          </p>
        </div>
      </div>
    </section>
  );
} 