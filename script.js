const choices = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll(".choices button");
const result = document.getElementById("result");

buttons.forEach(button => {
    button.addEventListener("click", () => playGame(button.id));
});

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    result.textContent = `Player chose ${playerChoice}. Computer chose ${computerChoice}.`;

    if (playerChoice === computerChoice) {
        result.textContent += " It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        result.textContent += " Player wins!";
    } else {
        result.textContent += " Computer wins!";
    }

    highlightChoice(playerChoice, computerChoice);
}

function highlightChoice(playerChoice, computerChoice) {
    buttons.forEach(button => {
        button.classList.remove("highlight");
        if (button.id === playerChoice || button.id === computerChoice) {
            button.classList.add("highlight");
            setTimeout(() => {
                button.classList.remove("highlight");
            }, 500);
        }
    });
}
