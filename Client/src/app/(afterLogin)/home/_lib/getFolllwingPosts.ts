type Props = { pageParam?: number };
export async function getFollowingPosts({ pageParam }: Props) {
  const res = await fetch(
    `http://localhost:9090/api/posts/followings?cursor=${pageParam}`,
    {
      next: {
        tags: ["posts", "followingPosts"],
      },
      credentials: "include",
      cache: "no-cache",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
