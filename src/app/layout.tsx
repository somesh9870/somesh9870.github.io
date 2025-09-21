import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
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
  title: "Somesh - Full Stack Developer & Designer",
  description:
    "Modern portfolio showcasing innovative web applications and creative solutions. Expert in React, Next.js, and full-stack development.",
  keywords: [
    "portfolio",
    "full stack developer",
    "react",
    "next.js",
    "web development",
  ],
  authors: [{ name: "Somesh" }],
  creator: "Somesh",
  openGraph: {
    title: "Somesh - Full Stack Developer & Designer",
    description:
      "Modern portfolio showcasing innovative web applications and creative solutions.",
    type: "website",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
