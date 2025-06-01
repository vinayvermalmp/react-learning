import React, { Component } from 'react';

class Message extends Component{

    constructor(){
        super();
        this.state = {
            message:  "WWelcome Visitore"
        }
    }

    changeMessage(){
        this.setState({
            message: 'Thank you for subscribing'
        })
    }

    render() {
        return (
            <>
            <div>
                <h1>
                    {this.state.message}
                </h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
            </>
        )
    }
}

// const Message = () => 
export default Message;