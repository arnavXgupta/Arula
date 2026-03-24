import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// ✅ Chatbot
import Chatbot from "@/components/chatbot/Chatbot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // ✅ FIXED: Required for OpenGraph + Twitter
  metadataBase: new URL("https://arula-mu.vercel.app"),

  title: "ARULA for Autism",
  description:
    "ARULA supports individuals with autism and their families through guided interventions, expert support, and structured care.",

  openGraph: {
    title: "ARULA for Autism",
    description:
      "Guided support for autism care. Get expert help and structured solutions for your child.",
    url: "https://arula-mu.vercel.app",
    siteName: "ARULA",
    images: [
      {
        url: "/hero-bg.png",
        width: 1200,
        height: 630,
        alt: "ARULA Autism Support",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ARULA for Autism",
    description:
      "Support for autism care with expert guidance and structured solutions.",
    images: ["/hero-bg.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        {/* ✅ Global Chatbot */}
        <Chatbot />
      </body>
    </html>
  );
}