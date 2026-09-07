'use client';

import { useState, useCallback } from 'react';
import { Search, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface SearchBarProps {
  className?: string;
}

export function SearchBar({ className }: SearchBarProps) {
  const [value, setValue] = useState('');
  const router = useRouter();

  const handleSearch = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (value.trim()) {
        router.push(`/search?q=${encodeURIComponent(value)}`);
      }
    },
    [value, router]
  );

  return (
    <form onSubmit={handleSearch} className={className}>
      <div className="relative">
        <input
          type="text"
          placeholder="Search anime..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full bg-brand-800 border border-brand-700 rounded-md py-2 pl-10 pr-10 text-brand-100 placeholder-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-brand-500" />
        {value && (
          <button
            type="button"
            onClick={() => setValue('')}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-brand-500 hover:text-brand-300 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </form>
  );
}
