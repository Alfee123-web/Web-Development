// async function greet(){
//     throw "error 404";
//   return "heelllo";
// }

// greet()
// .then((result)=>{
//     console.log("promise was successfull")
//     console.log(result);
// })
// .catch((err)=>{
//     console.log("promise was rejected");

// })

// let demo = async() => {
//     return 5;
// }

//await key word
// function getNum() {
//     //     console.log(5);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 10) + 1;
//             console.log(num);
//             resolve();
//         }, 1000);
//     });


// };

// async function demo() {
//     getNum();
//     getNum();
//     getNum();
//     getNum();
//     getNum();
// }


// let h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let num = Math.floor(Math.random() * 5) + 1;
//       if (num > 3) {
//         reject("promise rejected");
//       }
//       h1.style.color = color;
//       resolve("color changed");
//     }, delay);
//   });


// }

// async function demo() {
//   try {
//     await changeColor("red", 1000);
//     await changeColor("blue", 1000);
//     await changeColor("green", 1000);
//     await changeColor("red", 1000);
//     await changeColor("orange", 1000);
//   }
//   catch (err) {
//     console.log("error");
//     console.log(err);
//   }


//   let a = 2;
//   console.log(a);
//   console.log(a + 3);
// }


//handling rejections with AWAIT
//api = > application programming interface
//json => javascript object notation




let jsonRes =
'{ "fact": "Some cats have survived falls of over 65 feet (20 meters), due largely to their \u201crighting reflex.\u201d The eyes and balance organs in the inner ear tell it where it is in space so the cat can land on its feet. Even cats without a tail have this ability.", "length": 249 }'



let validRes = JSON.parse(jsonRes);
console.log(validRes.fact);


let student = {
  name:"alfee",
  marks:40,
};

//AJAX => asynchronous javascript and XML
// let url = "https://catfact.ninja/fact";
// fetch(url)

// .then((response)=>{
//   // console.log(response);
//   return response.json()
// })
// .then((data)=>{
//   console.log("data1 = ",data.fact);
//   return fetch(url);
// })
// .then((response)=>{
//   return response.json();
// })
// .then((data2)=>{
//   console.log("data2 : " , data2.fact);
// })
// .catch((err)=>{
//   console.log("ERROR- ",err);
// });

let url = "https://catfact.ninja/fact";
async function getFacts() {
try{
    let res = await fetch(url);
  let data =  await res.json();
  console.log(data.fact);
}catch(err){
  console.log(err);
}
}
