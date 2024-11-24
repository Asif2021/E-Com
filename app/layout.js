import "./globals.css";

export const metadata = {
  title: "E-Commerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white mt-2 max-w-[1100px] mx-auto px-4 rounded-sm">
        {children}
      </body>
    </html>
  );
}
