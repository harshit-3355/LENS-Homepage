"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function ValueProposition() {
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
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-500">LENS</span> helps you prioritize what matters most
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-blue-300 max-w-4xl mx-auto mb-16"
        >
          Powered by CustomerInsights.AI's extensive Anonymized Patient-Level Data, with LENS (Landscape Evaluation and Sizing) you can quickly navigate the U.S. claims data landscape to uncover key market dynamics across any therapeutic area—empowering faster, data-driven decisions.
        </motion.p>
        
        <div className="flex justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.95 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative max-w-4xl w-full"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-blue-900/20 backdrop-blur-sm border border-blue-800/50 rounded-2xl p-8 z-10">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/2">
                  <div className="aspect-square rounded-xl bg-gradient-to-br from-indigo-800/30 to-purple-800/30 flex items-center justify-center p-8">
                    <div className="relative w-full h-full">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 rounded-full border-8 border-indigo-500/30 flex items-center justify-center">
                          <div className="w-24 h-24 rounded-full border-8 border-purple-500/30 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500"></div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute top-10 right-8 w-16 h-16 rounded-full bg-amber-500/20 flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500"></div>
                      </div>
                      <div className="absolute bottom-10 left-8 w-20 h-20 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-white text-xl font-semibold mb-4">Key Benefits:</h3>
                  <ul className="space-y-3">
                    <BenefitItem text="Comprehensive U.S. market landscape visualization" />
                    <BenefitItem text="Patient-level insights across therapeutic areas" />
                    <BenefitItem text="Prescriber behavior patterns and trends" />
                    <BenefitItem text="Competitive analytics and market share analysis" />
                    <BenefitItem text="Longitudinal patient journey mapping" />
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function BenefitItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <div className="mt-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-400">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <span className="text-blue-100">{text}</span>
    </li>
  );
}