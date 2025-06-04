"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <section className="w-full py-20 px-6 md:px-12 lg:px-24" ref={ref}>
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl md:text-4xl font-bold mb-4 text-white"
        >
          Pricing
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-blue-300 max-w-2xl mx-auto mb-16"
        >
          Unlock the value of our LENS with flexible pricing options tailored to your needs
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-blue-900/20 backdrop-blur-sm border border-blue-800/50 rounded-2xl overflow-hidden"
          >
            <div className="bg-blue-800/30 py-4 px-6">
              <div className="text-center">
                <span className="bg-blue-900/60 text-blue-200 text-xs font-medium px-3 py-1 rounded-full">FREE TRIAL</span>
                <h3 className="text-white text-xl font-semibold mt-2">1 disease | All features</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-blue-300 text-center mb-6">
                Gain full access to 1 disease with all the features allowing you to explore capabilities through a real use case.
              </p>
              <ul className="space-y-3 mb-8">
                <PricingFeature text="Standard Data Visualizations: Explore any number of disease areas." />
                <PricingFeature text="Advanced Patient Characterization: Detect treatment patterns." />
                <PricingFeature text="Cohort Claims: Create and analyze custom cohorts." />
                <PricingFeature text="Diagnosis Filters: Navigate claims data with precision." />
                <PricingFeature text="Exportable Reports: Export insights as professional reports." />
              </ul>
              <Button className="w-full bg-blue-700 hover:bg-blue-600 text-white">
                Try now
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-b from-indigo-900/30 to-purple-900/30 backdrop-blur-sm border border-indigo-700/50 rounded-2xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-indigo-700/30 to-purple-700/30 py-4 px-6">
              <div className="text-center">
                <span className="bg-indigo-800/60 text-indigo-200 text-xs font-medium px-3 py-1 rounded-full">PREMIUM PLAN</span>
                <h3 className="text-white text-xl font-semibold mt-2">Unlimited diseases | All features</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-blue-300 text-center mb-6">
                Gain full access to unlimited diseases/areas to maximize your strategic insights and market opportunities.
              </p>
              <ul className="space-y-3 mb-8">
                <PricingFeature text="All Free Trial Features" />
                <PricingFeature text="Unlimited Therapeutic Areas: Comprehensive coverage." />
                <PricingFeature text="Custom API Access: Integrate with your systems." />
                <PricingFeature text="Advanced Analytics: Deep statistical modeling." />
                <PricingFeature text="Priority Support: Dedicated account manager." />
                <PricingFeature text="Custom Reports: Tailored to your business needs." />
              </ul>
              <Button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white">
                Contact us
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PricingFeature({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <div className="mt-0.5 bg-indigo-500/20 p-0.5 rounded-full text-indigo-400">
        <Check className="w-4 h-4" />
      </div>
      <span className="text-blue-100 text-sm">{text}</span>
    </li>
  );
}