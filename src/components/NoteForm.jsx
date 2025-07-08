import { useState, useEffect } from "react";

const NoteForm = ({ onSave, editNote }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (editNote) {
      setTitle(editNote.title);
      setContent(editNote.content);
    }
  }, [editNote]);

  const handleSubmit = () => {
    if (!title.trim() || !content.trim()) {
      alert("Please fill in both title and content.");
      return;
    }
    onSave(title, content);
    setTitle("");
    setContent("");
  };

  return (
    <div className="bg-white p-4 shadow-md rounded max-w-md mx-auto">
      <input
        type="text"
        placeholder="Title"
        className="w-full border p-2 mb-2 rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Take a note..."
        className="w-full border p-2 mb-2 rounded"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button
        className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-2 rounded font-semibold"
        onClick={handleSubmit}
      >
        {editNote ? "Update" : "Add"}
      </button>
    </div>
  );
};

export default NoteForm;

