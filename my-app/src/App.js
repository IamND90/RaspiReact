import React, { Component } from 'react';
import logo from './logo.svg';
import { initSp } from './js/PortManager'
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
        A4: 'unknown',
        sp: null,
        dataReceived: [],

    };

  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

