import { clear } from '@testing-library/user-event/dist/clear';
import './App.css';
import Axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [name, setName] = useState("")
  const [averageAge, setAverageAge] = useState(null);
  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
    setAverageAge(res.data)
    })
  };

  return (
    <div className="App">
      <input 
        placeholder="Ex. Will..." onChange={(event) => {
        setName(event.target.value);
        }}
      />
      <button onClick={fetchData}>Average Age</button>
      <h1>Name: {averageAge?.name}</h1>
      <h1>Average Age: {averageAge?.age}</h1>
      <h1>Count: {averageAge?.count}</h1>
    </div>
  );
}
export default App;