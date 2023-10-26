import React, { useEffect, useState } from 'react'

function App() {
    const [response, setresponse] = useState(0);
    let fetchdata = async () =>{
       let Response=  await fetch('https://jsonplaceholder.typicode.com/posts')
        let data = await Response.json();
        
        setresponse(data);
    }
 
    useEffect(()=>{
       fetchdata()
    },[])

    // console.log(response);
  return (
    <div>
    <h2> API DATA</h2>
    <ul>
    {response&&
     response.map(posts =>
        <li key={posts.id}>{ posts.title }</li>
        )
    }
       </ul>
     <p>Fetching data...</p>
   
    </div>
  )
}

export default App;