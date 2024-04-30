import React from 'react';
import './App.css';
import {Person} from "./components/Person";

function App() {
  return (
    <div className="App">
      <Person
        name="William"
        email="William@will.com"
        age={22}
        isMarried={false}
        friends={["Jacky", "Martin", "Wilson", "Jim"]}
      />
    </div>
  );
}

export default App;
