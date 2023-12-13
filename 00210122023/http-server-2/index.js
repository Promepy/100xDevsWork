const express = require("express");
const port= 3000;

const app = express();


app.get('/', function(req, res){
    res.send('<b>Promepy</b>');
})

app.get("/test", function(req, res){
    res.json({
        name: 'promepy',
        age: 23
    });
})

app.listen(port, function(){
    console.log(`Hello`);
})