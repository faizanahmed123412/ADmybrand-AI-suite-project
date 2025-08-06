import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // Ensure this import is present

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ADmyBRAND AI Suite - AI-Powered Marketing",
  description: "The all-in-one AI suite to supercharge your marketing efforts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}