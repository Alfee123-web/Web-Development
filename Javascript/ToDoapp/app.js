let todo = [];

let req = prompt("please enter your choice");

while (true) {
    if (req == "quit") {
        console.log("quitting app");
        break;
    }

    if (req == "list") {
        console.log("--------------");
        // for(task of todo){
        //     console.log(task);
        // }
        for (i = 0; i < todo.length; i++) {
            console.log(i, todo[i]);
        }
        console.log("------------");
    } else if (req == "add") {
        let task = prompt("please enter task you want to add");
        todo.push(task);
        console.log("task added");

    } else if (req == "delete") {
        let idx = prompt("please enter task index");
        todo.splice(idx, i);
        console.log("task deleted");
    } else {
        console.log("wrong request");
    }

    req = prompt("please enter your choice");
}