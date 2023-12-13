const fs = require("fs");

//Using promises
function readFile(path){
    let p = new Promise(function(resolve){
        fs.readFile(path, "utf-8", function(err, data){
            resolve(data);
        });
    });
    return p;
}

let fullname = ""
let ans = readFile("firstName.txt");
ans.then(function(data){
    fullname = data;
    let ans2 = readFile("middleName.txt");
    ans2.then(function(data){
        fullname = fullname.concat(" ", data);
        let ans3 = readFile("lastName.txt");
        ans3.then(function(data){
            fullname = fullname.concat(" ", data);
            console.log(fullname);
        });
    });
});