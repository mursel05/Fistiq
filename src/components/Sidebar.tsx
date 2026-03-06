"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarProps {
  sidebarOpen: boolean;
}

const Sidebar = ({ sidebarOpen }: SidebarProps) => {
  const pathname = usePathname();
  const navItems = [
    {
      href: "/",
      label: "Home",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
    },
    {
      href: "/trending",
      label: "Trending",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      href: "/subscriptions",
      label: "Subscriptions",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
    },
    {
      href: "/history",
      label: "History",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      href: "/saved",
      label: "Watch Later",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
          />
        </svg>
      ),
    },
  ];

  const studioItems = [
    {
      href: "/upload",
      label: "Upload",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
          />
        </svg>
      ),
    },
    {
      href: "/studio",
      label: "Studio",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <aside
      className={`flex-shrink-0 flex flex-col border-r border-white/5 transition-all duration-300 ${
        sidebarOpen ? "w-56" : "w-16"
      }`}>
      {/* Logo */}
      <div
        className={`h-14 flex items-center border-b border-white/5 px-4 gap-2 flex-shrink-0`}>
        <div className="w-7 h-7 rounded-lg bg-red-500 flex items-center justify-center flex-shrink-0">
          <svg
            className="w-4 h-4 text-white"
            fill="currentColor"
            viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
        {sidebarOpen && (
          <span className="font-semibold text-white tracking-tight text-sm">
            streamly
          </span>
        )}
      </div>

      <nav className="flex-1 overflow-y-auto py-4 px-2 space-y-0.5">
        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                active
                  ? "bg-white/10 text-white"
                  : "text-zinc-500 hover:text-zinc-200 hover:bg-white/5"
              }`}>
              <span className="flex-shrink-0">{item.icon}</span>
              {sidebarOpen && <span className="font-medium">{item.label}</span>}
            </Link>
          );
        })}

        <div
          className={`pt-4 pb-1 ${sidebarOpen ? "px-3" : "px-0 text-center"}`}>
          <span className="text-[10px] text-zinc-700 uppercase tracking-widest font-semibold">
            {sidebarOpen ? "Creator" : "·"}
          </span>
        </div>

        {studioItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                active
                  ? "bg-white/10 text-white"
                  : "text-zinc-500 hover:text-zinc-200 hover:bg-white/5"
              }`}>
              <span className="flex-shrink-0">{item.icon}</span>
              {sidebarOpen && <span className="font-medium">{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Bottom user */}
      <div className="border-t border-white/5 p-3">
        <div className={`flex items-center gap-2.5 px-1 py-1 rounded-lg`}>
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=64&q=80"
            className="w-7 h-7 rounded-full flex-shrink-0 object-cover"
            alt="avatar"
          />
          {sidebarOpen && (
            <div className="min-w-0">
              <p className="text-xs font-medium text-zinc-300 truncate">
                John Doe
              </p>
              <p className="text-[10px] text-zinc-600 truncate">
                340 subscribers
              </p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
