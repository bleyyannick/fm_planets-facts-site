import type { Metadata } from "next";
import { Antonio, League_Spartan } from "next/font/google";
import "./globals.css";

import NavLayout from "./navLayout";

const antonio = Antonio({
  variable: "--font-antonio",
  subsets: ["latin"],
});

const spartan = League_Spartan({
  variable: "--font-spartan",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Planets facts site",
  description: "Frontend Mentor challenge built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${antonio.className} ${spartan.className}`}
      >
         <NavLayout />
         {children}
      </body>
    </html>
  );
}
