"use server";

import { connectDB } from "@/app/db/db";
import { Item } from "@/app/db/models";
import { getCookies } from "@/libs/getCookies";
import { jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";

const JWT_SECRET =  new TextEncoder().encode(process.env.JWT_SECRET);

export const POST = async(req: NextRequest) => {
  try {
    
    await connectDB();
    const token = await getCookies("token");
    if(!token)
      return NextResponse.json({ msg: "Authorization failed" }, { status: 401 });
    const restId = (await jwtVerify(token, JWT_SECRET)).payload._id;

    const { name, imgUrl, price, desc } = await req.json();

    const newItem = await Item.create({ restId, name, imgUrl, price, desc });

    if(!newItem)
      return NextResponse.json({ msg: "Error in adding new item" }, { status: 500 });

    return NextResponse.json({ msg: "OK" }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ msg: "internal Server Error", err: error }, { status: 500 });
  }
}