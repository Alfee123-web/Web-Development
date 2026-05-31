let msg = " hello "; //immutable string
console.log(msg);
console.log(msg.trim());//creates a new string also it does not remove middle spaces
// .trim() = method


console.log(msg.toLowerCase());
console.log(msg.toUpperCase());


let str = "AlfeeKhan"
console.log(str.indexOf("Alf"));//gives first occurence 
console.log(str.indexOf("f"));
console.log(str.indexOf("an"));

let word = "hello";
console.log(word.slice(0, word.length));
// starting index , ending index
// word.length => last index
console.log(word.slice(-1));//5-1 = 4 => o


let str2 = "Ilovecoding";
str2.replace("love", "do");
console.log(str2);


// let student1 = "aman";
// let student2 = "akshat";
// let student3 = "alfee";

//ARRAYS
let students = ["aman", "alfee", "akshat"];
console.log(students[1]);
console.log(students[0]);
typeof (students);//objects


// splice => removes/replace /add elements in place
// splice => (start , delete count , item0 ---- item n)
