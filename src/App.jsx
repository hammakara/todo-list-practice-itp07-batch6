import { Plus, Trash2 } from 'lucide-react'
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import TodoItem from './TodoItem'

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Learning React Hook" }
  ])
  const [title, setTitle] = useState('')

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(!title.trim())return toast.error("title is require")
    setTodos([...todos,{id:Date.now(),title:title}])
    toast.success("Add successfully!")
    setTitle('')
  }

  const handleDelete = (id)=>{
    const filterTodos = todos.filter((t)=>t.id !==id)
    setTodos(filterTodos)
    toast.success("Todo deleted!")
  }
  
  return (
    <>
      <Toaster />
      <div className='container'>
        <div className='wrapper'>
          {/* form */}
          <form onSubmit={handleSubmit}>
            <input type="text" 
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              placeholder='Type todo..' 
            />
            <button type='submit'>
              <Plus />
            </button>
          </form>
          {/* list */}
          <div className='todo-list'>
            {
              todos.map((t) => (
                <TodoItem key={t.id} todo={t} handleDelete={handleDelete}/>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}
