function ADD(props){
  // console.log(props)
  let a= 20;
  let b = 30;
  let c = a+b;
   
  return(
    // <p>{a} plus {b} = {c} </p> 
     <div>
      Hello { props.username }
    </div>
    
  )
}

function App (){
  const day = new Date();
  let user1 = 'sarathi';
  let user2 = 'karuna';
  console.log(day);
  return(
   <div>
    Hello world! Today time is {day.toString()}
   <div>
   <button onClick={print_the_page}>print</button>
   </div>
   <ADD username ={user1} />
   <ADD username ={user2} />
   
   </div>       
    
  )
  function print_the_page(){
    window.print()
    
  }
  
}

export default App;
