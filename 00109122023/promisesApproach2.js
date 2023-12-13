//Using promises
function myOwnSetTimeout(duration){
    let p = new Promise(function(resolve){
        setTimeout(function(){
            resolve();
        }, duration);
    });
    return p;
}

const ans = myOwnSetTimeout(1000);
ans.then(function(){
    console.log("hi")
});