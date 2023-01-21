import React from 'react'
import Onework from './Onework.js';


const Allwork = ({works, onDelete}) => {
    

  return (
    <>
      {works.map((work) => (
      <Onework key={work.id} work={work} onDelete={onDelete}/>
      ))}
    </>
  )
}

export default Allwork
