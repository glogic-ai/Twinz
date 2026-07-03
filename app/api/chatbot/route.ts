import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { message } = await req.json();
  const text = String(message || "").toLowerCase();

  let reply =
    "I can help with window tint, vinyl wraps, PPF, ceramic coating, custom graphics, pricing questions, and getting you to the quote page.";

  if (text.includes("quote") || text.includes("price") || text.includes("cost")) {
    reply =
      "The fastest way to get pricing is through the quote page. Share your service, vehicle type, and year/make/model there, and Twins Customs can follow up with options and pricing.";
  } else if (text.includes("service") || text.includes("offer") || text.includes("do you do")) {
    reply =
      "Twins Customs offers window tint, vinyl wraps, PPF wrap, ceramic coating, and custom graphics.";
  } else if (text.includes("where") || text.includes("address") || text.includes("located")) {
    reply =
      "Twins Customs is located at 8810 Corporate Square Ct suite 103, Jacksonville, FL 32216.";
  } else if (text.includes("call") || text.includes("phone")) {
    reply =
      "You can call Twins Customs directly from the Call Now buttons on the site, or use the quote page if you’d rather send your project details first.";
  } else if (text.includes("hours")) {
    reply =
      "Current site hours are Mon–Sat: 9:00AM–6:00PM, closed Sunday.";
  }

  return NextResponse.json({ reply });
}