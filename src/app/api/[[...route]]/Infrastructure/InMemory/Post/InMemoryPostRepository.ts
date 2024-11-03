import { Post } from "@/app/api/[[...route]]/Domain/models/Post/Post";
import { PostId } from "@/app/api/[[...route]]/Domain/models/Post/PostId/PostId";
import { IPostRepository } from "@/app/api/[[...route]]/Domain/models/Post/IPostRepository";

export class InMemoryPostRepository implements IPostRepository {
  public DB: {
    [id: string]: Post;
  } = {};

  async save(post: Post) {
    this.DB[post.postId.value] = post;
  }

  async update(post: Post) {
    this.DB[post.postId.value] = post;
  }

  async delete(postId: PostId) {
    delete this.DB[postId.value];
  }

  async find(postId: PostId): Promise<Post | null> {
    const post = Object.entries(this.DB).find(([id]) => {
      return postId.value.toString() === id;
    });

    return post ? post[1] : null;
  }
}
