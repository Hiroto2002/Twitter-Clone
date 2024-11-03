import { Post } from "./Post";
import { PostId } from "./PostId/PostId";

export interface IPostRepository {
  save(post: Post): Promise<void>;
  update(post: Post): Promise<void>;
  delete(postId: PostId): Promise<void>;
  find(postId: PostId): Promise<Post | null>;
}
