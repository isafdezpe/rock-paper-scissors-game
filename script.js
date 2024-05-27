const scissorsButton = document.getElementById('scissors');
scissorsButton.addEventListener('click', () => selectOption('scissors'));

const spockButton = document.getElementById('spock');
spockButton.addEventListener('click',  () => selectOption('spock'));

const paperButton = document.getElementById('paper');
paperButton.addEventListener('click',  () => selectOption('paper'));

const lizardButton = document.getElementById('lizard');
lizardButton.addEventListener('click',  () => selectOption('lizard'));

const rockButton = document.getElementById('rock');
rockButton.addEventListener('click',  () => selectOption('rock'));

const playButton = document.getElementById('play');
playButton.addEventListener('click', playAgain);

const options = ["rock", "paper", "scissors", "lizard", "spock"];

var score = 0;

function selectOption(option) {
    var userOption = option;    
    var machineOption = getRandomOption();

    changeContainer("none", "flex");
    
    displayOption(userOption, "#user-selection div");

    var win = true;
    document.getElementById('winner-msg').innerHTML = win ? "YOU WIN" : "YOU LOSE";

    setTimeout(() => {
        displayOption(machineOption, "#machine-selection div");
        displayResults();
    } , 1000);
}

function getRandomOption() {
    return options[Math.floor(Math.random() * options.length)];
}

function changeContainer(game, results) {
    document.querySelector(".game-container").setAttribute('style', "display:" + game);
    document.querySelector(".results-container").setAttribute('style', "display:" + results);
}

function displayOption(option, selector) {
    document.querySelector(selector).classList.add("primary-button", option);
    
    var img = document.createElement("img");
    img.src = "images/icon-" + option + ".svg";
    document.querySelector(selector).appendChild(img);
}

function displayResults(win) {
    setTimeout(() => {
        document.querySelector(".results-info").setAttribute('style', "display:" + "flex");
        if (win) {
            score++;
            document.querySelector(".score-container .number").innerHTML = score;
        }
    } , 1000);
    //add animation  
}

function playAgain() {
    changeContainer("flex", "none")
    
    document.querySelector(".results-info").setAttribute('style', "display:" + "none");

    document.querySelector("#user-selection div").classList.remove("primary-button");
    document.querySelector("#machine-selection div").classList.remove("primary-button");

    document.querySelector("#user-selection div").classList.remove(...options);
    document.querySelector("#machine-selection div").classList.remove(...options);
    
    document.querySelector("#user-selection div").removeChild(document.querySelector("#user-selection div img"));
    document.querySelector("#machine-selection div").removeChild(document.querySelector("#machine-selection div img"));
}