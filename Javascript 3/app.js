let arr = [1,2,3,4,5];
let print = function(el) {
    console.log(el);
}
arr.forEach(print);


let arr = [1,2,3,4,5];
arr.forEach((el) => {
    console.log(el);
});

// for each
let student = [
    {
        name: "alfee",
        marks: 100,
        age: 20
   },
    {
        name: "akshat",
        marks: 99,
        age: 22,
    },
];
// student.forEach((student) => {
//     console.log(student.marks);
// });
let gpa = student.map((el) => {
    return el.marks/10;
});

// MAP FUNCTION
let num = [1,2,3,4];
let double = num.map((el) => {
    return el*el;
})


// //FILTER
let arr2 = [1,2,3,4,5,6,7,8];
let even = arr2.filter((el) => {
    return el%2==0;
})


// //EVERY
let arr3 = [2,2,6];
let ans = arr3.every((el) => {
    return el%2==0;
})

//REDUCE => reduce the array to single value
let arr4 = [1,2,3,4];
let final = arr4.reduce((res , el) => {
    console.log(res);
    return res + el
});
console.log(final);
// (accumulator, element) => acc me purane ki return value aati hai 
// app.js:56 1
// app.js:56 3
// app.js:56 6
// app.js:59 10

let arr = [1,2,3,4,5,6,7,8];

let max = -1;
for(let i = 0; i < arr.length ; i++){
    if(max < arr[i]){
        max = arr[i];
    }
}
console.log(max);


let max = arr.reduce((max, el) => {
    if(max < el){
        return el;
    }else{
        return max;
    }
});
console.log(max);

let arr2 = [5];
let ans = arr2.every((el) => el % 10 == 0);
console.log(ans);//reduce

function getMin(nums) {
    let min = nums.reduce((min, el) => {
        if (min < el) {
            return min;
        } else {
            return el;
        }
    });
    return min;
}
let nums = [1, 2, 3, 4, 5, 6];

//default parameter 
function sum(a, b = 2) {
    return a + b;
}
sum(1, 2);


//SPREAD FUNCTION
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

Math.min(...arr);
let chars = [..."alfee"];
console.log(chars);
// (5) ['a', 'l', 'f', 'e', 'e']

//spread with object literals
const data = {
    email:"alfeekhan20@gmail.com",
    pass:"alfeekhan",
};

const dataCopy= {...data , id :123};


let arr2 = [1,2,3,4,5];
let obj1 = { ...arr };


let obj2 = { ..."hello"};

//REST FUNCTION => bundle them and store in form of array
// function sum(...args){//arguments
//     for(let i= 0 ; i < args.length; i++){
//         console.log(args[i]);
//     }
// }

   function min(a,b,c){
    console.log(arguments);
    console.log(arguments.length);
    console.log(arguments.push(1));//error
   }

   //arguments does not use array methods so we use rest method

function sum(...args){//arguments
    return args.reduce((sum , el) => sum +el);
    
}

function min(...args){//arguments
    return args.reduce((min , el) => {
        if(min > el){
            return el;
        }else{
            return min;
        }
        });
    
}

//  destructuring
let name = ["aman" , "anshika", "alfee" , "akshat" ];
// let [winner , runnerup , secondrunnerup] = name;
let [winner , runnerup , ...others] = name;


//object destructuring
const student = {
    name:"alfee",
    age:20,
    class:12,
    subjext : [ "hin" , "eng","math"],
    username:"alfee",
    pass:"123alfe"
};

let {username:user , pass , city = "mumbai"} = student;