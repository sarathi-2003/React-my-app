import React from 'react'

import { Component } from 'react';

class Hi extends Component{
    constructor(props){
        super(props)
        this.State ={
            count:0,
        }
    }
    increment = () => {
        this.setState({
          count : this.state.count + 1,
        })
    }
    
    render(){
        // console.log(this.props)
        // const {numbers} = this.props
        
        return(
            <div>
            {/* <div align="center">Hello {numbers}</div> */}
              <p align="center">count : {this.State.count}</p>
             <button onClick={this.increment}>Increment</button>
          </div>
        )
    }
}




// class Hello extends Component{
//     render(){
//         return(
//             <div>
//             <Hi/>
             
           
//             </div>
//             )
//     }
// }
export default Hi;