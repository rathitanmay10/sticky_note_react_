import React, { useState } from "react";
import "./App.css"; // Create this file for your CSS styles

import NoteComponent from "./NoteComponent";

function App() {
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [textColor, setTextColor] = useState("#000000");
  const [editNoteId, setEditNoteId] = useState(null);
  //   let count = 0; //this will not work due to closures
  // DATE.NOW() - gives us milliseconds passed from Jan 1 1970 midnight till this instant

  const createNote = () => {
    if (editNoteId !== null) {
      const updatedNotes = notes.map((note) =>
        note.id === editNoteId ? { ...note, content: text } : note
      );
      setNotes(updatedNotes);
      setEditNoteId(null);
    } else {
      const newNote = {
        id: Date.now(),
        content: text,
        backgroundColor: backgroundColor,
        textColor: textColor,
      };
      setNotes([...notes, newNote]);
    }
    setText("");
  };

  console.log(notes);

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  const editNote = (id) => {
    const noteToEdit = notes.find((note) => note.id === id);
    setText(noteToEdit.content);
    setBackgroundColor(noteToEdit.backgroundColor);
    setTextColor(noteToEdit.textColor);
    setEditNoteId(id);
  };

  return (
    <div id="wrapper">
      <div className="left">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your note here..."
        ></textarea>
        <input
          type="color"
          value={backgroundColor}
          onChange={(e) => setBackgroundColor(e.target.value)}
        />
        <input
          type="color"
          value={textColor}
          onChange={(e) => setTextColor(e.target.value)}
        />
        <button onClick={createNote}>Create Note</button>
      </div>
      <div className="right">
        {notes.map((note, index) => (
          <NoteComponent
            key={index}
            note={note}
            editNote={editNote}
            deleteNote={deleteNote}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
