import React from "react";

function App() {
  userSelection: "",
  computerSelection: "",
});

if (user === computer) {
  setGame({
  message: (game.message = "It's a tie!"),
  });
} else if (
  (user === "Rock" && computer === "Scissors") ||
  (user === "Paper" && computer === "Rock") ||
  (user === "Scissors" && computer === "Paper")
) {
  setGame({
  message: (game.message = "You won!"),
  });
} else {
  setGame({
  message: (game.message = "You lost!"),
  });
}


  render() {
    return (
      <>
    <h1>Rock Paper Scissors Game</h1>
    <div class='ui buttons'>
    <button id='rock' class='ui button'>Rock</button>
    <button id='paper' class='ui button'>Paper</button>
    <button id='scissors' class='ui button'>Scissors</button>
    </div>
    <GameFunction></GameFunction>
    </>
  )}
}

export default App;
