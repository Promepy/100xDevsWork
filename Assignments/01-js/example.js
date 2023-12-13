//Greet
function greet(firstName, lastName){
    console.log("Hi " + firstName + " " + lastName);
};

greet("Pradeepthi", "Kondri");

//Greet Based On Gender
function greetGenderBased(firstName, lastName, gender){
    if(gender == "Male"){
        console.log("Hi Mr." + firstName + " " + lastName);
    }
    else{
        console.log("Hi Miss " + firstName + " " + lastName);
    }
    
};

greetGenderBased("Pradeepthi", "Kondri", "Female");

//Count till 1000
function counttill1000(){
    let res = 0
    for(let i=0; i<=1000; i++){
        res += i;
    }
    console.log(res);
}

counttill1000();

//print all even numbers in an array
function evenInArr(array){
    for(let i=0; i<array.length; i++){
        if(array[i]%2 == 0){
            console.log(array[i]);
        }
    }
}

evenInArr([-2,2,5,8,3,12,16,19])

//biggest number in an array

function biggestInArray(array){
    let res = array[0];
    for(let i=0; i<array.length; i++){
        if(array[i] > res){
            res = array[i];
        }
    }
    console.log(res);
}

biggestInArray([-2,2,5,8,3,12,16,19]);

// print names of all male given a complex object

function printMaleNames(users){
    for(let i=0; i<users.length; i++){
        if(users[i]["gender"] == "Male"){
            console.log(users[i]["firstName"]);
        }
    }
}

printMaleNames([
    {
        firstName: "Promepy",
        gender: "Male"
    },
    {
        firstName: "Gowtham",
        gender: "Male"
    },
    {
        firstName: "Pradeepthi",
        gender: "Female"
    },
    {
        firstName: "Promepy2",
        gender: "Male"
    }
])

//reverse elements of array

function reverseArray(arr){
    return arr.reverse();
}

console.log(reverseArray([1,2,3]));
// sum of two numbers
function sum(a, b){
    return a+b;
}

console.log(sum(2,3));

//sum with call backs
// sum of two numbers
function sumWithCallBack(a, b, fnToCall){
    let res = a+b;
    fnToCall(res);
}

function displayRes(res){
    console.log("Result of Sum is "+ res);
}

function displayResPassive(res){
    console.log("Sum's result is "+ res);
}

sumWithCallBack(2,3, displayRes)
sumWithCallBack(2,3, displayResPassive)

// time between setTimeOut call and control inside called function

let a = new Date();
setTimeout(fun, 3000);
let b = 0;
function fun(){
    b = new Date();
    console.log("test fun");
    let difference = (b - a) / 1000;;
    console.log(difference);
}



//terminal clock
setInterval(() => process.stdout.write(`${new Date()}\r`), 1000);