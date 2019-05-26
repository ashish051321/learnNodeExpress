var Emitter = require('./emitter');


emtr1 = new Emitter();
emtr1.on('greet', function () { console.log('A greet event was emitted'); });

emtr1.emit('greet');
emtr1.emit('greet');
emtr1.emit('greet2');// there is no listener for this event.. there is no such event also.