import React, { Component } from 'react'

 class PureComp extends Component {
  render() {
    console.log('Pure component rendrer')
    return (
      <div>
        <h2>Pure Component {this.props.name}</h2>
      </div>
    )
  }
}
export default PureComp;
