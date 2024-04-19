export const prerender = false;

import type { APIRoute } from "astro";
import { NewsletterPeeps, db } from "astro:db";

export const POST: APIRoute = async ({ request }) => {
  const email = await request.json();

  const res = await db.insert(NewsletterPeeps).values({
    email,
  });

  if (res) {
    return new Response(JSON.stringify({ success: true }), {
      status: 201,
    });
  }

  return new Response(JSON.stringify({ success: false }), {
    status: 400,
  });
};
