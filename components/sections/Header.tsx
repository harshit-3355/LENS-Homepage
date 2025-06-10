'use client';

import { useState } from 'react';
import { User, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <span className="text-white font-semibold text-lg">Customer Insights</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-slate-300 hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="text-slate-300 hover:text-white transition-colors">Pricing</a>
            <a href="#faq" className="text-slate-300 hover:text-white transition-colors">FAQ</a>
          </nav>

          {/* Right Side - Home Link and Profile Button */}
          <div className="flex items-center space-x-4">
            <a 
              href="https://ciathena.customerinsights.ai/?hsLang=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white transition-colors font-medium"
            >
              Home
            </a>
            <Button 
              variant="outline" 
              size="sm"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white"
            >
              <User className="w-4 h-4 mr-2" />
              Profile
            </Button>
            
            {/* Mobile menu button */}
            <button
              className="md:hidden text-slate-300 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-800">
            <nav className="flex flex-col space-y-4">
              <a 
                href="https://ciathena.customerinsights.ai/?hsLang=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Home
              </a>
              
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}