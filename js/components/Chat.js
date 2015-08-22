import React from 'react';
import Login from './Login';

class ChatApp extends React.Component {
  render() {

    return (
      <div className='greeting'>
        <h1>Hello, {this.props.name}!</h1>
        <h2>Testing</h2>
        <Login brand='Nike' name={this.props.name}/>

      </div>
    );
  }
}

export default ChatApp;
