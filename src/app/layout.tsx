import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hfsconsult.us"),
  title: "HFS Consult — Investing with Clarity & Confidence",
  description:
    "HFS Consult Limited delivers disciplined, insight-driven investment strategies across multiple asset classes for retail investors, High-Net-Worth Individuals (HNIs), and institutions.",
  keywords: [
    "HFS Consult",
    "HFS Consult Limited",
    "investment advisory Lagos",
    "wealth creation Nigeria",
    "capital preservation",
    "government securities",
    "commercial papers",
    "real estate investment",
    "wealth building Africa",
    "Elizabeth O. Nwankwo",
    "portfolio management Yaba",
  ],
  icons: {
    icon: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
  openGraph: {
    title: "HFS Consult — Investing with Clarity & Confidence",
    description:
      "Tailored investment advisory services delivering capital preservation and optimized returns.",
    url: "https://hfsconsult.us",
    siteName: "HFS Consult",
    locale: "en_NG",
    type: "website",
    images: "/logo.jpeg",
  },
  twitter: {
    card: "summary_large_image",
    title: "HFS Consult — Investing with Clarity & Confidence",
    description:
      "Tailored investment advisory services delivering capital preservation and optimized returns.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col bg-[#f7f9fd]"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
