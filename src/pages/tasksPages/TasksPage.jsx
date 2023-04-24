import React from 'react'
import cl from './TaskPages.module.css';
import { TasksList } from '../../widgets/components/TasksList'

export const TasksPage = ({todos}) => {
  return (
    <main className={cl.container}>
      <TasksList todos={todos}/>
    </main>
  )
}
