import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Deepayan Das | Portfolio",
  description: "Portfolio website of Deepayan Das. Showcasing projects, skills, and experience in modern web development with React, Next.js, TypeScript, and Tailwind CSS.",
  keywords: [
    "Deepayan Das",
    "Portfolio",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Web Developer",
    "Frontend Developer",
    "Projects",
    "Resume"
  ],
  authors: [{ name: "Deepayan Das" }],
  openGraph: {
    title: "Deepayan Das | Portfolio",
    description: "Explore Deepayan Das's web development projects and skills.",
    url: "https://your-portfolio-url.com",
    siteName: "Deepayan Das Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepayan Das | Portfolio",
    description: "Explore Deepayan Das's web development projects and skills.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
