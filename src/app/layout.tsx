import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, JetBrains_Mono, Hind_Siliguri } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import "streamdown/styles.css";
import "./globals.css";

const fontSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontBengali = Hind_Siliguri({
  variable: "--font-bengali",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["bengali", "latin"],
});

const fontHeading = Cormorant_Garamond({
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const fontMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ProAI",
  description: "Professional AI Assistant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontBengali.variable} ${fontHeading.variable} ${fontMono.variable} h-full antialiased`}
      
    >
      <TooltipProvider>
        <body suppressHydrationWarning className="min-h-full flex flex-col">{children}</body>
      </TooltipProvider>
    </html>
  );
}
