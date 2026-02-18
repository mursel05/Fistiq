export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/public/"],
      disallow: ["/api/"],
    },
    sitemap: `${process.env.NEXT_PUBLIC_CLIENT_URL}/sitemap.xml`,
  };
}
