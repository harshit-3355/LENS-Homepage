"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full py-4 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-8 h-8">
            <div className="absolute w-8 h-8 rounded-full bg-blue-500 opacity-70"></div>
            <div className="absolute w-6 h-6 rounded-full bg-indigo-600 top-1 left-1"></div>
          </div>
          <span className="text-white font-bold text-xl">CustomerInsights.AI</span>
        </Link>
        
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            className="text-white hover:bg-blue-800 hover:text-white"
          >
            <LogIn className="mr-2 h-4 w-4" />
            Sign In
          </Button>
          <Button 
            variant="outline"
            className="bg-transparent text-white border-blue-400 hover:bg-blue-800"
          >
            Demo
          </Button>
        </div>
      </div>
    </header>
  );
}