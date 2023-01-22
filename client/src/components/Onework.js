import React from 'react';
import {FaTimes} from 'react-icons/fa';

const Onework = ({work, onDelete, onToggle}) => {
  return (
    <div className={`task ${work.reminder ? 
      'reminder' : ''}`}
     onDoubleClick={() => 
     onToggle(work.id)}>
      <h3>{work.workout} <FaTimes 
      style={{color: 'red', cursor: 'pointer'}}
      onClick={() => onDelete(work.id)}
      />
      </h3>
      <p>{work.amount}</p>
    </div>
  )
}

export default Onework
