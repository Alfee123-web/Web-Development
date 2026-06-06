const max = prompt("enter max number");


const random = (Math.floor(Math.random() * max)) + 1;
console.log(random);

let guess = prompt("guess the number");
while (true) {
    if (guess == "quit") {
        console.log("quit");
        break;
    }
    if (guess == random) {
        console.log("you are right");
        break;
    } else if (guess < random) {
        guess = prompt("guess is too small");
    } else {
        guess = prompt("guess is too large");
    }
    //else {
    //     guess = prompt("guess was wrong , try again");
    // }
}