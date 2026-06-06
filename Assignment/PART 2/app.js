let num = 15;
if (num % 10 == 0) {
    console.log("good");
} else {
    console.log("bad");
}

let name = prompt("enter your name");
let age = prompt("enter your age");
alert(`${name} is ${age} years old`);


let month = 1;
switch (month) {
    case 1: console.log("jan", "feb", "march");
        break;
    case 2: console.log("apr", "may", "june");
        break;
    case 3: console.log("jul", "aug", "sep");
        break;
}

let string = "blfeeKhan";
if ((string[0] == 'A' || string[0] == 'a') && string.length > 5) {
    console.log("GOLDEN");
}

let num1 = 122;
let num2 = 423;
if (num1 % 10 == num2 % 10) {
    console.log("same last digit");
} else {
    console.log("not same last digit");
}
