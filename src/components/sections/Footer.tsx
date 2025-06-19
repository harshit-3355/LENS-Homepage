'use client';

export default function Footer() {
  return (
    <footer className="bg-[#002373] py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white py-2">
         
          <div className="flex items-center space-x-1">
            <span className="text-white">Powered by</span>
            <span>
              <span className="text-[#FCB038] font-medium">ci</span>
              <span className="text-[#0374BB] font-medium">ATHENA</span>
            </span>
          </div>

          
          <div className="text-[#E6E6E6]">
            Copyright 2025 CustomerInsights.AI, Inc
          </div>
        </div>
      </div>
    </footer>
  );
}