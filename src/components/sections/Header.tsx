"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  headerWrapper,
  headerContainer,
  headerInner,
  headerLogo,
  headerLink,
  headerIcon,
} from "@/lib/styles";

export default function Header() {
  return (
    <header className={cn(headerWrapper)}>
      <div className={cn(headerContainer)}>
        <div className={cn(headerInner)}>
          <div className={cn(headerLogo)}>
            <Image
              src="/ciai-horizontal-logo.png"
              alt="Customer Insights"
              width={80}
              height={40}
              priority
            />
          </div>

          <div className={cn(headerLogo)}>
            <a href="https://ciathena.customerinsights.ai/?hsLang=en" className={cn(headerLink)}>
              <Image
                src="/home.png"
                alt="Home"
                width={120}
                height={40}
                className={cn(headerIcon)}
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
