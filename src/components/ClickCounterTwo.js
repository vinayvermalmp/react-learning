import React, { Component } from 'react'

class ClickCounterTwo extends Component {
  render() {
    const {count, incrementCount} = this.props
    return (
      <div>
        <button onClick={incrementCount}>clicked {count} times </button>
      </div>
    )
  }
}

export default ClickCounterTwo;
