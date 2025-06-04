"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <section className="w-full py-20 px-6 md:px-12 lg:px-24" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl md:text-4xl font-bold mb-16 text-white"
        >
          Frequently Asked Questions
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border border-blue-800/50 rounded-lg overflow-hidden bg-blue-900/20 backdrop-blur-sm">
              <AccordionTrigger className="px-6 py-4 text-white hover:no-underline hover:bg-blue-800/30">
                At what stages can drug manufacturers utilize the LENS app?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-blue-300">
                LENS can be used at every drug life stage, including pre-launch, drug launches, and ongoing performance monitoring. The app helps predict market size, track patient cohorts, and understand competitive insights, market research, and understanding of patient journey.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border border-blue-800/50 rounded-lg overflow-hidden bg-blue-900/20 backdrop-blur-sm">
              <AccordionTrigger className="px-6 py-4 text-white hover:no-underline hover:bg-blue-800/30">
                What sets LENS apart from other solutions?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-blue-300">
                LENS differentiates itself through its comprehensive patient-level data analytics, intuitive visualization tools, and therapeutic area specialization. Unlike competitors, we provide actionable insights with greater granularity while maintaining a user-friendly interface that requires minimal training.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border border-blue-800/50 rounded-lg overflow-hidden bg-blue-900/20 backdrop-blur-sm">
              <AccordionTrigger className="px-6 py-4 text-white hover:no-underline hover:bg-blue-800/30">
                How do patient data analytics affect drug manufacturers?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-blue-300">
                Patient data analytics provide manufacturers with critical insights into prescription patterns, treatment adherence, market share, and patient demographics. These insights inform strategic decisions on market positioning, clinical trial design, and targeted marketing initiatives, ultimately improving product performance and patient outcomes.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border border-blue-800/50 rounded-lg overflow-hidden bg-blue-900/20 backdrop-blur-sm">
              <AccordionTrigger className="px-6 py-4 text-white hover:no-underline hover:bg-blue-800/30">
                What types of patient records does this app analyze?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-blue-300">
                LENS analyzes de-identified patient claims data, including prescription records, diagnosis codes, procedure codes, and demographic information. All data is fully HIPAA-compliant and anonymized to protect patient privacy while providing valuable population-level insights across various therapeutic areas.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5" className="border border-blue-800/50 rounded-lg overflow-hidden bg-blue-900/20 backdrop-blur-sm">
              <AccordionTrigger className="px-6 py-4 text-white hover:no-underline hover:bg-blue-800/30">
                Can I save and revisit my query results in LENS?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-blue-300">
                Yes, LENS allows you to save queries, create custom dashboards, and revisit previous analyses. This feature enables consistent tracking of key metrics over time and facilitates collaboration among team members by providing a central repository for insights and analytics.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6" className="border border-blue-800/50 rounded-lg overflow-hidden bg-blue-900/20 backdrop-blur-sm">
              <AccordionTrigger className="px-6 py-4 text-white hover:no-underline hover:bg-blue-800/30">
                Do I need to purchase additional data with the subscription?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-blue-300">
                No, all necessary data is included in your subscription package. The Premium plan provides comprehensive access to our entire database covering all therapeutic areas. Additional custom data services are available for specialized needs, but the core subscription includes everything required for standard analytics and insights.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}