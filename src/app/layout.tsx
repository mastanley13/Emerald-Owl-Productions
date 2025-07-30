import React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import SplashProvider from "../components/shared/UI/SplashProvider";

export const metadata: Metadata = {
  title: "Emerald Owl Productions",
  description: "Creating unforgettable experiences and magical moments for events of all kinds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>
      <body>
        <SplashProvider>
          {children}
        </SplashProvider>
      </body>
    </html>
  );
}
