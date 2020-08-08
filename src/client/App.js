import React, { Component } from 'react';
import '../../assets/css/style.css';
import { Helmet } from 'react-helmet';

const posts = [{
  id: 2,
  text: 'Good Boy',
  user: {
    avatar: '/uploads/avatar1.png',
    username: 'Good Boy'
  }
},
{
  id: 1,
  text: 'Good Girl',
  user: {
    avatar: '/uploads/avatar2.png',
    username: 'Good Girl'
  }
}];

export default class App extends Component {
  state = {
    posts: posts,
    postContent: ''
  }
  handlePostContentChange = (event) => {
    this.setState({postContent: event.target.value})
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const newPost = {
      id: this.state.posts.length + 1,
      text: this.state.postContent,
      user: {
        avatar: '/uploads/avatar1.png',
        username: 'Good-Boy'
      }
    };
    this.setState((prevState) => ({
      posts: [newPost, ...prevState.posts],
      postContent: ''
    }));
  }
  render() {
    const { posts, postContent } = this.state;
    return (
      <div className="container">
         <Helmet>
              <title>Graphbook - Feed</title>
              <meta name="description" content="Newsfeed of all your friends on Graphbook" />
          </Helmet>
        <div className="postForm">
          <form onSubmit={this.handleSubmit}>
          <textarea value={postContent} onChange={this.handlePostContentChange} placeholder="Write your custom post!"/>
          <input type="submit" value="Submit" />
          </form>
        </div>
        <div className="feed">
          {posts.map((post, i) =>
            <div key={post.id} className="post">
              <div className="header">
                <img src={post.user.avatar} />
                <h2>{post.user.username}</h2>
              </div>
              <p className="content">
                {post.text}
              </p>
            </div>
          )}
        </div>
      </div>
    )
}}
