"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="w-full min-h-[600px] px-6 md:px-12 lg:px-24 py-16">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-stretch gap-10 h-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          <div>
          <h1 className="text-[72px] font-medium mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-400">LENS</span>
          </h1>
          <p className="mb-4 text-[14px] font-normal text-white">Powered by extensive U.S. LANDSCAPE™ application</p>
          
          <h2 className="text-white text-[16px] leading-tight mb-6">
            <span className="font-bold">LENS</span>
            <span> (Landscape Evaluation and Sizing) allows you to </span><br />
            <span className="font-bold">efficiently assess market landscape</span>
            <span> for any therapeutic </span><br />
            <span className="font-bold">area using US claims data</span>
            <span>.</span>
          </h2>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <Button 
              className="text-[#22AAFF] bg-[rgba(255,255,255,0.16)] border border-[#0075bb] hover:bg-white">
              Subscribe now
            </Button>
            <Button 
              variant="outline" 
              className="text-white bg-[rgba(4,117,187,1)] border border-white hover:bg-white hover:text-[#22AAFF]"
            >
              See pricing
            </Button>
          </div>
          </div>
          
          <div className="flex items-center gap-2 bg-[#2A3554] rounded-[81px] px-4 py-2 w-fit cursor-pointer"
            onClick={() => setShowVideo(true)}>
            <div className="bg-[#C08AE1] rounded-full p-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
              </svg>
            </div>
            <span className="text-white text-[14px]">Watch demo</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.95 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-stretch justify-center h-full"
        >
          <div className="w-full h-full max-h-[600px] flex items-center justify-center">
            <img
              src="/image.png"
              alt="LENS Visual"
              className="object-contain w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}