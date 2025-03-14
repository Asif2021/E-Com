import "./globals.css";
import { Providers } from "../Context/Providers";
import Header from "./components/Header";
import { Toaster } from "react-hot-toast";

// import { metadata } from 'next';

// export const metadata = {
//   title: {
//     template: '%s | E-Com',
//     default: 'E-Com',
//   },
//   description: 'The official Next.js Learn Dashboard built with App Router.',
//   metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white mt-2 max-w-[1100px] mx-auto px-4 rounded-sm">
        <Providers>
          <div>
            <Header />
          </div>
          <main> 
          <Toaster position="bottom-right" />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
