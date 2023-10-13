function App (){
  const day = new Date();
  let a= 20;
  let b = 30;
  let c = a+b;
  console.log(day);
  return(
   <div>
    Hello world! Today time is {day.toString()}
   <div>
   <button onClick={print_the_page}>print</button>
   </div>
   <p>
     {a} plus {b} = {c}
   </p>
   </div>         
  )
  function print_the_page(){
    window.print()
    
  }
  
}

export default App;
