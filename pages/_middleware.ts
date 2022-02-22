import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req: any) {
  const conditions = [
    "/credential/signin",
    "/credential/newuser",
    "/api/auth/",
    "/api/graphql",
  ];

  if (conditions.some((c) => req.url.includes(c))) {
    return NextResponse.next();
  }

  const session = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
    secureCookie: process.env.NEXTAUTH_URL?.startsWith("https"),
  });

  const url = req.nextUrl.clone();

  if (!session) {
    url.pathname = "/credential/signin";
    return NextResponse.redirect(url);
  }

  // If user is authenticated, continue.
  return NextResponse.next();
}
