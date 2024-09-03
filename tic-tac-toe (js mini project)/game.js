let boxes = document.querySelectorAll(".box");
let newgame = document.querySelector(".newgame");
let msgcontainer = document.querySelectorAll(".msgcontainer");
let msg =document.querySelector("#msg");

let turn0 = true;
const winPattern =[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];



boxes.forEach((box)=>{
    box.addEventListener("click" ,()=>{
        if (turn0 === true) {
            box.innerText ="O";
            turn0=false;
        } else {
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;

        checkWinner ();
    })
})

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};
const enableBoxes = () => {
    for (let box of boxes) {
        box.enabled = false;
        box.innerText="";
        msg.innerText="";
    }
};
const showWinner =(winner) =>{
    msg.innerText=`Congratulations! The winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
};
const checkWinner=() =>{
    for (let patterns of winPattern) {
        let pos1val =boxes[patterns[0]].innerText;
        let pos2val =boxes[patterns[1]].innerText;
        let pos3val =boxes[patterns[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "")
            if(pos1val===pos2val && pos2val===pos3val) {
                console.log("winner",pos1val);
                showWinner(pos1val);
            }
    }
};

const regame=()=>{
    turn0=true;
    enableBoxes();
};
newgame.addEventListener("click",regame);
