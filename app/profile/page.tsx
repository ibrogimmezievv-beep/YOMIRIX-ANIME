'use client';

export default function ProfilePage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-brand-800 border border-brand-700 rounded-lg p-8">
        <h1 className="text-3xl font-bold text-brand-100 mb-2">
          User Profile
        </h1>
        <p className="text-brand-400">animeWatcher</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-brand-800 border border-brand-700 rounded-lg p-6 text-center">
          <p className="text-2xl font-bold text-brand-100">47</p>
          <p className="text-sm text-brand-400 mt-2">Anime Watched</p>
        </div>
        <div className="bg-brand-800 border border-brand-700 rounded-lg p-6 text-center">
          <p className="text-2xl font-bold text-brand-100">12</p>
          <p className="text-sm text-brand-400 mt-2">Favorites</p>
        </div>
        <div className="bg-brand-800 border border-brand-700 rounded-lg p-6 text-center">
          <p className="text-2xl font-bold text-brand-100">342</p>
          <p className="text-sm text-brand-400 mt-2">Hours Watched</p>
        </div>
        <div className="bg-brand-800 border border-brand-700 rounded-lg p-6 text-center">
          <p className="text-2xl font-bold text-brand-100">15</p>
          <p className="text-sm text-brand-400 mt-2">Days Streak</p>
        </div>
      </div>
    </div>
  );
}
