const fs = require('fs');

var path = './source/_posts/2020-05-10-worlds-group-2020.md';

var fileData = fs.readFileSync(path, "utf8");

var replaced = fileData.replace(/---/gm, "WORKED");

console.log(replaced);
console.log("BODY");