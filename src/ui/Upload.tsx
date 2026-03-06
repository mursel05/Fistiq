"use client";
import { useState, useRef } from "react";

type Step = "drop" | "details" | "done";

const Upload = () => {
  const [step, setStep] = useState<Step>("drop");
  const [dragging, setDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "Tech",
    visibility: "public",
    thumbnail: null as File | null,
    thumbnailPreview: "",
  });

  const categories = [
    "Tech",
    "Travel",
    "Science",
    "Music",
    "Food",
    "Gaming",
    "Design",
    "Vlog",
  ];

  const handleFile = (f: File) => {
    setFile(f);
    // Simulate upload progress
    setUploading(true);
    let p = 0;
    const iv = setInterval(() => {
      p += Math.random() * 12;
      if (p >= 100) {
        p = 100;
        clearInterval(iv);
        setUploading(false);
      }
      setProgress(Math.min(p, 100));
    }, 200);
    setStep("details");
    setForm((prev) => ({ ...prev, title: f.name.replace(/\.[^.]+$/, "") }));
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const f = e.dataTransfer.files[0];
    if (f?.type.startsWith("video/")) handleFile(f);
  };

  const handleThumbnail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    setForm((prev) => ({
      ...prev,
      thumbnail: f,
      thumbnailPreview: URL.createObjectURL(f),
    }));
  };

  const handlePublish = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("done");
  };

  if (step === "done") {
    return (
      <div className="flex items-center justify-center min-h-full py-20 px-6">
        <div className="text-center max-w-sm">
          <div className="w-16 h-16 rounded-full bg-green-500/15 flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-8 h-8 text-green-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-white mb-2">
            Video Published
          </h2>
          <p className="text-sm text-zinc-500 mb-8">
            <span className="text-zinc-300">&ldquo;{form.title}&rdquo;</span> is
            now live.
          </p>
          <div className="flex gap-3 justify-center">
            <a
              href="/studio"
              className="px-5 py-2.5 bg-white/10 hover:bg-white/15 text-zinc-200 text-sm font-medium rounded-lg transition-colors">
              Go to Studio
            </a>
            <button
              onClick={() => {
                setStep("drop");
                setFile(null);
                setProgress(0);
                setForm({
                  title: "",
                  description: "",
                  category: "Tech",
                  visibility: "public",
                  thumbnail: null,
                  thumbnailPreview: "",
                });
              }}
              className="px-5 py-2.5 bg-red-500 hover:bg-red-400 text-white text-sm font-medium rounded-lg transition-colors">
              Upload Another
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-8">
      <h1 className="text-2xl font-semibold text-white mb-1">Upload Video</h1>
      <p className="text-sm text-zinc-500 mb-8">
        Share your content with the world.
      </p>

      {step === "drop" ? (
        /* Drop zone */
        <div
          className={`border-2 border-dashed rounded-2xl flex flex-col items-center justify-center py-24 px-6 text-center transition-colors cursor-pointer ${
            dragging
              ? "border-red-500 bg-red-500/5"
              : "border-white/10 hover:border-white/20 bg-white/3"
          }`}
          onDragOver={(e) => {
            e.preventDefault();
            setDragging(true);
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={handleDrop}
          onClick={() => fileRef.current?.click()}>
          <input
            ref={fileRef}
            type="file"
            accept="video/*"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) handleFile(f);
            }}
          />
          <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-5">
            <svg
              className="w-8 h-8 text-zinc-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
              />
            </svg>
          </div>
          <p className="text-base font-medium text-zinc-300 mb-1">
            {dragging ? "Drop it!" : "Drop your video here"}
          </p>
          <p className="text-sm text-zinc-600">
            or click to browse · MP4, MOV, AVI up to 10GB
          </p>
        </div>
      ) : (
        /* Details form */
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Form — 3 cols */}
          <form className="lg:col-span-3 space-y-5" onSubmit={handlePublish}>
            {/* Upload bar */}
            <div className="bg-white/5 rounded-xl p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-red-500/15 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-red-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10l4.553-2.069A1 1 0 0121 8.867v6.265a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"
                    />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium text-zinc-300 truncate">
                    {file?.name}
                  </p>
                  <p className="text-[10px] text-zinc-600">
                    {uploading ? "Uploading..." : "Ready"}
                  </p>
                </div>
                <span className="text-xs font-mono text-zinc-500">
                  {Math.round(progress)}%
                </span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-1">
                <div
                  className="h-1 rounded-full bg-red-500 transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Title */}
            <div>
              <label className="block text-xs font-medium text-zinc-500 uppercase tracking-widest mb-1.5">
                Title *
              </label>
              <input
                type="text"
                value={form.title}
                onChange={(e) =>
                  setForm((p) => ({ ...p, title: e.target.value }))
                }
                required
                maxLength={100}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-zinc-200 outline-none focus:border-white/25 transition-colors"
              />
              <p className="text-right text-[10px] text-zinc-700 mt-1">
                {form.title.length}/100
              </p>
            </div>

            {/* Description */}
            <div>
              <label className="block text-xs font-medium text-zinc-500 uppercase tracking-widest mb-1.5">
                Description
              </label>
              <textarea
                value={form.description}
                onChange={(e) =>
                  setForm((p) => ({ ...p, description: e.target.value }))
                }
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-zinc-200 outline-none focus:border-white/25 transition-colors resize-none"
              />
            </div>

            {/* Category + Visibility */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-zinc-500 uppercase tracking-widest mb-1.5">
                  Category
                </label>
                <select
                  value={form.category}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, category: e.target.value }))
                  }
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-zinc-200 outline-none focus:border-white/25 transition-colors">
                  {categories.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-500 uppercase tracking-widest mb-1.5">
                  Visibility
                </label>
                <select
                  value={form.visibility}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, visibility: e.target.value }))
                  }
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-zinc-200 outline-none focus:border-white/25 transition-colors">
                  <option value="public">Public</option>
                  <option value="unlisted">Unlisted</option>
                  <option value="private">Private</option>
                </select>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => {
                  setStep("drop");
                  setFile(null);
                  setProgress(0);
                }}
                className="flex-1 py-3 bg-white/8 hover:bg-white/12 text-zinc-400 hover:text-zinc-200 rounded-xl text-sm font-medium transition-colors">
                Cancel
              </button>
              <button
                type="submit"
                disabled={uploading || !form.title}
                className="flex-1 py-3 bg-red-500 hover:bg-red-400 disabled:bg-zinc-700 disabled:text-zinc-500 text-white rounded-xl text-sm font-semibold transition-colors">
                {uploading ? "Uploading..." : "Publish"}
              </button>
            </div>
          </form>

          {/* Thumbnail — 2 cols */}
          <div className="lg:col-span-2">
            <label className="block text-xs font-medium text-zinc-500 uppercase tracking-widest mb-3">
              Thumbnail
            </label>
            <div
              className="aspect-video rounded-xl border-2 border-dashed border-white/10 bg-white/3 flex flex-col items-center justify-center cursor-pointer hover:border-white/20 transition-colors overflow-hidden relative"
              onClick={() => document.getElementById("thumb-input")?.click()}>
              <input
                id="thumb-input"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleThumbnail}
              />
              {form.thumbnailPreview ? (
                <img
                  src={form.thumbnailPreview}
                  className="w-full h-full object-cover"
                  alt="thumbnail"
                />
              ) : (
                <>
                  <svg
                    className="w-8 h-8 text-zinc-700 mb-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-xs text-zinc-600">Upload thumbnail</p>
                  <p className="text-[10px] text-zinc-700 mt-0.5">
                    JPG, PNG · max 2MB
                  </p>
                </>
              )}
            </div>

            {/* Tips */}
            <div className="mt-4 bg-white/3 rounded-xl p-4 space-y-2">
              <p className="text-xs font-semibold text-zinc-400">
                Upload checklist
              </p>
              {[
                { label: "Video file selected", done: !!file },
                { label: "Title added", done: !!form.title },
                { label: "Description written", done: !!form.description },
                { label: "Thumbnail uploaded", done: !!form.thumbnailPreview },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <div
                    className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${item.done ? "bg-green-500/20" : "bg-white/8"}`}>
                    {item.done && (
                      <svg
                        className="w-2.5 h-2.5 text-green-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </div>
                  <span
                    className={`text-xs ${item.done ? "text-zinc-400" : "text-zinc-700"}`}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Upload;
