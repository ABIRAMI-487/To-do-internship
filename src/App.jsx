import { useState, useEffect } from 'react'
import TodoItem from './TodoItem.jsx'

const STORAGE_KEY = 'react-todos'

export default function App() {
  // Lazy initial state: read from localStorage once, on first render
  const [todos, setTodos] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
    } catch {
      return []
    }
  })
  const [text, setText] = useState('')
  const [filter, setFilter] = useState('all') // all | active | completed

  // Save to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  const addTodo = (e) => {
    e.preventDefault()
    const value = text.trim()
    if (!value) return
    setTodos([{ id: Date.now(), text: value, done: false }, ...todos])
    setText('')
  }

  const toggle = (id) => setTodos(todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)))
  const remove = (id) => setTodos(todos.filter((t) => t.id !== id))
  const edit = (id, newText) => setTodos(todos.map((t) => (t.id === id ? { ...t, text: newText } : t)))
  const clearCompleted = () => setTodos(todos.filter((t) => !t.done))

  const visible = todos.filter((t) =>
    filter === 'all' ? true : filter === 'active' ? !t.done : t.done
  )
  const left = todos.filter((t) => !t.done).length

  return (
    <div className="app">
      <h1>📝 To-Do</h1>
      <form onSubmit={addTodo} className="add">
        <input value={text} onChange={(e) => setText(e.target.value)} placeholder="What needs to be done?" autoFocus />
        <button type="submit">Add</button>
      </form>

      <div className="filters">
        {['all', 'active', 'completed'].map((f) => (
          <button key={f} className={filter === f ? 'on' : ''} onClick={() => setFilter(f)}>{f}</button>
        ))}
      </div>

      <ul>
        {visible.map((t) => (
          <TodoItem key={t.id} todo={t} onToggle={toggle} onDelete={remove} onEdit={edit} />
        ))}
      </ul>
      {visible.length === 0 && <p className="muted center">Nothing here 🎉</p>}

      <div className="footer">
        <span>{left} item{left !== 1 && 's'} left</span>
        <button className="link" onClick={clearCompleted}>Clear completed</button>
      </div>
    </div>
  )
}
