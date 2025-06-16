'use client';
import Image from 'next/image'; 
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PricingSection() {
  return (
    <section id="pricing" className="py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#59AEE3] mb-6">
            Pricing
          </h2>
          <p className="text-xl text-[#FFFFFF] max-w-4xl mx-auto">
            Unlock the value of our <span className="bg-gradient-to-r from-[#149DF3] via-[#D264C2] to-[#9352E5] text-transparent bg-clip-text font-semibold">LENS</span> with flexible pricing options tailored to your needs
          </p>
        </div>
        
      
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Features List - Left Side */}
          <div className="bg-[#0F1E4C90] backdrop-blur-sm rounded-[26px] p-8 space-y-8">
            <h3 className="text-[14px] font-bold text-[#FFFFFF] mb-8">Features list</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-5 h-5 bg-[#0374BB] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-3 h-3 text-[#FFFFFF]" />
                </div>
                <div>
                  <h4 className="text-[#79CBFFF3] font-semibold text-[14px] mb-2">Unlimited simulations:</h4>
                  <p className="text-[#FFFFFF] text-[14px]">Explore any number of disease areas, drugs, or procedures.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-5 h-5 bg-[#0374BB] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <div>
                  <h4 className="text-[#79CBFFF3] font-semibold text-[14px] mb-2">Advanced Patient Customization:</h4>
                  <p className="text-[#FFFFFF] text-[14px]">Project incremental insights by defining detailed inputs of multiple patient groups.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-5 h-5 bg-[#0374BB] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <div>
                  <h4 className="text-[#79CBFFF3] font-semibold text-[14px] mb-2">Custom Criteria Control:</h4>
                  <p className="text-[#FFFFFF] text-[14px]">Include/exclude ICD codes, configure filters, and target cohorts.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-5 h-5 bg-[#0374BB] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <div>
                  <h4 className="text-[#79CBFFF3] font-semibold text-[14px] mb-2">AI Assistant for Insights:</h4>
                  <p className="text-[#FFFFFF] text-[14px]">Agentic AI-powered chatbot to guide, summarize, and interpret results.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-5 h-5 bg-[#0374BB] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <div>
                  <h4 className="text-[#79CBFFF3] font-semibold text-[14px] mb-2">Detailed KPI Analysis:</h4>
                  <p className="text-[#FFFFFF] text-[14px]">View detailed insights about various metrics pertaining to any specific therapeutic area with in-depth patient information.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Cards - Right Side */}
          <div className="space-y-6">
            {/* Free Trial Card */}
            <div className="bg-slate-800/60 backdrop-blur-sm rounded-[26px] p-8 border border-[#D9D9D9]">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#020F37] text-[#51BCFF] px-4 py-2 rounded-[13px] text-[14px]  font-semibold border border-[#0374BB]">
                  FREE TRIAL
                </div>
                <div className="text-[#FFFFFF] text-[14px] whitespace-nowrap">
                  1 Scenario | All features
                </div>
              </div>
              
              <p className="text-[#D9D9D9] text-[14px] mb-8 leading-relaxed">
                Gives you access to 1 scenario with all the features allowing you to have a look at market dynamics through our LENS
              </p>
              
              <Button className=" bg-[#0374BB] text-[#FFFFFF] py-3 text-[14px] rounded-[8px] hover:bg-[#0374BB] hover:text-[#FFFFFF]">
                Try now
              </Button>
            </div>

            {/* Premium Plan Card */}
            
            <div className="bg-gradient-to-br from-[#021A6D] to-[#003AA4] backdrop-blur-sm rounded-[26px] p-8  border border-[#FFF7F7] relative overflow-hidden">
           
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent"></div>
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-transparent text-[#FFFFFF] px-4 py-2 rounded-[13px] text-[14px] text-sm font-semibold border border-[#FFFFFF] flex items-center">
                    <Image src="/diamond.png" alt="Diamond Icon" width={16} height={16} className="mr-2" />
                    PREMIUM PLAN
                  </div>
                  <div className="text-[#FFFFFF] text-[14px] whitespace-nowrap">
                    Unlimited Scenarios | All features
                  </div>
                </div>
                
                <p className="text-[#D9D9D9] text-[14px] mb-8 leading-relaxed">
                  Gives you access to unlimited simulations to maximize your strategic insights and market opportunities
                </p>
                
                <Button 
                  variant="outline" 
                  className=" bg-[#FFFFFF] text-[#0374BB] py-3 text-[14px] font-semibold hover:bg-[#FFFFFF] hover:text-[#O374BB]"
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