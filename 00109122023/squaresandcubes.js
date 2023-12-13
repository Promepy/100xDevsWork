function square(n) {
return n * n;
}

function cube(n) {
return n * n * n;
}

function sumOfSquares(a, b) {
let square1 = square(a);
let square2 = square(b);
return square1 + square2;
}

function sumOfCubes(a, b) {
let square1 = cube(a);
let square2 = cube(b);
return square1 + square2;
}

function sumOfSomething(a, b, callBackFn) {
    let val1 = callBackFn(a);
    let val2 = callBackFn(b);
    return val1 + val2;
}

let ans = sumOfSquares(1, 2);
console.log(ans);

let ans2 = sumOfCubes(1, 2);
console.log(ans2);

let ans3 = sumOfSomething(1,2, cube);
console.log(ans3);