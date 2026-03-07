import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import Nav from "@/src/components/nav";
import PlayerSection from "@/src/components/player-section";

export const metadata: Metadata = {
  title: "FutStats",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <PlayerSection />
        {children}
      </body>
    </html>
  );
}
