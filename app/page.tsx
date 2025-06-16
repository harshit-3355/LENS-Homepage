import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import ValueProposition from "@/components/sections/ValueProposition";
import DataQuality from "@/components/sections/DataQuality";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";
import { ThemeProvider } from "@/components/theme-provider";

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
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
    </ThemeProvider>
  );
}