import React, { Component } from 'react';
import axios from 'axios';

export class PostList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts: [],
         errorMsg: null
      }
    }

    componentDidMount () {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response);
            this.setState({
                posts : response.data
            })
            
        }).catch(error => {
            console.log(error)
            this.setState({errorMsg: 'Error retreiving data'} )
        })
    }
    
  render() {
    const {posts, errorMsg} = this.state;
    return (
      <div>
        <h2>List of posts </h2>
            { 
            posts.length ? 
             posts.map( post => {
                return <div key={post.id}>
                        <h1> {post.id} - {post.title}</h1>
                        <p> {post.body}</p>
                    </div>
             }) : null
            }
            {
                errorMsg ? <div>{errorMsg}</div> : null
            }
      </div>
    )
  }
}

export default PostList
