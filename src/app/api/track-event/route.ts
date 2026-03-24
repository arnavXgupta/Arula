import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabaseServer";

type TrackEventBody = {
  session_id?: string;
  node_id?: string;
  action_type?: string;
  choice_path?: string[];
  payload?: Record<string, unknown>;
  timestamp?: string;
};

export async function POST(req: Request) {
  try {
    const text = await req.text();

    let body: TrackEventBody = {};
    try {
      body = text ? JSON.parse(text) : {};
    } catch {
      return NextResponse.json(
        { success: false, error: "Invalid JSON body" },
        { status: 200 }
      );
    }

    const {
      session_id,
      node_id,
      action_type,
      choice_path,
      payload,
      timestamp,
    } = body;

    const { error, data } = await supabaseServer
      .from("tracking_events")
      .insert([
        {
          session_id: session_id || "temp-session",
          node_id: node_id || "unknown",
          action_type: action_type || "unknown",
          choice_path: choice_path || [],
          payload: payload || {},
          timestamp: timestamp || new Date().toISOString(),
        },
      ])
      .select();

    if (error) {
      console.error("SUPABASE ERROR:", error);
      return NextResponse.json(
        { success: false, error: error.message || "Database insert failed" },
        { status: 200 }
      );
    }

    console.log("Supabase insert response data:", data);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err: unknown) {
    console.error("API ERROR:", err);

    return NextResponse.json(
      {
        success: false,
        error:
          err instanceof Error ? err.message : "Server crashed",
      },
      { status: 200 }
    );
  }
}