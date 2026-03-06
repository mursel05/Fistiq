import type { Metadata } from "next";
import "@/assets/styles/globals.scss";
import Providers from "./providers";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_CLIENT_URL as string),
  title: {
    template: "%s | Fistiq",
    default: "Fistiq",
  },
  description:
    "Fistiq is a platform for sharing and discovering high-quality videos across various topics. Join our community to explore, create, and connect with like-minded individuals.",
  keywords: [
    "Fistiq",
    "video sharing",
    "video discovery",
    "community",
    "content creation",
    "entertainment",
    "education",
    "technology",
    "lifestyle",
    "sports",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
