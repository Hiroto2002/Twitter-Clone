import { PostId } from "./PostId/PostId";
import { Post } from "./Post";

describe("Post", () => {
  const postId = new PostId(9784167158057);

  describe("create", () => {
    it("デフォルト値で投稿を作成する", () => {
      const post = Post.create(postId);
      expect(post.postId.equals(postId)).toBeTruthy();
    });
  });

  describe("reconstruct", () => {
    it("再構築する", () => {
      const post = Post.reconstruct(postId);
      expect(post.postId.equals(postId)).toBeTruthy();
    });
  });
});
