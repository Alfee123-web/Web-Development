const square  = (n) => n * n;
console.log(square(4));
console.log(square(10));
console.log(square(8));



let id = setInterval(() => {
    console.log("hello world");
} , 2000);

setTimeout(() => {
    clearInterval(id);
    console.log("clear interval")
},10000);