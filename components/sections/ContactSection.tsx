"use client";

import React, { useState, useEffect } from "react";
import { Send, CheckCircle2, ArrowUpRight, Copy, Check, Clock, MapPin, Mail } from "lucide-react";
import { RollText } from "@/components/motion/RollText";

export function ContactSection() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [copied, setCopied] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Chennai is UTC+5:30
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setCurrentTime(new Intl.DateTimeFormat("en-GB", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hi.shreeprasandh@gmail.com");
    setCopied(true);
    if (window._haptics?.trigger) window._haptics.trigger("selection");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (window._haptics?.trigger) window._haptics.trigger("selection");
    setStatus("sending");

    setTimeout(() => {
      setStatus("sent");
      const mailtoLink = `mailto:hi.shreeprasandh@gmail.com?subject=Transmission from ${encodeURIComponent(
        formState.name
      )}&body=${encodeURIComponent(formState.message)}%0A%0AFrom: ${encodeURIComponent(
        formState.email
      )}`;
      window.location.href = mailtoLink;
    }, 600);
  };

  return (
    <section
      id="contact"
      className="relative w-full py-24 px-6 md:px-12 lg:px-16 border-b border-[var(--line)]"
    >
      {/* Bleibtgleich Master Headline Grid */}
      <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-8 gap-x-4 gap-y-8 w-full border-b border-[var(--line)] pb-16 mb-16">
        <div className="col-span-2 md:col-span-6 lg:col-span-8 flex flex-col">
          <div className="flex items-center gap-2 font-mono text-[11px] text-[var(--muted)] mb-4 uppercase tracking-widest">
            <span>05</span>
            <span>//</span>
            <span>DIRECT TRANSMISSION</span>
          </div>

          <h2 className="h1 text-[var(--ink)] leading-[0.88] tracking-[-0.04em] select-none">
            <RollText text="Let’s Build the" />
            <br />
            <span className="text-[var(--muted)]">
              <RollText text="Remarkable." />
            </span>
          </h2>
        </div>
      </div>

      {/* 2-Column Architectural Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full">
        {/* Left Col (5 cols): Direct Inquiries & Telemetry */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-10">
          <div className="flex flex-col gap-6">
            <p className="p1 text-[var(--ink)] text-base md:text-lg leading-relaxed max-w-md font-normal">
              Available for full-time principal software engineering roles, high-throughput backend
              architecture, and ambitious creative technology collaborations.
            </p>

            {/* Direct Copyable Email Box */}
            <div className="border border-[var(--line)] bg-[var(--bg-subtle)] p-6 flex flex-col gap-3 group hover:border-[var(--line-strong)] transition-colors">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--muted)]">
                PRIMARY ELECTRONIC MAIL
              </span>
              <div className="flex items-center justify-between gap-2">
                <a
                  href="mailto:hi.shreeprasandh@gmail.com"
                  className="font-mono text-base md:text-lg font-medium text-[var(--ink)] hover:underline truncate"
                >
                  hi.shreeprasandh@gmail.com
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="p-2 border border-[var(--line)] bg-[var(--bg)] hover:bg-[var(--invert-bg)] hover:text-[var(--invert-fg)] transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Realtime Geographic & Time Coordinates */}
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-[var(--line)] bg-[var(--bg-subtle)] p-4 flex flex-col gap-1">
                <span className="font-mono text-[10px] text-[var(--muted)] uppercase tracking-wider flex items-center gap-1.5">
                  <MapPin className="w-3 h-3" />
                  LOCATION
                </span>
                <span className="font-mono text-sm text-[var(--ink)] font-medium">
                  Chennai, IN
                </span>
                <span className="font-mono text-[10px] text-[var(--faint)]">
                  13.0827° N, 80.2707° E
                </span>
              </div>

              <div className="border border-[var(--line)] bg-[var(--bg-subtle)] p-4 flex flex-col gap-1">
                <span className="font-mono text-[10px] text-[var(--muted)] uppercase tracking-wider flex items-center gap-1.5">
                  <Clock className="w-3 h-3" />
                  LOCAL TIME (IST)
                </span>
                <span className="font-mono text-sm text-[var(--ink)] font-bold">
                  {currentTime || "14:30:00"}
                </span>
                <span className="font-mono text-[10px] text-[var(--faint)]">
                  UTC +5:30
                </span>
              </div>
            </div>
          </div>

          {/* Social Channels Network */}
          <div className="border-t border-[var(--line)] pt-8">
            <span className="font-mono text-[10px] text-[var(--muted)] uppercase tracking-wider block mb-4">
              NETWORK SIGNALS
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-[11px]">
              {[
                { label: "GITHUB", href: "https://github.com/Shreeprasandh" },
                { label: "LINKEDIN", href: "https://www.linkedin.com/in/shreeprasandh-k/" },
                { label: "X.COM", href: "https://x.com/shreeprasandh/" },
                { label: "INSTAGRAM", href: "https://www.instagram.com/shree_prasandh/" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 border border-[var(--line)] bg-[var(--bg-subtle)] hover:bg-[var(--invert-bg)] hover:text-[var(--invert-fg)] transition-all group"
                >
                  <span>{s.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Col (7 cols): Sleek Transmission Form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="border border-[var(--line)] bg-[var(--bg-subtle)] p-8 md:p-10 flex flex-col gap-6 shadow-sm"
          >
            <div className="flex items-center justify-between pb-4 border-b border-[var(--line)]">
              <span className="font-mono text-[10px] text-[var(--muted)] uppercase tracking-wider">
                TRANSMISSION TERMINAL
              </span>
              <span className="font-mono text-[10px] text-emerald-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                ONLINE
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[10px] text-[var(--muted)] uppercase tracking-wider">
                  IDENTIFIER / NAME
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="Your Name"
                  className="h-12 px-4 bg-[var(--bg)] border border-[var(--line)] text-sm font-mono text-[var(--ink)] focus:outline-none focus:border-[var(--line-strong)] transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-mono text-[10px] text-[var(--muted)] uppercase tracking-wider">
                  ELECTRONIC MAIL
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="your.email@domain.com"
                  className="h-12 px-4 bg-[var(--bg)] border border-[var(--line)] text-sm font-mono text-[var(--ink)] focus:outline-none focus:border-[var(--line-strong)] transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-mono text-[10px] text-[var(--muted)] uppercase tracking-wider">
                PROJECT SCOPE / MESSAGE
              </label>
              <textarea
                required
                rows={5}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                placeholder="Share your vision, engineering challenge, or collaboration proposal..."
                className="p-4 bg-[var(--bg)] border border-[var(--line)] text-sm font-mono text-[var(--ink)] focus:outline-none focus:border-[var(--line-strong)] transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className="h-12 flex items-center justify-center gap-2 bg-[var(--ink)] text-[var(--invert-fg)] font-mono text-[11px] font-bold uppercase tracking-widest hover:opacity-85 transition-opacity cursor-pointer disabled:opacity-50 mt-2"
            >
              {status === "sent" ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>TRANSMISSION DISPATCHED</span>
                </>
              ) : status === "sending" ? (
                <span>DISPATCHING BYTES...</span>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>DISPATCH TRANSMISSION</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
