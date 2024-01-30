import React from "react"
import './Square.css'

export default class Square extends React.Component{
    // constructor(props){
    //     super(props); //부모(React.Component)의 props를 사용함
    //     this.state={
    //         value:null,
    //     }
    // }

    render(){
        return(
            <button className="sqaure" 
            onClick={()=>{this.props.onClick()}}>
                {this.props.value}
            </button>
        )       
    }
}