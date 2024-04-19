import { NewsletterPeeps, db } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(NewsletterPeeps).values([
    {
      email: "email@email.com",
    },
  ]);
}
