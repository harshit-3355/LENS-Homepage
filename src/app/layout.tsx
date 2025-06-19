import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LENS - Landscape Evaluation and Sizing',
  description: 'Efficiently analyze healthcare and therapeutic area markets with LENS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-gradient-to-b from-blue-950 to-blue-900 min-h-screen">
         
          {children}
          
        </div>
      </body>
    </html>
  );
}