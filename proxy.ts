import { NextRequest, NextResponse } from "next/server";
import { getCookies } from "./libs/getCookies";
import jwt from 'jsonwebtoken';
import { jwtVerify } from "jose";
import { deleteCookies } from "./libs/deleteCookies";

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET);

export async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = (await getCookies("token"));
  
  if(pathname !== '/restaurant/auth') {
    if(!token) {
      return NextResponse.redirect(new URL('/restaurant/auth', req.url));
    }
    try {
      await jwtVerify(token, JWT_SECRET)
      return NextResponse.next();
    } catch (error) {
      await deleteCookies("token");
      return NextResponse.redirect(new URL('/restaurant/auth', req.url));
    }
  }

  if(pathname === '/restaurant/auth') {
    if(token) {
      try {
        await jwtVerify(token, JWT_SECRET);
        return NextResponse.redirect(new URL('/restaurant', req.url));
      } catch (error) {
        await deleteCookies("token");
        return NextResponse.next();
      }
    }
  }

}

export const config = {
  matcher: ['/restaurant', '/restaurant/auth']
};