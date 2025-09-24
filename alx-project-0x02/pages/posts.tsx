import Header from "@/components/layout/Header";
import PostCard from "../components/common/PostCard";
import { useEffect, useState } from "react";
import { PostProps } from "../interfaces";

export default function Posts() {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <Header />
      <main className="p-8 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Posts</h1>
        {posts.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            body={post.body}
            userId={post.userId}
          />
        ))}
      </main>
    </div>
  );
}
