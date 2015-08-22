import React from 'react';

class Login extends React.Component {
  render() {
    return(
      <div>
        Welcome to the login
        <p>Your brand is {this.props.brand}</p>
        <p>Your name is {this.props.name}</p>

      </div>

    );
  }
}

export default Login;
