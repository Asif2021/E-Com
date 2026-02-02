// Navbar.js (Server Component)
import Link from "next/link";
import { Search } from "lucide-react";
import NavbarClient from "./NavbarClient";
import { getUserFromCookie } from "../../lib/getUser"; 

export default async function Navbar() {
  const user = await getUserFromCookie(); // SSR check
  const isLoggedIn = !!user;
  const username = user?.username || null;

  return (
    <nav className="bg-white shadow-lg uppercase">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-gray-800">
            Logo
          </Link>
          

          {/* Pass SSR auth state down */}
          <NavbarClient isLoggedIn={isLoggedIn} username={username} />
        </div>
      </div>
    </nav>
  );
}
