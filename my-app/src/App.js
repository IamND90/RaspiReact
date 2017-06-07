import React, { Component } from 'react';
//import SerialPort from 'serialport';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {

      A4: 'unknown'

    }

  }

  /*
  initSp() {
    if( this.props.sp === null ){
      this.props.sp = new SerialPort("/dev/ttyACM0", { baudrate: 115200 });
      console.log('Serial Port start!');
      this.props.sp.on("open", () => {
        console.log('open');
        this.props.sp.write('pins\n');
      });
      this.props.sp.on('data', (data) => {
        this.props.dataReceived.push(data);
        console.log('data received: ' + data);
      });
    }
  }
  sendSp(data) {
    if( this.props.sp === null ){
      this.initSp();
    }
    this.props.sp.write(new Buffer(data + "\n"), function(err, results) {
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

