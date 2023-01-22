import {useEffect, useState} from 'react';
import Header from './components/Header.js';
import Allwork from './components/Allwork.js';
import Addwork from './components/Addwork.js';


function App() {
  const [showAddWork, setShowAddWork] = useState(false)
  const [works, setWorks] = useState([
    {
     id: 5,
    workout: 'shoulder press',
    amount: '4 sets, 10 reps',
    reminder: false
    },
    {
     id: 6,
     workout: 'side delt raises',
     amount: '4 sets, 10 reps',
     reminder: false
    }
    ]
  )


// add workout
const addWorkout = (work) => {
  const id = Math.floor(Math.random() * 10000 + 1)
  console.log(id, work)
  const newWork = {id, ...work}
  setWorks([...works, newWork])
}


//delete workout
const deleteWorkout = (id) => {
  setWorks(works.filter((work) => work.workout !== 
  id))}

// toggle reminder
const toggleReminder = (id) => {
  setWorks(
    works.map((work) => 
    work.id === id ? {...work, reminder: 
    !work.reminder} : work
    )
  )
}

  return (
    <div className="container">
      <Header onAdd={() => setShowAddWork
        (!showAddWork)} 
        showAdd={showAddWork}/>
      {showAddWork && <Addwork onAdd={addWorkout}
      />}
      {works.length > 0 ? (
       <Allwork 
       works={works} 
       onDelete={deleteWorkout}
       onToggle={toggleReminder}/>
       ) : (
        'No workouts left'
       )}
    </div>
  );
}

export default App;
