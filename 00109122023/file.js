const fs = require('fs');

fs.readFile("b.txt", "utf-8", function(err, data){
    console.log(err);
    console.log(data);
} )

console.log("this is last line")