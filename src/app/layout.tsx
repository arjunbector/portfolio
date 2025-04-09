import Header from "@/components/Header";
import { Toaster } from "@/components/ui/toaster";
import { constructMetadata } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { Nunito, PT_Sans } from "next/font/google";
import { ReactLenis } from "@/lib/lenis";
import "./globals.css";
import { NavbarProvider } from "@/components/header/HeaderContext";

// Optimize font loading with display swap and preload
const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const ptSans = PT_Sans({
  variable: "--font-pt-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  preload: true,
});

export const metadata = constructMetadata();

// Optimize static generation and caching
export const dynamic = "force-static";
export const revalidate = 3600; // revalidate every hour

// Add viewport configuration for better mobile performance
export const viewport = {
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
  const clientId = process.env.OPENPANEL_CLIENT_ID;

  return (
    <html lang="en" suppressHydrationWarning>
      <ReactLenis root>
        <body className={`${nunito.variable} ${ptSans.variable} antialiased relative`}>
          <div className="texture" />
          <NavbarProvider>
            <Header />
            <Toaster />
            {children}
            <Analytics />
          </NavbarProvider>
        </body>
      </ReactLenis>
    </html>
  );
}
