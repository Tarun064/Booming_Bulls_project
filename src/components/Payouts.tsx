'use client';

import { Button } from "@/components/ui/button";
import { AnimatedSection } from "./AnimatedSection";
import { useState, useEffect } from 'react';

export default function Payouts() {
  const [payoutAmount, setPayoutAmount] = useState(999151);

  useEffect(() => {
    const interval = setInterval(() => {
      setPayoutAmount(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedPayout = `$${payoutAmount.toLocaleString()}+`;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section className="py-20 text-white relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://framerusercontent.com/assets/xECpz8zWZNwZhoPNVva63Z5xs.mp4" type="video/mp4" />
        </video>
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <AnimatedSection
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-16"
        >
          We've Paid Out Over $1M to Traders
        </AnimatedSection>
        
        <AnimatedSection
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <p className="text-2xl mb-4">Your Trust is Our Fuel—Power Up with Abcd</p>
          <div className="text-6xl font-bold text-blue-500 mb-8">{formattedPayout}</div>
        </AnimatedSection>

        <AnimatedSection
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-xl mb-8">Are you Next?</p>
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-xl"
            onClick={scrollToTop}
          >
            Start Trading Now
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
} 