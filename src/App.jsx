import React, { useRef } from 'react'

function App() {
  const bodyRef= useRef(document.body);
const changeColor =()=>{
  // console.log('color change...')
  // console.log(buttonRef.current)
  const Colors = ['red','blue','green','yellow','orange','purple','black','white','grey','pink']
  const randomColor = Colors[Math.floor(Math.random()*10)]
  console.log(randomColor)
  bodyRef.current.style.backgroundColor=randomColor;

}
  return (
    <div>
      <h1>Background Color Change</h1>
      <button onClick={changeColor} ref={bodyRef}>Change Color</button>
    </div>
  )
}

export default App;