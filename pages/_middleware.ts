import { NextRequest, NextResponse } from 'next/server';

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export default async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();

  await delay(3000);
  const res = await fetch('https://62453f937701ec8f724f2890.mockapi.io/menu');
  const menu = await res.json();
  console.log(menu);

  return NextResponse.rewrite(url);
}
