import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const defaultFont = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AK_Projects",
  description: "My recent projects page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={defaultFont.className}>{children}</body>
    </html>
  );
}
