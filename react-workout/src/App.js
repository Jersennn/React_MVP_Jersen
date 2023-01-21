import {useState} from 'react';
import Header from './components/Header.js';
import Allwork from './components/Allwork.js';

function App() {
  const [works, setWorks] = useState([
    {
     id: 5,
    workout: 'shoulder press',
    amount: '4 sets 10 reps'
    },
    {
     id: 6,
     workout: 'side delt raises',
     amount: '4 sets of 10'
    }
]
)


//delete workout
const deleteWorkout = (id) => {
  console.log('delete', id);
}

  return (
    <div className="container">
      <Header />
      <Allwork works={works} onDelete={deleteWorkout}/>
    </div>
  );
}

export default App;
