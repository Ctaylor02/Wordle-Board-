//grade me part 3
document.addEventListener("DOMContentLoaded", function() {
    const board = document.getElementById("wordle-board");
    const keys = document.querySelectorAll(".key");

    const maxGuesses = 6;
    let currentGuess = "";
    let currentRow = 0;

    function updateBoard() {
        for (let i = 0; i < currentGuess.length; i++) {
            let box = document.getElementById(`box-${currentRow}-${i}`);
            box.textContent = currentGuess[i];
        }
    }

    function checkGuess() {
        if (currentGuess.length < wordToGuess.length) {
            alert("Not enough letters!");
            return;
        }

        for (let i = 0; i < wordToGuess.length; i++) {
            let box = document.getElementById(`box-${currentRow}-${i}`);
            if (currentGuess[i] === wordToGuess[i]) {
                box.style.backgroundColor = "green"; // Correct letter & position
            } else if (wordToGuess.includes(currentGuess[i])) {
                box.style.backgroundColor = "yellow"; // Correct letter, wrong position
            } else {
                box.style.backgroundColor = "gray"; // Incorrect letter
            }
        }

        if (currentGuess === wordToGuess) {
            setTimeout(() => alert("🎉 You Win!"), 100);
            return;
        }

        currentRow++;
        if (currentRow >= maxGuesses) {
            setTimeout(() => alert("😢 Game Over! The word was " + wordToGuess), 100);
        }
        currentGuess = "";
    }

    function handleKeyPress(event) {
        const letter = event.target.dataset.letter;

        if (!letter) return;

        if (letter === "Enter") {
            checkGuess();
            return;
        }

        if (letter === "Backspace") {
            currentGuess = currentGuess.slice(0, -1);
        } else if (currentGuess.length < wordToGuess.length) {
            currentGuess += letter;
        }

        updateBoard();
    }

    keys.forEach(key => key.addEventListener("click", handleKeyPress));
});
