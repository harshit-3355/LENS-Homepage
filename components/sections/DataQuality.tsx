"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const slides = [
  {
    title: "High Data Quality & Transparency",
    description:
      "LENS is powered by industry-validated, anonymized patient-level data from comprehensive medical and pharmacy claims datasets. With coverage spanning over 300 million patients across the U.S., LENS provides a robust foundation for actionable insights. Confidence in your insights starts with trust in the data.",
    bgImage: "/rectangle-1.png",
    fgImage: "/step-1.png",
  },
  {
    title: "Intuitive, Non-Technical User Experience",
    description:
      "LENS leverages generative AI to guide users through an intuitive, step-by-step configuration experience. Whether you're a commercial strategist or a market access lead, the platform's non-technical interface allows you to generate powerful insights—without coding or data science support. Ask, explore, and act with ease.",
    bgImage: "/rectangle-2.png",
    fgImage: "/step-2.png",
  },
   {
    title: "Repeatable Across Therapeutic Areas & Indications",
    description:
      "From oncology to cardiology, from rare diseases to general medicine—LENS is designed to be adaptable. Teams can rapidly deploy access favorability analyses, opportunity sizing, and HCP targeting for any therapy area or indication of interest. It’s one platform, infinitely scalable across your portfolio.",
    bgImage: "/rectangle-3.png",
    fgImage: "/step-3.png",
  },
   {
    title: "Broad Utility Across Strategic Teams",
    description:
      "LENS is purpose-built for cross-functional impact. Whether you're in pipeline strategy, business development, commercial analytics, or HEOR, LENS helps uncover insights that inform asset valuation, access strategy, and go-to-market planning—driving smarter decisions from early development through post-launch.",
    bgImage: "/rectangle-4.png",
    fgImage: "/step-4.png",
  },
  // Add more slides if needed
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const { title, description, bgImage, fgImage } = slides[index];

  return (
    <div className="relative w-[900px] h-[400px] overflow-hidden rounded-2xl flex items-center justify-center bg-gray-900">
      {/* Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={bgImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={bgImage}
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 px-10 w-full max-w-6xl">
        {/* Left Text */}
        <div className="text-white max-w-xl">
          <h2 className="text-[48px] text-[#FFFFFF] md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-[14px] leading-relaxed text-[#FFFFFFCC]">{description}</p>
        </div>

        {/* Foreground Image Box */}
        <div className="bg-white p-6 rounded-xl shadow-lg w-[250px] h-[200px] flex items-center justify-center">
          <Image src={fgImage} alt="Foreground" width={376} height={378} className="object-contain" />
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-5 right-10 flex gap-4">
        <button
          onClick={prevSlide}
          className="w-10 h-10 rounded-full bg-white/80 text-black hover:bg-white"
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          className="w-10 h-10 rounded-full bg-white/80 text-black hover:bg-white"
        >
          →
        </button>
      </div>
    </div>
  );
}