import React from 'react';
import axios from 'axios';
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      pwd: '',
      email: '',
      statusMsg: '',
      loader: false,
    };
  }
  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  submitHandler = (e) => {
    e.preventDefault();
    const data = {
      username: this.state.username,
      pwd: this.state.pwd,
      email: this.state.email,
    };
    this.setState({
      loader: !this.state.loader,
    });
    console.log(this.state);
    axios
      .post('https://jsonplaceholder.typicode.com/posts', data)
      .then((res) => {
        console.log(res);
        if (res.data) {
          console.log('post success');
          this.setState({
            username: '',
            pwd: '',
            email: '',
            statusMsg: 'account created SuccessFully',
            loader: !this.state.loader,
          });
        }
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div>
        <p>
          {this.state.statusMsg ? (
            <small style={{ color: 'orange' }}>{this.state.statusMsg}</small>
          ) : null}
        </p>
        <p>
          {this.state.loader && (
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Loader.gif/480px-Loader.gif"
              alt="loader"
              height="50px"
              width="50px"
              style={{ background: 'green' }}
            />
          )}
        </p>

        <form onSubmit={this.submitHandler}>
          <div>
            <label htmlFor="Username">Username :</label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleInput}
            />
          </div>
          <div>
            <label htmlFor="Pwd">Pwd :</label>
            <input
              type="password"
              name="pwd"
              value={this.state.pwd}
              onChange={this.handleInput}
            />
          </div>
          <div>
            <label htmlFor="email">email :</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInput}
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
export default Form;
