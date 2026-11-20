import React from 'react'
import {Trash2} from 'lucide-react'
export default function TodoItem({todo}) {
    return (
        <div className='todo'>
            <span>{todo.title}</span>
            <button>
                <Trash2 />
            </button>
        </div>
    )
}
