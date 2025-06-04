"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  BarChart, 
  FileSpreadsheet, 
  Heart, 
  Gauge, 
  Layers 
} from "lucide-react";

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <section className="w-full py-20 px-6 md:px-12 lg:px-24 bg-blue-950/50" ref={ref}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
          >
            Why you should <span className="text-indigo-400">choose us?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-blue-300 max-w-3xl mx-auto"
          >
            Our app is designed to simplify data, offer unmatched transparency, and provide actionable insights—empowering pharmaceutical professionals to make decisions with ease.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <FeatureCard 
            icon={<BarChart className="w-6 h-6 text-indigo-400" />}
            title="Demographic Insights"
            delay={0.2}
            isInView={isInView}
          />
          <FeatureCard 
            icon={<FileSpreadsheet className="w-6 h-6 text-indigo-400" />}
            title="Export Data Opportunities"
            delay={0.3}
            isInView={isInView}
          />
          <FeatureCard 
            icon={<Heart className="w-6 h-6 text-indigo-400" />}
            title="Therapeutic Areas"
            delay={0.4}
            isInView={isInView}
          />
          <FeatureCard 
            icon={<Gauge className="w-6 h-6 text-indigo-400" />}
            title="Easily Accessible"
            delay={0.5}
            isInView={isInView}
          />
          <FeatureCard 
            icon={<Layers className="w-6 h-6 text-indigo-400" />}
            title="Personalization Features"
            delay={0.6}
            isInView={isInView}
          />
        </div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  delay: number;
  isInView: boolean;
}

function FeatureCard({ icon, title, delay, isInView }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
      transition={{ duration: 0.6, delay }}
      className="bg-blue-900/20 backdrop-blur-sm border border-blue-800/50 rounded-xl p-6 flex flex-col items-center text-center hover:bg-blue-800/30 transition-all duration-300"
    >
      <div className="bg-blue-900/60 p-3 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-white font-medium">{title}</h3>
    </motion.div>
  );
}