console.log("hello world");
console.log("hello Alfee");
// let a = 10;
// let b = 5;
// console.log("sum is : ",a + b);


let pencilprice = 10;
let eraserPrice = 5;

// let output ="the total price is " + ( pencilprice + eraserPrice) + "rupees";

let output = `the total price is : ${pencilprice + eraserPrice} Rupees`;
console.log(output);

// let a = 5;
// let b = 3;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a++);//5
// console.log(++a);//7

let a = 5;
let b = 3;
b = a;
console.log(b);

// let age = 18;
// console.log(age > 18);
// console.log(age >= 18);


//age comparison for voting
let age = 20;
// if(age>=18){
//     console.log("you can vote");
//     console.log("you can drive");
// }
if (age >= 18) {
    console.log("you can vote");
    console.log("you can drive");
}
if (age < 18) {
    console.log("you cannot vote");
}
if (age = 20) {
    console.log("you  are in your 20s");
}

let firstName = "Alfee";
if (firstName == "Alfee") {
    console.log(`welcome ${firstName}`);
}

//Traffic light system
// let color = "Green";

// if(color === "Red"){
//     console.log("stop");
// }
// else if(color === "Yellow"){
//     console.log("hold");
// }
// else if(color === "Green"){
//     console.log("go");
// }


let marks = 95;
if (marks >= 80) {
    console.log("A+");
} else if (marks >= 60) {
    console.log("B");
}
else if (marks < 33) {
    console.log("C");
}


//Traffic light
let color = "Blue";

if (color === "Red") {
    console.log("stop");
}
else if (color === "Yellow") {
    console.log("hold");
}
else if (color === "Green") {
    console.log("go");
}
else {
    console.log("Broken");
}



let name = "alfee";
if (name[0] == "a" && name.length > 3) {
    console.log("Good string");
}
else {
    console.log("Not a Good string");
}

// alert("something is wrong");
console.error("Broken");
console.warn("Broken");



//INPUT IN JAVASCRIPT
let coolName = prompt("Enter your name : ");
console.log(coolName);