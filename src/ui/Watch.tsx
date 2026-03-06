"use client";
import { useState } from "react";
import VideoCard from "@/components/VideoCard";
import { MOCK_VIDEOS } from "@/lib/mockData";

interface WatchProps {
  id: string;
}

const Watch = ({ id }: WatchProps) => {
  const video = MOCK_VIDEOS.find((v) => v.id === id) || MOCK_VIDEOS[0];
  const related = MOCK_VIDEOS.filter((v) => v.id !== video.id).slice(0, 6);

  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [showDesc, setShowDesc] = useState(false);

  return (
    <div className="flex flex-col xl:flex-row gap-6 p-6 max-w-screen-2xl mx-auto">
      {/* Left — player + info */}
      <div className="flex-1 min-w-0">
        {/* Player */}
        <div className="w-full rounded-2xl overflow-hidden bg-black aspect-video relative group">
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover"
          />
          {/* Fake play overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
              <svg
                className="w-7 h-7 text-white ml-1"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
          {/* Duration */}
          <span className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded font-mono">
            {video.duration}
          </span>
        </div>

        {/* Title & actions */}
        <div className="mt-4">
          <h1 className="text-lg font-semibold text-white leading-snug">
            {video.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-3 mt-3">
            {/* Channel */}
            <div className="flex items-center gap-3">
              <img
                src={video.avatar}
                className="w-9 h-9 rounded-full object-cover"
                alt={video.channel}
              />
              <div>
                <p className="text-sm font-medium text-zinc-200">
                  {video.channel}
                </p>
                <p className="text-xs text-zinc-600">
                  {video.subscribers} subscribers
                </p>
              </div>
              <button
                onClick={() => setSubscribed(!subscribed)}
                className={`ml-2 rounded-lg px-4 py-1.5 text-xs font-semibold transition-colors ${
                  subscribed
                    ? "bg-white/10 text-zinc-300 hover:bg-white/15"
                    : "bg-red-500 text-white hover:bg-red-400"
                }`}>
                {subscribed ? "Subscribed ✓" : "Subscribe"}
              </button>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setLiked(!liked)}
                className={`flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs font-medium transition-colors ${
                  liked
                    ? "bg-red-500/20 text-red-400"
                    : "bg-white/8 text-zinc-400 hover:bg-white/12 hover:text-zinc-200"
                }`}>
                <svg
                  className="w-4 h-4"
                  fill={liked ? "currentColor" : "none"}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.8}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                {video.likes}
              </button>

              <button
                onClick={() => setSaved(!saved)}
                className={`flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs font-medium transition-colors ${
                  saved
                    ? "bg-zinc-100/20 text-zinc-200"
                    : "bg-white/8 text-zinc-400 hover:bg-white/12 hover:text-zinc-200"
                }`}>
                <svg
                  className="w-4 h-4"
                  fill={saved ? "currentColor" : "none"}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.8}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  />
                </svg>
                Save
              </button>

              <button className="flex items-center gap-1.5 bg-white/8 hover:bg-white/12 text-zinc-400 hover:text-zinc-200 rounded-lg px-3.5 py-1.5 text-xs font-medium transition-colors">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.8}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  />
                </svg>
                Share
              </button>
            </div>
          </div>

          {/* Stats + description */}
          <div
            className="mt-4 bg-white/5 rounded-xl p-4 cursor-pointer"
            onClick={() => setShowDesc(!showDesc)}>
            <div className="flex items-center gap-3 text-xs text-zinc-500 mb-2">
              <span className="font-semibold text-zinc-300">{video.views}</span>
              <span>·</span>
              <span>{video.time}</span>
              <span>·</span>
              <span className="bg-zinc-700/60 px-2 py-0.5 rounded text-zinc-400">
                {video.category}
              </span>
            </div>
            <p
              className={`text-sm text-zinc-400 leading-relaxed ${!showDesc && "line-clamp-2"}`}>
              {video.description}
            </p>
            <button className="text-xs text-zinc-500 hover:text-zinc-300 mt-1 transition-colors">
              {showDesc ? "Show less" : "Show more"}
            </button>
          </div>
        </div>

        {/* Comments placeholder */}
        <div className="mt-6">
          <h3 className="text-sm font-semibold text-zinc-300 mb-4">Comments</h3>
          <div className="flex gap-3">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=64&q=80"
              className="w-8 h-8 rounded-full object-cover flex-shrink-0"
              alt="you"
            />
            <input
              type="text"
              placeholder="Add a comment..."
              className="flex-1 bg-transparent border-b border-white/10 text-sm text-zinc-300 placeholder-zinc-700 outline-none focus:border-white/30 py-1.5 transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Right — related */}
      <div className="w-full xl:w-80 flex-shrink-0">
        <h3 className="text-sm font-semibold text-zinc-400 mb-4 uppercase tracking-widest text-xs">
          Up Next
        </h3>
        <div className="flex flex-col gap-4">
          {related.map((v) => (
            <a key={v.id} href={`/watch/${v.id}`} className="flex gap-3 group">
              <div className="relative w-36 flex-shrink-0 rounded-lg overflow-hidden aspect-video bg-zinc-800">
                <img
                  src={v.thumbnail}
                  alt={v.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute bottom-1 right-1 bg-black/70 text-white text-[10px] px-1 py-0.5 rounded font-mono">
                  {v.duration}
                </span>
              </div>
              <div className="min-w-0">
                <p className="text-xs font-medium text-zinc-200 line-clamp-2 group-hover:text-white transition-colors leading-snug">
                  {v.title}
                </p>
                <p className="text-[11px] text-zinc-600 mt-1">{v.channel}</p>
                <p className="text-[11px] text-zinc-700">{v.views}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Watch;
