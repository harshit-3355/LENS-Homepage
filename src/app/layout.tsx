import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LENS - Landscape Evaluation and Sizing",
  description: "Efficiently analyze healthcare and therapeutic area markets with LENS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div className="bg-gradient-to-b from-blue-950 to-blue-900 min-h-screen">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
