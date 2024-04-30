import "./App.css";
import { Person } from "./components/Person";

function App() {
  return (
   <div className="App">
    <Person
      name="William"
      email="Will@will.com"
      age={22}
      isMarried={false}
      friends={["Jim", "Jack", "Jasmin", "John"]}
    />
   </div>
  );
}

export default App;