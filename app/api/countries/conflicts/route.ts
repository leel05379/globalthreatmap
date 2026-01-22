import { NextResponse } from "next/server";
import { getCountryConflicts } from "@/lib/valyu";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const country = searchParams.get("country");

  if (!country) {
    return NextResponse.json(
      { error: "Country parameter is required" },
      { status: 400 }
    );
  }

  try {
    const result = await getCountryConflicts(country);

    return NextResponse.json({
      country,
      past: {
        conflicts: result.past.answer,
        sources: result.past.sources,
      },
      current: {
        conflicts: result.current.answer,
        sources: result.current.sources,
      },
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Error fetching country conflicts:", error);
    return NextResponse.json(
      { error: "Failed to fetch country conflicts" },
      { status: 500 }
    );
  }
}
