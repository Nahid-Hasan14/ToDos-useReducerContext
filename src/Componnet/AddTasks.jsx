import { useContext, useState } from 'react'
import { TasksDispatchContext } from './TasksContext'
import TasksList from './TasksList';

export default function AddTasks() {
    const [text, setText]= useState('')

    const dispatch = useContext(TasksDispatchContext)
    const id = new Date().getTime().toString()

    const handleAdded = ()=>{
      if (text.trim() === '') {
        return;
      }
      setText("")
      dispatch({
        type: "added",
        id: id,
        title: text
      })
    }
  return (
    <div>
          <div className='h-screen w-screen bg-gray-200'>
      <div className='w-[500px] bg-white mx-auto p-10'>
            <h1 className='flex justify-center pb-10 font-bold text-2xl'>ToDos List</h1>
            <div className='flex items-center'>
              
                <input onChange={(e)=> setText(e.target.value)} value={text} type='text' className='border border-gray-300 rounded-md px-4 py-2 mr-2 focus:outline-none focus:ring focus:ring-blue-200' placeholder='add task'/>
                <button onClick={handleAdded} className='bg-blue-500 text-white font-bold px-4 py-2 rounded-md hover:bg-blue-700'>add</button>
              
            </div>
            <TasksList />
      </div>
    </div>
    </div>
  )
}
