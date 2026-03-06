"use client";
import { ReactNode, useState } from "react";
import { DataProvider } from "@/context/ApiContext";
import LenisProvider from "@/utils/lenis";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";
import Sidebar from "@/components/Sidebar";
import { ApolloProvider } from "@apollo/client/react";
import { client } from "@/utils/apollo";

export default function Providers({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <LenisProvider>
      <DataProvider>
        <ApolloProvider client={client}>
          <div
            className="flex h-screen bg-[#0a0a0a] text-zinc-100 overflow-hidden"
            style={{ fontFamily: "'DM Sans', sans-serif" }}>
            <Sidebar sidebarOpen={sidebarOpen} />
            <div className="flex-1 flex flex-col min-w-0">
              <Navbar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
              />
              <main className="flex-1 overflow-y-auto">{children}</main>
            </div>
          </div>
          <Footer />
        </ApolloProvider>
      </DataProvider>
      <Toaster position="top-center" />
    </LenisProvider>
  );
}
