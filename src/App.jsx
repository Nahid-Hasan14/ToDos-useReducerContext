import { useReducer } from 'react'
import { TasksContext } from './Componnet/TasksContext';
import { TasksDispatchContext } from './Componnet/TasksContext';
import AddTasks from './Componnet/AddTasks';

const initialTodo = [
  {id:1, title: "useReducer and useContext-1"},
  {id:2, title: "useReducer and useContext-2"},
  {id:3, title: "useReducer and useContext-3"}
]

export default function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTodo)
  
  return (
    <TasksContext.Provider value= {tasks}>
    <TasksDispatchContext.Provider value= {dispatch}>
      <AddTasks />
    </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  )
}

function tasksReducer(tasks, action) {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          title: action.title,
          done: false,
        },
      ];
    }
    case "edited": {
      return tasks.map((task) =>
        task.id === action.id ? { ...task, title: action.title } : task
      );
    }
    case "deleted": {
      return tasks.filter((task) => task.id !== action.id);
    }
    default: {
      throw new Error(`Unknown action: ${action.type}`);
    }
  }
}

