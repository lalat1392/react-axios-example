import React from 'react';
import axios from 'axios';

export default class PersonAdd extends React.Component {
  state = {
    name: '',
    password:''
  }

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  }

  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      email: this.state.name,
      password: this.state.password
    };

    axios.post(`https://jsonplaceholder.typicode.com/users`, user)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={this.handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={this.handleNameChange} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={this.handlePasswordChange} />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
    )
  }
}