"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import CountUp from "react-countup";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="w-full pt-16 pb-24 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-500">LENS</span>
          </h1>
          <p className="text-sm text-blue-300 mb-4">Powered by extensive U.S. LANDSCAPE™ application</p>
          
          <h2 className="text-white text-xl md:text-2xl leading-tight mb-6">
            <span className="font-light">LENS (Landscape Evaluation and Sizing) allows you to </span>
            <span className="font-semibold">efficiently analyze healthcare and therapeutic area markets with sizing and share metrics.</span>
          </h2>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
              Subscribe now
            </Button>
            <Button variant="outline" className="border-indigo-400 text-white hover:bg-indigo-700">
              See pricing
            </Button>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="bg-indigo-600 rounded-full p-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <span className="text-white">Watch demo</span>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.95 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute w-full h-full bg-blue-800 opacity-10 rounded-2xl blur-xl"></div>
          <div className="relative bg-blue-800/30 backdrop-blur-sm border border-blue-700/50 rounded-2xl p-6 z-10">
            <div className="grid grid-cols-2 gap-4">
              <StatCard 
                label="Total"
                value={902655}
                trend="+2.6%"
                trendUp={true}
              />
              <StatCard 
                label="Patients"
                value={432073}
                trend="+1.8%"
                trendUp={true}
              />
              <StatCard 
                label="Claims"
                value={1534830}
                trend="+4.5%"
                trendUp={true}
              />
              <StatCard 
                label="Providers"
                value={2383}
                trend="-0.3%"
                trendUp={false}
              />
            </div>
            <div className="mt-4 bg-blue-900/60 rounded-xl p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-blue-300">RX Share</span>
                <span className="text-sm text-blue-300">74.86%</span>
              </div>
              <div className="w-full h-4 bg-blue-950 rounded-full overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-orange-400 to-amber-500" style={{ width: "74.86%" }}></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

interface StatCardProps {
  label: string;
  value: number;
  trend: string;
  trendUp: boolean;
}

function StatCard({ label, value, trend, trendUp }: StatCardProps) {
  return (
    <div className="bg-blue-900/60 rounded-xl p-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm text-blue-300">{label}</span>
        <span className={`text-xs ${trendUp ? 'text-green-400' : 'text-red-400'}`}>
          {trend}
        </span>
      </div>
      <div className="text-white font-semibold text-xl">
        <CountUp end={value} separator="," duration={2.5} />
      </div>
    </div>
  );
}