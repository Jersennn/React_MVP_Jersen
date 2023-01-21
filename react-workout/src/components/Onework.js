import React from 'react';
import {FaTimes} from 'react-icons/fa';

const Onework = ({work, onDelete}) => {
  return (
    <div className='task'>
      <h3>{work.workout} <FaTimes 
      style={{color: 'red', cursor: 'pointer'}}
      onClick={onDelete}
      />
      </h3>
      <p>{work.amount}</p>
    </div>
  )
}

export default Onework
