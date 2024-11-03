import { Post } from "@/app/api/[[...route]]/Domain/models/Post/Post";
import { PostId } from "@/app/api/[[...route]]/Domain/models/Post/PostId/PostId";
import { IPostRepository } from "@/app/api/[[...route]]/Domain/models/Post/IPostRepository";
import { DrizzleClientManager } from "../DrizzleClientManager";
import { inject, injectable } from "tsyringe";
import { posts } from "../../../../../../../drizzle/schema";

@injectable()
export class DrizzlePostRepository implements IPostRepository {
  // ClientManagerをDIする
  constructor(
    @inject("DrizzleClientManager")
    private clientManager: DrizzleClientManager
  ) {}

  async save(post: Post) {
    const client = this.clientManager.getClient();
    console.log(post);

    await client
      .insert(posts)
      .values({
        id: "test",
        text: "test",
      })
      .returning();
  }

  async update(post: Post) {
    const client = this.clientManager.getClient();
    await client.update.bind({
      with: {
        postId: post.postId.value,
      },
      data: {},
    });
  }

  async delete(postId: PostId) {
    const client = this.clientManager.getClient();
    await client.delete.bind({
      with: {
        postId: postId.value,
      },
    });
  }

  async find(postId: PostId): Promise<Post | null> {
    const client = this.clientManager.getClient();

    const data = await client.query.posts.findFirst({
      with: {
        postId: postId.value,
      },
    });

    if (!data) {
      return null;
    }

    return Post.reconstruct(new PostId(data.postId));
  }
}
