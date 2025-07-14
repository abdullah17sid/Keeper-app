const Note = ({ note, onDelete, onEdit }) => (
  <div className="bg-white p-4 shadow rounded w-64">
    <h2 className="text-xl font-semibold">{note.title}</h2>
    <p className="mt-1 text-gray-700">{note.content}</p>
    <div className="mt-2 flex justify-end gap-2">
      <button onClick={onEdit} className="bg-amber-200 text-white px-3 py-1 rounded">Edit</button>
      <button onClick={onDelete} className="bg-amber-300 text-white px-3 py-1 rounded">Delete</button>
    </div>
  </div>
);

export default Note;
