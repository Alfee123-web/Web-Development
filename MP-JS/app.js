// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");

// div.addEventListener("click" , function(){
//     console.log("div was clicked");
// });

// ul.addEventListener("click" , function(event){
//     event.stopPropagation();
//     console.log("ul was clicked");
// });
// for(li of lis){
// li.addEventListener("click" , function(event){
//       event.stopPropagation();
//     console.log("li was clicked");
// });
// }

let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
    // console.log("clicked");
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delButton = document.createElement("button");
    delButton.innerText = "delete";
    delButton.classList.add("delete");


    item.appendChild(delButton);
    ul.appendChild(item);

    console.log(inp.value);
    inp.value = "";
});

// let delbtns = document.querySelectorAll(".delete");

// for(delButton of delbtns){
//     delButton.addEventListener("click" , function(){
//         console.log("el deleted");
//     })
// }

 ul.addEventListener("click" , function(event){
    // console.log(event.target);
    // console.dir(event.target);
    
    // console.log("clicked");//event bubbling
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");//delete items
        }
 });