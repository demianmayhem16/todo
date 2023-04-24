import React, { useState } from 'react'
import cl from "./Task.module.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { Heading } from '../../shared/components/Heading.module.css/Heading'

export const Task = ({ todo }) => {
  const [completed, setCompleted] = useState(false)

  return (
    <li className={cl.item}>
      <input type="checkbox" value={completed} onChange={() => setCompleted(prev => !prev)} />
      <Heading myClass={completed ? cl.checkedHeading : null}>{todo.title}</Heading>
      <FaRegTrashAlt type='button'></FaRegTrashAlt>
    </li>
  )
}
