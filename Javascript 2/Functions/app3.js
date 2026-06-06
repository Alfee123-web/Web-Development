// function hello(){
//     console.log("hello");

// }

// function printName(){
//     console.log("Apna college");
// }
// printName();

// function roll(){
//     let random = Math.floor(Math.random() * 6) + 1;
//     console.log(random)
// }
// roll();
// roll();
// roll();
// roll();
// roll();
// roll();

function printName(name) {
    console.log(name);
}
printName("Alfee");


function printInfo(name, age) {
    console.log(`name is ${name} & age is ${age}`);
}
printInfo("Alfee", 20)
printInfo("Alfee")//  undefined


function sum(a, b) {
    console.log(a + b);
}
sum(3, 5);
sum(1, 5);
sum(2, 10);


function table(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(n * i);
    }

}
table(10);

function sum(a, b) {
    
 console.log("hello");

   return a + b;
   console.log("hello");//never executes after return function
}

 console.log(sum(3, 5));
 console.log(sum(3, 50));
 console.log(sum(sum(3, 50) , 1));//it is also possible


 function sumofN(n){
    let sum = 0;
    for(let i = 1 ; i <= n ; i++){
        sum += i;
       
    }
 return sum;
 }
 console.log(sumofN(1000));

let arr = ["hi" , "hello", "bye", "guy"];
 function concat(arr){
    let result ="";
    for(let i = 0 ; i < arr.length ; i++){
          result += arr[i];
    }
    return result;
 }
 console.log(concat(arr));

 