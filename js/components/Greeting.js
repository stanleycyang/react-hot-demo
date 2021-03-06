import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import Login from './Login.js';

class ChatApp extends React.Component {
  render() {
    return (
      <div className='greeting'>
        <h1>Hello, {this.props.name}!</h1>
        <h2>Read along the lines</h2>
      </div>
    );
  }
}


export default ChatApp;
