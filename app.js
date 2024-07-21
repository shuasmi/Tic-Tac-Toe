let btn=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#resetBtn");
let msgContainer=document.querySelector(".msg");
let msg=document.querySelector("#winHeader");


let turnO=true;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const draw=()=>{

    msg.innerText=`Game is Draw`;
    msgContainer.classList.remove("hide");
    disableBoxes();

}

const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
let count=1;

btn.forEach((ele)=>{
    ele.addEventListener("click",()=>{
        

        if(turnO)
        {
            ele.innerText="O";
            ele.classList.add("box2");
            turnO=false;
        }
        else
        {
            ele.innerText="X";
            ele.classList.remove("box2");
            turnO=true;
        }
        ele.disabled=true;
        if(count===9)
        {
            draw();
        }
        count++;
        

        checkWinner();
    });
});

const enableBoxes=()=>{
    for(let ele of btn)
    {
        ele.disabled=false;
        ele.innerText="";
    }
}

const disableBoxes=()=>{
    for(let ele of btn)
    {
        ele.disabled=true;
    }
}

const showWinner=(winner)=>{
    msg.innerText=`Congratulations!! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner=()=>{
    for(let pattern of winPatterns)
    {
        let pos1Val=btn[pattern[0]].innerText;
        let pos2Val=btn[pattern[1]].innerText;
        let pos3Val=btn[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val!="" && pos3Val!="")
        {
            if(pos1Val===pos2Val && pos2Val===pos3Val)
            {
                
                showWinner(pos1Val);
            }
        }
    }
};

resetBtn.addEventListener("click",resetGame);