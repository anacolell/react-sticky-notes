import React from 'react'
import Note from './Note'

export default function NotesList( {notes, handleNoteDelete}) {
  return (
    <ul className="notes-list">
      {notes.map(note => {
        return (
          <Note
            key={note.id}
            handleNoteDelete={handleNoteDelete}
            {...note}
          />
        )
      })}
    </ul>
  )
}
