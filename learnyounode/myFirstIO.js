/**
 * Created by mmaia on 18/09/15.
 */
var fs = require('fs');

var buffer = fs.readFileSync(process.argv[2]);

var text = buffer.toString();

var textLines = text.split("\n");

console.log(textLines.length - 1);