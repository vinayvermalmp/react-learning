import React, { Component } from 'react'

class IntervalClassCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    componentDidMount() {
        this.interval = setInterval(this.tick, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.IntervalClassCounter)
    }

    tick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    

  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
      </div>
    )
  }
}

export default IntervalClassCounter
