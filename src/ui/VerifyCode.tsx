"use client";
import { Spinner } from "@/components/ui/spinner";
import { useVerifyCode } from "@/hooks/useAuth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useRef, SyntheticEvent } from "react";

const VerifyCode = () => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputs = useRef<(HTMLInputElement | null)[]>([]);
  const { verifyCode, loading } = useVerifyCode();
  const router = useRouter();

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const { data } = await verifyCode({
      variables: {
        input: {
          code: Number(code.join("")),
        },
      },
    });
    if (data?.verifyCode?.success) {
      router.push("/reset-password?token=" + code.join(""));
    }
  };

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
    <main className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="mb-10 flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Fistiq Logo"
            width={48}
            height={48}
          />
          <span
            className="text-2xl font-semibold tracking-tight text-white"
            style={{ fontFamily: "'Georgia', serif" }}>
            Fistiq
          </span>
        </div>

        <h1
          className="text-3xl font-semibold text-white mb-1"
          style={{ fontFamily: "'Georgia', serif" }}>
          Verify code
        </h1>
        <p className="text-sm text-zinc-500 mb-8">
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
              className="w-full aspect-square bg-white/5 border border-white/10 rounded-lg text-center text-lg font-medium text-zinc-200 outline-none focus:border-white/25 transition-colors"
            />
          ))}
        </div>

        <button
          onClick={handleSubmit}
          disabled={!isComplete || loading}
          className={`flex justify-center w-full cursor-pointer text-center rounded-lg py-3 text-sm font-medium transition-colors ${
            isComplete
              ? "bg-red-500 text-white hover:bg-red-400"
              : "bg-white/5 text-zinc-600 cursor-not-allowed pointer-events-none"
          }`}>
          {loading ? <Spinner /> : "Verify"}
        </button>

        <p className="text-center text-xs text-zinc-600 mt-6 flex items-center justify-center gap-1">
          Didn&apos;t receive it?
          <button className="text-zinc-400 font-medium hover:text-zinc-200 transition-colors cursor-pointer">
            Resend code
          </button>
        </p>

        <p className="text-center text-xs text-zinc-600 mt-3">
          <Link
            href="/login"
            className="text-zinc-400 font-medium hover:text-zinc-200 transition-colors">
            ← Back to sign in
          </Link>
        </p>
      </div>
    </main>
  );
};

export default VerifyCode;
