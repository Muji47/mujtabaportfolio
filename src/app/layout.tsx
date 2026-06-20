import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Mujtaba Tahir | Full Stack Developer",
  description:
    "Full Stack Developer specializing in React, Next.js, TypeScript, Node.js, and modern web technologies. Building scalable, high-performance web applications.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript",
    "Muhammad Mujtaba Tahir",
    "Web Developer Pakistan",
  ],
  authors: [{ name: "Muhammad Mujtaba Tahir" }],
  creator: "Muhammad Mujtaba Tahir",
  openGraph: {
    title: "Muhammad Mujtaba Tahir | Full Stack Developer",
    description:
      "Building scalable, high-performance web applications using modern frontend and backend technologies.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Mujtaba Tahir | Full Stack Developer",
    description:
      "Building scalable, high-performance web applications using modern frontend and backend technologies.",
  },
  robots: {
    index: true,
    follow: true,
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
