import React, { useState } from 'react'

function App() {
    const [counter , setcounter] = useState(5);
    setTimeout(()=>{
        setcounter(counter + 3)
    },1000)
    console.log('rendering..',counter)
  return (
    <div>App</div>
  )
}

export default App;