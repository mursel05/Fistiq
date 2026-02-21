"use client";
import { Spinner } from "@/components/ui/spinner";
import { useForgotPassword } from "@/hooks/useAuth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react";

const ForgotPassword = () => {
  const { forgotPassword, loading } = useForgotPassword();
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const { data } = await forgotPassword({
      variables: {
        input: {
          email,
        },
      },
    });
    if (data?.forgotPassword?.success) {
      router.push("/verify-code");
    }
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

        <h1
          className="text-3xl font-semibold text-zinc-900 mb-1"
          style={{ fontFamily: "'Georgia', serif" }}>
          Reset password
        </h1>
        <p className="text-sm text-zinc-400 mb-8">
          Enter your email and we&apos;ll send a verification code.
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-xs font-medium text-zinc-500 mb-1.5 uppercase tracking-widest">
              Email
            </label>
            <input
              type="email"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full bg-white border border-zinc-200 rounded-lg px-4 py-3 text-sm text-zinc-900 placeholder-zinc-300 outline-none focus:border-zinc-400 transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center bg-zinc-900 cursor-pointer text-white rounded-lg py-3 text-sm font-medium hover:bg-zinc-700 transition-colors">
            {loading ? <Spinner /> : "Send code"}
          </button>
        </form>

        <p className="text-center text-xs text-zinc-400 mt-8">
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

export default ForgotPassword;
