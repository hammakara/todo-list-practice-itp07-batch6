import { Plus, Trash2 } from 'lucide-react'
import React, { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import TodoItem from './TodoItem'

export default function App() {
  const [todos,setTodos] = useState([
    {id:1,title:"Learning React Hook"}
  ])

  
  return (
    <>
      <Toaster/>
      <div className='container'>
        <div className='wrapper'>
          {/* form */}
          <form >
            <input type="text" 
            placeholder='Type todo..' />
            <button type='submit'>
              <Plus />
            </button>
          </form>
          {/* list */}
          <div className='todo-list'>
            {
              todos.map((t)=>(
                <TodoItem key={t.id} todo={t}/>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}
