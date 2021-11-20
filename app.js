let gameResult = document.querySelector('.game-result');


function playGame(el) {
	let playerChoice = el.target.textContent.trim().toLowerCase();

	if (playerChoice) {
		let computerChoice  = getComputerChoice();
		console.log(playerChoice, computerChoice);
		showMatchResult(playerChoice, computerChoice);
	}
}

function showMatchResult(playerChoice, computerChoice) {

	if (playerChoice == "rock" && computerChoice == "scissor") {
		gameResult.innerHTML = "<p>Player win!</p>";
	}

	if (playerChoice == "rock" && computerChoice == "paper") {
		gameResult.innerHTML = "<p>You lose!</p>";
	}

	if (playerChoice == "paper" && computerChoice == "scissor") {
		gameResult.innerHTML = "<p>You lose!</p>";
	}

	if (playerChoice == "paper" && computerChoice == "rock") {
		gameResult.innerHTML = "<p>Player win!</p>";
	}

	if (playerChoice == "scissor" && computerChoice == "rock") {
		gameResult.innerHTML = "<p>You lose!</p>";
	}

	if (playerChoice == "scissor" && computerChoice == "paper") {
		gameResult.innerHTML = "<p>Player win!</p>";
	}

	if (playerChoice == computerChoice) {
		gameResult.innerHTML = "<p>Tie!</p>";	
	}
}

function getComputerChoice() {
	let choices = ['rock', 'paper', 'scissor'];

	return choices[Math.floor(Math.random() * 3)];
}

document.querySelector('.rock').addEventListener('click', playGame);
document.querySelector('.paper').addEventListener('click', playGame);;
document.querySelector('.scissor').addEventListener('click', playGame);;