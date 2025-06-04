import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import ValueProposition from "@/components/sections/ValueProposition";
import DataQuality from "@/components/sections/DataQuality";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import { ThemeProvider } from "@/components/theme-provider";

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Hero />
        <Features />
        <ValueProposition />
        <DataQuality />
        <Pricing />
        <FAQ />
      </main>
    </ThemeProvider>
  );
}