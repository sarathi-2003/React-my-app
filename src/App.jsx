function ADD(){
  let a= 20;
  let b = 30;
  let c = a+b;
  return(
    <p>
    {a} plus {b} = {c}
  </p>  
  )
}

function App (){
  const day = new Date();
  
  console.log(day);
  return(
   <div>
    Hello world! Today time is {day.toString()}
   <div>
   <button onClick={print_the_page}>print</button>
   </div>

   <ADD />
   <ADD />
   <ADD />
   <ADD />
   <ADD />
   </div>       
    
  )
  function print_the_page(){
    window.print()
    
  }
  
}

export default App;
