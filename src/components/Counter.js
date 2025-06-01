import React, { Component } from "react";

class Counter extends Component{

    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    increment(){
        //this.state.count = this.state.count+1; 

        // this.setState({
        //     count : this.state.count+1
        // }, () => {
        //     console.log('callback value',  this.state.count);
        // })

        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
        console.log(this.state.count);
    }

    incrementFive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }


    render() {
        return (
            <div>
                <h1>count: {this.state.count}</h1>
                <button onClick = {() => this.incrementFive()}> increment </button>
            </div>
        )
    }


}

export default Counter;