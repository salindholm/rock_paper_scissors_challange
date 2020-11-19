import React, { Component } from 'react'

class GameFunction extends Component {
  state = {
    user: "",
    computer: ""
  };

  decideResult = (user, computer) => {
    if (user === computer) {
      return "Its a tie!";
    } else if (
      (user === "Rock" && computer === "Scissor") ||
      (user === "Scissor" && computer === "Paper") ||
      (user === "Paper" && computer === "Rock")
    ) {
      return "You win!";
    } else {
      return "Computer win!";
    }
  };
  

  render() {
    return (
      <div>
        
      </div>
    )
  }
}
export default GameFunction