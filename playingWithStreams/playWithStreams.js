var fs = require('fs');
var zlib = require('zlib');
var zipit = zlib.createGzip();// its a transform stream, so it will simply get a stream- a chunk at a time, compress it and forward it.

var rs = fs.createReadStream(__dirname + '/file1.txt');
var ws = fs.createWriteStream(__dirname + '/compressedFile');

rs.pipe(zipit).pipe(ws); // usage of pipe

