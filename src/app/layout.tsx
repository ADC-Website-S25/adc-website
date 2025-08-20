import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque } from 'next/font/google';
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Banner from "@/components/layout/banner";
import { banners } from "@/data/event-banner";
import Footer2 from "@/components/layout/footer-blue";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "App Dev Club @ UMD",
  description: "Fostering the growth of UMD Computer Science students through creating digital solutions for Fortune 500 Companies - EST. Sep 2023",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Find the active banner based on the current date
  const banner = banners.find(
    (b) =>
      new Date() >= b.showBannerStartDate &&
      new Date() <= b.showBannerEndDate
  );
  const hasActiveBanner = Boolean(banner);

  return (
    <html lang="en">
      {/* <head>
        <script src="https://unpkg.com/react-scan/dist/auto.global.js" />
      </head> */}
      <body
        className={`${bricolage.variable} antialiased scroll-smooth min-h-screen`}
      >
        {banner && hasActiveBanner && (
          <Banner {...banner} />
        )}
        <Navbar hasActiveBanner={hasActiveBanner} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
