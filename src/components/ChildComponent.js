import React, { Component } from 'react'

 class ChildComponent extends Component {

  render() {
    return (
      <div>
        <button onClick={() => this.props.greetHandler('child')}>Greet parent</button>
      </div>
    )
  }
}
export default ChildComponent;
