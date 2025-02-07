import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import { Roboto_Mono } from 'next/font/google';
import "./globals.css";

const inter = Inter({
subsets: ['latin'],
variable: '--font-sans',
});

const robotoMono = Roboto_Mono({
subsets: ['latin'],
variable: '--font-mono',
});

export const metadata: Metadata = {
  title: "Portfolio - Ignacio Ledesma",
  description: "Portfolio showcasing the work of Ignacio Ledesma",
  icons: {
    icon: "/images/icons8-portafolio-66.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased bg-gradient-to-r from-black via-red-900 to-black text-white min-h-screen`}
      >
        <div className="p-4 min-h-screen w-full">{children}</div>
      </body>
    </html>
  );
}
