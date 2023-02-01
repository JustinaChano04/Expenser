
import './App.css';
import axios from "axios";
import { useState } from 'react';


const baseURL = "http://localhost:5000/profile";
function App() {

  const [profileData, setProfileData] = useState(null)

  function getData() {
    axios.get(baseURL)
    .then((response)=> {
      const p = response.data;
      console.log(response.data);
      setProfileData(p);
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
        }
  }
  );
  
}

  return (
    <div className="App">
      <header className="App-header">

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>To get your profile details: </p><button onClick={getData}>Click me</button>
        <p>Let's test GET requests: {profileData}</p>
      </header>
    </div>
  );
}

export default App;
