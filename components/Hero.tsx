'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Anime } from '@/lib/types/anime';
import { Button } from './ui/Button';
import { Rating } from './ui/Rating';
import { Badge } from './ui/Badge';
import { Play, Info } from 'lucide-react';

interface HeroProps {
  anime: Anime;
}

export function Hero({ anime }: HeroProps) {
  return (
    <div className="relative -mx-4 -mt-4 mb-12 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={anime.banner}
          alt={anime.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900 via-brand-900/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 md:px-8 py-8 md:py-16 flex items-end">
        <div className="max-w-2xl">
          <div className="mb-4 flex gap-2 flex-wrap">
            <Badge variant="accent">{anime.type}</Badge>
            <Badge variant="accent">{anime.year}</Badge>
            <Badge
              variant="accent"
              className={${
                anime.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                anime.status === 'ongoing' ? 'bg-blue-500/20 text-blue-400' :
                'bg-brand-accent/20 text-brand-accent'
              }}
            >
              {anime.status.charAt(0).toUpperCase() + anime.status.slice(1)}
            </Badge>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-brand-100 mb-2">
            {anime.title}
          </h1>
          {anime.alternativeTitle && (
            <p className="text-brand-400 text-lg mb-4">{anime.alternativeTitle}</p>
          )}

          <div className="flex items-center gap-6 mb-6">
            <Rating rating={anime.rating} size="lg" />
            <div className="text-brand-300">
              <span className="font-semibold">{anime.episodes}</span>
              <span className="text-brand-400 ml-2">Episodes</span>
            </div>
          </div>

          <p className="text-brand-300 mb-6 max-w-md line-clamp-3">
            {anime.description}
          </p>

          <div className="flex flex-wrap gap-3">
            {anime.genres.slice(0, 3).map((genre) => (
              <Badge key={genre} variant="default">
                {genre}
              </Badge>
            ))}
          </div>

          <div className="flex gap-3 mt-8">
            <Link href={`/watch/${anime.slug}`}>
              <Button size="lg" className="flex items-center gap-2">
                <Play className="w-5 h-5" />
                Watch Now
              </Button>
            </Link>
            <Link href={`/anime/${anime.slug}`}>
              <Button variant="secondary" size="lg" className="flex items-center gap-2">
                <Info className="w-5 h-5" />
                Details
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
