"use client";
import Link from "next/link";

export interface VideoCardProps {
  id: string;
  title: string;
  channel: string;
  views: string;
  time: string;
  duration: string;
  thumbnail: string;
  avatar: string;
  size?: "default" | "large";
}

const VideoCard = ({
  id,
  title,
  channel,
  views,
  time,
  duration,
  thumbnail,
  avatar,
  size = "default",
}: VideoCardProps) => {
  return (
    <Link href={`/watch/${id}`} className="group block">
      {/* Thumbnail */}
      <div
        className={`relative w-full rounded-xl overflow-hidden bg-zinc-800 ${
          size === "large" ? "aspect-video" : "aspect-video"
        }`}>
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Duration badge */}
        <span className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded font-mono">
          {duration}
        </span>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <svg
              className="w-5 h-5 text-white ml-0.5"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="flex gap-3 mt-3">
        <img
          src={avatar}
          alt={channel}
          className="w-8 h-8 rounded-full flex-shrink-0 object-cover"
        />
        <div className="min-w-0">
          <h3 className="text-sm font-medium text-zinc-100 leading-snug line-clamp-2 group-hover:text-white transition-colors">
            {title}
          </h3>
          <p className="text-xs text-zinc-500 mt-1">{channel}</p>
          <p className="text-xs text-zinc-600">
            {views} · {time}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
