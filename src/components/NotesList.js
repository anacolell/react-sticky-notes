import React from 'react'
import Note from './Note'

export default function NotesList( {notes}) {
  return (
    <ul className="notes-list">
      {notes.map(note => {
        return <Note key={note.id}{...note}/>
      })}
    </ul>
  )
}
