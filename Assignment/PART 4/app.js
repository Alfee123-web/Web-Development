let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
        continue;

    }
    console.log(arr[i]);
}


let num = 265782;
let count = 0;

let copy = num;
while (copy > 0) {
    count++;
    copy = Math.floor(copy / 10);//decimal value chop of
}
console.log(count);


let num = 265782;
let sum = 0;

let copy = num;
while (copy > 0) {
    digit = copy % 10
    sum += digit;
    copy = Math.floor(copy / 10);
}
console.log(sum);

let n = 3;
let fact = 1;
for (let i = 1; i <= n; i++) {
    fact *= i;
}
console.log(fact);

let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let larg = 0;

for (i = 0; i < arr.length; i++) {
    if (larg < arr[i]) {
        larg = arr[i];
    }
}
console.log(larg);