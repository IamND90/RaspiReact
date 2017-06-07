/**
 * Created by andreyparamonov on 07.06.17.
 */
let SerialPort = require('serialport');

let sp = null ;
let dataReceived = [];

export function initSp() {
     if( sp === null ){
         sp = new SerialPort("/dev/ttyACM0", { baudrate: 115200 });
         console.log('Serial Port start!');
         sp.on("open", () => {
             console.log('open');
             sp.write('pins\n');
         });
         sp.on('data', (data) => {
             dataReceived.push(data);
             console.log('data received: ' + data);
     });
 }
 }
export function sendSp(data) {
     if( sp === null ){
     this.initSp();
     }
     sp.write(new Buffer(data + "\n"), function(err, results) {
     console.log('err ' + err);
     console.log('results ' + results);
     });
}

