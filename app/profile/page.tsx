'use client';

import Image from 'next/image';
import { User, Zap, Eye, Heart, TrendingUp } from 'lucide-react';

const mockUserStats = {
  username: 'AnimeWatcher',
  avatar: 'https://images.unsplash.com/photo-1535713806e5c96f6a66b2a9e80b5fc56b6c5b5c?w=200&h=200&fit=crop',
  email: 'user@example.com',
  joinDate: 'Joined January 2024',
  stats: [
    { label: 'Anime Watched', value: '47', icon: Eye },
    { label: 'Favorites', value: '12', icon: Heart },
    { label: 'Hours Watched', value: '342', icon: TrendingUp },
    { label: 'Streak', value: '15 days', icon: Zap },
  ],
  favoriteGenres: ['Action', 'Supernatural', 'Sci-Fi', 'Psychological'],
  recentlyWatched: [
    { title: 'Jujutsu Kaisen', progress: 35 },
    { title: 'My Hero Academia', progress: 67 },
  ],
};

export default function ProfilePage() {
  return (
    <div className="space-y-8 max-w-4xl">
      {/* Profile Card */}
      <div className="bg-brand-800 border border-brand-700 rounded-lg p-8 md:p-12">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <Image
              src={mockUserStats.avatar}
              alt={mockUserStats.username}
              width={120}
              height={120}
              className="rounded-full"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-bold text-brand-100">
              {mockUserStats.username}
            </h1>
            <p className="text-brand-400 mt-1">{mockUserStats.email}</p>
            <p className="text-brand-500 text-sm mt-2">
              {mockUserStats.joinDate}
            </p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {mockUserStats.stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="bg-brand-800 border border-brand-700 rounded-lg p-6 text-center hover:border-brand-accent transition-colors"
            >
              <Icon className="w-6 h-6 text-brand-accent mx-auto mb-3" />
              <p className="text-2xl font-bold text-brand-100">
                {stat.value}
              </p>
              <p className="text-sm text-brand-400 mt-2">{stat.label}</p>
            </div>
          );
        })}
      </div>

      {/* Favorite Genres */}
      <div>
        <h2 className="text-2xl font-bold text-brand-100 mb-4">
          Favorite Genres
        </h2>
        <div className="flex flex-wrap gap-2">
          {mockUserStats.favoriteGenres.map((genre) => (
            <span
              key={genre}
              className="px-4 py-2 bg-brand-accent text-brand-900 rounded-full font-medium"
            >
              {genre}
            </span>
          ))}
        </div>
      </div>

      {/* Recently Watched */}
      <div>
        <h2 className="text-2xl font-bold text-brand-100 mb-4">
          Recently Watched
        </h2>
        <div className="space-y-3">
          {mockUserStats.recentlyWatched.map((anime, index) => (
            <div key={index} className="bg-brand-800 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-brand-100">{anime.title}</h3>
                <span className="text-sm text-brand-400">
                  {anime.progress}%
                </span>
              </div>
              <div className="w-full bg-brand-700 rounded-full h-2">
                <div
                  className="bg-brand-accent h-2 rounded-full transition-all"
                  style={{ width: `${anime.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
