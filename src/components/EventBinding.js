import React, { Component } from 'react'

class EventBinding extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: "Hello!"
      }

      // this.clickHandler = this.clickHandler.bind(this);

    }
    

    // clickHandler(){
    //     this.setState({
    //         message: 'goodbye'
    //     })
    //     console.log(this);
    // }

    clickHandler = () => {
        this.setState({
            message: 'Goodbye!'
        })
    }

  render() {
    return (
      <div>
        <p>{this.state.message}</p>
        {/* <button onClick={this.clickHandler.bind(this)} >Click Button</button> */}
      {/* <button onClick={() => this.clickHandler()} >Click Button</button> */}
      <button onClick={this.clickHandler} >Click Button</button>
      </div>
    )
  }
}
export default EventBinding;
