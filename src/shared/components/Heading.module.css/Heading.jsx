import React from 'react'


export const Heading = ({ children, myClass }) => {
  const style = {
    fontSize: '24px',
    fontWeight: "700",
    padding: "12px",
    color: "#fff"
  }

  return (
    <div>
      <h1 style={style} className={myClass ? myClass : null}>{children}</h1>
    </div>
  )
}
