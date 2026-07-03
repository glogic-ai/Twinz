import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/BenefitsStrip";
import BenefitsStrip from "@/components/BenefitsStrip";
import ChatbotWidget from "@/components/ChatbotWidget";

export const metadata: Metadata = {
  title: "Twins Customs",
  description:
    "Premium window tint, vinyl wraps, PPF, ceramic coating, and custom graphics in Jacksonville, Florida.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <Header />{children} <BenefitsStrip /> <ChatbotWidget /></body>
    </html>
  );
}