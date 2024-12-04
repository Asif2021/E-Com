import { NextResponse } from 'next/server';
import {getUserFromCookie} from '../../../../lib/getUser' 


export async function GET() {
  const user = await getUserFromCookie();
  if (user) {
    return NextResponse.json({ isLoggedIn: true , username: user.username});
  } else {
    return NextResponse.json({ isLoggedIn: false });
  }
}