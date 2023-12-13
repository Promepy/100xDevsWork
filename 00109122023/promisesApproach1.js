function myOwnSetTimeout(fn, duration){
    setTimeout(fn, duration);
}

myOwnSetTimeout(function(){
    console.log("hi there");
}, 1000)

//wrapping another async fn