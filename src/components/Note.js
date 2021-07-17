import React, { useContext } from 'react'
import { NoteContext } from './App'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from "@fortawesome/free-solid-svg-icons";


export default function Note(props) {
  const {
    handleNoteDelete,
    handleNoteChange,
    handleDragStart,
    handleDragEnter
  } = useContext(NoteContext)

  const {
    title,
    description,
    id,
    color,
    note,
    angle,
    index
  } = props

  function handleChange(changes) {
    handleNoteChange(note.id, { ...note, ...changes })
  }

  return (
    <>
      <li
        draggable
        onDragStart={(e) => handleDragStart(e, index)}
        onDragOver={(e) => e.preventDefault()}
        onDragEnter={(e) => handleDragEnter(e, index)}
        key={index}
        className="note"
        style={{backgroundColor: color, transform: `rotate(${angle})`}}
        >
        <input
          className="note__title"
          type="text"
          value={title}
          onChange= {e => handleChange({title: e.target.value})}
        />
        <textarea
          className="note__description"
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
