"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import React from "react";
import Image from "next/image";
import { FeatureCardProps } from "@/types/features";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { sectionPadding, featureGrid, featureHeading, featureDescription } from "@/lib/styles";

const featureCardVariants = cva(
  "backdrop-blur-sm border border-blue-800/50 px-[23px] py-[32px] rounded-[15px] flex flex-col items-center text-center hover:bg-blue-800/30 transition-all duration-300"
);

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className={cn(sectionPadding, "bg-blue-[#020B29]")} ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.6 }}
            className={featureHeading}
          >
            Why you should <br />
            <span style={{ color: "#149DF3" }}>choose us?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={featureDescription}
          >
            <span style={{ fontWeight: 300 }}>
              Our app is designed to simplify data, offer unmatched accessibility, and and <br />
              provide actionable insights—
            </span>
            <span style={{ fontWeight: 600 }}>
              empowering you to make confident
              <br />
              decisions with ease.
            </span>
          </motion.p>
        </div>

        <div className={featureGrid}>
          <FeatureCard
            image="/group-1.png"
            title={
              <>
                Democratized
                <br />
                Insights
              </>
            }
            delay={0.2}
            isInView={isInView}
          />
          <FeatureCard
            image="/group-2.png"
            title={
              <>
                Extensive Data
                <br />
                Repositories
              </>
            }
            delay={0.2}
            isInView={isInView}
          />
          <FeatureCard
            image="/group-3.png"
            title={
              <>
                All
                <br />
                Therapeutic Areas
              </>
            }
            delay={0.4}
            isInView={isInView}
          />
          <FeatureCard
            image="/group-4.png"
            title={
              <>
                Easily
                <br />
                Accessible
              </>
            }
            delay={0.5}
            isInView={isInView}
          />
          <FeatureCard
            image="/group-5.png"
            title={
              <>
                Predefined KPIs
                <br />
                Features
              </>
            }
            delay={0.6}
            isInView={isInView}
          />
        </div>
      </div>
    </section>
  );
}

const FeatureCard = React.memo(function FeatureCard({
  image,
  title,
  delay,
  isInView,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10 }}
      className={cn(featureCardVariants())}
      style={{ backgroundColor: "#2E3D6B63" }}
    >
      <div className="w-10 h-10 mb-4 rounded-full overflow-hidden">
        <Image src={image} alt="Feature Icon" width={40} height={40} className="object-contain" />
      </div>
      <h3
        style={{
          color: "#59AEE3",
          fontSize: "14px",
          fontWeight: 600,
          lineHeight: "1.3",
          textAlign: "center",
        }}
      >
        {title}
      </h3>
    </motion.div>
  );
});
