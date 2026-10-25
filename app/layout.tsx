import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Miss_Fajardose } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Laura & Dieter · 15 mei 2027",
  description:
    "Laura & Dieter trouwen op 15 mei 2027 in Huis Beaucarne. Alle info en je RSVP vind je hier.",
  openGraph: {
    title: "Laura & Dieter trouwen",
    description: "15 mei 2027 · Huis Beaucarne, Oudenaarde",
    images: ["/hbc.webp"],
    locale: "nl_BE",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#fbf8f3",
};

const missFajardose = Miss_Fajardose({
  variable: "--font-miss-fajardose",
  subsets: ["latin"],
  weight: "400",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${missFajardose.variable} ${cormorant.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
