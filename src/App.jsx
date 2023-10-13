function App (){
  console.log('Hello from App component');
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
    day = new Date();
  }
  
}

export default App;
