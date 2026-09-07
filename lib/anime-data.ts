import { Anime } from './types/anime';

export const animeDatabase: Anime[] = [
  {
    id: '1',
    slug: 'jujutsu-kaisen',
    title: 'Jujutsu Kaisen',
    alternativeTitle: 'JJK',
    description: 'A boy swallows a cursed talisman—the finger of a demon—and becomes the host of the demon. He enters a shaman\'s school to be able to locate the demon\'s other fingers and thus save the world from annihilation.',
    poster: 'https://images.unsplash.com/photo-1578375872862-cb049228cc4a?w=400&h=600&fit=crop',
    banner: 'https://images.unsplash.com/photo-1578375872862-cb049228cc4a?w=1200&h=400&fit=crop',
    rating: 8.7,
    year: 2020,
    status: 'ongoing',
    type: 'TV',
    episodes: 47,
    genres: ['Action', 'Supernatural', 'School'],
    featured: true,
    latestEpisode: 47,
    views: 2500000,
  },
  {
    id: '2',
    slug: 'demon-slayer',
    title: 'Demon Slayer',
    alternativeTitle: 'Kimetsu no Yaiba',
    description: 'After his family is slaughtered by demons, Tanjiro joins the Demon Slayer Corps to fight back and find a cure for his sister who has been turned into a demon.',
    poster: 'https://images.unsplash.com/photo-1522869635100-ce30e84dc214?w=400&h=600&fit=crop',
    banner: 'https://images.unsplash.com/photo-1522869635100-ce30e84dc214?w=1200&h=400&fit=crop',
    rating: 8.9,
    year: 2019,
    status: 'ongoing',
    type: 'TV',
    episodes: 55,
    genres: ['Action', 'Drama', 'Supernatural'],
    featured: true,
    latestEpisode: 55,
    views: 3200000,
  },
  {
    id: '3',
    slug: 'attack-on-titan',
    title: 'Attack on Titan',
    alternativeTitle: 'Shingeki no Kyojin',
    description: 'In a world where giant humanoid creatures called Titans prey on humans, a young soldier named Eren Yeager discovers a way to fight back.',
    poster: 'https://images.unsplash.com/photo-1545069131-2f3f8e8b5a1e?w=400&h=600&fit=crop',
    banner: 'https://images.unsplash.com/photo-1545069131-2f3f8e8b5a1e?w=1200&h=400&fit=crop',
    rating: 9.0,
    year: 2013,
    status: 'completed',
    type: 'TV',
    episodes: 139,
    genres: ['Action', 'Dark Fantasy', 'Psychological'],
    featured: true,
    latestEpisode: 139,
    views: 5000000,
  },
  {
    id: '4',
    slug: 'my-hero-academia',
    title: 'My Hero Academia',
    alternativeTitle: 'Boku no Hero Academia',
    description: 'In a world where most people have superpowers called "Quirks", a powerless boy dreams of becoming a hero.',
    poster: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop',
    banner: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop',
    rating: 8.3,
    year: 2016,
    status: 'ongoing',
    type: 'TV',
    episodes: 113,
    genres: ['Action', 'School', 'Superhero'],
    featured: false,
    latestEpisode: 113,
    views: 2800000,
  },
  {
    id: '5',
    slug: 'death-note',
    title: 'Death Note',
    description: 'A high schooler discovers a supernatural notebook that allows him to kill anyone by writing their name in it.',
    poster: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=600&fit=crop',
    banner: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1200&h=400&fit=crop',
    rating: 8.6,
    year: 2006,
    status: 'completed',
    type: 'TV',
    episodes: 37,
    genres: ['Psychological', 'Thriller', 'Supernatural'],
    featured: true,
    latestEpisode: 37,
    views: 4100000,
  },
  {
    id: '6',
    slug: 'naruto-shippuden',
    title: 'Naruto Shippuden',
    alternativeTitle: 'Naruto',
    description: 'Naruto Uzumaki continues his ninja journey to save his friend Sasuke and protect the world from greater threats.',
    poster: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=400&h=600&fit=crop',
    banner: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=1200&h=400&fit=crop',
    rating: 8.4,
    year: 2007,
    status: 'completed',
    type: 'TV',
    episodes: 500,
    genres: ['Action', 'Adventure', 'Martial Arts'],
    featured: false,
    latestEpisode: 500,
    views: 6000000,
  },
  {
    id: '7',
    slug: 'steins-gate',
    title: 'Steins;Gate',
    description: 'A group of friends discover they can send messages to the past, leading to a thrilling journey through time.',
    poster: 'https://images.unsplash.com/photo-1536440936694-2ab4e0ef2e9c?w=400&h=600&fit=crop',
    banner: 'https://images.unsplash.com/photo-1536440936694-2ab4e0ef2e9c?w=1200&h=400&fit=crop',
    rating: 9.1,
    year: 2011,
    status: 'completed',
    type: 'TV',
    episodes: 24,
    genres: ['Sci-Fi', 'Thriller', 'Psychological'],
    featured: false,
    latestEpisode: 24,
    views: 2200000,
  },
  {
    id: '8',
    slug: 'cowboy-bebop',
    title: 'Cowboy Bebop',
    description: 'A space-faring bounty hunter and his eclectic crew pursue dangerous criminals across the solar system.',
    poster: 'https://images.unsplash.com/photo-1545621542-500d4d4de369?w=400&h=600&fit=crop',
    banner: 'https://images.unsplash.com/photo-1545621542-500d4d4de369?w=1200&h=400&fit=crop',
    rating: 8.8,
    year: 1998,
    status: 'completed',
    type: 'TV',
    episodes: 26,
    genres: ['Sci-Fi', 'Action', 'Adventure'],
    featured: false,
    latestEpisode: 26,
    views: 1900000,
  },
  {
    id: '9',
    slug: 'tokyo-ghoul',
    title: 'Tokyo Ghoul',
    description: 'A normal high schooler becomes a half-ghoul and must navigate a world where he belongs to neither humans nor ghouls.',
    poster: 'https://images.unsplash.com/photo-1578895267409-84e2c61fb8d1?w=400&h=600&fit=crop',
    banner: 'https://images.unsplash.com/photo-1578895267409-84e2c61fb8d1?w=1200&h=400&fit=crop',
    rating: 7.9,
    year: 2014,
    status: 'completed',
    type: 'TV',
    episodes: 48,
    genres: ['Action', 'Dark', 'Psychological'],
    featured: false,
    latestEpisode: 48,
    views: 2600000,
  },
  {
    id: '10',
    slug: 'fullmetal-alchemist',
    title: 'Fullmetal Alchemist: Brotherhood',
    alternativeTitle: 'FMA: B',
    description: 'Two brothers search for the Philosopher\'s Stone to restore their bodies after a failed alchemical experiment.',
    poster: 'https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?w=400&h=600&fit=crop',
    banner: 'https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?w=1200&h=400&fit=crop',
    rating: 9.2,
    year: 2009,
    status: 'completed',
    type: 'TV',
    episodes: 64,
    genres: ['Action', 'Adventure', 'Fantasy'],
    featured: true,
    latestEpisode: 64,
    views: 3400000,
  },
  {
    id: '11',
    slug: 'code-geass',
    title: 'Code Geass',
    description: 'A student gains the power to command anyone to obey him, and uses it to start a rebellion against an oppressive empire.',
    poster: 'https://images.unsplash.com/photo-1535016120754-6f080d4fb14e?w=400&h=600&fit=crop',
    banner: 'https://images.unsplash.com/photo-1535016120754-6f080d4fb14e?w=1200&h=400&fit=crop',
    rating: 8.5,
    year: 2006,
    status: 'completed',
    type: 'TV',
    episodes: 50,
    genres: ['Action', 'Mecha', 'School'],
    featured: false,
    latestEpisode: 50,
    views: 2400000,
  },
  {
    id: '12',
    slug: 'one-piece',
    title: 'One Piece',
    description: 'A young pirate dreams of becoming the Pirate King and sails the world with his crew in search of treasure.',
    poster: 'https://images.unsplash.com/photo-1581274455760-ff8a08e514ee?w=400&h=600&fit=crop',
    banner: 'https://images.unsplash.com/photo-1581274455760-ff8a08e514ee?w=1200&h=400&fit=crop',
    rating: 8.7,
    year: 1999,
    status: 'ongoing',
    type: 'TV',
    episodes: 1070,
    genres: ['Action', 'Adventure', 'Comedy'],
    featured: true,
    latestEpisode: 1070,
    views: 7500000,
  },
];

export function getAnimeBySlug(slug: string): Anime | undefined {
  return animeDatabase.find((anime) => anime.slug === slug);
}

export function getPopularAnime(): Anime[] {
  return animeDatabase
    .sort((a, b) => (b.views || 0) - (a.views || 0))
    .slice(0, 8);
}

export function getFeaturedAnime(): Anime[] {
  return animeDatabase.filter((anime) => anime.featured).slice(0, 5);
}

export function getNewReleases(): Anime[] {
  return animeDatabase
    .filter((anime) => anime.status === 'ongoing')
    .slice(0, 6);
}

export function searchAnime(query: string): Anime[] {
  const lowerQuery = query.toLowerCase();
  return animeDatabase.filter(
    (anime) =>
      anime.title.toLowerCase().includes(lowerQuery) ||
      anime.alternativeTitle?.toLowerCase().includes(lowerQuery) ||
      anime.genres.some((g) => g.toLowerCase().includes(lowerQuery))
  );
}

export function getAnimeByGenre(genre: string): Anime[] {
  return animeDatabase.filter((anime) =>
    anime.genres.some((g) => g.toLowerCase() === genre.toLowerCase())
  );
}

export const genres = [
  'Action',
  'Adventure',
  'Comedy',
  'Drama',
  'Fantasy',
  'Horror',
  'Mecha',
  'Mystery',
  'Psychological',
  'Romance',
  'Sci-Fi',
  'Slice of Life',
  'Supernatural',
  'Thriller',
];
