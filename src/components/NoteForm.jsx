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
    <div className=" p-4 border shadow-xl rounded max-w-md mx-auto">
      <input
        type="text"
        placeholder="Title"
        className="w-full p-2 mb-2 rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Take a note..."
        className="w-full p-2 mb-2 rounded"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <div className="flex justify-end">
      <button
        className="absolute left 1/2 w-10 rounded-full bg-yellow-400 hover:bg-yellow-500 text-white py-2 rounded font-semibold"
        onClick={handleSubmit}
      >
        {editNote ? "Update" : "Add"}
      </button>
      </div>
    </div>
  );
};

export default NoteForm;

