import React, { useState , useEffect} from 'react'
import axios from "axios";

function App() {
   // new line start
  const [profileData, setProfileData] = useState(null)

  useEffect(()=>{
    axios.get('http://localhost:5000/data').then(response => {
      console.log("SUCCESS", response)
      setGetMessage(response)
    }).catch(error => {
      console.log(error)
    })

  }, [])
    //end of new line 

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
