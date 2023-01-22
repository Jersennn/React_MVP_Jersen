import React, { useEffect } from 'react'
import {useState} from 'react'

const Addwork = ({onAdd}) => {
  const [workout, setText] = useState('')
  const [amount, setRep] = useState('')
  const [reminder, setReminder] = useState(false)

const onSubmit = (e) => {
  e.preventDefault()
  if(!workout) {
    alert('Add a workout to save it!')
    return
  }
  onAdd({workout, amount, reminder})
  setText('')
  setRep('')
  setReminder(false)
 }


  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Workout Name</label>
        <input type='text'
          placeholder='Add Workout'
          value={workout}
           onChange={(e) => setText(e.target.value)}/>
      </div>
      <div className='form-control'>
        <label>Sets and Reps</label>
        <input type='text'
         placeholder='How many sets and reps'
         value={amount}
          onChange={(e) => setRep(e.target.value)}/>
      </div>
      {/* <div className='form-control form-control-check'>
        <label>Add progress tracker</label>
        <input type='checkbox'
        checked={reminder}
        value={reminder} 
        onChange={(e) => setReminder(e.currentTarget.checked)}/>
      </div> */}

      <input className='btn btn-block' type='submit' value='Save Workout' />
    </form>
  )
}

export default Addwork
