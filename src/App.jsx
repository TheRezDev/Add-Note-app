import "./App.css";
import { useState } from "react";
import AddNewNote from "./component/AddNewNote";
import NoteList from "./component/NoteList";
import NoteHeader from "./component/NoteHeader";
import NoteStatus from "./component/NoteStatus";

function App() {
  
  const [notes, setNotes] = useState([]);
  const [sortBy, setSortBy] = useState("latest");

  const handleAddNote = (newNote) => {
    setNotes((prevNotes => [...prevNotes, newNote]))
  };
  const handelDeleteNote = (id) => {
    // OLD VERSION: ⏬
    // const filteredNotes = notes.fitter((n) => n.id !== id);
    // setNotes(filteredNotes);
    // New Version 💨:
    setNotes((prevNotes) => prevNotes.filter((n) => n.id !== id))
  };
  const handelCompleteNote = (e) => {
    
    const noteId = Number(e.target.value);
    // old version :
    // const newNotes = notes.map((note) =>
    //   note.id === noteId ? { ...note, completed: !note.completed } : note
    // );
    // setNotes(newNotes);
    // new version:
    setNotes((prevNotes) => prevNotes.map((note) =>
      note.id === noteId ? { ...note, completed: !note.completed } : note
    )
    );
  };
  
  
  
  return (
    <div className="container">
      <div>
        <NoteHeader
          notes={notes}
          sortBy={sortBy}
          onSort={(e) => setSortBy(e.target.value)}
        />
      </div>
      <div className="note-app">
        <AddNewNote
          onAddNote={handleAddNote}
        />
        <div className="note-container">
          <NoteStatus
            notes={notes}
          />
          <NoteList
            notes={notes}
            sortBy={sortBy}
            onDelete={handelDeleteNote}
            onComplete={handelCompleteNote}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
