var Emitter = require('events');
var util = require('util');

function Greetr() {
    this.greeting = 'Hello People';
}

util.inherits(Greetr, Emitter);// Putting Emitter as parent in the prototype chain of Greetr

Greetr.prototype.greet = function () {
    console.log(this.greeting);
    let data = { payload: 'something important' };
    this.emit('greet', data);
}

var x = new Greetr();
x.on('greet', (myData) => { console.log('Greet was called ! and it also had data', myData); });
x.greet();

// =======================
//  Passing some data to the listener functions when an event is emitted.
// this.emit('greet', data);

