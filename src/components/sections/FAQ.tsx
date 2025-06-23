"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  accordionItemVariants,
  accordionTriggerVariants,
  accordionContentVariants,
} from "@/components/ui/accordion";

import { faqSectionWrapper, faqHeading, faqBox } from "@/lib/styles";

const FAQItem = React.memo(function FAQItem({
  value,
  question,
  answer,
}: {
  value: string;
  question: string;
  answer: string;
}) {
  return (
    <AccordionItem value={value} className={accordionItemVariants({ state: "open" })}>
      <AccordionTrigger className={accordionTriggerVariants()}>{question}</AccordionTrigger>
      <AccordionContent className={accordionContentVariants()}>{answer}</AccordionContent>
    </AccordionItem>
  );
});

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className={faqSectionWrapper} ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
          className={faqHeading}
        >
          Frequently Asked Questions
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className={faqBox}>
            <Accordion type="single" collapsible className="w-full space-y-4">
              <FAQItem
                value="item-1"
                question="At what stages can drug manufacturers utilize the LENS app?"
                answer="LENS can be used at every drug life stage, including pre-launch, drug launches, and ongoing performance monitoring. The app helps predict market size, track patient cohorts, and understand competitive insights, market research, and understanding of patient journey."
              />
              <FAQItem
                value="item-2"
                question="What sets LENS apart from other solutions?"
                answer="LENS differentiates itself through its comprehensive patient-level data analytics, intuitive visualization tools, and therapeutic area specialization. Unlike competitors, we provide actionable insights with greater granularity while maintaining a user-friendly interface that requires minimal training."
              />
              <FAQItem
                value="item-3"
                question="How do patient data analytics affect drug manufacturers?"
                answer="Patient data analytics provide manufacturers with critical insights into prescription patterns, treatment adherence, market share, and patient demographics. These insights inform strategic decisions on market positioning, clinical trial design, and targeted marketing initiatives, ultimately improving product performance and patient outcomes."
              />
              <FAQItem
                value="item-4"
                question="What types of patient records does this app analyze?"
                answer="LENS analyzes de-identified patient claims data, including prescription records, diagnosis codes, procedure codes, and demographic information. All data is fully HIPAA-compliant and anonymized to protect patient privacy while providing valuable population-level insights across various therapeutic areas."
              />
              <FAQItem
                value="item-5"
                question="Can I save and revisit my query results in LENS?"
                answer="Yes, LENS allows you to save queries, create custom dashboards, and revisit previous analyses. This feature enables consistent tracking of key metrics over time and facilitates collaboration among team members by providing a central repository for insights and analytics."
              />
              <FAQItem
                value="item-6"
                question="Do I need to purchase additional data with the subscription?"
                answer="No, all necessary data is included in your subscription package. The Premium plan provides comprehensive access to our entire database covering all therapeutic areas. Additional custom data services are available for specialized needs, but the core subscription includes everything required for standard analytics and insights."
              />
            </Accordion>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
