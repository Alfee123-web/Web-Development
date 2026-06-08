// let btn = document.querySelector("button");
// // console.dir(btn);

// // btn.onclick = function(){
// //     console.log("button was clicked");

// // };

let btn = document.querySelectorAll("button");
for (btn of btn) {
    btn.onclick = sayHello;//only name we dont want to execute sayHello() => execute
    btn.onclick = sayname;
    btn.onmouseenter = function () {
        console.log("you entered a button")
    }
    console.dir(btn);
    btn.addEventListener("click", sayHello);
    btn.addEventListener("click", sayname);
    btn.addEventListener("dblclick", function () {
        console.log("you double clicked");
    });
}
function sayHello() {
    alert("hello");
}
// btn.onclick = sayHello;//function

function sayname() {
    alert("alfee");
}

Element.addEventListener(event, callback);

let btn = document.querySelector("button");

btn.addEventListener("click", function () {
    let h3 = document.querySelector("h3");
    let randomColor = getRandomColor();
    h3.innerText = randomColor;
    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;
    console.log("color updated");
    // console.log("generate random color");
});

function getRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red} , ${green} , ${blue})`;
    return color;

}

// let p = document.querySelector("p");

// p.addEventListener("click" , function(){
//     console.log("para was clicked");
// });

//to select all
// let btn = document.querySelector("button");
// let h3 = document.querySelector("h3");
// let p = document.querySelector("p");

// function changecolor() {
//     console.dir(this.innerText);
//     this.style.backgroundColor ="blue" ;
// }
// btn.addEventListener("click", changecolor);
// h3.addEventListener("click", changecolor);
// p.addEventListener("click", changecolor);

// let inp = document.querySelector("input");

// inp.addEventListener("keydown" , function(){
//     console.log("key was pressed");
// });
// inp.addEventListener("keyup" , function(event){
//     console.log(event.key);
//     console.log(event.code);
//     console.log("key was released");
// });

let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    // alert("form submitted");

    //     let inp = document.querySelector("input");
    //     console.dir(inp);
    //   console.dir(inp.innerText);
    //   console.dir(inp.value);

    // let user  = document.querySelector("#user"); => # means id 
    // let pass  = document.querySelector("#pass");
    console.dir(form);
    let user = this.elements[0];//form.element[0]
    let pass = this.elements[1];

    console.log("user.value");
    console.log("pass.val");

    alert(`hi ${user.value} you pass is ${pass.value}`);

});


let user = document.querySelector("#user");

user.addEventListener("change", function () {
    console.log("change event");
    console.log(this.value);
});

user.addEventListener("input", function () {
    console.log("input event");
    console.log(this.value);
});

let inp = document.querySelector("#text");
let p = document.querySelector("p");

inp.addEventListener("input", function () {
    console.log(inp.value);
    p.innerText = inp.value;
})
