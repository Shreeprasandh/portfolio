"use client";

import React, { useState, useRef } from "react";
import { Play, Pause, Disc3, BookOpen, ArrowUpRight, Volume2 } from "lucide-react";
import { RollText } from "@/components/motion/RollText";

interface Track {
  id: string;
  title: string;
  role: string;
  src: string;
  description: string;
}

const TRACKS: Track[] = [
  {
    id: "vizhiyin-eeram",
    title: "Vizhiyin Eeram",
    role: "Lyricist & Conceptual Director",
    src: "/audio/vizhiyin-eeram.mp3",
    description: "A poignant Tamil exploration of longing, memory, and lingering unspoken grief.",
  },
  {
    id: "pillow-held-tight",
    title: "Pillow Held Tight",
    role: "Lyricist & Songwriter",
    src: "/audio/pillow-held-tight.mp3",
    description: "An introspective ballad exploring nocturnal vulnerability, stillness, and quiet thoughts.",
  },
];

export function CreativeSection() {
  const [activeTrack, setActiveTrack] = useState<Track>(TRACKS[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = (track: Track) => {
    if (window._haptics?.trigger) window._haptics.trigger("selection");

    if (activeTrack.id === track.id) {
      if (isPlaying) {
        audioRef.current?.pause();
        setIsPlaying(false);
      } else {
        audioRef.current?.play();
        setIsPlaying(true);
      }
    } else {
      setActiveTrack(track);
      setIsPlaying(true);
      if (audioRef.current) {
        audioRef.current.src = track.src;
        audioRef.current.play();
      }
    }
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    const current = audioRef.current.currentTime;
    const duration = audioRef.current.duration || 1;
    setProgress((current / duration) * 100);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const fraction = clickX / rect.width;
    const duration = audioRef.current.duration || 1;
    audioRef.current.currentTime = fraction * duration;
    setProgress(fraction * 100);
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);
  };

  return (
    <section
      id="creative"
      className="relative w-full py-24 px-6 md:px-12 lg:px-16 border-b border-[var(--line)]"
    >
      <audio
        ref={audioRef}
        src={activeTrack.src}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
        className="hidden"
      />

      {/* Bleibtgleich Heading Bar */}
      <div className="flex flex-col sm:flex-row items-baseline justify-between border-b border-[var(--line)] pb-8 mb-12 gap-4">
        <div className="flex items-baseline gap-6">
          <h2 className="h1 text-[var(--ink)] leading-[0.88] tracking-[-0.04em]">
            <RollText text="Creative" />
          </h2>
          <span className="h1 text-[var(--muted)] leading-[0.88] tracking-[-0.04em]">
            <RollText text="Endeavors" />
          </span>
        </div>

        <p className="max-w-md text-sm text-[var(--muted)] font-mono text-left sm:text-right">
          Beyond code and circuits: authored literary books, lyrical poetry, and recorded musical works.
        </p>
      </div>

      {/* 2-Column Grid: Card 1 (Authored Book) & Card 2 (Music Studio) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full">
        {/* ============================================================== */}
        {/* CARD 1: Authored Novel (The Cursed Devil who was Blessed) */}
        {/* ============================================================== */}
        <div className="border border-[var(--line)] bg-[var(--bg-subtle)] p-8 flex flex-col justify-between group hover:border-[var(--line-strong)] transition-colors duration-200">
          <div>
            {/* Top Tag & Indicator */}
            <div className="flex items-center justify-between pb-6 border-b border-[var(--line)] mb-6">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[var(--ink)]" />
                <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--muted)]">
                  AUTHORED PUBLICATION
                </span>
              </div>
              <span className="font-mono text-[11px] text-[var(--muted)]">
                2024
              </span>
            </div>

            {/* Visual 3D Book Cover Presentation */}
            <div className="w-full h-56 bg-[var(--bg)] border border-[var(--line)] flex items-center justify-center p-4 mb-6 shadow-inner group-hover:border-[var(--line-strong)] transition-all">
              <div className="relative h-44 aspect-[2/3] rounded-[2px] shadow-2xl overflow-hidden border border-[var(--line-strong)] transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-1">
                <img
                  src="/creative/book-cover.png"
                  alt="The Cursed Devil who was Blessed book cover"
                  className="w-full h-full object-cover"
                />
                {/* Book Spine Shadow Overlay */}
                <div className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/50 via-white/10 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Book Metadata */}
            <div className="flex flex-col gap-1.5">
              <h3 className="font-sans text-2xl font-medium text-[var(--ink)] tracking-tight">
                The Cursed Devil who was Blessed
              </h3>
              <span className="font-mono text-[12px] text-[var(--muted)] italic">
                a diary turned into a book
              </span>
              <p className="text-[14px] text-[var(--muted)] font-sans leading-relaxed mt-2">
                A personal story and reflective journey exploring destiny, emotional depth,
                and the quiet blessings forged through life's trials. Published by Kaizzcer (Shreeprasandh K).
              </p>
            </div>
          </div>

          {/* Amazon CTA Button */}
          <div className="pt-8 border-t border-[var(--line)] mt-8">
            <a
              href="https://www.amazon.in/Cursed-Devil-who-was-Blessed/dp/B0GVSDDLTD"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full h-11 px-5 bg-[var(--ink)] text-[var(--invert-fg)] font-mono text-[11px] font-bold uppercase tracking-wider hover:opacity-85 transition-opacity"
            >
              <span>VIEW ON AMAZON</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* ============================================================== */}
        {/* CARD 2: Original Music & Audio Player */}
        {/* ============================================================== */}
        <div className="border border-[var(--line)] bg-[var(--bg-subtle)] p-8 flex flex-col justify-between group hover:border-[var(--line-strong)] transition-colors duration-200">
          <div>
            {/* Top Tag & Indicator */}
            <div className="flex items-center justify-between pb-6 border-b border-[var(--line)] mb-6">
              <div className="flex items-center gap-2">
                <Disc3
                  className={`w-4 h-4 ${
                    isPlaying ? "animate-spin text-[var(--ink)]" : "text-[var(--muted)]"
                  }`}
                />
                <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--muted)]">
                  ORIGINAL COMPOSITIONS
                </span>
              </div>
              <span className="font-mono text-[11px] text-[var(--muted)]">
                2 TRACKS
              </span>
            </div>

            {/* Track Selector Tabs */}
            <div className="flex flex-col gap-3 mb-6">
              {TRACKS.map((track) => {
                const isSelected = activeTrack.id === track.id;
                return (
                  <div
                    key={track.id}
                    onClick={() => togglePlay(track)}
                    className={`p-4 border transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? "border-[var(--line-strong)] bg-[var(--bg)]"
                        : "border-[var(--line)] bg-[var(--bg)]/50 hover:border-[var(--line-strong)]"
                    }`}
                  >
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <span className="font-sans text-base font-medium text-[var(--ink)]">
                          {track.title}
                        </span>
                        {isSelected && isPlaying && (
                          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        )}
                      </div>
                      <span className="font-mono text-[11px] text-[var(--muted)] mt-0.5">
                        {track.role}
                      </span>
                    </div>

                    <button
                      type="button"
                      aria-label={isSelected && isPlaying ? "Pause" : "Play"}
                      className="p-2 border border-[var(--line)] bg-[var(--bg-subtle)] hover:bg-[var(--invert-bg)] hover:text-[var(--invert-fg)] transition-colors"
                    >
                      {isSelected && isPlaying ? (
                        <Pause className="w-4 h-4" />
                      ) : (
                        <Play className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Currently Playing Track Details */}
            <div className="border border-[var(--line)] bg-[var(--bg)] p-4 flex flex-col gap-2">
              <span className="font-mono text-[10px] text-[var(--faint)] uppercase tracking-wider">
                CURRENT SELECTION
              </span>
              <p className="font-sans text-[13px] text-[var(--muted)] leading-relaxed">
                {activeTrack.description}
              </p>
            </div>
          </div>

          {/* Interactive Mechanical Scrubber */}
          <div className="pt-8 border-t border-[var(--line)] mt-8 flex flex-col gap-3">
            <div className="flex items-center justify-between font-mono text-[10px] text-[var(--muted)]">
              <span>{activeTrack.title.toUpperCase()}</span>
              <span>{Math.round(progress)}%</span>
            </div>

            <div
              onClick={handleSeek}
              className="w-full h-2 bg-[var(--bg)] border border-[var(--line)] cursor-pointer relative overflow-hidden"
            >
              <div
                className="absolute left-0 top-0 bottom-0 bg-[var(--ink)] transition-all duration-75"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
