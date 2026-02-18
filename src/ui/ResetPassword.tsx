"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [done, setDone] = useState(false);

  const valid = password.length >= 8 && password === confirm;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (valid) setDone(true);
  };

  return (
    <main className="min-h-screen bg-[#F7F6F3] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="mb-10 flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Fistiq Logo"
            width={48}
            height={48}
          />
          <span
            className="text-2xl font-semibold tracking-tight text-zinc-900"
            style={{ fontFamily: "'Georgia', serif" }}>
            Fistiq
          </span>
        </div>

        {!done ? (
          <>
            <h1
              className="text-3xl font-semibold text-zinc-900 mb-1"
              style={{ fontFamily: "'Georgia', serif" }}>
              New password
            </h1>
            <p className="text-sm text-zinc-400 mb-8">
              Choose a strong password.
            </p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-xs font-medium text-zinc-500 mb-1.5 uppercase tracking-widest">
                  New password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Min. 8 characters"
                  className="w-full bg-white border border-zinc-200 rounded-lg px-4 py-3 text-sm text-zinc-900 placeholder-zinc-300 outline-none focus:border-zinc-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-500 mb-1.5 uppercase tracking-widest">
                  Confirm password
                </label>
                <input
                  type="password"
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  placeholder="••••••••"
                  className={`w-full bg-white border rounded-lg px-4 py-3 text-sm text-zinc-900 placeholder-zinc-300 outline-none transition-colors ${
                    confirm && password !== confirm
                      ? "border-red-300 focus:border-red-400"
                      : "border-zinc-200 focus:border-zinc-400"
                  }`}
                />
                {confirm && password !== confirm && (
                  <p className="mt-1.5 text-xs text-red-400">
                    Passwords don&apos;t match
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={!valid}
                className={`w-full rounded-lg py-3 text-sm font-medium transition-colors cursor-pointer ${
                  valid
                    ? "bg-zinc-900 text-white hover:bg-zinc-700"
                    : "bg-zinc-200 text-zinc-400 cursor-not-allowed"
                }`}>
                Reset password
              </button>
            </form>
          </>
        ) : (
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white border border-zinc-100 mb-6">
              <svg
                className="w-6 h-6 text-zinc-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h1
              className="text-2xl font-semibold text-zinc-900 mb-2"
              style={{ fontFamily: "'Georgia', serif" }}>
              All set
            </h1>
            <p className="text-sm text-zinc-400 mb-8">
              Your password has been reset.
            </p>
            <Link
              href="/login"
              className="inline-block w-full bg-zinc-900 text-white rounded-lg py-3 text-sm font-medium hover:bg-zinc-700 transition-colors text-center">
              Back to sign in
            </Link>
          </div>
        )}
      </div>
    </main>
  );
};

export default ResetPassword;
