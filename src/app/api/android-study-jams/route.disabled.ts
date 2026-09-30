import { NextResponse } from "next/server";

export async function POST(request: Request) {
  let input: unknown;
  try {
    input = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid submission." }, { status: 400 });
  }

  if (!input || typeof input !== "object") {
    return NextResponse.json(
      { error: "Please complete all fields." },
      { status: 400 }
    );
  }

  const values = input as Record<string, unknown>;
  const name = typeof values.name === "string" ? values.name.trim() : "";
  const college =
    typeof values.college === "string" ? values.college.trim() : "";
  const email =
    typeof values.email === "string" ? values.email.trim().toLowerCase() : "";
  const year = Number(values.year);

  if (
    !name ||
    name.length > 150 ||
    !["JSSATEN", "JSS University"].includes(college) ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    email.length > 254 ||
    !Number.isInteger(year) ||
    year < 1 ||
    year > 6
  ) {
    return NextResponse.json(
      { error: "Please check your details and try again." },
      { status: 400 }
    );
  }

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) {
    console.error("Supabase registration configuration is missing.");
    return NextResponse.json(
      { error: "Registration is temporarily unavailable." },
      { status: 503 }
    );
  }

  try {
    const response = await fetch(
      `${url.replace(/\/$/, "")}/rest/v1/registration`,
      {
        method: "POST",
        headers: {
          apikey: key,
          Authorization: `Bearer ${key}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify({ name, year, college, email }),
        cache: "no-store",
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error(
        "Supabase registration insert failed:",
        response.status,
        errorText
      );
      
      // PostgREST returns 409 Conflict for unique constraint violations
      if (response.status === 409) {
        return NextResponse.json(
          { error: "This email has already been registered." },
          { status: 409 }
        );
      }

      return NextResponse.json(
        { error: "We couldn't save your registration. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Supabase registration request failed:", error);
    return NextResponse.json(
      { error: "We couldn't save your registration. Please try again." },
      { status: 502 }
    );
  }
}
