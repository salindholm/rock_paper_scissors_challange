import React from "react";
import rock from "./assets/rock.png";
import paper from "./assets/paper.png";
import scissors from "./assets/scissors.png";

const Button = (props) => {
  return (
    <div value={props.name} onClick={props.onClick}>
      <img class="user-selection-img" src={props.img} alt="img" />
    </div>
  );
};

function App() {
  const [setGame] = useState({
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

  setGame({
  userSelection: user,
  computerSelection: computer,
 });



  render() {
    return (
      <>
    <h1>Rock Paper Scissors Game</h1>
    <div class='ui buttons'>
      <Button name="Rock" onClick={ playGame } img={rock} />
      <Button name="Paper" onClick={ playGame } img={paper} />
      <Button name="Scissors" onClick={ playGame } img={scissors}/>
    </div>
    <GameFunction></GameFunction>
    </>
  )}
}

export default App;
