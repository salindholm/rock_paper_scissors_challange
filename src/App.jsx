import React, { Component } from "react";
import GameFunction from './GameFunction';

class App extends Component {
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
