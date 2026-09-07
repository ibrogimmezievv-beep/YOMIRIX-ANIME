'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Anime } from '@/lib/types/anime';
import { Rating } from './ui/Rating';
import { Badge } from './ui/Badge';

interface AnimeCardProps {
  anime: Anime;
  showProgress?: boolean;
  progress?: number;
}

export function AnimeCard({ anime, showProgress, progress }: AnimeCardProps) {
  return (
    <Link href={`/anime/${anime.slug}`}>
      <div className="group cursor-pointer">
        <div className="relative overflow-hidden rounded-lg bg-brand-800 aspect-[2/3] mb-3">
          <Image
            src={anime.poster}
            alt={anime.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {showProgress && progress !== undefined && (
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 h-1">
              <div
                className="h-full bg-brand-accent transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          )}
        </div>
        <div>
          <h3 className="text-sm font-semibold text-brand-100 group-hover:text-brand-accent transition-colors line-clamp-2">
            {anime.title}
          </h3>
          {anime.alternativeTitle && (
            <p className="text-xs text-brand-400 mb-2">{anime.alternativeTitle}</p>
          )}
          <div className="flex items-center justify-between mb-2">
            <Rating rating={anime.rating} size="sm" />
            <span className="text-xs text-brand-400">{anime.year}</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {anime.genres.slice(0, 2).map((genre) => (
              <Badge key={genre} variant="muted">
                {genre}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
