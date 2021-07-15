import React, { useContext } from 'react'
import { NoteContext } from './App'

export default function Header() {
  const { handleNewNote, handleNoteSearch } = useContext(NoteContext)
  return (
    <>
     <header className="app-header">
        <h1 className="app-header__title">Sticky Notes</h1>
        <aside className="app-header__controls">
          <button
            className="add-new"
            onClick={handleNewNote}
          >+ New Note</button>
          <input
            className="search"
            type="text"
            placeholder="Type here to search..."
            onChange = {(e) => handleNoteSearch(e.target.value)}
          />
        </aside>
      </header>
    </>
  )
}
