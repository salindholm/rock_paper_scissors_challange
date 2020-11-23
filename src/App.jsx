import React, { useState} from "react";
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
  const [game, setGame] = useState({
  name: "Player",
  computer: "",
  userSelection: "",
  computerSelection: "",
  message: ""
});

const playGame = (e) => {
  const user = e.target.parentNode.getAttribute("value")
  const computer = ["Rock", "Paper", "Scissors"][Math.floor(Math.random() * 3)];

  if (user === computer) {
    setGame({
    ...game,
    message: (game.message = "It's a tie!"),
    });
  } else if (
    (user === "Rock" && computer === "Scissors") ||
    (user === "Paper" && computer === "Rock") ||
    (user === "Scissors" && computer === "Paper")
  ) {
    setGame({
    ...game,
    message: (game.message = "You won!"),
    });
  } else {
    setGame({
    ...game,
    message: (game.message = "You lost!"),
  });
}
    
setGame({
  ...game,
  userSelection: user,
  computerSelection: computer,
 });
};

  return (
    <>
      <h1>Rock Paper Scissors Game</h1>
      <div class='ui buttons'>
        <Button name="Rock" onClick={ playGame } img={rock} />
        <Button name="Paper" onClick={ playGame } img={paper} />
        <Button name="Scissors" onClick={ playGame } img={scissors}/>
      </div>
      <h1>{game.userSelection === "" ? "Pick one!" : `Your choice: ${game.userSelection}`}</h1>
        <h1>Computer chose: {game.computerSelection}</h1>
      <h1 className="message">{game.message}</h1>
    </>
  )
}

export default App;
