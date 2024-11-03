import drizzle from "../DrizzleClient";
import { posts } from "../../../../../../../drizzle/schema";
import { DrizzlePostRepository } from "./DrizzlePostRepository";
import { postTestDataCreator } from "@/app/api/[[...route]]/Infrastructure/shared/Post/postTestDataCreater";
import { Post } from "@/app/api/[[...route]]/Domain/models/Post/Post";
import { PostId } from "@/app/api/[[...route]]/Domain/models/Post/PostId/PostId";
import { DrizzleClientManager } from "../DrizzleClientManager";

const clientManager = new DrizzleClientManager();
const repository = new DrizzlePostRepository(clientManager);

describe("DrizzlePostRepository", () => {
  beforeEach(async () => {
    // テストごとにデータを初期化する
    await drizzle.transaction(
      async (drizzle) => await drizzle.delete(posts).execute()
    );
    await drizzle.$client.end();
  });

  test("saveした集約がfindで取得できる", async () => {
    const postId = new PostId(9784167158057);
    const post = Post.create(postId);
    await repository.save(post);

    const createdEntity = await repository.find(postId);
    expect(createdEntity?.postId.equals(postId)).toBeTruthy();
  });

  test("updateできる", async () => {
    const createdEntity = await postTestDataCreator(repository)({});

    const post = Post.reconstruct(createdEntity.postId);

    await repository.update(post);
    const updatedEntity = await repository.find(createdEntity.postId);
    expect(updatedEntity?.postId.equals(post.postId)).toBeTruthy();
  });

  it("deleteできる", async () => {
    const createdEntity = await postTestDataCreator(repository)({});

    const readEntity = await repository.find(createdEntity.postId);
    expect(readEntity).not.toBeNull();

    await repository.delete(createdEntity.postId);
    const deletedEntity = await repository.find(createdEntity.postId);
    expect(deletedEntity).toBeNull();
  });
});
