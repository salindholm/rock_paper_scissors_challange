import React, { useState } from "react";
import rock from "./assets/Images/rock.png";
import paper from "./assets/Images/paper.png";
import scissors from "./assets/Images/scissors.png";
import { Container } from "semantic-ui-react";

const Button = (props) => {
	return (
		<div value={props.name} onClick={props.onClick}>
			<img class="user-selection-img" src={props.img} alt="img" />
		</div>
	);
};

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
				<Button name="Rock" onClick={playGame} img={rock} />
				<Button name="Paper" onClick={playGame} img={paper} />
				<Button name="Scissors" onClick={playGame} img={scissors} />
			</div>
			<h1>
				{game.userSelection === ""
					? "Pick one!"
					: `Your choice: ${game.userSelection}`}
			</h1>
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
			<h1>Computer chose: {game.computerSelection}</h1>
			<h1 className="message">{game.message}</h1>
		</Container>
	);
}

export default GamePlay;
