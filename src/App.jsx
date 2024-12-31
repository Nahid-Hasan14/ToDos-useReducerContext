import AddTasks from './Componnet/AddTasks';
import { TasksProvider } from './Componnet/TasksContext';

export default function App() {
  
  return (
    <TasksProvider>
      <AddTasks />
    </TasksProvider>
   
  )
}



