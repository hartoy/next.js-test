import type { Metadata } from "next";
import { Mulish, Alegreya } from "next/font/google";
import "./globals.css";

const mulish = Mulish({ 
  subsets: ["latin"],
  variable: "--font-mulish",   
});
const alegreya = Alegreya({ 
  subsets: ["latin"],
  variable: "--font-alegreya",   
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${alegreya.variable} ${mulish.variable}`}>
      <body>
        {children}     
        </body>
    </html>
  );
}
