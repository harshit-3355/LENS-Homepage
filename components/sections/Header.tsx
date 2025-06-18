'use client';

import Link from "next/link"
import Image from 'next/image';

export default function Header() {
  return (
    <header className="w-full bg-[#01195D] backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* CIAI Logo - Left */}
          <div className="flex items-center">
            <Image
              src="/ciai-horizontal-logo.png"
              alt="Customer Insights"
              width={200}
              height={40}
              className="h-6 w-auto"
            />
          </div>

          {/* Home Button - Right */}
          <div className="flex items-center">
            <a 
              href="https://ciathena.customerinsights.ai/?hsLang=en"
              className="transition-transform hover:scale-105"
            >
              <Image
                src="/home.png"
                alt="Home"
                width={120}
                height={40}
                className="h-6 w-auto"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}