import React from 'react'

function Grandchild (props){
    // console.log(props);
    return(
        <div>
            <h3 key={ParentData.id}> Grandchild:{props}</h3>
        </div>
    )
}

function Childcomponent (props){
console.log(props);
return(
    <div>
        <h2 key={ParentData.id}>Childcomponent:{ props }</h2>
        <Grandchild props = {props}/>
    </div>
)
}

function App() {
    const ParentData =[ {
        id:1,
        name:'partha'},
    {
        id:2,
        name:'ebi'
    }];
  return (
    <div>
        <h1>Parent Components:{ParentData}</h1>
        <Childcomponent  ParentData = { ParentData }/>
    </div>
  )
}

export default App;