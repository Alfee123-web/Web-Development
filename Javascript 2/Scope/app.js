// let sum = 54;
// //GLOBAL SCOPE

// function calSum(a, b) {

//     let sum = a + b;
//     //FUNCTION SCOPE

//     console.log(sum);
// }
// calSum(2, 3);
// console.log(sum);//52 will be printed


// function outerFunc() {

//     function innerfunction() {//function scope
//         console.log(x);
//         console.log(y);
//     }
//     let x = 5;
//     let y = 2;
//     //LEXICAL SCOPE 
//     innerfunction();
// }

// //HIGHER ORDER FUNCTION
// function multiplegreet(func, n) {
//     for (let i = 1; i <= n; i++) {
//         func();
//     }
// }
// let greet = function () {
//     console.log("hello");
// }
// multiplegreet(greet, 10);





// function oddevenFactory(request) {
//     if (request == "odd") {
//         let odd = function (n) {
//             console.log(n % 2 != 0);
//         }
//         return odd;

//     } else if (request == "even") {
//         let even = function (n) {
//             console.log(n % 2 == 0);
//         }
//         return even;

//     } else {
//         console.log("wrong request");
//     }
// }
// let request = "odd";

// //actions can be performed on an object
// //here calculator is object
// const calculator = {
//     num :55,
//     add: function(a,b){
//         return a + b;
//     },
//     sub: function(a,b){
//         return a - b;
//     },
//     mul: function(a,b){
//         return a * b;
//     }
// };

// const student = {
//     name :"alfee",
//     age:20,
//     class:"a",
//     sec:"c",
//     phy:23,
//     chem:25,
//   getAvg(){
//     console.log(this);
//     let avg = (this.phy + this.chem )/2;
//     console.log(`${this.name} got avg marks ${avg}`);
//   }
// }

// //alfee got avg marks 24

//  console.log("hello");
//  console.log("hello");
// try{
//     console.log(a);
// }
// catch{
//     console.log("caught an error");
// }
//  console.log("hello");
//   console.log("hello");
//    console.log("hello");

//ARROW FUNCTION

const sum = (a,b) => {
    console.log(a+b);
};
const cube = (n) => {
    console.log(n*n*n);
};

// console.log("hi there");
// setTimeout(() => {
//     console.log("Apna College");
// } , 4000);// 4 seconds
// console.log("welcome to ");

// console.log("hi there");
// setInterval(() => {
//     console.log("Apna College");
// } , 4000);// 4 seconds
// console.log("welcome to ");
//prints apna college after every 2 seconds
//ƒ clearInterval() => stop set interval



//THIS WITH ARROW FUNCTION => lexical scope(parent scope)
// funcitons => scope -> this -> calling object

const student = {
    name:"alfee",
    marks:20,
    prop:this , //global scope
    getName:function(){//normal func
        console.log(this);//student
        return this.name;
    },
    getMarks: () =>{ //arrow func
          console.log(this);//window => parent scope
          return this.marks;
    },
    getInfo1 : function() { //parent function
        setTimeout(() => {
            console.log(this)//arrow function
        }, 2000);
    },
    getInfo2 : function(){//normal
        setTimeout ( function(){
            console.log*(this)//window

        }, 2000);
    }
};
// const a = 5; // global scope

