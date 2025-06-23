"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import {
  heroButtons,
  heroDescription,
  heroGradientBg,
  heroImageWrapper,
  heroSection,
  heroSubtitle,
  heroTitle,
} from "@/lib/styles";

const WatchDemo = React.memo(function WatchDemo({ onClick }: { onClick: () => void }) {
  return (
    <div
      className="flex items-center gap-2 bg-[#2A3554] rounded-[81px] px-4 py-2 w-fit cursor-pointer"
      onClick={onClick}
    >
      <div className="bg-[#C08AE1] rounded-full p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white"
        >
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      </div>
      <span className="text-white text-[14px]">Watch demo</span>
    </div>
  );
});

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className={heroSection} style={{ background: heroGradientBg }}>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-stretch gap-10 h-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          <div>
            <h1 className={heroTitle}>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#149DF3] via-[#D264C2] to-[#9352E5]">
                LENS
              </span>
            </h1>
            <p className={heroSubtitle}>Powered by generative AI, a ciPARTHENON™ application</p>

            <h2 className={heroDescription}>
              <span className="font-[700]">LENS</span>
              <span> (Landscape Evaluation and Sizing) allows you to </span>
              <br />
              <span className="font-[700]">efficiently assess market landscape</span>
              <span> for any therapeutic </span>
              <br />
              <span>area </span>
              <span className="font-[700]">using US claims data</span>
            </h2>

            <div className={heroButtons}>
              <Button variant="heroSubscribe">Subscribe now</Button>
              <Button variant="heroPricing">See pricing</Button>
            </div>
          </div>

          <WatchDemo onClick={() => setShowVideo(true)} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.95 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-stretch justify-center h-full"
        >
          <div className={heroImageWrapper}>
            <Image
              src="/image.png"
              alt="LENS Visual"
              width={600}
              height={600}
              priority
              className="object-contain w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
