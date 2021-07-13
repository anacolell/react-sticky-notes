import React from 'react'

export default function Note( {title, description}) {
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
        <span className="note__delete">X</span>
      </li>
    </>
  )
}
