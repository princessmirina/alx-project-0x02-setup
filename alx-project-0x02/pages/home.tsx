import React, { useState } from "react";
import Header from "../components/layout/Header";
import Card from "@/components/common/Card";
import PostModal from "../components/common/PostModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-6">
      {/* Header Navigation */}
      <Header />

      <h1 className="text-2xl font-bold mb-4">Welcome to the Home Page</h1>

      {/* ✅ Card Components with props */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card title="Card One" content="This is the first card content." />
        <Card title="Card Two" content="This is the second card content." />
        <Card title="Card Three" content="This is the third card content." />
      </div>

      {/* Button to open PostModal */}
      <div className="mt-6">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Post
        </button>
      </div>

      {/* PostModal Component */}
      {isModalOpen && <PostModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}
