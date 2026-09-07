export interface Anime {
  id: string;
  slug: string;
  title: string;
  alternativeTitle?: string;
  description: string;
  poster: string;
  banner: string;
  rating: number;
  year: number;
  status: 'ongoing' | 'completed' | 'upcoming';
  type: 'TV' | 'Movie' | 'OVA' | 'Special';
  episodes: number;
  genres: string[];
  seasons?: Season[];
  featured?: boolean;
  latestEpisode?: number;
  views?: number;
}

export interface Season {
  id: string;
  number: number;
  episodes: Episode[];
}

export interface Episode {
  id: string;
  number: number;
  title: string;
  description?: string;
  thumbnail?: string;
  duration: number;
  airDate?: string;
}

export interface ViewProgress {
  animeId: string;
  episodeId: string;
  progress: number;
  duration: number;
  updatedAt: string;
}

export interface SearchResult {
  id: string;
  title: string;
  poster: string;
  type: string;
  rating?: number;
}
