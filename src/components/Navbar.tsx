import { Link } from "lucide-react";

interface NavbarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const Navbar = ({ sidebarOpen, setSidebarOpen }: NavbarProps) => {
  return (
    <header className="h-14 flex items-center gap-4 px-4 border-b border-white/5 flex-shrink-0">
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="text-zinc-500 hover:text-zinc-200 transition-colors p-1.5 rounded-lg hover:bg-white/5">
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Search */}
      <div className="flex-1 max-w-lg">
        <div className="relative">
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
            placeholder="Search videos..."
            className="w-full bg-white/5 border border-white/8 rounded-lg pl-9 pr-4 py-2 text-sm text-zinc-300 placeholder-zinc-600 outline-none focus:border-white/20 transition-colors"
          />
        </div>
      </div>

      <div className="ml-auto flex items-center gap-2">
        <Link
          href="/upload"
          className="flex items-center gap-2 bg-red-500 hover:bg-red-400 text-white rounded-lg px-3.5 py-2 text-xs font-medium transition-colors">
          <svg
            className="w-3.5 h-3.5"
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
        <button className="text-zinc-500 hover:text-zinc-200 transition-colors p-2 rounded-lg hover:bg-white/5 relative">
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.8}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-red-500 rounded-full" />
        </button>
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=64&q=80"
          className="w-8 h-8 rounded-full object-cover cursor-pointer"
          alt="avatar"
        />
      </div>
    </header>
  );
};

export default Navbar;
