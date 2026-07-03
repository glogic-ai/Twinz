import { NextResponse } from "next/server";
import { getSupabaseClient } from "@/lib/supabaseClient";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      phone,
      service_needed,
      project_details,
    } = body;

    if (!name || !phone || !service_needed) {
      return NextResponse.json(
        { ok: false, error: "Name, phone, and service are required" },
        { status: 400 }
      );
    }

    const supabase = getSupabaseClient();

    const { data, error } = await supabase
      .from("quotes")
      .insert({
        name,
        phone,
        service_needed,
        project_details,
      })
      .select()
      .single();

    if (error) {
      console.error("Supabase insert error:", error);

      return NextResponse.json(
        { ok: false, error: "Failed to save quote" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { ok: true, quote: data },
      { status: 201 }
    );
  } catch (err: any) {
    console.error("Quote POST error:", err);

    return NextResponse.json(
      { ok: false, error: "Invalid request body" },
      { status: 400 }
    );
  }
}