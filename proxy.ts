import { NextRequest, NextResponse } from "next/server";
import { getCookies } from "./libs/getCookies";

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET);

export async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = (await getCookies("token"))?.value;
  
  if(pathname !== '/restaurant') {
    if(!token) {
      return NextResponse.redirect(new URL('/restaurant', req.url));
    }
  }

  if(pathname === '/restaurant') {
    if(token) {
      return NextResponse.redirect(new URL('/', req.url));
    }
  }

}

export const config = {
  matcher: ['/', '/restaurant']
};