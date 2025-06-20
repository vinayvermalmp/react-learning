import React, { Component, PureComponent } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp';
import MemoComp from './MemoComp';

 class ParentComp extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name : "vinay"
      }
    }

    componentDidMount() {

        setInterval(() => {
            this.setState({
                name: "vinay"
            })
        }, 2000);
    }
    
  render() {
    console.log('****************parent component*******************8');
    return (
      <div>
        <h1>parent component</h1>
        <MemoComp name={this.state.name} />
        {/* <RegComp name={this.state.name} />
        <PureComp name={this.state.name} /> */}
      </div>
    )
  }
}
export default ParentComp;
