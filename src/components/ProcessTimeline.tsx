'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const borderAnimationKeyframes = `
@keyframes border-animation {
  0% {
    clip-path: polygon(0 0, 0 0, 0 0, 0 0);
  }
  25% {
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
  }
  50% {
    clip-path: polygon(100% 0, 100% 100%, 100% 100%, 100% 0);
  }
  75% {
    clip-path: polygon(100% 100%, 0 100%, 0 100%, 100% 100%);
  }
  100% {
    clip-path: polygon(0 100%, 0 0, 0 0, 0 100%);
  }
}
`;

// Add styles to document
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = borderAnimationKeyframes;
  document.head.appendChild(style);
}

const steps = [
  { title: 'Register your account', description: 'Create your free account in seconds' },
  { title: 'KYC', description: 'Complete your verification process' },
  { title: 'Deposit Funds', description: 'Add funds to start trading' },
  { title: 'Start Trading & Earn Profits', description: 'Begin your trading journey' },
];

export default function ProcessTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start center", "end center"] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="relative flex justify-center items-center min-h-[80vh] bg-gradient-to-b from-black to-gray-900 py-20">
      <div className="container mx-auto flex flex-col items-center px-4">
        <div className="relative w-full max-w-4xl min-h-[500px] flex flex-col justify-center">
          {/* Vertical timeline line */}
          <div className="absolute left-1/4 top-0 bottom-0 w-1 bg-gray-700 rounded-full z-0">
            <motion.div
              className="absolute left-0 top-0 w-full bg-white rounded-full z-10"
              style={{ height: lineHeight }}
            />
          </div>
          {/* Steps */}
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex items-center min-h-[120px]">
              {/* Number, centered on the timeline */}
              <div className="flex flex-col items-center justify-center w-1/4 relative z-20">
                {/* Space above number (except first) */}
                {idx !== 0 && <div className="h-8" />}
                <motion.span
                  initial={{ scale: 0.9, opacity: 0.5 }}
                  whileInView={{ scale: 1.2, opacity: 1 }}
                  viewport={{ once: false, amount: 0.7 }}
                  transition={{ duration: 0.5 }}
                  className="text-5xl font-extrabold text-white drop-shadow-lg select-none transition-all duration-300 text-center"
                  style={{ zIndex: 30, background: 'transparent', border: 'none', padding: 0 }}
                >
                  {String(idx + 1).padStart(2, '0')}
                </motion.span>
                {/* Space below number (except last) */}
                {idx !== steps.length - 1 && <div className="h-8" />}
              </div>
              {/* Step text, right-aligned on desktop, below on mobile */}
              <motion.div
                initial={{ opacity: 0, x: 40, filter: 'blur(8px)' }}
                whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                viewport={{ once: false, amount: 0.7 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="flex-1 ml-8 md:ml-24 text-left md:text-right"
              >
                <div className="text-lg text-gray-300 font-semibold mb-1">Step {idx + 1}</div>
                <div className="text-2xl text-white font-bold mb-2">{step.title}</div>
                <div className="text-gray-400 text-base max-w-xs md:ml-auto">{step.description}</div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 