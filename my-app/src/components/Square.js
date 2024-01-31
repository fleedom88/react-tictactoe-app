import React from "react"
import './Square.css'

const Square = ({onClick,value})=>{
    // constructor(props){
    //     super(props); //부모(React.Component)의 props를 사용함
    //     this.state={
    //         value:null,
    //     }
    // }   
    return(
        <button className="square" 
        onClick={()=>{onClick()}}>
            {value}
        </button>
    )       
    
}

export default Square;