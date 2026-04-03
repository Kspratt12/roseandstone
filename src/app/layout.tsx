import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rose & Stone Salon | Blonding Specialists in Cary, NC",
  description:
    "A calm, personalized boutique salon experience in Cary, North Carolina. Specializing in blonding, balayage, Brazilian Blowout smoothing, color, and extensions. Book with Betty or Bree today.",
  keywords:
    "Cary NC salon, blonding specialist Cary NC, balayage Cary NC, hair salon Cary NC, Brazilian Blowout Cary, extensions Cary NC, Rose and Stone Salon",
  openGraph: {
    title: "Rose & Stone Salon | Blonding Specialists in Cary, NC",
    description:
      "A calm, personalized boutique salon experience in Cary, North Carolina.",
    type: "website",
    locale: "en_US",
    siteName: "Rose & Stone Salon",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${outfit.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-cream text-charcoal">
        {children}
      </body>
    </html>
  );
}
