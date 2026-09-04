import React, { useState, useRef, useEffect } from 'react';
import { 
  BookOpen, 
  Music, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  ExternalLink, 
  Chrome,
  Disc3,
  ShieldCheck,
  Zap
} from 'lucide-react';

const tracks = [
  {
    id: 'vizhiyin-eeram',
    title: 'Vizhiyin Eeram',
    role: 'Lyricist: Shreeprasandh K',
    src: '/audio/vizhiyin-eeram.mp3',
  },
  {
    id: 'pillow-held-tight',
    title: 'Pillow Held Tight',
    role: 'Lyricist: Shreeprasandh K',
    src: '/audio/pillow-held-tight.mp3',
  }
];

const CreativeEndeavors = () => {
  // Audio Player State
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  const currentTrack = tracks[currentTrackIndex];

  // Toggle Play / Pause
  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.error("Audio playback error:", err);
      });
    }
  };

  // Switch Track
  const handleSelectTrack = (index) => {
    if (index === currentTrackIndex) {
      togglePlay();
      return;
    }
    setCurrentTrackIndex(index);
    setIsPlaying(true);
    setCurrentTime(0);
  };

  // When current track changes, play if isPlaying was true
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play().catch((err) => {
          console.error("Track switch error:", err);
          setIsPlaying(false);
        });
      }
    }
  }, [currentTrackIndex, isPlaying]);

  // Handle Time Update
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  // Handle Loaded Metadata
  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration || 0);
    }
  };

  // Handle Seek
  const handleSeek = (e) => {
    const seekTime = parseFloat(e.target.value);
    setCurrentTime(seekTime);
    if (audioRef.current) {
      audioRef.current.currentTime = seekTime;
    }
  };

  // Toggle Mute
  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Format Time (mm:ss)
  const formatTime = (time) => {
    if (isNaN(time) || time === 0) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <section id="creative" className="w-full bg-[#1B1B1B] py-20 md:py-32 px-6 md:px-8">
      <div className="max-w-[1240px] mx-auto">
        
        <h2 className="text-[#D8D3CC] text-[32px] md:text-[50px] font-semibold tracking-[-1.5px] md:tracking-[-2px] text-center mb-16 md:mb-24">
          Creative Endeavors
        </h2>

        {/* 3-Column Responsive Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[24px] md:gap-[30px] items-stretch">
          
          {/* =========================================
              CARD 1: The Book
             ========================================= */}
          <div className="bg-[#0F0F0F] border border-[#1C1C21] rounded-[16px] p-6 md:p-7 flex flex-col justify-between transition-all duration-300 hover:border-[#D8D3CC]/20 hover:translate-y-[-4px] group">
            <div className="flex flex-col gap-5">
              
              {/* Category Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[#D8D3CC]/60 text-[13px] font-medium">
                  <BookOpen className="w-4 h-4 text-[#D8D3CC]" />
                  <span>Authored Novel</span>
                </div>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#1B1B1B] text-[#D8D3CC]/70 border border-white/5">
                  Available on All Stores
                </span>
              </div>

              {/* Book Visual Mockup */}
              <div className="w-full h-[180px] bg-[#141414] rounded-[12px] border border-white/5 relative overflow-hidden flex items-center justify-center p-4 shadow-inner group-hover:border-[#D8D3CC]/20 transition-all">
                {/* 3D Book Cover Presentation */}
                <div className="relative h-[155px] aspect-[2/3] rounded-[4px] shadow-2xl overflow-hidden border border-white/10 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1">
                  <img 
                    src="/creative/book-cover.png"
                    alt="The Cursed Devil who was Blessed book cover"
                    loading="lazy"
                    className="w-full h-full object-cover rounded-[3px]"
                  />
                  {/* Subtle book spine effect */}
                  <div className="absolute inset-y-0 left-0 w-2.5 bg-gradient-to-r from-black/40 via-white/10 to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Text Info */}
              <div className="flex flex-col gap-2">
                <div className="flex flex-col">
                  <h3 className="text-[#D8D3CC] text-[20px] md:text-[22px] font-semibold leading-snug group-hover:text-white transition-colors">
                    The Cursed Devil who was Blessed
                  </h3>
                  <span className="text-[12px] text-[#D8D3CC]/50 font-light italic">
                    a diary turned into a book
                  </span>
                </div>
                <p className="text-[#D8D3CC] text-[14px] leading-[22px] font-light opacity-70">
                  A personal story and reflective journey exploring destiny, emotional depth, and the quiet blessings forged through life's trials. Published by Kaizzcer (Shreeprasandh K).
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6 mt-auto">
              <a 
                href="https://www.amazon.in/Cursed-Devil-who-was-Blessed/dp/B0GVSDDLTD"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-[#1B1B1B] hover:bg-[#D8D3CC] text-[#D8D3CC] hover:text-[#0F0F0F] border border-white/10 hover:border-transparent rounded-[8px] font-medium text-[14px] transition-all flex items-center justify-center gap-2 group/btn cursor-pointer"
              >
                <span>View on Amazon</span>
                <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* =========================================
              CARD 2: Music & Audio Player
             ========================================= */}
          <div className="bg-[#0F0F0F] border border-[#1C1C21] rounded-[16px] p-6 md:p-7 flex flex-col justify-between transition-all duration-300 hover:border-[#D8D3CC]/20 hover:translate-y-[-4px] group">
            <div className="flex flex-col gap-5">
              
              {/* Category Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[#D8D3CC]/60 text-[13px] font-medium">
                  <Music className="w-4 h-4 text-[#D8D3CC]" />
                  <span>Original Music</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#1B1B1B] text-[#D8D3CC]/70 border border-white/5">
                  <Disc3 className={`w-3.5 h-3.5 ${isPlaying ? 'animate-spin text-[#D8D3CC]' : 'text-[#D8D3CC]/40'}`} />
                  <span>2 Tracks</span>
                </div>
              </div>

              {/* Hidden HTML5 Audio Element */}
              <audio 
                ref={audioRef}
                src={currentTrack.src}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onEnded={() => {
                  if (currentTrackIndex < tracks.length - 1) {
                    setCurrentTrackIndex(currentTrackIndex + 1);
                  } else {
                    setIsPlaying(false);
                  }
                }}
                preload="metadata"
              />

              {/* Track Switcher Pills */}
              <div className="flex flex-col gap-2">
                {tracks.map((track, idx) => (
                  <button
                    key={track.id}
                    onClick={() => handleSelectTrack(idx)}
                    className={`w-full text-left p-3 rounded-[8px] flex items-center justify-between transition-all cursor-pointer border ${
                      currentTrackIndex === idx 
                        ? 'bg-[#1B1B1B] border-[#D8D3CC]/30 text-white' 
                        : 'bg-[#141414] border-transparent text-[#D8D3CC]/70 hover:bg-[#1B1B1B]/70'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] font-mono opacity-40">0{idx + 1}</span>
                      <span className="text-[14px] font-medium leading-tight">{track.title}</span>
                    </div>
                    {currentTrackIndex === idx && isPlaying && (
                      <div className="flex items-end gap-[3px] h-4 shrink-0 px-1">
                        <span className="w-[3px] bg-[#D8D3CC] rounded-full wave-bar-1" />
                        <span className="w-[3px] bg-[#D8D3CC] rounded-full wave-bar-2" />
                        <span className="w-[3px] bg-[#D8D3CC] rounded-full wave-bar-3" />
                        <span className="w-[3px] bg-[#D8D3CC] rounded-full wave-bar-4" />
                      </div>
                    )}
                  </button>
                ))}
              </div>

              {/* Interactive Player Console */}
              <div className="bg-[#141414] border border-white/5 rounded-[12px] p-4 flex flex-col gap-3">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[15px] font-semibold text-[#D8D3CC] leading-tight">
                      {currentTrack.title}
                    </span>
                    <span className="text-[11px] text-[#D8D3CC]/45 font-normal tracking-wide">
                      Lyricist: Shreeprasandh K
                    </span>
                  </div>

                  <button
                    onClick={toggleMute}
                    className="p-1.5 text-[#D8D3CC]/60 hover:text-[#D8D3CC] transition-colors cursor-pointer"
                    aria-label={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                </div>

                {/* Progress Bar & Timers */}
                <div className="flex flex-col gap-1.5">
                  <input 
                    type="range"
                    min="0"
                    max={duration || 100}
                    value={currentTime}
                    onChange={handleSeek}
                    className="w-full h-1.5 bg-[#2A2A2A] rounded-lg appearance-none cursor-pointer accent-[#D8D3CC]"
                  />
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#D8D3CC]/50">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Play/Pause Button */}
            <div className="pt-6 mt-auto">
              <button 
                onClick={togglePlay}
                className="w-full py-3 px-4 bg-[#D8D3CC] hover:bg-white text-[#0F0F0F] rounded-[8px] font-semibold text-[14px] transition-all flex items-center justify-center gap-2 shadow-lg active:scale-[0.98] cursor-pointer"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-4 h-4 fill-current" />
                    <span>Pause Track</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                    <span>Play {currentTrack.title}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* =========================================
              CARD 3: Chrome Extension (leetie)
             ========================================= */}
          <div className="bg-[#0F0F0F] border border-[#1C1C21] rounded-[16px] p-6 md:p-7 flex flex-col justify-between transition-all duration-300 hover:border-[#D8D3CC]/20 hover:translate-y-[-4px] group">
            <div className="flex flex-col gap-5">
              
              {/* Category Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[#D8D3CC]/60 text-[13px] font-medium">
                  <Chrome className="w-4 h-4 text-[#D8D3CC]" />
                  <span>Chrome Extension</span>
                </div>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#1B1B1B] text-emerald-400 border border-emerald-500/20">
                  Featured
                </span>
              </div>

              {/* Extension Visual Preview */}
              <div className="w-full h-[180px] bg-[#141414] rounded-[12px] border border-white/5 relative overflow-hidden flex items-center justify-center p-3 group-hover:border-[#D8D3CC]/20 transition-all">
                <img 
                  src="/creative/leetie-screenshot.png"
                  alt="leetie preview"
                  loading="lazy"
                  className="w-full h-full object-cover object-left-top rounded-[6px] opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute top-2 right-2 w-8 h-8 rounded-[6px] bg-black/80 backdrop-blur-md p-1 border border-white/10">
                  <img src="/creative/leetie-icon.jpg" alt="leetie logo" className="w-full h-full object-contain rounded-[4px]" />
                </div>
              </div>

              {/* Text Info */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-[#D8D3CC] text-[20px] md:text-[22px] font-semibold leading-snug group-hover:text-white transition-colors">
                    leetie
                  </h3>
                  <span className="text-[12px] text-[#D8D3CC]/60 font-mono">LeetCode → GitHub</span>
                </div>
                <p className="text-[#D8D3CC] text-[14px] leading-[22px] font-light opacity-70">
                  Automatically sync your accepted LeetCode solutions to GitHub in real-time. Features zero-click commit automation, rich problem metadata, and 100% sandboxed client-side privacy.
                </p>
              </div>

              {/* Feature Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-1 rounded-[6px] bg-[#1B1B1B] text-[#D8D3CC]/80 border border-white/5">
                  <Zap className="w-3 h-3 text-[#D8D3CC]" /> Zero-Click
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-1 rounded-[6px] bg-[#1B1B1B] text-[#D8D3CC]/80 border border-white/5">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" /> 100% Private
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6 mt-auto">
              <a 
                href="https://chromewebstore.google.com/detail/dladcchefomefppalgbijajgegfhlhcd?utm_source=item-share-cb"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-[#1B1B1B] hover:bg-[#D8D3CC] text-[#D8D3CC] hover:text-[#0F0F0F] border border-white/10 hover:border-transparent rounded-[8px] font-medium text-[14px] transition-all flex items-center justify-center gap-2 group/btn cursor-pointer"
              >
                <span>Add to Chrome</span>
                <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CreativeEndeavors;
