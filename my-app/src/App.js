import React, { Component } from 'react';
import logo from './logo.svg';
//import ReactHardware from 'react-hardware';
import { initSp } from './js/PortManager'
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
        A4: 512,
        command:'Text',
        sp: null,
        dataReceived: '',

    };

    initSp();
  }

  showValue(value){
      console.log(value);
  }

  render() {
    return (
      <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to Raspberry Pi</h2>
          </div>
          <div>
              <input type="text" contentEditable="true" value={this.state.command} onChange={this.showValue(this.value)} />
          </div>
      </div>
    );
  }
}

