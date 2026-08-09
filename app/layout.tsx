import type { Metadata } from "next";
import { Limelight, Miss_Fajardose, Tapestry } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Laura & Dieter",
  description:
    "Welkom op onze trouw hopelijk hebben jullie het naar jullie zin!",
};

export const missFajardose = Miss_Fajardose({
  variable: "--font-miss-fajar-dose",
  subsets: ["latin"],
  weight: "400",
});

export const tapestry = Tapestry({
  variable: "--font-tapestry",
  subsets: ["latin"],
  weight: "400",
});

export const limeLight = Limelight({
  variable: "--font-lime-light",
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${missFajardose.variable} h-full antialiased ${limeLight.variable} `}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
