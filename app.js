let userScore = 0;
let cumpScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score")
const cumpScorepara = document.querySelector("#comp-score")

const showWinner = (userWin, userChoice, cumpChoice) =>{
    if(userWin){
        userScore++;
        userScorepara.innerText = userScore;
        console.log(`You Win😍 ${userChoice} beats ${cumpChoice}`);
        msg.innerText = `You Win😍 ${userChoice} beats ${cumpChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        cumpScore++;
        cumpScorepara.innerText = cumpScore;
        console.log(`You lose🙄 ${cumpChoice} beats ${userChoice}`);
        msg.innerText = `You lose🙄 ${cumpChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "black";
    }
}

const  drawGame = () => {
    console.log(`Game is draw`);
    msg.innerText = `Game is draw! play again.`;
    msg.style.backgroundColor = "orange";
}

const genCompChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randInd = Math.floor(Math.random() * 3);
    return options[randInd];
}

const playGame = (userChoice) => {
console.log("user choice =", userChoice);
// generate computer choice
const cumpChoice = genCompChoice();
console.log("cump choice = ", cumpChoice);

if(userChoice === cumpChoice){
    drawGame();
}else{
    let userWin = true;
    if(userChoice === "rock"){
        // paper, scissors
        userWin = cumpChoice === "paper" ? false : true;
    } else if(userChoice === "paper"){
        // rock, scissors
        userWin = cumpChoice === "scissors" ? false : true;
    } else{
        // rock paper
        userWin = cumpChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, cumpChoice);
}
}   

choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})