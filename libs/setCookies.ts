import { cookies } from "next/headers"

export const setCookies = async(key: string, value: string) => {
  const cookieStore = await cookies();
  cookieStore.set(key, value);
}