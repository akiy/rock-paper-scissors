let gameResult = document.querySelector('.game-result');


function playGame() {
	let playerChoice = getPlayerChoice();

	if (playerChoice) {
		let computerChoice  = getComputerChoice();
		console.log(playerChoice, computerChoice);
		showMatchResult(playerChoice, computerChoice);
	} else {
		gameResult.innerHTML = "Choose your play!";
	}
}

function showMatchResult(playerChoice, computerChoice) {

	if (playerChoice == "rock" && computerChoice == "scissor") {
		gameResult.innerHTML = "Player win!";
	}

	if (playerChoice == "rock" && computerChoice == "paper") {
		gameResult.innerHTML = "Computer win!";
	}

	if (playerChoice == "paper" && computerChoice == "scissor") {
		gameResult.innerHTML = "Computer win!";
	}

	if (playerChoice == "paper" && computerChoice == "rock") {
		gameResult.innerHTML = "Player win!";
	}

	if (playerChoice == "scissor" && computerChoice == "rock") {
		gameResult.innerHTML = "Computer win!";
	}

	if (playerChoice == "scissor" && computerChoice == "paper") {
		gameResult.innerHTML = "Player win!";
	}

	if (playerChoice == computerChoice) {
		gameResult.innerHTML = "Tie!";	
	}

}

function getPlayerChoice(el) {
	console.log(el.target.textContent.trim().toLowerCase());
}

function getComputerChoice() {
	let choices = ['rock', 'paper', 'scissor'];

	return choices[Math.floor(Math.random() * 3)];
}

document.querySelector('.rock').addEventListener('click', getPlayerChoice);
document.querySelector('.paper').addEventListener('click', getPlayerChoice);;
document.querySelector('.scissor').addEventListener('click', getPlayerChoice);;