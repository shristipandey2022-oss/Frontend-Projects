
function createBubbles() {
    let bubbles = "";
    for (let i = 1; i <= 210; i++) {
        let random = Math.floor(Math.random()*10);
        bubbles += `<div class="bubble">${random}</div>`;
    }
    document.querySelector("#pbtm").innerHTML= bubbles;
}


let timer = 60;
function runTimer() {
    var setInt = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector("#time").textContent = timer;
        }else {
            clearInterval(setInt);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over! Your Score is ${score}.</h1>`
        }
    }, 1000);
}


let hitNum = 0;
function getNewHit() {
    hitNum = Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent = hitNum;
}


let score = 0;
function increaseScore() {
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}


document.querySelector("#pbtm").addEventListener("click", (bubble) => {
    let clickedNum  = Number(bubble.target.textContent);
    if (clickedNum === hitNum){
        increaseScore();
        createBubbles();
        getNewHit();
    }
}) 



createBubbles();
runTimer();
getNewHit();
