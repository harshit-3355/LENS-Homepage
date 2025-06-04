"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Database, ChartBar, FileCheck } from "lucide-react";

export default function DataQuality() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <section className="w-full py-20 px-6 md:px-12 lg:px-24 bg-blue-950/50" ref={ref}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -20 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              High Data Quality & Transparency
            </h2>
            <p className="text-blue-300 mb-8">
              LENS is powered by industry-validated, anonymized patient claims data drawn from multiple pharmacy claims datasets. With coverage spanning over 300 million patients across the U.S., LENS provides a comprehensive view of market dynamics, allowing you to base your insights safely with trust in the data.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <DataFeature 
                icon={<Shield className="w-5 h-5" />}
                title="HIPAA Compliant"
                description="Fully anonymized data processing with privacy controls"
              />
              <DataFeature 
                icon={<Database className="w-5 h-5" />}
                title="300M+ Patient Records"
                description="Comprehensive U.S. coverage across therapeutic areas"
              />
              <DataFeature 
                icon={<ChartBar className="w-5 h-5" />}
                title="Advanced Analytics"
                description="Sophisticated algorithms for trend identification"
              />
              <DataFeature 
                icon={<FileCheck className="w-5 h-5" />}
                title="Validated Methodology"
                description="Peer-reviewed data collection and analysis processes"
              />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-2xl blur-xl"></div>
            <div className="relative bg-gradient-to-br from-blue-900/30 to-indigo-900/30 backdrop-blur-sm border border-blue-800/50 rounded-2xl overflow-hidden z-10">
              <div className="p-8">
                <div className="aspect-video rounded-xl bg-blue-900/40 overflow-hidden flex items-center justify-center">
                  <div className="w-full h-full p-4">
                    <div className="bg-blue-900/60 rounded-lg p-4 h-full flex flex-col">
                      <div className="flex justify-between items-center mb-4">
                        <div className="text-white font-medium">Market Share Analytics</div>
                        <div className="flex space-x-2">
                          <button className="w-6 h-6 rounded-full bg-blue-800 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-200">
                              <line x1="12" y1="5" x2="12" y2="19"></line>
                              <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                          </button>
                          <button className="w-6 h-6 rounded-full bg-blue-800 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-200">
                              <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="h-full flex items-end">
                          <div className="flex-1 h-[30%] bg-indigo-500 rounded-t-sm"></div>
                          <div className="flex-1 h-[45%] bg-purple-500 rounded-t-sm ml-1"></div>
                          <div className="flex-1 h-[60%] bg-amber-500 rounded-t-sm ml-1"></div>
                          <div className="flex-1 h-[40%] bg-blue-500 rounded-t-sm ml-1"></div>
                          <div className="flex-1 h-[75%] bg-orange-500 rounded-t-sm ml-1"></div>
                          <div className="flex-1 h-[25%] bg-indigo-500 rounded-t-sm ml-1"></div>
                          <div className="flex-1 h-[50%] bg-purple-500 rounded-t-sm ml-1"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="bg-blue-900/40 rounded-lg p-4">
                    <div className="text-sm text-blue-300 mb-1">Patient Distribution</div>
                    <div className="flex items-center">
                      <div className="w-full h-3 bg-blue-900 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500" style={{ width: "65%" }}></div>
                      </div>
                      <span className="ml-2 text-white font-medium">65%</span>
                    </div>
                  </div>
                  <div className="bg-blue-900/40 rounded-lg p-4">
                    <div className="text-sm text-blue-300 mb-1">Data Coverage</div>
                    <div className="flex items-center">
                      <div className="w-full h-3 bg-blue-900 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-amber-500 to-orange-500" style={{ width: "87%" }}></div>
                      </div>
                      <span className="ml-2 text-white font-medium">87%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

interface DataFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function DataFeature({ icon, title, description }: DataFeatureProps) {
  return (
    <div className="bg-blue-900/20 backdrop-blur-sm border border-blue-800/50 rounded-lg p-4">
      <div className="flex items-center gap-3 mb-2">
        <div className="bg-indigo-500/20 p-2 rounded-full text-indigo-400">
          {icon}
        </div>
        <h3 className="text-white font-medium">{title}</h3>
      </div>
      <p className="text-blue-300 text-sm">{description}</p>
    </div>
  );
}