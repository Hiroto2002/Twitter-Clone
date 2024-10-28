import { posts } from "../../../../drizzle/schema";
import { zValidator } from "@hono/zod-validator";
import { createId } from "@paralleldrive/cuid2";
import { Hono } from "hono";
import { z } from "zod";

export const schema = z.object({
  text: z.string().min(1, "Please write something."),
});

const app = new Hono()
  .get("/", async (c) => {
    const posts = await db.query.posts.findMany({
      orderBy: (posts, { desc }) => [desc(posts.createdAt)],
    });

    return c.json(posts);
  })
  .post("/", zValidator("form", schema), async (c) => {
    const data = c.req.valid("form");

    return c.json(post);
  });

export default app;
