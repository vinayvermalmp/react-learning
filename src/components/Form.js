import React, { Component } from 'react'

 class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            comment: '',
            topic: ''

        }
    }

    handleUsernameChange = event => {
         this.setState({
            username: event.target.value
         })
    }

    handleCommentChange = event => {
        this.setState({
            comment: event.target.value
        })
    }

    handleTopicChange = event => {
        this.setState({
            topic: event.target.value
        })
    }

    handeFormSubmit = event => {
        alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`)
        event.preventDefault();
        
    }

  render() {
    
    const {username, comment, topic} = this.state;

    return (
        <form onSubmit={this.handeFormSubmit}>
            <div>
                <label>Username</label>
                <input type='text' value={username}
                onChange={this.handleUsernameChange} 
                placeholder='Enter your name' />
            </div>
            <div>
                <label>Comment</label>
                <textarea value={comment} 
                onChange={this.handleCommentChange} ></textarea> 
            </div>
            <div>
                <label>Topic</label>
                <select value = {topic} onChange={this.handleTopicChange}>
                    <option value="react">React</option>
                    <option value='angular'>Angular</option>
                    <option value='java'>Java</option>
                </select>
            </div>
            <button type='submit' >submit</button>
        </form>
    )
  }
}

export default Form;
