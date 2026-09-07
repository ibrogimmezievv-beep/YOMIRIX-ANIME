'use client';

import { searchAnime } from '@/lib/anime-data';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { AnimeGrid } from '@/components/AnimeGrid';
import { EmptyState } from '@/components/ui/EmptyState';
import { SectionHeader } from '@/components/SectionHeader';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (query) {
      setIsLoading(true);
      // Simulate API delay
      const timer = setTimeout(() => {
        const searchResults = searchAnime(query);
        setResults(searchResults);
        setIsLoading(false);
      }, 300);

      return () => clearTimeout(timer);
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-brand-100 mb-2">
          Search Results
        </h1>
        {query && (
          <p className="text-brand-400">
            Results for: <span className="text-brand-100 font-semibold">{query}</span>
          </p>
        )}
      </div>

      {isLoading ? (
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-accent" />
        </div>
      ) : results.length > 0 ? (
        <>
          <p className="text-sm text-brand-400">
            Found {results.length} anime
          </p>
          <AnimeGrid anime={results} />
        </>
      ) : query ? (
        <EmptyState
          title="No results found"
          description={`No anime found matching "${query}". Try a different search.`}
        />
      ) : (
        <EmptyState
          title="Start searching"
          description="Enter an anime name or genre to search"
        />
      )}
    </div>
  );
}
