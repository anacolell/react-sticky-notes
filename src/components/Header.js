import React from 'react'

export default function Header({handleNewNote}) {
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
          />
        </aside>
      </header>
    </>
  )
}
