// function hello(){
//     console.log("hello");
// }
// hello();

// function demo(){
//     hello();
// }
// demo();


// function one(){
//     return 1;
// }
// function two(){
//     return one() + one();
// }
// function three(){
//   let ans =  two() + one();
//   console.log(ans);
// }


//SINGLE THREADED => EK TIME PE EK HI KAAM KAREGA 
//asynchronous 
// setTimeout(()=>{
//     console.log("apna college");
// },2000);
// setTimeout(()=>{
//     console.log("alfee khan");
// },2000);
// console.log("hello");


//CALLBACK HELL
let h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve , reject) => {
setTimeout(() => {
    h1.style.color = color;
    resolve("color changed");
},delay);
  });

 
}
//promise chaining
changeColor("red", 1000)
.then(()=>{
    console.log("red completed");
    return changeColor("orange" , 1000);
})
.then(()=>{
    console.log("orange completed");
    return changeColor("green" , 1000);
})
.then(()=>{
    console.log("green completed");
    return changeColor("blue" , 1000);
});



// changeColor("red", 1000, () => {
//     changeColor("blue", 1000, () => {
//         changeColor("green", 1000, () => {
//             changeColor("yellow", 1000);
//         });
//     });
// });

//PROMISES , ASYNCH , AWAKE KEYWORDS
//promises obj represents the eventual completion of ans asynchronous operation 
//ans its resulting value

// function savetoDb(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//         // console.log("your data was saved")
//         success(); //callback
//     } else {
//         // console.log("weak connection");
//         failure();
//     }

// }
// savetoDb("apna college", () => {
//     console.log("successs: your data was saved: ");
//     savetoDb("hello world", () => {
//         console.log("success 2");
//         savetoDb("alfee", () => {
//             console.log("succes3");
//         }, () => {
//             console.log("failure3");
//         })
//     }, () => {
//         console.log("failure2");
//     });
// }, () => {
//     console.log("failure: weak connection");
// });
//first data save then save 2 one , then 3rd one 


//PROMISE => OBJ => RESOLVE AND REJECT

// function savetoDb(data, success, failure) {

//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if (internetSpeed > 4) {
//             resolve("data was saved");//fulfilled/resolved
//         } else {
//             reject("weak connection");//rejected
//         }

//     });

// }
// let request = savetoDb("apna colleeg");
// request.then(()=>{
//     console.log("promise was resolved");
//     console.log(request);
// })
// .catch(()=>{
//     console.log("promise was rejected");
//     console.log(reject);
// });


// savetoDb("Apna college")

//     .then((result) => {
//         console.log("data1 saved");
//         console.log(result);
//         savetoDb("alfee").then(() => {
//             return savetoDb("hello");
//         })
//             .then((result) => {
//                 console.log("data2 saved");
//                       console.log(result);
//                       return savetoDb("alfee");
//             })
//     })
//     .catch(() => {
//         console.log("promise was rejected");//error
//               console.log(error);
//     });


