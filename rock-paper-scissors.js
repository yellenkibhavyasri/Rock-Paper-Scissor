let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");

const gencompchoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}
const drawGame=()=>{
    console.log("Game was draw.");
     msg.innerText="Game was draw";
}
const showwinner=(userWin,userchoice,compchoice)=>{
    if(userWin){
        userscore++;
        userscorepara.innerText=userscore;
        console.log("You won!!!");
        msg.innerText=`You won!!! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }else{
        compscore++;
        compscorepara.innerText=compscore;
        console.log("You lost");
        msg.innerText=`You lost.${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}
const playGame=(userchoice)=>{console.log("user choice =",userchoice);
    const compchoice=gencompchoice();
    

    if(userchoice===compchoice){
        drawGame();
    }else{
        let userWin=true;
        if(userchoice==="rock"){
            userWin=compchoice==="paper"?false : true;
        }else if(userchoice=="paper"){
            userWin= compchoice==="scissors"?false:true;
        }else{
            userWin=compchoice==="rock"?false:true;
        }
        showwinner(userWin,userchoice,compchoice);
    }
}
choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        console.log("Choice was clicked",userchoice);
        playGame(userchoice);
    });
});