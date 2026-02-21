"use client";
import { useLogin } from "@/hooks/useAuth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "sonner";

const Login = () => {
  const { login, loading } = useLogin();
  const [formData, setFormData] = useState({
    email: "johnmaq.doe@eqqqxample.com",
    password: "SecurePass123!",
  });
  const router = useRouter();

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (loading) return;
    if (!formData.email || !formData.password) {
      toast.error("Please fill in all fields.");
      return;
    }

    const { data } = await login({
      variables: {
        input: {
          email: formData.email,
          password: formData.password,
        },
      },
    });
    if (data?.login?.success) {
      router.push("/");
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
          Welcome back
        </h1>
        <p className="text-sm text-zinc-400 mb-8">Sign in to your account</p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-xs font-medium text-zinc-500 mb-1.5 uppercase tracking-widest">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="you@example.com"
              className="w-full bg-white border border-zinc-200 rounded-lg px-4 py-3 text-sm text-zinc-900 placeholder-zinc-300 outline-none focus:border-zinc-400 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-zinc-500 mb-1.5 uppercase tracking-widest">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              placeholder="••••••••"
              className="w-full bg-white border border-zinc-200 rounded-lg px-4 py-3 text-sm text-zinc-900 placeholder-zinc-300 outline-none focus:border-zinc-400 transition-colors"
            />
          </div>

          <div className="flex justify-end">
            <Link
              href="/forgot-password"
              className="text-xs text-zinc-400 hover:text-zinc-700 transition-colors">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center bg-zinc-900 cursor-pointer text-white rounded-lg py-3 text-sm font-medium hover:bg-zinc-700 transition-colors mt-2">
            {loading ? <Spinner /> : "Sign In"}
          </button>
        </form>

        <p className="text-center text-xs text-zinc-400 mt-8">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="text-zinc-700 font-medium hover:text-zinc-900 transition-colors">
            Create one
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
