import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

export class ComponentF extends Component {
  render() {
    return (
      <div>
        <h3>ComponentF</h3> 
        <UserConsumer>
         {(userName) => {
            return <div>Hello {userName}</div>
         }
         }    
        </UserConsumer> 

      </div>
    )
  }
}

export default ComponentF
