//Update pages/home.tsx to use PostModal

import Header from "../components/layout/Header";
import Card from "../components/common/Card";
import PostModal from "../components/common/PostModal";
import { useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState<{ title: string; content: string }[]>([]);

  const addPost = (title: string, content: string) => {
    setPosts([...posts, { title, content }]);
  };

  return (
    <div>
      <Header />
      <main className="p-8 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Home Page</h1>
        <PostModal onAddPost={addPost} />
        {posts.map((post, idx) => (
          <Card key={idx} title={post.title} content={post.content} />
        ))}
      </main>
    </div>
  );
}
