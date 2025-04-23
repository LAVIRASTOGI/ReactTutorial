import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import useLocalStorage from "../hooks/useLocalStorage";
import useFetch from "../hooks/useFetch";

function CustomHooksDemo() {
  const { darkMode } = useTheme();

  // Demo for the useLocalStorage hook
  const [name, setName] = useLocalStorage("name", "");
  const [notes, setNotes] = useLocalStorage("notes", []);
  const [noteInput, setNoteInput] = useState("");

  // Demo for the useFetch hook
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleNoteInputChange = (e) => {
    setNoteInput(e.target.value);
  };

  const addNote = () => {
    if (noteInput.trim() === "") return;

    const newNote = {
      id: Date.now(),
      text: noteInput,
    };

    setNotes([...notes, newNote]);
    setNoteInput("");
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className={`demo-section ${darkMode ? "dark" : "light"}`}>
      <h2>Custom Hooks Demo</h2>

      <div className="hook-demo">
        <h3>useLocalStorage Hook</h3>
        <p>This hook persists state to localStorage</p>

        <div className="local-storage-example">
          <div className="form-group">
            <label htmlFor="name">Your Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              placeholder="Enter your name"
            />
          </div>

          <div className="note-section">
            <h4>Persistent Notes</h4>
            <div className="note-input">
              <input
                type="text"
                value={noteInput}
                onChange={handleNoteInputChange}
                placeholder="Add a note"
              />
              <button onClick={addNote}>Add</button>
            </div>

            {notes.length > 0 ? (
              <ul className="notes-list">
                {notes.map((note) => (
                  <li key={note.id}>
                    <span>{note.text}</span>
                    <button onClick={() => deleteNote(note.id)}>Delete</button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="no-notes">No notes yet. Add one!</p>
            )}

            <p className="note">
              Try refreshing the page - your name and notes will persist!
            </p>
          </div>
        </div>
      </div>

      <div className="hook-demo">
        <h3>useFetch Hook</h3>
        <p>This hook handles API data fetching, loading states, and errors</p>

        <div className="fetch-example">
          {loading && <p className="loading">Loading data...</p>}

          {error && (
            <div className="error-message">
              <p>Error: {error}</p>
            </div>
          )}

          {data && !loading && !error && (
            <>
              <h4>Users Data</h4>
              <ul className="users-list">
                {data.map((user) => (
                  <li key={user.id}>
                    <strong>{user.name}</strong> (@{user.username})
                    <br />
                    <span>{user.email}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default CustomHooksDemo;
