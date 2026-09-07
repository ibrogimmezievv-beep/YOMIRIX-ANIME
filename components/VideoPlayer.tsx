'use client';

import { useState } from 'react';
import { Volume2, VolumeX, Maximize, Minimize } from 'lucide-react';
import { cn } from '@/lib/utils';

interface VideoPlayerProps {
  title: string;
  episodeNumber: number;
  onTimeChange?: (time: number) => void;
}

export function VideoPlayer({
  title,
  episodeNumber,
  onTimeChange,
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration] = useState(2400); // 40 minutes in seconds

  return (
    <div
      className={cn(
        'bg-brand-900 rounded-lg overflow-hidden',
        isFullscreen && 'fixed inset-0 z-50 rounded-none'
      )}
    >
      {/* Video Area */}
      <div className="relative bg-black aspect-video flex items-center justify-center">
        {/* Placeholder Video */}
        <div className="w-full h-full bg-gradient-to-br from-brand-800 to-brand-900 flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">▶</div>
            <p className="text-brand-300">
              {title} - Episode {episodeNumber}
            </p>
            <p className="text-brand-500 text-sm mt-2">
              Video player placeholder
            </p>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="bg-brand-800 border-t border-brand-700 p-4">
        {/* Progress Bar */}
        <div className="mb-4">
          <input
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            onChange={(e) => {
              const time = Number(e.target.value);
              setCurrentTime(time);
              onTimeChange?.(time);
            }}
            className="w-full h-1 bg-brand-700 rounded-full cursor-pointer accent-brand-accent"
          />
          <div className="flex justify-between text-xs text-brand-400 mt-2">
            <span>
              {Math.floor(currentTime / 60)}:
              {String(currentTime % 60).padStart(2, '0')}
            </span>
            <span>
              {Math.floor(duration / 60)}:
              {String(duration % 60).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Control Buttons */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 text-brand-300 hover:text-brand-100 transition-colors"
              aria-label="Play/Pause"
            >
              {isPlaying ? '⏸' : '▶'}
            </button>
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="p-2 text-brand-300 hover:text-brand-100 transition-colors"
              aria-label="Mute/Unmute"
            >
              {isMuted ? (
                <VolumeX className="w-5 h-5" />
              ) : (
                <Volume2 className="w-5 h-5" />
              )}
            </button>
          </div>

          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-2 text-brand-300 hover:text-brand-100 transition-colors"
            aria-label="Fullscreen"
          >
            {isFullscreen ? (
              <Minimize className="w-5 h-5" />
            ) : (
              <Maximize className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
