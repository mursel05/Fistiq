"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";

const VerifyCode = () => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return;
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    if (value && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const isComplete = code.every((d) => d !== "");

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

        <h1
          className="text-3xl font-semibold text-zinc-900 mb-1"
          style={{ fontFamily: "'Georgia', serif" }}>
          Verify code
        </h1>
        <p className="text-sm text-zinc-400 mb-8">
          Enter the 6-digit code we sent to your email.
        </p>

        <div className="flex gap-2 mb-6">
          {code.map((digit, i) => (
            <input
              key={i}
              ref={(el) => {
                inputs.current[i] = el;
              }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(i, e.target.value)}
              onKeyDown={(e) => handleKeyDown(i, e)}
              className="w-full aspect-square bg-white border border-zinc-200 rounded-lg text-center text-lg font-medium text-zinc-900 outline-none focus:border-zinc-400 transition-colors"
            />
          ))}
        </div>

        <Link
          href="/reset-password"
          className={`block w-full text-center rounded-lg py-3 text-sm font-medium transition-colors ${
            isComplete
              ? "bg-zinc-900 text-white hover:bg-zinc-700"
              : "bg-zinc-200 text-zinc-400 cursor-not-allowed pointer-events-none"
          }`}>
          Verify
        </Link>

        <p className="text-center text-xs text-zinc-400 mt-6 flex items-center justify-center gap-1">
          Didn&apos;t receive it?
          <button className="text-zinc-700 font-medium hover:text-zinc-900 transition-colors cursor-pointer">
            Resend code
          </button>
        </p>

        <p className="text-center text-xs text-zinc-400 mt-3">
          <Link
            href="/login"
            className="text-zinc-700 font-medium hover:text-zinc-900 transition-colors">
            ← Back to sign in
          </Link>
        </p>
      </div>
    </main>
  );
};

export default VerifyCode;
