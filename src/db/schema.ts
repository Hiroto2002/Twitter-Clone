import { timestamp, pgTable, text } from "drizzle-orm/pg-core";

export const posts = pgTable("post", {
  id: text("id").notNull().primaryKey(),
  text: text("text").notNull(),
  createdAt: timestamp("createdAt", { mode: "date" }).notNull().defaultNow(),
});
