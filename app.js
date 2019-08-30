// jshint esversion:6

let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


const getCompChoice = () => {
    const choices = [ 'r', 'p', 's' ];
    const randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
};

const convertWord = (letter) => {
    return letter === 'r' ? 'Rock'
         : letter === 'p' ? 'Paper'
         : 'Scissors'; 
};

const win = (user, comp) => {
    const user_div = document.getElementById(user);
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${convertWord(user)} Beats ${convertWord(comp)}. You Win!`;
    user_div.classList.add("green-glow");
    setTimeout(() => { user_div.classList.remove("green-glow"); }, 500);
};

const lose = (user, comp) => {
    const user_div = document.getElementById(user);
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${convertWord(user)} Loses To ${convertWord(comp)}. You Lost...`;
    user_div.classList.add("red-glow");
    setTimeout(() => { user_div.classList.remove("red-glow"); }, 500);    
};

const draw = (user, comp) => {
    const user_div = document.getElementById(user);
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${convertWord(user)} Ties ${convertWord(comp)}. Draw...`;
    user_div.classList.add("gray-glow");
    setTimeout(() => { user_div.classList.remove("gray-glow"); }, 500);   
};

const game = (userChoice) => {
    const compChoice = getCompChoice();
    switch (userChoice + compChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, compChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, compChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, compChoice);
            break;                          
    }
};

const main = () => {
    rock_div.addEventListener('click', () => {
        game("r");
    });
    
    paper_div.addEventListener('click', () => {
        game("p");
    });
    
    scissors_div.addEventListener('click', () => {
        game("s");
    });
};

main();
