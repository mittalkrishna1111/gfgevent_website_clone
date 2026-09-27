import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AVENGERS: INITIATIVE '26 // Multiverse of Code — Stark Industries & GFG Bennett University",
  description:
    "Earth's Mightiest Geeks Assemble! Official Marvel-Themed Hackathon & Tech Summit by GeeksforGeeks Student Chapter, Bennett University. ₹2,50,000+ Prize Pool, 36-Hour National Hackathon, 6 Infinity Stone Tracks, Stark Expo Treasury & Multiverse Quests.",
  keywords: [
    "GeeksforGeeks",
    "GFG Bennett University",
    "Bennett University Hackathon",
    "Multiverse of Code",
    "Avengers Initiative 26",
    "Marvel Hackathon",
    "Stark Expo",
    "Iron Man Arc Reactor",
    "Infinity Stones",
  ],
  authors: [{ name: "GeeksforGeeks Student Chapter, Bennett University" }],
  openGraph: {
    title: "AVENGERS: INITIATIVE '26 // Multiverse of Code",
    description: "Earth's Mightiest Geeks Assemble to Defend the Digital Multiverse at Bennett University.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#04060d",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#04060d] text-white selection:bg-[#e23636] selection:text-white">
        {children}
      </body>
    </html>
  );
}
