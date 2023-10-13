function App (){
  return(
   <div>
    Hello world!
   <div>
   <button onClick={print_the_page}>print</button>
   </div>
   </div>
  )
  function print_the_page(){
    window.print()
  }
}

export default App;
