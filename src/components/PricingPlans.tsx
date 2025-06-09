'use client';

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import clsx from "clsx";

const plans = [
  {
    name: "Abcd Vintage",
    description: "Perfect for balanced, all-level traders looking for consistency and solid growth.",
    initialCapital: "$10%",
    spread: "from 0.2 pips",
    commission: "No Commission",
    leverage: "1:Unlimited",
    lotSize: "0.01",
    tradeLimit: "200 trades during peak hours",
    positions: "Unlimited",
    stopOut: "0%",
    marginCall: "30%",
    swap: "0%",
    risk: "Moderate",
    assets: "Forex, Crypto, Stocks, Commodities, Indices"
  },
  {
    name: "Abcd Cent",
    description: "Designed for beginners ready to step into the trading world with minimal risk.",
    initialCapital: "$10",
    spread: "from 0.3 pips",
    commission: "Zero Commission",
    leverage: "1:Unlimited",
    lotSize: "Same",
    tradeLimit: "200 trades during peak hours",
    positions: "Unlimited",
    stopOut: "0%",
    marginCall: "30%",
    swap: "0%",
    risk: "Low",
    assets: "Forex, Crypto, Stocks, Commodities, Indices"
  },
  {
    name: "Abcd Pro",
    description: "Ideal for experienced traders seeking precision, speed, and high-stakes performance.",
    initialCapital: "$500",
    spread: "from 0.1 pips",
    commission: "No Commission",
    leverage: "1:Unlimited",
    lotSize: "Same",
    tradeLimit: "200 trades during peak hours",
    positions: "Unlimited",
    stopOut: "0%",
    marginCall: "30%",
    swap: "0%",
    risk: "High",
    assets: "Forex, Crypto, Stocks, Commodities, Indices"
  }
];

interface Plan {
  name: string;
  description: string;
  initialCapital: string;
  spread: string;
  commission: string;
  leverage: string;
  lotSize: string;
  tradeLimit: string;
  positions: string;
  stopOut: string;
  marginCall: string;
  swap: string;
  risk: string;
  assets: string;
}

export default function PricingPlans() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16 text-white"
        >
          Compare your Abcd plan
        </motion.h2>
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl text-center mb-12 text-gray-300"
        >
          Start Small, Scale Big
        </motion.h3>
        <p className="text-center text-gray-400 mb-16">Flexible Deposits for Every Trader</p>

        <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 min-h-[480px]">
          {/* Left Card (behind, left) */}
          <motion.div
            initial={{ opacity: 0, x: -60, scale: 0.92 }}
            whileInView={{ opacity: 1, x: -60, scale: 0.92 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className={clsx(
              "hidden md:block relative z-10",
              "rounded-2xl shadow-2xl",
              "bg-gradient-to-br from-gray-800 to-gray-900",
              "min-w-[340px] max-w-[400px]",
              "relative before:absolute before:inset-0 before:p-[2px] before:rounded-2xl before:bg-gradient-to-r before:from-blue-500 before:via-purple-500 before:to-blue-500 before:animate-snake-border before:-z-10 before:opacity-100"
            )}
          >
            <div className="h-full w-full rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 p-[2px] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-light-move" />
              <PlanCard plan={plans[0]} />
            </div>
          </motion.div>

          {/* Center Card (front) */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1.05 }}
            transition={{ duration: 0.7 }}
            className={clsx(
              "relative z-20",
              "rounded-2xl shadow-2xl",
              "bg-gradient-to-br from-gray-900 to-gray-800",
              "min-w-[370px] max-w-[420px]",
              "relative before:absolute before:inset-0 before:p-[2px] before:rounded-2xl before:bg-gradient-to-r before:from-blue-500 before:via-purple-500 before:to-blue-500 before:animate-snake-border before:-z-10 before:opacity-100"
            )}
          >
            <div className="h-full w-full rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-[2px] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-light-move" />
              <PlanCard plan={plans[1]} highlight />
            </div>
          </motion.div>

          {/* Right Card (behind, right) */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.92 }}
            whileInView={{ opacity: 1, x: 60, scale: 0.92 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className={clsx(
              "hidden md:block relative z-10",
              "rounded-2xl shadow-2xl",
              "bg-gradient-to-br from-gray-800 to-gray-900",
              "min-w-[340px] max-w-[400px]",
              "relative before:absolute before:inset-0 before:p-[2px] before:rounded-2xl before:bg-gradient-to-r before:from-blue-500 before:via-purple-500 before:to-blue-500 before:animate-snake-border before:-z-10 before:opacity-100"
            )}
          >
            <div className="h-full w-full rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 p-[2px] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-light-move" />
              <PlanCard plan={plans[2]} />
            </div>
          </motion.div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes light-move {
          0% {
            transform: translateX(-100%) translateY(-100%);
          }
          25% {
            transform: translateX(100%) translateY(-100%);
          }
          50% {
            transform: translateX(100%) translateY(100%);
          }
          75% {
            transform: translateX(-100%) translateY(100%);
          }
          100% {
            transform: translateX(-100%) translateY(-100%);
          }
        }
        .animate-light-move {
          animation: light-move 3s linear infinite;
          width: 200%;
          height: 200%;
          background-size: 50% 50%;
          background-repeat: no-repeat;
          background-position: center;
          opacity: 0.5;
          filter: blur(8px);
        }
        @keyframes snake-border {
          0% {
            background-position: 0% 0%;
          }
          25% {
            background-position: 100% 0%;
          }
          50% {
            background-position: 100% 100%;
          }
          75% {
            background-position: 0% 100%;
          }
          100% {
            background-position: 0% 0%;
          }
        }
        .animate-snake-border {
          background-size: 200% 200%;
          animation: snake-border 3s linear infinite;
        }
      `}</style>
    </section>
  );
}

function PlanCard({ plan, highlight }: { plan: Plan; highlight?: boolean }) {
  return (
    <div className={clsx(
      "relative flex flex-col h-full p-8",
      highlight ? "text-blue-400" : "text-white"
    )}>
      <h4 className={clsx("text-2xl font-bold mb-4", highlight ? "text-blue-400" : "text-white")}>{plan.name}</h4>
      <p className="text-gray-400 mb-6">{plan.description}</p>
      <div className="space-y-4 text-gray-300 text-sm flex-grow">
        <div><span className="font-semibold">Initial Capital Requirement:</span> {plan.initialCapital}</div>
        <div><span className="font-semibold">Spread Advantage:</span> {plan.spread}</div>
        <div><span className="font-semibold">Trading Fees:</span> {plan.commission}</div>
        <div><span className="font-semibold">Leverage Capacity:</span> {plan.leverage}</div>
        <div><span className="font-semibold">Minimum Lot Size:</span> {plan.lotSize}</div>
        <div><span className="font-semibold">Trade Execution Limit:</span> {plan.tradeLimit}</div>
        <div><span className="font-semibold">Open Position Capacity:</span> {plan.positions}</div>
        <div><span className="font-semibold">Stop Out Threshold:</span> {plan.stopOut}</div>
        <div><span className="font-semibold">Margin Call Activation:</span> {plan.marginCall}</div>
        <div><span className="font-semibold">Swap Policy:</span> {plan.swap}</div>
        <div><span className="font-semibold">Risk Exposure:</span> {plan.risk}</div>
        <div><span className="font-semibold">Asset Options:</span> {plan.assets}</div>
      </div>
      <Button className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white">
        Start Trading
      </Button>
    </div>
  );
} 