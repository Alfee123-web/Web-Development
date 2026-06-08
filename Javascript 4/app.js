// // let smallImages = document.getElementsByClassName("oldImg");


// // for(let i = 0; i< smallImages.length; i++ ){
// //     console.log(smallImages.src);
// // }

// console.log(document.querySelector("h1"));
// console.log(document.querySelector("#description"));
// console.dir(document.querySelector(".oldImg"));
// console.dir(document.querySelector("div a"));
// //first anchor tag


// //INNER TEXT => SCREEN PAR SHOW HO RHA HAI VO SHOW KREGA
// //TEXT CONTENT => ACTUAL HTML FILE ME LIKHA HAI
// //INNER HTML => ACTUAL HTML JO LIKHA HAI 

// //MANIPULATING ATTRIBUTE
// let links = document.querySelectorAll(".box a ");

// // for(let i =  0; i < links.length ; i++){
// //    links[i].style.color = "purple";
// // }

// for(link of links){
//     link.style.color = "yellow";
// }
//only visible inline style

let para1 = document.createElement("p");

para1.innerText= "hey I am red";
document.querySelector("body").append(para1);

para1.classList.add("red");

let h3 = document.createElement("h3");

h3.innerText= "hey I am blue h3";
document.querySelector("body").append(h3);

h3.classList.add("blue");


let div  =document.createElement("div");
let h1  =document.createElement("h1");
let para2  =document.createElement("para2");

h1.innerText = "I am a div";
para2.innerText = "MEE TOO1";

div.append(h1);
div.append(para2);
div.classList.add("box");

document.querySelector("body").append(div);