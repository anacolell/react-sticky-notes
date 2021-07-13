import React from 'react'
import NotesList from './NotesList'

export default function Note(props) {
  const {
    title,
    description,
    handleNoteDelete,
    id
  } = props
  return (
    <>
      <li className="note">
        <input
          className="note__title"
          type="text"
          placeholder="Title"
          value={title}
        />
        <textarea
          className="note__description"
          placeholder="Description..."
          value={description}
        />
        <span
          className="note__delete"
          onClick={() => handleNoteDelete(id)}
        >
          X
          </span>
      </li>
    </>
  )
}
