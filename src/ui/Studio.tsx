"use client";
import { useState } from "react";
import Link from "next/link";
import { MY_VIDEOS } from "@/lib/mockData";

type SortKey = "date" | "views" | "title";

const Studio = () => {
  const [videos, setVideos] = useState(MY_VIDEOS);
  const [sortKey, setSortKey] = useState<SortKey>("date");
  const [search, setSearch] = useState("");
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const filtered = videos
    .filter((v) => v.title.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sortKey === "title") return a.title.localeCompare(b.title);
      if (sortKey === "views") return parseInt(b.views) - parseInt(a.views);
      return 0; // default: date order from array
    });

  const confirmDelete = () => {
    if (deleteId) setVideos((prev) => prev.filter((v) => v.id !== deleteId));
    setDeleteId(null);
  };

  const totalViews = videos.reduce((sum, v) => {
    const n = parseInt(v.views.replace(/,/g, "")) || 0;
    return sum + n;
  }, 0);

  const stats = [
    { label: "Videos", value: videos.length },
    { label: "Total Views", value: totalViews.toLocaleString() },
    { label: "Subscribers", value: "340" },
    { label: "Watch Time", value: "1.2K hrs" },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-white mb-1">Studio</h1>
          <p className="text-sm text-zinc-500">
            Manage and track your content.
          </p>
        </div>
        <Link
          href="/upload"
          className="flex items-center gap-2 bg-red-500 hover:bg-red-400 text-white rounded-xl px-4 py-2.5 text-sm font-medium transition-colors">
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
          Upload
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {stats.map((s) => (
          <div
            key={s.label}
            className="bg-white/4 border border-white/6 rounded-xl p-4">
            <p className="text-2xl font-semibold text-white">{s.value}</p>
            <p className="text-xs text-zinc-500 mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-5">
        <div className="relative flex-1 min-w-48">
          <svg
            className="w-4 h-4 text-zinc-600 absolute left-3 top-1/2 -translate-y-1/2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search your videos..."
            className="w-full bg-white/5 border border-white/8 rounded-xl pl-9 pr-4 py-2.5 text-sm text-zinc-300 placeholder-zinc-600 outline-none focus:border-white/20 transition-colors"
          />
        </div>
        <select
          value={sortKey}
          onChange={(e) => setSortKey(e.target.value as SortKey)}
          className="bg-white/5 border border-white/8 rounded-xl px-4 py-2.5 text-sm text-zinc-400 outline-none focus:border-white/20 transition-colors">
          <option value="date">Newest first</option>
          <option value="views">Most viewed</option>
          <option value="title">Alphabetical</option>
        </select>
      </div>

      {/* Table */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 text-zinc-600 text-sm">
          {videos.length === 0 ? (
            <>
              <p className="mb-4">You haven&apos;t uploaded any videos yet.</p>
              <Link
                href="/upload"
                className="text-red-400 hover:text-red-300 transition-colors">
                Upload your first video →
              </Link>
            </>
          ) : (
            "No videos match your search."
          )}
        </div>
      ) : (
        <div className="border border-white/6 rounded-2xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/6 bg-white/3">
                <th className="text-left text-[10px] font-semibold text-zinc-600 uppercase tracking-widest px-4 py-3">
                  Video
                </th>
                <th className="text-left text-[10px] font-semibold text-zinc-600 uppercase tracking-widest px-4 py-3 hidden md:table-cell">
                  Category
                </th>
                <th className="text-left text-[10px] font-semibold text-zinc-600 uppercase tracking-widest px-4 py-3 hidden sm:table-cell">
                  Views
                </th>
                <th className="text-left text-[10px] font-semibold text-zinc-600 uppercase tracking-widest px-4 py-3 hidden lg:table-cell">
                  Likes
                </th>
                <th className="text-left text-[10px] font-semibold text-zinc-600 uppercase tracking-widest px-4 py-3 hidden sm:table-cell">
                  Uploaded
                </th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-white/4">
              {filtered.map((v) => (
                <tr
                  key={v.id}
                  className="hover:bg-white/3 transition-colors group">
                  {/* Video cell */}
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="relative w-24 aspect-video rounded-lg overflow-hidden flex-shrink-0 bg-zinc-800">
                        <img
                          src={v.thumbnail}
                          alt={v.title}
                          className="w-full h-full object-cover"
                        />
                        <span className="absolute bottom-1 right-1 bg-black/70 text-[10px] text-white px-1 rounded font-mono">
                          {v.duration}
                        </span>
                      </div>
                      <div className="min-w-0">
                        <p className="font-medium text-zinc-200 line-clamp-2 text-xs leading-snug">
                          {v.title}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 hidden md:table-cell">
                    <span className="bg-white/8 text-zinc-400 text-[11px] px-2 py-0.5 rounded-full">
                      {v.category}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-xs text-zinc-400 hidden sm:table-cell">
                    {v.views}
                  </td>
                  <td className="px-4 py-3 text-xs text-zinc-400 hidden lg:table-cell">
                    {v.likes}
                  </td>
                  <td className="px-4 py-3 text-xs text-zinc-600 hidden sm:table-cell">
                    {v.time}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity justify-end">
                      <Link
                        href={`/watch/${v.id}`}
                        className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-500 hover:text-zinc-200 transition-colors"
                        title="Watch">
                        <svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </Link>
                      <button
                        className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-500 hover:text-zinc-200 transition-colors"
                        title="Edit">
                        <svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                          />
                        </svg>
                      </button>
                      <button
                        onClick={() => setDeleteId(v.id)}
                        className="p-2 rounded-lg bg-white/5 hover:bg-red-500/15 text-zinc-500 hover:text-red-400 transition-colors"
                        title="Delete">
                        <svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Delete modal */}
      {deleteId && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-[#111] border border-white/10 rounded-2xl p-6 max-w-sm w-full">
            <h3 className="text-base font-semibold text-white mb-2">
              Delete video?
            </h3>
            <p className="text-sm text-zinc-500 mb-6">
              This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setDeleteId(null)}
                className="flex-1 py-2.5 bg-white/8 hover:bg-white/12 text-zinc-300 rounded-xl text-sm font-medium transition-colors">
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="flex-1 py-2.5 bg-red-500 hover:bg-red-400 text-white rounded-xl text-sm font-semibold transition-colors">
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Studio;
