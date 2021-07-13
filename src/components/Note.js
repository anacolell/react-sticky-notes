import React, { useContext } from 'react'
import { NoteContext } from './App'

export default function Note(props) {
  const { handleNoteDelete } = useContext(NoteContext)
  const {
    title,
    description,
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
          onClick={() => handleNoteDelete(id )}
        >
          X
          </span>
      </li>
    </>
  )
}
