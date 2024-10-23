import { Hono } from "hono";
import { handle } from "hono/vercel";

import posts from "./posts";

// export const runtime = "edge";

// basePath は API ルートのベースパスを指定します
// 以降、新たに生やす API ルートはこのパスを基準に追加されます
const app = new Hono().basePath("/api");
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const route = app.route("/posts", posts);

export type AppType = typeof route;

export const GET = handle(app);
export const POST = handle(app);
