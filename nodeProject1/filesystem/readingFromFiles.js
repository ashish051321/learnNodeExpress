const fs = require('fs');
let fileContents = fs.readFileSync(__dirname + '/sample.txt');
console.log('sync file read gives us -- ' + fileContents);
// outputs string -- internally file was read in a buffer and converted to string

fs.readFile(__dirname + '/sample.txt', function (err, buffer) {
    // this gives us the buffer, an array of bytes.
    console.log('Async file read gives us raw -- ' + buffer);
    // And then we convert it back. The buffer has default encoding as utf8, so conversion goes through.
    console.log('Async file read gives us -- ' + buffer.toString());
});
console.log('v8 ran this code file');