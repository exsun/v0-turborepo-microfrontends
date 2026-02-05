import React from "react"
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shell - Microfrontend Host",
  description: "Main application shell for microfrontends",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <nav className="flex items-center gap-6 p-4 border-b bg-background">
          <a href="/" className="font-semibold text-lg">Shell</a>
          <a href="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
            Dashboard
          </a>
          <a href="/store" className="text-muted-foreground hover:text-foreground transition-colors">
            Store
          </a>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
