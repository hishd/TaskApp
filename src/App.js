import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react'

function App() {

  const [showADD, setShowADD] = useState(false)

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'IPC Deadline',
        day: 'Apr 25th at 12.00am',
        reminder: false
    },
    {
        id: 2,
        text: 'iOS Deadline',
        day: 'Apr 30th at 12.00am',
        reminder: true
    },
    {
        id: 3,
        text: 'WebAPI Deadline',
        day: 'May 17th at 12.00am',
        reminder: true
    }
  ])

  const deleteTask = (id) => {
    setTasks(tasks.filter(
      (task) => task.id !== id
    ))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map(
      (task) => task.id === id ? {...task, reminder: !task.reminder} : task
    ))
  }

  const addTask = (task) => {
    const id = tasks.length + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  return (
    <div className="container">
      <Header title="Task Tracker" onAdd={() => setShowADD(!showADD)} showAdd={showADD}/>
      {showADD && <AddTask onAdd={addTask}/>}
      
      {
        tasks.length > 0 ?
          <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
          : 'No Tasks'
      }
      
    </div>
  );
}

export default App;
