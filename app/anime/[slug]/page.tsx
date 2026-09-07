'use client';

import Image from 'next/image';
import Link from 'next/link';
import { getAnimeBySlug } from '@/lib/anime-data';
import { Rating } from '@/components/ui/Rating';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { EmptyState } from '@/components/ui/EmptyState';
import { Heart, Play, Share2 } from 'lucide-react';
import { useState } from 'react';

interface AnimePageProps {
  params: {
    slug: string;
  };
}

export default function AnimePage({ params }: AnimePageProps) {
  const anime = getAnimeBySlug(params.slug);
  const [isFavorited, setIsFavorited] = useState(false);

  if (!anime) {
    return (
      <EmptyState
        title="Anime not found"
        description="The anime you're looking for doesn't exist"
        action={
          <Link href="/catalog">
            <Button>Back to Catalog</Button>
          </Link>
        }
      />
    );
  }

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="relative -mx-4 -mt-8 mb-12 overflow-hidden rounded-b-lg">
        <div className="absolute inset-0 z-0">
          <Image
            src={anime.banner}
            alt={anime.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-brand-900/60 to-transparent" />
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left - Poster */}
        <div className="md:col-span-1">
          <div className="relative rounded-lg overflow-hidden bg-brand-800 aspect-[2/3] mb-4">
            <Image
              src={anime.poster}
              alt={anime.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
          </div>
          <div className="space-y-3">
            <Link href={`/watch/${anime.slug}`}>
              <Button variant="primary" size="lg" className="w-full flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                Watch Now
              </Button>
            </Link>
            <button
              onClick={() => setIsFavorited(!isFavorited)}
              className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-md font-medium transition-all ${
                isFavorited
                  ? 'bg-brand-accent text-brand-900'
                  : 'bg-brand-700 text-brand-100 hover:bg-brand-600'
              }`}
            >
              <Heart className={`w-5 h-5 ${isFavorited ? 'fill-current' : ''}`} />
              {isFavorited ? 'Favorited' : 'Add to Favorites'}
            </button>
            <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-brand-700 text-brand-100 rounded-md font-medium hover:bg-brand-600 transition-all">
              <Share2 className="w-5 h-5" />
              Share
            </button>
          </div>
        </div>

        {/* Right - Details */}
        <div className="md:col-span-3 space-y-6">
          <div>
            <h1 className="text-4xl font-bold text-brand-100 mb-2">
              {anime.title}
            </h1>
            {anime.alternativeTitle && (
              <p className="text-lg text-brand-400">{anime.alternativeTitle}</p>
            )}
          </div>

          {/* Meta */}
          <div className="flex flex-wrap gap-4">
            <div>
              <p className="text-sm text-brand-400">Rating</p>
              <Rating rating={anime.rating} size="lg" />
            </div>
            <div>
              <p className="text-sm text-brand-400">Year</p>
              <p className="text-lg font-semibold text-brand-100">{anime.year}</p>
            </div>
            <div>
              <p className="text-sm text-brand-400">Status</p>
              <p className="text-lg font-semibold text-brand-100 capitalize">
                {anime.status}
              </p>
            </div>
            <div>
              <p className="text-sm text-brand-400">Episodes</p>
              <p className="text-lg font-semibold text-brand-100">
                {anime.episodes}
              </p>
            </div>
            <div>
              <p className="text-sm text-brand-400">Type</p>
              <p className="text-lg font-semibold text-brand-100">{anime.type}</p>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold text-brand-100 mb-2">
              Synopsis
            </h3>
            <p className="text-brand-300 leading-relaxed">
              {anime.description}
            </p>
          </div>

          {/* Genres */}
          <div>
            <h3 className="text-lg font-semibold text-brand-100 mb-3">
              Genres
            </h3>
            <div className="flex flex-wrap gap-2">
              {anime.genres.map((genre) => (
                <Badge key={genre} variant="default">
                  {genre}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
