'use client';

import { House, Command, Logs } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { useState } from 'react';

const links = [
  { name: 'Home', href: '/' },
  {
    name: 'Products', href: '/#',
    subLinks: [
      { name: 'Camera', href: '/#' },
      { name: 'Mobile', href: '/#' },
      { name: 'Laptop', href: '/#' }
    ]
  },
];

export default function NavLinks() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

   const pathname = usePathname();
  
  return (
    <nav className="flex flex-col md:flex-row items-start md:items-center">
      {links.map((link) => {
        if (link.subLinks) {
          return (
            <div key={link.name} className="relative">
              <button
                onClick={()=>setIsDropdownOpen(!isDropdownOpen)}
                className={clsx(
                  'flex h-[48px] grow items-center justify-center rounded-md  px-3 text-sm font-medium  hover:text-blue-600',
                  { 'text-blue-600': pathname === link.href }
                )}>
                <p className="block">{link.name}</p>
              </button>

              {isDropdownOpen && (
                <div  className="absolute left-0 top-full bg-white rounded-md shadow-lg " >
                  {link.subLinks.map((subLink) => (
                    <Link
                      key={subLink.name}
                      href={subLink.href}
                      onMouseLeave={()=>setIsDropdownOpen(!isDropdownOpen)}
                      className="block text-sm text-gray-700">
                      {subLink.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        }

        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center rounded-md p-3 text-sm font-medium',
              { 'text-blue-600': pathname === link.href }
            )}>
            <p className="block">{link.name}</p>
          </Link>
        );
      })}
    </nav>
  );
}
