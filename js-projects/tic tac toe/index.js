let buttons = document.querySelectorAll(".btn");
let reset = document.querySelector("#reset");
let newGame = document.querySelector(".new"); 
let msgContainer = document.querySelector(".msg-container");
let winnerMsg = document.querySelector(".winner");


let turnO = true;

const  winningPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
 const resetGame = () =>{
    turnO = true;
    enableButton();
 }


buttons.forEach((btn) =>{
    btn.addEventListener ("click",() =>{
       if (turnO === true){
        btn.innerHTML = "O";
        btn.style.backgroundColor = "#84a59d";
        btn.style.color = "#ffffff"
        turnO = false;
       }else {
        btn.innerHTML = "X";
        btn.style.backgroundColor = "#f28482";
        btn.style.color = "#ffffff"
        turnO = true;
       }
       btn.disabled = true;

       checkWinner();
       
    })
})
const disableButton = ()=> {
    for (let button of buttons){
        button.disabled = true;
    }
}

const enableButton = () => {
    for (let button of buttons) {
        button.disabled = false;
        button.innerText = "";
        button.style.backgroundColor = "#fdf0d5";
        button.style.color = "#3a5a40";           
    }
    msgContainer.classList.add("hide");
};

const showWinner = (winner) => {
    winnerMsg.innerText = `🎉 Congratulations! Player ${winner} wins`;
    msgContainer.classList.remove("hide");
    disableButton();
}
const checkWinner = ()=> {
    for (let patterns of winningPatterns){
    let pos1 = buttons[patterns[0]].innerText;
    let pos2 = buttons[patterns[1]].innerText;
    let pos3 = buttons[patterns[2]].innerText;
      

    if (pos1 != "" && pos2 != "" && pos3 != ""){
        if (pos1 === pos2 && pos2 === pos3){
            showWinner(pos1);
        }
    }
};
             
}

newGame.addEventListener ("click",resetGame);
reset.addEventListener ("click",resetGame);

