import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: text("id").notNull().primaryKey(),
  createdAt: timestamp("createdAt", { mode: "date" }).notNull().defaultNow(),
});

export const posts = pgTable("posts", {
  id: serial("id").primaryKey(),
  userId: text("userId").notNull(), // 外部キー
  content: text("content").notNull(),
  createdAt: timestamp("createdAt", { mode: "date" }).notNull().defaultNow(),
  replyToTweetId: text("replyToTweetId"), // リプライ元のツイート
});

export const follows = pgTable("follows", {
  followerId: text("followerId").notNull(), // フォローする側
  followingId: text("followingId").notNull(), // フォローされる側
  followedAt: timestamp("followedAt", { mode: "date" }).notNull().defaultNow(),
});

export const likes = pgTable("likes", {
  userId: text("userId").notNull(), // いいねをしたユーザーID
  tweetId: text("tweetId").notNull(), // いいねされたツイートID
  likedAt: timestamp("likedAt", { mode: "date" }).notNull().defaultNow(),
});

export const retweets = pgTable("retweets", {
  userId: text("userId").notNull(), // リツイートをしたユーザーID
  tweetId: text("tweetId").notNull(), // リツイートされたツイートID
  retweetedAt: timestamp("retweetedAt", { mode: "date" })
    .notNull()
    .defaultNow(),
});
