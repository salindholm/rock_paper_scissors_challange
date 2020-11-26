import React from "react";
import { Container, List, Icon } from "semantic-ui-react";

const Rules = () => {
  return (
    <>
    <Container id="rules">
      <h1 id="rules-header">Game Rules</h1>
      <p>Although the game has a lot of complexity to it, the rules to play it are pretty simple.
The game is played where players deliver hand signals that will represent the elements of the game; rock, paper and scissors. The outcome of the game is determined by 3 simple rules:</p>
    </Container>
    <List id="list">
    <List.Item><Icon name='hand rock outline' size='small'/> Rock wins against scissors</List.Item>
    <List.Item><Icon name='hand scissors outline' size='small'/> Scissors win against paper</List.Item>
    <List.Item><Icon name='hand paper outline' size='small'/> Paper wins against rock</List.Item>
    </List>
    </>
  );
};

export default Rules;