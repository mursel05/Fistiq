import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function proxy(request: NextRequest) {
  const languages = ["en", "az", "ru"];
  const defaultLanguage = "en";
  const pathname = request.nextUrl.pathname;
  const pathnameLang = languages.find(
    (lang) => pathname.startsWith(`/${lang}/`) || pathname === `/${lang}`,
  );
  if (!pathnameLang) {
    const response = NextResponse.redirect(
      new URL(`/${defaultLanguage}${pathname}`, request.url),
    );
    return response;
  }

  const refreshToken = request.cookies.get("refresh-token")?.value;
  const authRoutes = ["/my-videos"];
  if (
    !refreshToken &&
    authRoutes.some((route) => pathname.startsWith(`/${pathnameLang}${route}`))
  ) {
    return NextResponse.redirect(
      new URL(`/${pathnameLang}/login`, request.url),
    );
  }
  if (
    refreshToken &&
    !authRoutes.some((route) => pathname.startsWith(`/${pathnameLang}${route}`))
  ) {
    return NextResponse.redirect(new URL(`/${pathnameLang}`, request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|revalidate|robots.txt|sitemap.xml|images|videos|icons|favicon.ico).*)",
  ],
};
