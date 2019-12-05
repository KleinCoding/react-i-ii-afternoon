import React, {Component} from "react"
import data from "./data.js"
import Buttons from "./buttons.js"


class Populate extends Component {
constructor(props){
    super(props);
    this.state={
       myArr: data,
       position: 0,
     }
         this.onclickForward = this.onclickForward.bind(this);
         this.onclickBack = this.onclickBack.bind(this)
}

onclickForward(){
if(this.state.position < this.state.myArr.length -1){
    // this.state.position= this.state.position +1
    this.setState({position: this.state.position+1})
} else if(this.state.position === this.state.myArr.length -1){
    // this.state.position= 0
    this.setState({position: 0})
}
console.log(this.state.position)
return(this.state.position)
}

onclickBack(){
    if(this.state.position >= 1){
        // this.state.position= this.state.position -1
        this.setState({position: this.state.position -1})
    }else if(this.state.position === 0){
        // this.state.position= this.state.myArr.length
        this.setState({position: this.state.myArr.length -1})
    }
console.log(this.state.position)
return(this.state.position)
}


render(){
    console.log(this.state.myArr)
    return(
    <div className="displaydata">
        <div className="counterHolder">
        <h1 className="positionCount">{this.state.myArr[this.state.position].id}/{this.state.myArr.length}</h1>
        </div>
<div className="displayedText">
        <h1 className="nameClass">
        <h1>{this.state.myArr[this.state.position].name.first} {this.state.myArr[this.state.position].name.last}</h1>
        </h1>
        <h1 className="fromClass">From: {this.state.myArr[this.state.position].city}, {this.state.myArr[this.state.position].country}</h1>
        <h2 className="titleClass">Job Title: {this.state.myArr[this.state.position].title}</h2>
        <h3 className="employerClass">Employer: {this.state.myArr[this.state.position].employer}</h3>
        <br></br>
        <h4 className="favoriteClass">Favorite Movies:</h4>
        <h4 className="moviesText">
        <ul className= "listClass">1. {this.state.myArr[this.state.position].favoriteMovies[0]}</ul>
        <ul className= "listClass">2. {this.state.myArr[this.state.position].favoriteMovies[1]}</ul>
        <ul className= "listClass">3. {this.state.myArr[this.state.position].favoriteMovies[2]}</ul>
        </h4></div>
         <h1 className="buttonHolder">
         {/* <button onClick={this.onclickBack}>{"Previous >"}</button>
         <button onClick={this.onclickForward}>{"Next >"}</button> */}
         <Buttons next={this.onclickForward} previous={this.onclickBack} />
         </h1>
 </div>
 
 )
 
    

}

}

export default Populate