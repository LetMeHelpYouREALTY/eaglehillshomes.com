import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

/** Must match `site.url` host in `lib/site.ts` (canonical www). */
const CANONICAL_HOST = "www.eaglehillshomes.com";

export function middleware(request: NextRequest) {
  const rawHost = request.headers.get("host");
  const host = rawHost?.split(":")[0]?.toLowerCase();
  if (host === "eaglehillshomes.com") {
    const url = request.nextUrl.clone();
    url.hostname = CANONICAL_HOST;
    url.protocol = "https:";
    return NextResponse.redirect(url, 308);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|_next/webpack|_next/data).*)"],
};
