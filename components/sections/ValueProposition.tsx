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
          className="text-center text-3xl md:text-4xl font-bold mb-4 text-[#FFFFFF]"
        >
         <div>
        <span className="bg-gradient-to-r from-[#149DF3] via-[#D264C2] to-[#9352E5] text-transparent bg-clip-text font-semibold">LENS</span> helps you prioritize
        </div>
        <div>what matters most</div>
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text -[14px] text-center text-[#FFFFFF] max-w-4xl mx-auto mb-16"
        >
          <div>
            <span className="font-semibold text-[14px]">
            Powered by CustomerInsights.AI's extensive Anonymized Patient-Level Data,
            </span>
            </div>
          <div>with LENS (Landscape Evaluation and Sizing) you can quickly navigate the U.S. claims data landscape to uncover key </div>
          <div>market dynamics across any therapeutic area—empowering faster, data-driven decisions.</div>
        </motion.div>
      </div>
    </section>
  );
}



