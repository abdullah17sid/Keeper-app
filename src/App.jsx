import { useState } from "react";
import Header from "./components/Header";
import Note from "./components/Note";
import NoteForm from "./components/NoteForm";
import Footer from "./components/Footer";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleSave = (title, content) => {
    if (editIndex !== null) {
      const updatedNotes = [...notes];
      updatedNotes[editIndex] = { title, content };
      setNotes(updatedNotes);
      setEditIndex(null);
    } else {
      setNotes([...notes, { title, content }]);
    }
  };

  const handleDelete = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
    if (editIndex === index) setEditIndex(null);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 px-4 py-6">
      <Header />
      <NoteForm
        onSave={handleSave}
        editNote={editIndex !== null ? notes[editIndex] : null}
      />
      
      {/* ✅ Updated section to show notes inline */}
      <div className="mt-6 flex flex-wrap gap-4 justify-center">
        {notes.map((note, i) => (
          <Note
            key={i}
            note={note}
            onDelete={() => handleDelete(i)}
            onEdit={() => handleEdit(i)}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default App;
