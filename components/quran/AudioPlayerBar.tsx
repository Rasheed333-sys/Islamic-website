"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { getSurahAudioUrl } from "@/lib/quran/audio";
import { RECITATION_EDITION, RECITER_LABEL } from "@/lib/quran/editions";
import { cn } from "@/lib/utils";

interface AudioPlayerBarProps {
  surahNumber: number;
  surahEnglishName: string;
}

function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds)) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${String(secs).padStart(2, "0")}`;
}

export function AudioPlayerBar({ surahNumber, surahEnglishName }: AudioPlayerBarProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = new Audio(getSurahAudioUrl(surahNumber, RECITATION_EDITION));
    audioRef.current = audio;

    const onTimeUpdate = () => setProgress(audio.currentTime);
    const onLoadedMetadata = () => setDuration(audio.duration);
    const onEnded = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.pause();
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("ended", onEnded);
    };
  }, [surahNumber]);

  function togglePlay() {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  }

  function seek(e: React.ChangeEvent<HTMLInputElement>) {
    if (!audioRef.current) return;
    const value = Number(e.target.value);
    audioRef.current.currentTime = value;
    setProgress(value);
  }

  return (
    <div className="sticky bottom-0 z-40 border-t border-line bg-bg-elevated/90 backdrop-blur-xl dark:border-line-dark dark:bg-bg-dark-elevated/90">
      <div className="container flex items-center gap-4 py-3">
        <button
          type="button"
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause recitation" : "Play recitation"}
          className={cn(
            "flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-colors",
            "bg-emerald-800 text-white hover:bg-emerald-700",
          )}
        >
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </button>

        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-ink dark:text-ink-inverted">
            {surahEnglishName} · {RECITER_LABEL}
          </p>
          <div className="mt-1.5 flex items-center gap-2">
            <span className="w-9 shrink-0 text-xs tabular-nums text-ink-soft dark:text-ink-inverted/50">
              {formatTime(progress)}
            </span>
            <input
              type="range"
              min={0}
              max={duration || 0}
              value={progress}
              onChange={seek}
              aria-label="Seek recitation"
              className="h-1 w-full flex-1 cursor-pointer appearance-none rounded-full bg-line accent-emerald-600 dark:bg-line-dark"
            />
            <span className="w-9 shrink-0 text-xs tabular-nums text-ink-soft dark:text-ink-inverted/50">
              {formatTime(duration)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}