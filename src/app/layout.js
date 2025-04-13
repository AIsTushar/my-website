import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MouseAura from "@/components/ui/MouseAura";
import Navbar from "@/components/ui/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Azizul Islam Tushar",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-slate-900 antialiased selection:bg-slate-800 selection:text-slate-200`}
      >
        <Navbar />
        {children}
        <MouseAura />
      </body>
    </html>
  );
}
