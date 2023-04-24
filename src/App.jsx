import React, { useEffect, useState } from 'react'
import './App.css'
import { TasksPage } from './pages/tasksPages/TasksPage'
import { HeaderWidgets } from './widgets/components/HeaderWidgets/HeaderWidgets'

function App() {
  const [todos, setTodos] = useState([])
  
  useEffect(() => {
    const handleFetchTodos = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos')
      const jsonTodos = await response.json()
      setTodos(jsonTodos)
    }
    handleFetchTodos()
  }, [])


  return (
    <div className='App'>
      <HeaderWidgets />
      <TasksPage todos={todos} />
      
    </div>
  )
}

export default App