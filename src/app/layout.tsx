import Header from "@/components/Header";
import { Toaster } from "@/components/ui/toaster";
import { constructMetadata } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import { ReactLenis } from "@/lib/lenis";
import "./globals.css";
import { NavbarProvider } from "@/components/header/HeaderContext";
import { OpenPanelComponent } from "@openpanel/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const clientId = process.env.OPENPANEL_CLIENT_ID;

  return (
    <>
      <OpenPanelComponent
        clientId={clientId!}
        trackScreenViews={true}
        // trackAttributes={true}
        // trackOutgoingLinks={true}
        // If you have a user id, you can pass it here to identify the user
        // profileId={'123'}
      />
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
    </>
  );
}
