"use client";

import { cn } from "@/lib/utils";
import {
  footerWrapper,
  footerContainer,
  footerInner,
  footerTextWhite,
  footerTextOrange,
  footerTextBlue,
  footerCopyright,
} from "@/lib/styles";

export default function Footer() {
  return (
    <footer className={cn(footerWrapper)}>
      <div className={cn(footerContainer)}>
        <div className={cn(footerInner)}>
          <div className="flex items-center space-x-1">
            <span className={cn(footerTextWhite)}>Powered by</span>
            <span className={cn(footerTextOrange)}>ci</span>
            <span className={cn(footerTextBlue)}>ATHENA</span>
          </div>

          <div className={cn(footerCopyright)}>Copyright 2025 CustomerInsights.AI, Inc</div>
        </div>
      </div>
    </footer>
  );
}
