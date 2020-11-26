import React from "react";
import { Container, List } from "semantic-ui-react";

const Rules = () => {
  return (
    <>
    <Container id="rules">
      <h1 id="rules-header">Game Rules</h1>
      <p>Although the game has a lot of complexity to it, the rules to play it are pretty simple.
The game is played where players deliver hand signals that will represent the elements of the game; rock, paper and scissors. The outcome of the game is determined by 3 simple rules:</p>
    </Container>
    <List bulleted id="list">
    <List.Item>Rock wins against scissors</List.Item>
    <List.Item>Scissors win against paper</List.Item>
    <List.Item>Paper wins against rock</List.Item>
    </List>
    </>
  );
};

export default Rules;