let userscore = 0;
let compscore = 0;

let userscorepara = document.querySelector("#user-score");
let compscorepara = document.querySelector("#computer-score");
let msg = document.querySelector(".msg")

let choices= document.querySelectorAll(".choice");
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        
        gameplay(userchoice);

    })
})
const drawMatch=()=>{
   
    msg.innerText = "Match is draw";
    msg.style.backgroundColor="black"
}
const showWinner = (userwin,userchoice,compchoice)=>{
    if(userwin ==true){
        userscore++;
        userscorepara.innerText= userscore;
        msg.innerText = `hurray!YOU WIN ${userchoice} beat ${compchoice}`;
        msg.style.backgroundColor="green"
    }
    else{
       compscore++;
       compscorepara.innerText= compscore;
       msg.innerText = `oops!YOU LOOSE ${compchoice} beat ${userchoice}`;
       msg.style.backgroundColor="red"
    }
}
const computerchoice = ()=>{
     const option = ["Rock","Paper","Scissor"];
    const randinx = Math.floor(Math.random() * 3);
    return option[randinx];
}
const gameplay = (userchoice)=>{
    

    const compchoice = computerchoice();
     

     if (userchoice == compchoice){
        drawMatch();
     }
     else{
        let userwin =true;
        if(userchoice=="Rock"){
            userwin=compchoice== "Paper"? false :true;
        }
        else if(userchoice=="Paper"){
           userwin= compchoice=="Scissor"?false:true;
        }
        else {
            userwin= compchoice == "Rock"? false:true;
        }
        showWinner(userwin,userchoice,compchoice);

     }
     


};






