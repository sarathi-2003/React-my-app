import React, { useState } from 'react'

function App() {
    const [counter,setcounter]=useState('hello');
  function increment(){
    setTimeout(()=>{
        setcounter('Hipartha')
    },1000)
       
    }
   
  return (
    <div>
         <p> {counter}</p>
         <button onClick={increment}>button</button>
    </div>
  )
  }

export default App