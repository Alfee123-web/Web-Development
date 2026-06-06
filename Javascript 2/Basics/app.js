let arr = [1,2,3,4,5,6,2,3];
let num =2;
for(let i = 0; i< arr.length; i++){
    if(arr[i] == num){
       arr.splice(i,1);//remove 2 at that index
    }

}
console.log(arr);

let student = {
    name: "alfee",
    marks: 99,
    age: 20

};

const student2 = {
    name: "alfee",
    marks: 99,
    age: 20

};
//student address / reference cant be changed

const item = {
    price: 100,
    discount: 50,
    colors: ["red", "pink"] //possible
};

const post = {
    username: "Alfee khan",
    content: "hello dear",
    likes: 10000,
    reposts: 50,
    tags: ["alfee", "coding"]
};



//GET VALUES
// it automatically converts object keys into strings

const obj = {
    1:"a", //1 considered as string 
    2 : "b",
    true : true,
    null : 0
};

const post2 = {
    username: "Alfee khan",
    content: "hello dear",
    likes: 10000,
    reposts: 50,
    tags: ["alfee", "coding"]
};


//OBJECT OF OBJECTS

// const classInfo = {
//     ajay:
//     {
//         grade: "A",
//         city : "Lko"
//     },
//     akshat :
//     {
//         grade: "B",
//         city : "Delhi"
//     },
//     alfee :
//     {
//         grade: "C",
//         city : "Banglore"
//     }
// };


//ARRAY OF OBJECTS
const classInfo = [
    {
        name :"ajay",
        grade: "A",
        city : "Lko"
    },
 
    {
        name  :"akshat",
        grade: "B",
        city : "Delhi"
    },

    {
        name :" alfee",
        grade: "C",
        city : "Banglore"
    }
];


// random number between 1 to 10 
// Math.floor(Math.random() * 10) + 1;


// random number between 1 to 100
// Math.floor(Math.random() * 100) + 1;
 
//21 to 25 range only
// Math.floor(Math.random() * 5) + 20;
