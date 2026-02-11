import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-plus-jakarta" });

export const metadata: Metadata = {
  title: "GarMiglioLab | Advanced Medical Research",
  description: "Private scientific research laboratory specializing in oncology, neurology, and precision medicine.",
  openGraph: {
    title: "GarMiglioLab | Advanced Medical Research",
    description: "Private scientific research laboratory specializing in oncology, neurology, and precision medicine.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(inter.variable, plusJakarta.variable, "font-sans antialiased bg-slate-50 text-slate-900")}>
        {children}
      </body>
    </html>
  );
}
