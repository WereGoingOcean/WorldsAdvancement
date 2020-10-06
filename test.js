const fs = require('fs');

var path = './source/_posts/2020-05-10-worlds-group-2020.md';

var fileData = fs.readFileSync(path, "utf8");
console.log(fileData);
var replaced = fileData.split(/(\r\n|\n|\r)---(\r\n|\n|\r)/gm);


console.log(replaced.length);
console.log('0')
console.log(replaced[0]);
console.log('1')
console.log(replaced[1]);
console.log('2')
console.log(replaced[2]);
console.log('3')
console.log(replaced[3]);