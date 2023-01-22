import React from 'react'
import Onework from './Onework.js';


const Allwork = ({works, onDelete, onToggle}) => {
    

  return (
    <>
      {works.map((work) => (
      <Onework key={work.id}
        work={work}
        onDelete={onDelete}
        onToggle={onToggle}/>
      ))}
    </>
  )
}

export default Allwork
