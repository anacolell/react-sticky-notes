import React, { useState } from 'react';
import Header from './Header';
import NotesList from './NotesList';
import '../css/app.css'
import { v4 as uuidv4 } from 'uuid';

export const NoteContext = React.createContext()

function App() {
  const [notes, setNotes] = useState(sampleNotes)

  const noteContextValue = {
    handleNewNote,
    handleNoteDelete
  }

  function handleNewNote() {
    const newNote = {
      id: uuidv4(),
      title: 'New sticky note',
      description: 'Description'
    }
    setNotes([...notes, newNote])
  }

  function handleNoteDelete(id){
    setNotes(notes.filter(note => note.id !== id))
  }

  return (
    <NoteContext.Provider value={noteContextValue}>

      <div>
        <Header
          handleNewNote={handleNewNote}
        />
        <NotesList
          notes={notes}
          handleNoteDelete={handleNoteDelete}
        />
      </div>
    </NoteContext.Provider>
  )
}

const sampleNotes = [
  {
    id: 0,
    title: "eat",
    description: "reese peanut butter cups"
  },
  {
    id: 1,
    title: "sleep",
    description: "eight hours"
  },
  {
    id: 2,
    title: "code",
    description: "build an awesome ui"
  }
]

export default App;
