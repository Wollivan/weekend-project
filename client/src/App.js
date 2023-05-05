import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [family, setFamily] = useState([]);

  async function getFamilyData() {
    const API = "http://localhost:8080/family";
    const res = await axios.get(API);
    setFamily(res.data);
  }

  return (
    <div className="App">
      <h1>Weekend Project</h1>
      <button onClick={getFamilyData}>Fetch Data</button>
      {family.map(function (member, index) {
        return (
          <p key={index}>
            {member.name} is {member.age} years old
          </p>
        );
      })}
    </div>
  );
}

export default App;
