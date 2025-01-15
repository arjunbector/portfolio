import Header from "@/components/Header";
import { Toaster } from "@/components/ui/toaster";
import { constructMetadata } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import { ReactLenis } from "@/lib/lenis";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactLenis root>
        <body className={inter.className}>
          <Header />
          <Toaster />
          {children}
          <Analytics />
        </body>
      </ReactLenis>
    </html>
  );
}
