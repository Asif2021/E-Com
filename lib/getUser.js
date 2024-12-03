import jwt from 'jsonwebtoken';
import { cookies } from "next/headers";

export async function getUserFromCookie() {
  const theCookie = await cookies();
  const Cookie = theCookie.get("e-com")?.value;
  console.log(Cookie);
  if (Cookie) {
    try {
      const decoded = jwt.verify(Cookie, process.env.JWTSECRET);
      return decoded;
    } catch (err) {
      return null;
    }
  }
}
