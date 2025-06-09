'use client';

import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/AnimatedSection";
import PricingPlans from "@/components/PricingPlans";
import Payouts from "@/components/Payouts";
import ProcessTimeline from "@/components/ProcessTimeline";
import CircularTextEffect from "@/components/CircularTextEffect";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold mb-6"
          >
            Become a Abcd Pro
            <br />
            in sec…
          </AnimatedSection>
          <AnimatedSection
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8"
          >
            🚀 Sign up. Fund. Trade.
          </AnimatedSection>
          <AnimatedSection
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-xl">
              Open FREE Account
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Process Section */}
      <ProcessTimeline />

      {/* Pricing Plans Section */}
      <PricingPlans />

      {/* Payouts Section */}
      <Payouts />

      {/* Circular Text Effect Section */}
      <CircularTextEffect />

      {/* Trade Anywhere Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-8"
          >
            Trade Anytime, Anywhere
          </AnimatedSection>
          <AnimatedSection
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-300 mb-12"
          >
            Access your trading account from any device, anywhere in the world
          </AnimatedSection>
          <AnimatedSection
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-xl">
              Get Started Now
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
