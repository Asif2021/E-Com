import "./globals.css";
import { Providers } from "../Context/Providers";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import React from 'react';

export const metadata = {
  title: {
    template: '%s | E-Com',
    default: 'E-Com',
  },
  description: 'An e-commerce dashboard built with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Providers>
          <div>
            <Navbar />
          </div>
          <main className="max-w-[1440px] mx-auto px-4 rounded-sm"> 
          <Toaster position="bottom-right" />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
