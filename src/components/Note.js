import React, { useContext } from 'react'
import { NoteContext } from './App'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from "@fortawesome/free-solid-svg-icons";


export default function Note(props) {
  const { handleNoteDelete, handleNoteChange } = useContext(NoteContext)

  const {
    title,
    description,
    id,
    note
  } = props

  function handleChange(changes) {
    handleNoteChange(note.id, { ...note, ...changes })
  }

  return (
    <>
      <li className="note">
        <input
          className="note__title"
          type="text"
          placeholder="Title"
          value={title}
          onChange= {e => handleChange({title: e.target.value})}
        />
        <textarea
          className="note__description"
          placeholder="Description..."
          value={description}
          onChange= {e => handleChange({description: e.target.value})}
        />
        <span
          className="note__delete"
          onClick={() => handleNoteDelete(id )}
        >
          <FontAwesomeIcon icon={faTrash} />
          </span>
      </li>
    </>
  )
}
