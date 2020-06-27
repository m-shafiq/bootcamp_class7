import React, { useEffect, useState } from 'react';

import './App.css';



function App() {
  const [data, setdata] = useState([{}]);
  useEffect(() => {
    async function getRepo() {
      const response = await fetch('https://api.github.com/users/m-shafiq/repos');
      const data = await response.json();
      console.log(data);
      setdata(data);
    }
    getRepo()

    //fetch('https://jsonplaceholder.typicode.com/posts/1')
    // .then(response => response.json())
    // .then(json => {
    //   console.log(json);
    //   setdata(json);

  
  
  
}, [])
return (
  <div className="App">

    <h1> Hello from Shafiq, Here are my Github Repositories</h1>
    <hr />
    <ul>
      {data.map(
        (repoObj)=>{
          return <li>
            {repoObj.name}
          </li>
        }
      )}
    </ul>



  </div>

);
}

export default App;
