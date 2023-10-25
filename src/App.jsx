import React, { useState } from 'react'
function childcomponent({handleData}){
    let message = 'hello partha'
    sentdata=()=>{
        handleData(message);
    }

    return(
     <div>
        <button onClick={sentdata}>sentDataTopPrent</button>
     </div>
    )
}

function App() {
    const [DataFromchild,setDataFromchild] = useState('');
 function handleData(message){
    setDataFromchild(message)
  }
  return (
    <div>
        <h1>parent component : {DataFromchild}</h1>
           <childcomponent  Data={handleData}  />
  </div>
  )
}

export default App;