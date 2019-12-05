
import React, {Component} from 'react'
// import logo from './logo.svg';
import './App.css';
import Populate from "./populate.js"
// import Header from "./header.js"
import "./index.css"




class Buttons extends Component {
    constructor(){
        super()
    }
    
    
    render(){
        return(
<div className= "buttonagain">
<button onClick={this.props.previous}>{"Previous >"}</button>

<h1 className= "threebuttons">
    <h2><button>Add</button></h2>
    <h2><button>Edit</button></h2>
    <h2><button>Delete</button></h2>
</h1>
<button onClick={this.props.next}>{"Next >"}</button>
</div>
        )
    }}

    export default Buttons