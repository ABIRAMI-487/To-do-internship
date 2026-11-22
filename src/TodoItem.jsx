import { useState } from 'react'

export default function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [editing, setEditing] = useState(false)
  const [value, setValue] = useState(todo.text)

  const save = () => {
    const v = value.trim()
    if (v) onEdit(todo.id, v)
    else setValue(todo.text)
    setEditing(false)
  }

  return (
    <li className={todo.done ? 'done' : ''}>
      <input type="checkbox" checked={todo.done} onChange={() => onToggle(todo.id)} />
      {editing ? (
        <input
          className="edit" value={value} autoFocus
          onChange={(e) => setValue(e.target.value)}
          onBlur={save}
          onKeyDown={(e) => { if (e.key === 'Enter') save(); if (e.key === 'Escape') { setValue(todo.text); setEditing(false) } }}
        />
      ) : (
        <span onDoubleClick={() => setEditing(true)}>{todo.text}</span>
      )}
      <button className="icon" onClick={() => setEditing(true)} aria-label="Edit">✏️</button>
      <button className="icon" onClick={() => onDelete(todo.id)} aria-label="Delete">🗑️</button>
    </li>
  )
}
