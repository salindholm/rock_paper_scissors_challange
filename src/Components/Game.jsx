import React, { useState } from "react";
import rock from "./assets/Images/rock.png";
import paper from "./assets/Images/paper.png";
import scissors from "./assets/Images/scissors.png";
import { Container } from "semantic-ui-react";
import Button from "./Button";

function GamePlay() {
	const [game, setGame] = useState({
		userSelection: "",
		computerSelection: "",
		message: "",
	});

	const playGame = (event) => {
		const user = event.target.parentNode.getAttribute("value");
		const computer = ["Rock", "Paper", "Scissors"][
			Math.floor(Math.random() * 3)
		];

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
		<Container id="container">
			<h1>Rock Paper Scissors Game</h1>
			<div class="ui buttons">
				<Button data-cy="rock" name="Rock" onClick={playGame} img={rock} />
				<Button data-cy="paper" name="Paper" onClick={playGame} img={paper} />
				<Button
					data-cy="scissors"
					name="Scissors"
					onClick={playGame}
					img={scissors}
				/>
			</div>
			<div data-cy="user-selection">
				<h1>
					{game.userSelection === ""
						? "Pick one!"
						: `Your choice: ${game.userSelection}`}
				</h1>
			</div>
			<img
				className="pc-selection-img"
				src={
					game.computerSelection === "Rock"
						? rock
						: game.computerSelection === "Paper"
						? paper
						: scissors
				}
				alt="img"
			/>
			<div data-cy="computer-selection">
				<h1>Computer chose: {game.computerSelection}</h1>
			</div>
			<div data-cy="result-message">
				<h1 className="message">{game.message}</h1>
			</div>
		</Container>
	);
}

export default GamePlay;
