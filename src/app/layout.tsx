import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";

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
    <html lang="en" className="bg-light bg-opacity-25">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
