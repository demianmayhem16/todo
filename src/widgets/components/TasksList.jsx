import React from 'react'
import { Task } from '../../entities/task/Task'

export const TasksList = ({ todos }) => {
  return (
    <ul>
      {todos.slice(0,10).map(todo => <Task todo={todo} key={todo.id} />)}
    </ul>
  )
}
