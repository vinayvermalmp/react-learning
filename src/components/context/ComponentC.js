import React, { Component } from 'react'
import ComponentE from './ComponentE';
import { UserConsumer } from './UserContext';

export class ComponentC extends Component {
  render() {
    return (
      <div>
         <ComponentE />
      </div>
    )
  }
}

export default ComponentC;