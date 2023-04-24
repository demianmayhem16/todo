import React from 'react'
import cl from './HeaderWidgets.module.css'
import { AiFillBook, AiOutlineSearch } from "react-icons/ai"


export const HeaderWidgets = () => {
  return (
    <header className={cl.header}>
      <div className={cl.container}>
        <a href='/'>
          <AiFillBook className={cl.logo} />
        </a>
        <p className={cl.text}>to do or not todo</p>
        <AiOutlineSearch className={cl.search} />
      </div>
    </header>
  )
}
