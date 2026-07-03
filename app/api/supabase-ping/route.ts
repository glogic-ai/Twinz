import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    ok: true,
    from: "/api/supabase-ping",
    time: new Date().toISOString(),
  });
}