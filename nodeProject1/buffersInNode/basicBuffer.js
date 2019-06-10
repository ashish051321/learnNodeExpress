let buf = Buffer.from('Hello', 'utf8');

console.clear();
console.log(buf);
console.log(buf.toString());
console.log(buf.toJSON());

// ---- Using Typed Arrays ---------
let buf1 = Buffer.alloc(8);
var viewInt32 = new Int32Array(buf1);// we can use two views in this buffer
viewInt32[0] = 21;
viewInt32[1] = 22;
console.clear();
console.log(viewInt32);
 //-----------------------------
 