"use client";
import { useState } from "react";
import VideoCard from "@/components/VideoCard";
import { MOCK_VIDEOS, CATEGORIES } from "@/lib/mockData";

const Home = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const featured = MOCK_VIDEOS[1]; // Iceland video as hero
  const trending = MOCK_VIDEOS.slice(0, 4);
  const filtered =
    activeCategory === "All"
      ? MOCK_VIDEOS
      : MOCK_VIDEOS.filter((v) => v.category === activeCategory);

  return (
    <div className="px-6 py-6 max-w-screen-2xl mx-auto">
      {/* Hero Featured */}
      <div
        className="relative w-full rounded-2xl overflow-hidden mb-8 group cursor-pointer"
        style={{ aspectRatio: "21/7", minHeight: 220 }}>
        <img
          src={featured.thumbnail}
          alt={featured.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-8">
          <span className="text-xs text-red-400 font-semibold uppercase tracking-widest mb-2">
            ✦ Featured
          </span>
          <h2
            className="text-2xl md:text-3xl font-semibold text-white max-w-xl leading-snug mb-2"
            style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {featured.title}
          </h2>
          <div className="flex items-center gap-3 text-sm text-zinc-400">
            <img
              src={featured.avatar}
              className="w-6 h-6 rounded-full object-cover"
              alt=""
            />
            <span>{featured.channel}</span>
            <span>·</span>
            <span>{featured.views}</span>
            <span>·</span>
            <span className="font-mono text-zinc-500">{featured.duration}</span>
          </div>
          <a
            href={`/watch/${featured.id}`}
            className="mt-4 inline-flex items-center gap-2 bg-white text-black rounded-lg px-5 py-2.5 text-sm font-semibold w-fit hover:bg-zinc-200 transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            Watch Now
          </a>
        </div>
      </div>

      {/* Trending row */}
      <section className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-semibold text-zinc-100 flex items-center gap-2">
            <span className="text-red-500">↑</span> Trending Now
          </h2>
          <a
            href="#"
            className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors">
            See all →
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {trending.map((v) => (
            <VideoCard key={v.id} {...v} />
          ))}
        </div>
      </section>

      {/* Category filter */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-1 scrollbar-hide">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
              activeCategory === cat
                ? "bg-white text-black"
                : "bg-white/8 text-zinc-400 hover:bg-white/12 hover:text-zinc-200"
            }`}>
            {cat}
          </button>
        ))}
      </div>

      {/* All videos grid */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-semibold text-zinc-100">
            {activeCategory === "All" ? "Discover" : activeCategory}
          </h2>
          <span className="text-xs text-zinc-600">
            {filtered.length} videos
          </span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((v) => (
            <VideoCard key={v.id} {...v} />
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-20 text-zinc-600 text-sm">
            No videos in this category yet.
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
