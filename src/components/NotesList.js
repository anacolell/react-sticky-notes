import React from 'react'
import Note from './Note'

export default function NotesList( {notes, searchText, filteredNotes}) {
  return (
    <ul className="notes-list">
      {filteredNotes.map((note, index) => {
        return (
          <Note
            note={note}
            key={note.id}
            index={index}
            {...note}
          />
        )
      })}
    </ul>
  )
}
