import React, { useState, useEffect } from 'react';
import Header from './Header';
import NotesList from './NotesList';
import '../css/app.css'

import { v4 as uuidv4 } from 'uuid';

export const NoteContext = React.createContext()
const LOCAL_STORAGE_KEY = 'reactStickyNotes.notes'

function App() {
  const [notes, setNotes] = useState(sampleNotes)
  const [searchText, setSearchText] = useState()


  useEffect(() => {
    const noteJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (noteJSON !== null) setNotes(JSON.parse(noteJSON))
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notes))
  }, [notes])


  const noteContextValue = {
    handleNewNote,
    handleNoteDelete,
    handleNoteChange,
    handleNoteSearch
  }

  function handleNewNote() {
    const newNote = {
      id: uuidv4(),
      title: 'title',
      description: 'description',
      color: randomColor(),
      angle: randomAngle()
    }
    setNotes([...notes, newNote])
    console.log(notes)
  }

  function handleNoteDelete(id){
    setNotes(notes.filter(note => note.id !== id))
  }

  function handleNoteChange(id, newNote) {
    const newNotes = [...notes]
    const index = newNotes.findIndex(n => n.id === id)
    newNotes[index] = newNote
    setNotes(newNotes)
  }

  function handleNoteSearch(input) {
    setSearchText(input)
  }

  const filteredNotes = searchText != null ? notes.filter(n => n.title.toLowerCase().includes(searchText)) : notes

  function randomColor() {
    const colors = ['#cbe1ef', '#d5eade', '#f9d8ff', '#f9dabd', '#fefde1']
    let newColor = colors[Math.floor(Math.random() * colors.length)]
    return newColor
  }

  function randomAngle() {
    const angles = ['-2deg', '2deg', '2.5deg', '-2.5deg', '-3deg', '3deg']
    let newAngle = angles[Math.floor(Math.random() * angles.length)]
    return newAngle
  }

  return (
    <NoteContext.Provider value={noteContextValue}>
      <div>
        <Header
          handleNewNote={handleNewNote}
          handleNoteSearch={handleNoteSearch}
        />
        <NotesList
          filteredNotes={filteredNotes}
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
    title: "Study",
    description: "Math exam"
  },
  {
    id: 1,
    title: "grocery shopping",
    description: "Tomato sauce and pasta"
  },
  {
    id: 2,
    title: "code",
    description: "build an awesome app"
  }
]

export default App;
