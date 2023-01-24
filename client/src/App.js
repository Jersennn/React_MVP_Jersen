import {useEffect, useState} from 'react';
import Header from './components/Header.js';
import Allwork from './components/Allwork.js';
import Addwork from './components/Addwork.js';


function App() {
  const [showAddWork, setShowAddWork] = useState(false)
  const [works, setWorks] = useState([])
  useEffect(() => {
    const getWorks = async () => {
      const worksFromServ = await fetchWorks()
      setWorks(worksFromServ)
    }
    getWorks()
  }, [])

  //fetch data from backend
  const fetchWorks = async () => {
    const res = await fetch('http://localhost:3002/workouts')
    const data = await res.json()
    return data
  }

// add workout
const addWorkout = async (work) => {
  const res = await fetch('http://localhost:3002/workouts', {
    method: "POST",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(work)
  })
  const data = await res.json()
  setWorks([...works, data])
}


//delete workout
const deleteWorkout = async (id) => {
  await fetch(`http://localhost:3002/workouts/${id}`, {
  method: 'DELETE'
  })
  setWorks(works.filter((work) => work.id !== 
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
