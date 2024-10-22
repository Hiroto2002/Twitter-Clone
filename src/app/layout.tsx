import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { LeftNav } from "@/components/layout/LeftNav";
import {HomeHeader} from "@/components/layout/HomeHeader";
import {RecommendTimeline} from "@/components/layout/RecommendTimeline";
import { FollowingTimeline } from "@/components/layout/FollowingTimeline";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* これがページの1層目になる */}
        <LeftNav />
        <HomeHeader/>
        <RecommendTimeline/>
        <FollowingTimeline/>
      </body>
    </html>
  );
}
