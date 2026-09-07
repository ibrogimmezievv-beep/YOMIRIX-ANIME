'use client';

import Link from 'next/link';
import { Search, Heart, User } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Catalog', href: '/catalog' },
  { label: 'Popular', href: '/popular' },
  { label: 'Latest', href: '/latest' },
];

export function Header() {
  const pathname = usePathname();
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-brand-900 border-b border-brand-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-brand-100 tracking-tight hover:text-brand-accent transition-colors"
          >
            YOMIRIX
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? 'text-brand-accent'
                    : 'text-brand-300 hover:text-brand-100'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <button
              aria-label="Search"
              className="p-2 text-brand-300 hover:text-brand-100 transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
            <Link
              href="/favorites"
              aria-label="Favorites"
              className={`p-2 transition-colors ${
                pathname === '/favorites'
                  ? 'text-brand-accent'
                  : 'text-brand-300 hover:text-brand-100'
              }`}
            >
              <Heart className="w-5 h-5" />
            </Link>
            <Link
              href="/profile"
              aria-label="Profile"
              className={`p-2 transition-colors ${
                pathname === '/profile'
                  ? 'text-brand-accent'
                  : 'text-brand-300 hover:text-brand-100'
              }`}
            >
              <User className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
