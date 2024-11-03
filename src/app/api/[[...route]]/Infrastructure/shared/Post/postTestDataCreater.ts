import { Post } from "@/app/api/[[...route]]/Domain/models/Post/Post";
import { PostId } from "@/app/api/[[...route]]/Domain/models/Post/PostId/PostId";
import { IPostRepository } from "@/app/api/[[...route]]/Domain/models/Post/IPostRepository";

export const postTestDataCreator =
  (repository: IPostRepository) =>
  async ({ postId = 9784167158057 }): Promise<Post> => {
    const entity = Post.reconstruct(new PostId(postId));
    await repository.save(entity);
    return entity;
  };
