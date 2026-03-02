import type { Metadata } from "next";
import SideNav from "@/components/layout/SideNav";
import Script from "next/script";
import TopNav from "@/components/layout/TopNav";
import { ModeProvider } from "@/components/providers/ModeProvider";
import "./styles/globals.css";


export const metadata: Metadata = {
  title: "Agency Work Area",
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        {/* Load Bootstrap JS once, globally */}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <ModeProvider>
          {children}
          <SideNav />
          <TopNav />
        </ModeProvider>
      </body>
    </html>
  );
}

