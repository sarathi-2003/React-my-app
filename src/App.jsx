
import React, { useRef } from 'react'

function App() {
    const inputRef = useRef(null)
    console.log(inputRef)
   
    const handlClick=()=>{
      inputRef.current.focus();
    

    }

  return (
    <div>
      <input
        type='input'
        placeholder='Type your name'
        ref={inputRef}
      />
      <button onClick={handlClick}>Focus Button</button>
      <p>print the name:{handlClick}</p>
    </div>  
  )
}

export default App