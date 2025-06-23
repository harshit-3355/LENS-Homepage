"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { valueSection, valueHeading, lensGradientText, valueSubtext } from "@/lib/styles";

export default function ValueProposition() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className={valueSection} ref={ref}>
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
          className={cn(valueHeading)}
        >
          <div>
            <span className={cn(lensGradientText)}>LENS</span> helps you prioritize
          </div>
          <div>what matters most</div>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={cn(valueSubtext)}
        >
          <div>
            <span className="font-semibold">
              Powered by CustomerInsights.AI's extensive Anonymized Patient-Level Data,
            </span>{" "}
            with LENS
          </div>
          <div>
            (Landscape Evaluation and Sizing) you can quickly navigate the U.S. claims data
            landscape to
          </div>
          <div>
            uncover key market dynamics across any therapeutic area—empowering faster, data-driven
          </div>
          <div>access decisions.</div>
        </motion.div>
      </div>
    </section>
  );
}
