import { PostId } from "./PostId/PostId";

export class Post {
  private constructor(private readonly _postId: PostId) {}

  static create(postId: PostId) {
    return new Post(postId);
  }

  static reconstruct(postId: PostId) {
    return new Post(postId);
  }

  get postId(): PostId {
    return this._postId;
  }
}
