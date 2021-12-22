import React from 'react';
import axios from 'axios';
class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }
  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        this.setState({ posts: res.data });
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div>
        <center>
          <h2>post data</h2>
          {this.state.posts.map((item, index) => {
            return (
              <div key={index}>
                <small>{item.name}</small>
              </div>
            );
          })}
        </center>
        <h2></h2>
      </div>
    );
  }
}
export default Post;
