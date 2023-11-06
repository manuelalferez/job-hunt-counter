import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Job Hunt Counter",
  description: "A simple counter to track your job hunt progress",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-blue-50">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
