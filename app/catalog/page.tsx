'use client';

import { useState, useMemo } from 'react';
import { animeDatabase, genres } from '@/lib/anime-data';
import { AnimeGrid } from '@/components/AnimeGrid';
import { FilterBar } from '@/components/FilterBar';
import { SearchBar } from '@/components/SearchBar';
import { SectionHeader } from '@/components/SectionHeader';
import { EmptyState } from '@/components/ui/EmptyState';

const sortOptions = [
  { label: 'Popular', value: 'popular' },
  { label: 'Rating', value: 'rating' },
  { label: 'Latest', value: 'latest' },
  { label: 'A-Z', value: 'a-z' },
];

export default function CatalogPage() {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular');

  const filtered = useMemo(() => {
    let result = animeDatabase;

    if (selectedGenre) {
      result = result.filter((anime) =>
        anime.genres.some(
          (g) => g.toLowerCase() === selectedGenre.toLowerCase()
        )
      );
    }

    if (selectedStatus) {
      result = result.filter(
        (anime) =>
          anime.status.toLowerCase() === selectedStatus.toLowerCase()
      );
    }

    if (searchQuery) {
      result = result.filter(
        (anime) =>
          anime.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          anime.alternativeTitle
            ?.toLowerCase()
            .includes(searchQuery.toLowerCase())
      );
    }

    // Sort
    if (sortBy === 'popular') {
      result.sort((a, b) => (b.views || 0) - (a.views || 0));
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'latest') {
      result.sort((a, b) => b.year - a.year);
    } else if (sortBy === 'a-z') {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }

    return result;
  }, [selectedGenre, selectedStatus, selectedYear, searchQuery, sortBy]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-brand-100 mb-6">
          Browse Catalog
        </h1>
        <SearchBar className="max-w-lg mb-6" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar Filters */}
        <div className="md:col-span-1">
          <div className="sticky top-20 space-y-4">
            <h3 className="text-lg font-semibold text-brand-100 mb-4">
              Filters
            </h3>
            <FilterBar
              genres={genres}
              onGenreChange={setSelectedGenre}
              onStatusChange={setSelectedStatus}
              onYearChange={setSelectedYear}
            />

            {/* Sort */}
            <div>
              <label className="text-sm font-medium text-brand-300 mb-2 block">
                Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full bg-brand-800 border border-brand-700 rounded-md py-2 px-3 text-brand-100 focus:outline-none focus:ring-2 focus:ring-brand-accent"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Clear Filters */}
            {(selectedGenre || selectedStatus || selectedYear || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedGenre(null);
                  setSelectedStatus(null);
                  setSelectedYear(null);
                  setSearchQuery('');
                }}
                className="w-full px-4 py-2 bg-brand-accent text-brand-900 font-medium rounded-md hover:bg-opacity-90 transition-all"
              >
                Clear Filters
              </button>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="md:col-span-3">
          {filtered.length > 0 ? (
            <>
              <div className="mb-4">
                <p className="text-sm text-brand-400">
                  Showing {filtered.length} result{filtered.length !== 1 ? 's' : ''}
                </p>
              </div>
              <AnimeGrid anime={filtered} columns={3} />
            </>
          ) : (
            <EmptyState
              title="No anime found"
              description="Try adjusting your filters or search terms"
            />
          )}
        </div>
      </div>
    </div>
  );
}
