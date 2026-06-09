let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");


document.addEventListener("keydown", function (event) {
    console.log(`Key pressed: ${event.key}`);
    // console.log("Game Started");
    if (started == false) {
        console.log("game is started");
        started = true;

        levelUp();
    }
});
// Function that actually starts the game



function gameFlash(btn) {
    if (!btn) return;
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");

    }, 250);//white
}


function userFlash(btn) {
    if (!btn) return;
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");

    }, 250);//green
}


function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;

    //random button choose
    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    // let randBtn = document.querySelector(`.${randColor}`);
    let randBtn = document.querySelector(`.` + randColor);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}



function checkAns(idx) {
    // console.log("curr level: ", level);

    if (userSeq[idx] == gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
        // console.log("same value");

    } else {
        h2.innerHTML = `Game Over! your score was <b>${level}</b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }

}



function btnPress() {
    if (!started) return;
    // console.log("btn was pressed");
    // console.log(this);
    let btn = this;
    userFlash(btn);//flash

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);

}


let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
    btn.addEventListener("click", btnPress);
}


function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
