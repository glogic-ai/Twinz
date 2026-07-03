import type { Metadata } from "next";
import "./globals.css";

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
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}