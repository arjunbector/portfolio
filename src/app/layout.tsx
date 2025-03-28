import Header from "@/components/Header";
import { Toaster } from "@/components/ui/toaster";
import { constructMetadata } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import { ReactLenis } from "@/lib/lenis";
import "./globals.css";
import { NavbarProvider } from "@/components/header/HeaderContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = constructMetadata();

// Add route segment config
export const dynamic = "force-static";
export const revalidate = 3600; // revalidate every hour

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const clientId = process.env.OPENPANEL_CLIENT_ID;

  return (
    <html lang="en">
      <ReactLenis root>
        <body className={inter.className}>
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
