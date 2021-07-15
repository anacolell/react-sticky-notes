import React from 'react'
import Note from './Note'

export default function NotesList( {notes, handleNoteDelete, searchText, filteredNotes }) {
  return (
    <ul className="notes-list">
      {filteredNotes.map(note => {
        return (
          <Note
            note={note}
            key={note.id}
            handleNoteDelete={handleNoteDelete}
            {...note}
          />
        )
      })}
    </ul>
  )
}
