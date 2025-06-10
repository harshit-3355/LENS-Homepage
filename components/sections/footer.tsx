import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-8 px-6 md:px-12 lg:px-24 border-t border-blue-800 mt-16">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-blue-300 text-sm">Powered by <span className="font-semibold">CustomerInsights.AI</span></p>
          </div>
          <div>
            <p className="text-blue-300 text-sm">Copyright © 2025 CustomerInsights.AI, Inc.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}