import React, { Component } from 'react';
//import SerialPort from 'serialport';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
        A4: 'unknown',
        sp: null,
        dataReceived: [],

    };

    this.initSp = this.initSp.bind(this);
    this.sendSp = this.sendSp.bind(this);
  }
/*
  initSp() {
    if( this.state.sp === null ){
      this.state.sp = new SerialPort("/dev/ttyACM0", { baudrate: 115200 });
      console.log('Serial Port start!');
      this.state.sp.on("open", () => {
        console.log('open');
        this.state.sp.write('pins\n');
      });
      this.state.sp.on('data', (data) => {
        this.props.dataReceived.push(data);
        console.log('data received: ' + data);
      });
    }
  }
  sendSp(data) {
    if( this.state.sp === null ){
      this.initSp();
    }
    this.state.sp.write(new Buffer(data + "\n"), function(err, results) {
      console.log('err ' + err);
      console.log('results ' + results);
    });
  }

  */

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

