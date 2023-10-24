import React from "react";
import { Component } from "react";

 class App extends Component(){
    constructor(props){
        super(props)

        this.state = {
          isInCart: true
        }
        
       
    }
    handleAddToCartButtonClick = () => {
        this.setState({
         isInCart: !this.state.isInCart,
        })       
 
         }
    render(){
        return(
            <>
               {
                this.state.isInCart ? ( <button onClick={this.handleAddToCartButtonClick}>Add To Cart</button>):
               (<button onClick={this.handleAddToCartButtonClick}>Remove Cart</button>)
               }            
            </>
        )
    }
 }
 export default App;