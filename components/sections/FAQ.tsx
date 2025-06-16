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
          className="text-center text-3xl md:text-4xl font-bold mb-16 text-[#59AEE3]"
        >
          Frequently Asked Questions
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="w-[1000px] h-[500px] bg-[#020E4650] rounded-[40px] mx-auto flex items-center justify-center p-10">
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="rounded-lg overflow-hidden bg-[#2F458C47] backdrop-blur-sm
              data-[state=open]:border-[2px] data-[state=open]:border-[#0374BB]">
              <AccordionTrigger className="px-6 py-4 text-[#A9DEFF] text-[14px] hover:no-underline">
                At what stages can drug manufacturers utilize the LENS app?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-[#E0F4FF] text-[14px]">
                LENS can be used at every drug life stage, including pre-launch, drug launches, and ongoing performance monitoring. The app helps predict market size, track patient cohorts, and understand competitive insights, market research, and understanding of patient journey.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="rounded-lg overflow-hidden bg-[#2F458C47] backdrop-blur-sm
            data-[state=open]:border-[2px] data-[state=open]:border-[#0374BB]">
              <AccordionTrigger className="px-6 py-4 text-[#A9DEFF] text-[14px] hover:no-underline">
                What sets LENS apart from other solutions?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-[#E0F4FF] text-[14px] ">
                LENS differentiates itself through its comprehensive patient-level data analytics, intuitive visualization tools, and therapeutic area specialization. Unlike competitors, we provide actionable insights with greater granularity while maintaining a user-friendly interface that requires minimal training.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="rounded-lg overflow-hidden bg-[#2F458C47] backdrop-blur-sm
            data-[state=open]:border-[2px] data-[state=open]:border-[#0374BB]">
              <AccordionTrigger className="px-6 py-4 text-[#A9DEFF] text-[14px] hover:no-underline">
                How do patient data analytics affect drug manufacturers?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-[#E0F4FF] text-[14px] ">
                Patient data analytics provide manufacturers with critical insights into prescription patterns, treatment adherence, market share, and patient demographics. These insights inform strategic decisions on market positioning, clinical trial design, and targeted marketing initiatives, ultimately improving product performance and patient outcomes.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="rounded-lg overflow-hidden bg-[#2F458C47] backdrop-blur-sm
            data-[state=open]:border-[2px] data-[state=open]:border-[#0374BB]">
              <AccordionTrigger className="px-6 py-4 text-[#A9DEFF] text-[14px] hover:no-underline">
                What types of patient records does this app analyze?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-[#E0F4FF] text-[14px] ">
                LENS analyzes de-identified patient claims data, including prescription records, diagnosis codes, procedure codes, and demographic information. All data is fully HIPAA-compliant and anonymized to protect patient privacy while providing valuable population-level insights across various therapeutic areas.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5" className="rounded-lg overflow-hidden bg-[#2F458C47] backdrop-blur-sm
            data-[state=open]:border-[2px] data-[state=open]:border-[#0374BB]">
              <AccordionTrigger className="px-6 py-4 text-[#A9DEFF] text-[14px] hover:no-underline">
                Can I save and revisit my query results in LENS?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-[#E0F4FF]text-[14px] ">
                Yes, LENS allows you to save queries, create custom dashboards, and revisit previous analyses. This feature enables consistent tracking of key metrics over time and facilitates collaboration among team members by providing a central repository for insights and analytics.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6" className="rounded-lg overflow-hidden bg-[#2F458C47] backdrop-blur-sm
            data-[state=open]:border-[2px] data-[state=open]:border-[#0374BB]">
              <AccordionTrigger className="px-6 py-4 text-[#A9DEFF] text-[14px] hover:no-underline">
                Do I need to purchase additional data with the subscription?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-[#E0F4FF] text-[14px] ">
                No, all necessary data is included in your subscription package. The Premium plan provides comprehensive access to our entire database covering all therapeutic areas. Additional custom data services are available for specialized needs, but the core subscription includes everything required for standard analytics and insights.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          </div>
        </motion.div>
      </div>
    </section>
  );
}