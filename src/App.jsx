import "./App.css";
import { useState } from "react";
import AddNewNote from "./component/AddNewNote";
import NoteList from "./component/NoteList";
import Header from "./component/Header";

function App() {
  
      const [notes, setNotes] = useState([]);
  const handleAddNote = (newNote) => {
        setNotes((prevNotes => [...prevNotes, newNote]))
      }
  return (
    <div className="container">
      <div className="note-header">
        <Header/>
      </div>
      <div className="note-app">
        <AddNewNote onAddNote={handleAddNote } />
        <div className="note-container">
          <NoteList notes={notes} />
        </div>
      </div>
    </div>
  );
}

export default App;
