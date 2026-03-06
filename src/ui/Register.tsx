"use client";
import { Spinner } from "@/components/ui/spinner";
import { useRegister } from "@/hooks/useAuth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react";
import { toast } from "sonner";

const Register = () => {
  const { register, loading } = useRegister();
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (loading) return;
    if (!form.email || !form.password) {
      toast.error("Please fill in all fields.");
      return;
    }

    const { data } = await register({
      variables: {
        input: {
          name: form.name,
          surname: form.surname,
          email: form.email,
          password: form.password,
        },
      },
    });
    if (data?.register?.success) {
      router.push("/");
    }
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4 py-16">
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
          Create account
        </h1>
        <p className="text-sm text-zinc-500 mb-8">
          Start your journey with Fistiq
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-zinc-600 mb-1.5 uppercase tracking-widest">
                First name
              </label>
              <input
                type="text"
                value={form.name}
                onChange={handleChange("name")}
                placeholder="Jane"
                name="name"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-zinc-200 placeholder-zinc-700 outline-none focus:border-white/25 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-zinc-600 mb-1.5 uppercase tracking-widest">
                Last name
              </label>
              <input
                type="text"
                value={form.surname}
                onChange={handleChange("surname")}
                placeholder="Doe"
                name="surname"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-zinc-200 placeholder-zinc-700 outline-none focus:border-white/25 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-zinc-600 mb-1.5 uppercase tracking-widest">
              Email
            </label>
            <input
              type="email"
              value={form.email}
              onChange={handleChange("email")}
              placeholder="you@example.com"
              name="email"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-zinc-200 placeholder-zinc-700 outline-none focus:border-white/25 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-zinc-600 mb-1.5 uppercase tracking-widest">
              Password
            </label>
            <input
              type="password"
              value={form.password}
              onChange={handleChange("password")}
              name="password"
              placeholder="Min. 8 characters"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-zinc-200 placeholder-zinc-700 outline-none focus:border-white/25 transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center bg-red-500 hover:bg-red-400 disabled:bg-zinc-800 disabled:text-zinc-600 cursor-pointer text-white rounded-lg py-3 text-sm font-medium transition-colors mt-2">
            {loading ? <Spinner /> : "Create account"}
          </button>
        </form>

        <p className="text-center text-xs text-zinc-600 mt-8">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-zinc-400 font-medium hover:text-zinc-200 transition-colors">
            Sign in
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Register;
