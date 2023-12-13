const fs = require('fs');

let fullname = ""
fs.readFile("firstName.txt", "utf-8", function(err, data){
    fullname = fullname.concat(data);
    fs.readFile("middleName.txt", "utf-8", function(err, data){
        fullname = fullname.concat(" ",data);
        fs.readFile("lastName.txt", "utf-8", function(err, data){
            fullname = fullname.concat(" ",data);
            console.log(fullname)
        })
    })
})

console.log("this is last line")