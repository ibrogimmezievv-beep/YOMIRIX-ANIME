'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FilterBarProps {
  genres: string[];
  onGenreChange: (genre: string) => void;
  onStatusChange: (status: string) => void;
  onYearChange: (year: string) => void;
}

const years = ['2024', '2023', '2022', '2021', '2020', '2019', '2018', '2010-2017', 'Before 2010'];
const statuses = ['All', 'Ongoing', 'Completed', 'Upcoming'];

export function FilterBar({
  genres,
  onGenreChange,
  onStatusChange,
  onYearChange,
}: FilterBarProps) {
  const [openFilter, setOpenFilter] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-4">
      {/* Genre Filter */}
      <div>
        <button
          onClick={() =>
            setOpenFilter(openFilter === 'genre' ? null : 'genre')
          }
          className="w-full flex items-center justify-between px-4 py-2 bg-brand-800 border border-brand-700 rounded-md text-brand-100 hover:bg-brand-700 transition-colors"
        >
          <span className="font-medium">Genre</span>
          <ChevronDown
            className={cn(
              'w-4 h-4 transition-transform',
              openFilter === 'genre' && 'transform rotate-180'
            )}
          />
        </button>
        {openFilter === 'genre' && (
          <div className="mt-2 grid grid-cols-2 gap-2">
            {genres.map((genre) => (
              <button
                key={genre}
                onClick={() => onGenreChange(genre)}
                className="px-3 py-2 text-sm bg-brand-700 text-brand-100 rounded hover:bg-brand-accent hover:text-brand-900 transition-colors text-left"
              >
                {genre}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Status Filter */}
      <div>
        <button
          onClick={() =>
            setOpenFilter(openFilter === 'status' ? null : 'status')
          }
          className="w-full flex items-center justify-between px-4 py-2 bg-brand-800 border border-brand-700 rounded-md text-brand-100 hover:bg-brand-700 transition-colors"
        >
          <span className="font-medium">Status</span>
          <ChevronDown
            className={cn(
              'w-4 h-4 transition-transform',
              openFilter === 'status' && 'transform rotate-180'
            )}
          />
        </button>
        {openFilter === 'status' && (
          <div className="mt-2 space-y-1">
            {statuses.map((status) => (
              <button
                key={status}
                onClick={() => onStatusChange(status)}
                className="w-full px-3 py-2 text-sm bg-brand-700 text-brand-100 rounded hover:bg-brand-accent hover:text-brand-900 transition-colors text-left"
              >
                {status}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Year Filter */}
      <div>
        <button
          onClick={() => setOpenFilter(openFilter === 'year' ? null : 'year')}
          className="w-full flex items-center justify-between px-4 py-2 bg-brand-800 border border-brand-700 rounded-md text-brand-100 hover:bg-brand-700 transition-colors"
        >
          <span className="font-medium">Year</span>
          <ChevronDown
            className={cn(
              'w-4 h-4 transition-transform',
              openFilter === 'year' && 'transform rotate-180'
            )}
          />
        </button>
        {openFilter === 'year' && (
          <div className="mt-2 space-y-1">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => onYearChange(year)}
                className="w-full px-3 py-2 text-sm bg-brand-700 text-brand-100 rounded hover:bg-brand-accent hover:text-brand-900 transition-colors text-left"
              >
                {year}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
