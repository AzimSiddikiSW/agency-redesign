import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Script from "next/script";
import Header from "@/components/layout/Header";
import { ModeProvider } from "@/components/providers/ModeProvider";
import { Suspense } from "react";
import "./styles/globals.css";

export const metadata: Metadata = {
  title: "Agency Work Area",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="sw-frame vh-100 d-flex flex-column">
        {/* Load Bootstrap JS once, globally */}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <ModeProvider>
          {children}

          <Suspense fallback={null}>
            <Navbar />
          </Suspense>
          <Header />
        </ModeProvider>
      </body>
    </html>
  );
}
