import React, { useEffect, useState } from 'react'

function App() {
    const [count,setcount] = useState(0);

    useEffect(()=>{
    document.title=('count:${count}')
    },[count])
  function handleclick (){
    setcount(count+1)
 }
 console.log(count)
  return (
    <div>
        <button onClick={handleclick}>button</button>
    </div>
  )
}

export default App