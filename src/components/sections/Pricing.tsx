"use client";
import Image from "next/image";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import {
  pricingSection,
  pricingWrapper,
  pricingHeader,
  pricingTitle,
  pricingDescription,
  pricingGrid,
  featuresCard,
  pricingCardBase,
  trialCard,
  premiumCard,
  badgeFreeTrial,
  badgePremium,
  pricingDesc,
  planMeta,
} from "@/lib/styles";

export default function PricingSection() {
  return (
    <section id="pricing" className={pricingSection}>
      <div className={pricingWrapper}>
        <div className={pricingHeader}>
          <h2 className={pricingTitle}>Pricing</h2>
          <p className={pricingDescription}>
            Unlock the value of our{" "}
            <span
              className={cn(
                "bg-gradient-to-r from-[#149DF3] via-[#D264C2] to-[#9352E5]",
                "text-transparent bg-clip-text font-semibold"
              )}
            >
              LENS
            </span>{" "}
            with flexible pricing options tailored to your needs
          </p>
        </div>

        <div className={pricingGrid}>
          <div className={cn(pricingCardBase, featuresCard)}>
            <h3 className="text-[14px] font-bold text-[#FFFFFF] mb-8">Features list</h3>

            <div className="space-y-6">
              {[
                {
                  title: "Unlimited simulations:",
                  desc: "Explore any number of disease areas, drugs, or procedures.",
                },
                {
                  title: "Advanced Patient Customization:",
                  desc: "Project incremental insights by defining detailed inputs of multiple patient groups.",
                },
                {
                  title: "Custom Criteria Control:",
                  desc: "Include/exclude ICD codes, configure filters, and target cohorts.",
                },
                {
                  title: "AI Assistant for Insights:",
                  desc: "Agentic AI-powered chatbot to guide, summarize, and interpret results.",
                },
                {
                  title: "Detailed KPI Analysis:",
                  desc: "View detailed insights about various metrics pertaining to any specific therapeutic area with in-depth patient information.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="w-5 h-5 bg-[#0374BB] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <h4 className="text-[#79CBFFF3] font-semibold text-[14px] mb-2">
                      {item.title}
                    </h4>
                    <p className="text-[#FFFFFF] text-[14px]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className={cn(pricingCardBase, trialCard)}>
              <div className="flex items-center gap-4 mb-6">
                <div className={badgeFreeTrial}>FREE TRIAL</div>
                <div className={planMeta}>1 Scenario | All features</div>
              </div>

              <p className={pricingDesc}>
                Gives you access to 1 scenario with all the features allowing you to have a look at
                market dynamics through our LENS
              </p>

              <Button className="bg-[#0374BB] text-[#FFFFFF] py-3 text-[14px] rounded-[8px] hover:bg-[#0374BB] hover:text-[#FFFFFF]">
                Try now
              </Button>
            </div>

            <div className={cn(pricingCardBase, premiumCard)}>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent" />
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className={badgePremium}>
                    <Image
                      src="/diamond.png"
                      alt="Premium Plan Diamond Icon"
                      width={16}
                      height={16}
                      loading="lazy"
                      className="mr-2"
                    />
                    PREMIUM PLAN
                  </div>
                  <div className={planMeta}>Unlimited Scenarios | All features</div>
                </div>

                <p className={pricingDesc}>
                  Gives you access to unlimited simulations to maximize your strategic insights and
                  market opportunities
                </p>

                <Button
                  variant="outline"
                  className="bg-[#FFFFFF] text-[#0374BB] py-3 text-[14px] font-semibold hover:bg-[#FFFFFF] hover:text-[#0374BB]"
                >
                  Contact us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
