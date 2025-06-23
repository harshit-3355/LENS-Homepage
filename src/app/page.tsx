"use client";

import dynamic from "next/dynamic";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

const Hero = dynamic(() => import("@/components/sections/Hero"), {
  ssr: false,
});

const Features = dynamic(() => import("@/components/sections/Features"), {
  ssr: false,
});

const ValueProposition = dynamic(() => import("@/components/sections/ValueProposition"), {
  ssr: false,
});

const DataQuality = dynamic(() => import("@/components/sections/DataQuality"), {
  ssr: false,
});

const Pricing = dynamic(() => import("@/components/sections/Pricing"), {
  ssr: false,
});

const FAQ = dynamic(() => import("@/components/sections/FAQ"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Header />
        <Hero />
        <Features />
        <ValueProposition />
        <DataQuality />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
