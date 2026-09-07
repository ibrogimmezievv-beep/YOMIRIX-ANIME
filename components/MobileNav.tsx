'use client';

import Link from 'next/link';
import { Home, Compass, Heart, User } from 'lucide-react';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Catalog', href: '/catalog', icon: Compass },
  { label: 'Favorites', href: '/favorites', icon: Heart },
  { label: 'Profile', href: '/profile', icon: User },
];

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-brand-900 border-t border-brand-800 z-40">
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex-1 flex flex-col items-center justify-center py-3 px-4 transition-colors ${
                isActive
                  ? 'text-brand-accent border-t-2 border-brand-accent'
                  : 'text-brand-400 hover:text-brand-200'
              }`}
            >
              <Icon className="w-6 h-6 mb-1" />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
