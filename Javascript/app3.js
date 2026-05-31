// let n = prompt("write your number");

// n = parseInt(n);

// for(let i = n ; i <= n *10 ; i = i +n){
//     console.log(i);
// }


const favorite = "Avatar";
let guess = prompt("enter movie");
// while((guess != favorite) && (guess != "quit")){

//    guess = prompt("wrong guess");
// }
while ((guess != favorite)) {
    if (guess == "quit");
    console.log("you quit");
    break;

    guess = prompt("wrong guess");
}
if (guess == favorite) {
    console.log("congrats");
} else {
    console.log("you quit the game");
}


//FOR OF LOOP

// for(element of collection){
//     //do something
// }
