/**
 * Created by andreyparamonov on 07.06.17.
 */
const SerialPort = require("browser-serialport").SerialPort

let sp = null ;
let dataReceived = [];

export function initSp(callback) {
     if( sp === null ){

         try{
             sp = new SerialPort("/dev/ttyACM0", { baudrate: 115200 });
             console.log('Serial Port start!');
             sp.on("open", () => {
                 console.log('open');
                 sp.write('pins\n');

             });
             sp.on('data', (data) => {
                 dataReceived.push(data);
                 console.log('data received: ' + data);
                 callback(data);
             });
         }
         catch(error) {
            console.log(error);
         }
    }
 }
export function sendSp(data) {
     if( sp === null ){
        this.initSp();
     }
     sp.write(new Buffer(data + "\n"), (err, results) => {
        console.log('err ' + err);
        console.log('results ' + results);
     });
}
