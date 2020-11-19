import React, { Component } from 'react'

const game = ["rock", "paper", "scissor"]

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

  playGame = () => {
    let computerChoise = game[Math.floor(Math.random() * game.length)];
    this.setState({ computer: computerChoise });
    let userChoise = this.state.user;
    let result = this.decideResult(userChoise, computerChoise);
    if (result !== "Tie") {
      this.setScore(result);
    } else {
      this.setState({ result: result });
    }
  };
  

  render() {
    const { user, computer } = this.state;
    return (
      <div>
        
      </div>
    )
  }
}
export default GameFunction