import { useState } from "react";

interface PostModalProps {
  onAddPost: (title: string, content: string) => void;
}

const PostModal = ({ onAddPost }: PostModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    if (title && content) {
      onAddPost(title, content);
      setTitle("");
      setContent("");
      setIsOpen(false);
    }
  };
  return (
    <>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={() => setIsOpen(true)}
      >
        Add Post
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-80">
            <h2 className="text-xl font-bold mb-4">New Post</h2>
            <input
              type="text"
              placeholder="Title"
              className="border p-2 w-full mb-2"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              placeholder="Content"
              className="border p-2 w-full mb-2"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <div className="flex justify-end gap-2">
              <button
                className="bg-gray-400 px-3 py-1 rounded"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-600 text-white px-3 py-1 rounded"
                onClick={handleSubmit}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PostModal;
