"use client";

import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import React from "react";
import { dataQualityWrapper, dataQualityContainer, dataQualityNavButton } from "@/lib/styles";

const slides = [
  {
    title: "High Data Quality &\nTransparency",
    description:
      "LENS is powered by industry-validated, anonymized \npatient-level data from comprehensive medical and \npharmacy claims datasets. With coverage spanning over \n300 million patients across the U.S., LENS provides a robust \nfoundation for actionable insights. Confidence in your \ninsights starts with trust in the data.",
    bgImage: "/rectangle-1.png",
    fgImage: "/step-1.png",
  },
  {
    title: "Intuitive, Non-Technical\nUser Experience",
    description:
      "LENS leverages generative AI to guide users through an \nintuitive, step-by-step configuration experience. Whether \nyou're a commercial strategist or a market access lead, the \nplatform's non-technical interface allows you to generate \npowerful insights—without coding or data science support. \nAsk, explore, and act with ease.",
    bgImage: "/rectangle-2.png",
    fgImage: "/step-2.png",
  },
  {
    title: "Repeatable Across\nTherapeutic Areas &\nIndications",
    description:
      "From oncology to cardiology, from rare diseases to general \nmedicine—LENS is designed to be adaptable. Teams can \nrapidly deploy access favorability analyses, opportunity \nsizing, and HCP targeting for any therapy area or indication \nof interest. It’s one platform, infinitely scalable across your \nportfolio.",
    bgImage: "/rectangle-3.png",
    fgImage: "/step-3.png",
  },
  {
    title: "Broad Utility Across\nStrategic Teams",
    description:
      "LENS is purpose-built for cross-functional impact. Whether \nyou're in pipeline strategy, business development, \ncommercial analytics, or HEOR, LENS helps uncover \ninsights that inform asset valuation, access strategy, and go-\nto-market planning—driving smarter decisions from early \ndevelopment through post-launch.",
    bgImage: "/rectangle-4.png",
    fgImage: "/step-4.png",
  },
];

function Carousel() {
  const [index, setIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setIndex(prev => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setIndex(prev => (prev - 1 + slides.length) % slides.length);
  }, []);

  const currentSlide = useMemo(() => slides[index], [index]);
  const { title, description, bgImage, fgImage } = currentSlide;

  return (
    <div className={dataQualityWrapper}>
      <div className={dataQualityContainer}>
        <div className="absolute top-1/2 left-[550px] -translate-y-1/2 z-30">
          <div className="bg-white p-6 rounded-xl shadow-lg w-[250px] h-[200px] flex items-center justify-center">
            <Image
              src={fgImage}
              alt="Foreground"
              width={476}
              height={378}
              className="object-contain"
              loading="lazy"
            />
          </div>
        </div>

        <div className="absolute top-0 left-0 w-[700px] h-full rounded-l-[40px] overflow-hidden flex items-center justify-center">
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
                priority={index === 0}
              />
            </motion.div>
          </AnimatePresence>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 px-10 w-full max-w-6xl">
            <div className="text-white max-w-xl">
              <h2
                className="text-[48px] md:text-4xl font-bold mb-4"
                style={{ whiteSpace: "pre-line" }}
              >
                {title}
              </h2>
              <p
                className="text-[14px] leading-relaxed text-white/80"
                style={{ whiteSpace: "pre-line" }}
              >
                {description}
              </p>
            </div>
          </div>
        </div>

        <div
          className="absolute z-20 flex gap-4"
          style={{
            bottom: "50px",
            left: "calc(60% + 90px)",
          }}
        >
          <button onClick={prevSlide} className={dataQualityNavButton}>
            ←
          </button>
          <button onClick={nextSlide} className={dataQualityNavButton}>
            →
          </button>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Carousel);
