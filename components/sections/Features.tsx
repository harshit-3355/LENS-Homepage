"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from 'next/image';

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <section className="w-full py-20 px-6 md:px-12 lg:px-24 bg-blue-950/50" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white lg:max-w-md"
          >
            Why you should <span style={{ color: '#149DF3' }}>choose us?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#DADADA] lg:max-w-xl"
          >
            Our app is designed to simplify data, offer unmatched transparency, and provide actionable insights—empowering pharmaceutical professionals to make decisions with ease.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <FeatureCard 
            image="/group-1.png"
            title="Demographic Insights"
            delay={0.2}
            isInView={isInView}
          />
          <FeatureCard 
             image="/group-2.png"
            title="Extensive Data Repositories"
            delay={0.2}
            isInView={isInView}
          />
          <FeatureCard 
            image="/group-3.png"
            title="All Therapeutic Areas"
            delay={0.4}
            isInView={isInView}
          />
          <FeatureCard 
            image="/group-4.png"
            title="Easily Accessible"
            delay={0.5}
            isInView={isInView}
          />
          <FeatureCard 
            image="/group-5.png"
            title="Predefined KPI Features"
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

function FeatureCard({ image, title, delay, isInView }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y:-10 }}
       className="backdrop-blur-sm border border-blue-800/50 pt-[32px] pr-[23px] pb-[32px] pl-[23px] rounded-[15px] flex flex-col items-center text-center hover:bg-blue-800/30 transition-all duration-300"
       style={{ backgroundColor: '#2E3D6B' }}
    >
      <div className="w-10 h-10 mb-4 rounded-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={40}
          height={40}
          className="object-cover w-full h-full"
        />
      </div>
      <h3 
      style={{
          color: '#59AEE3',
          fontSize: '14px',
          fontWeight: 600,
        }}
      >
        {title}
      </h3>
    </motion.div>
  );
}