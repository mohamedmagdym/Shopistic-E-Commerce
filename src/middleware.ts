import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  let token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });
  console.log(token);

  if (token) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}
export const config = {
  matcher: ["/cart"],
};
