import { PostId } from "./PostId";

describe("PostId", () => {
  // 正常系
  test("有効なフォーマットの場合正しい変換結果を期待", () => {
    expect(new PostId(1).value).toBe(1);
    expect(new PostId(9784167158057).value).toBe(9784167158057);
  });

  test("equals", () => {
    const PostId1 = new PostId(9784167158057);
    const PostId2 = new PostId(9784167158057);
    const PostId3 = new PostId(9784167158058);
    expect(PostId1.equals(PostId2)).toBeTruthy();
    expect(PostId1.equals(PostId3)).toBeFalsy();
  });

  // 異常系
  test("無効なフォーマットの場合エラーを返す", () => {
    expect(() => new PostId(-1)).toThrow(
      "PostIdは1以上の整数でなければなりません"
    );
    expect(() => new PostId(0)).toThrow(
      "PostIdは1以上の整数でなければなりません"
    );
  });
});
