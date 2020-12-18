describe("User can play game against the computer who chooses Rock", () => {
	beforeEach(() => {
		cy.visit("/", {
			onBeforeLoad(window) {
				cy.stub(window.Math, "floor").returns(0);
			},
		});
	});

	it("by choosing Rock and its a tie", () => {
		cy.get('[data-cy="Rock"]').click();
		cy.get('[data-cy="user-selection"]').should("contain", "Your choice: Rock");
		cy.get('[data-cy="computer-selection"]').should(
			"contain",
			"Computer chose: Rock"
		);
		cy.get('[data-cy="result-message"]').should("contain", "It's a tie!");
	});

	it("by choosing Paper and wins", () => {
		cy.get('[data-cy="Paper"]').click();
		cy.get('[data-cy="user-selection"]').should(
			"contain",
			"Your choice: Paper"
		);
		cy.get('[data-cy="computer-selection"]').should(
			"contain",
			"Computer chose: Rock"
		);
		cy.get('[data-cy="result-message"]').should("contain", "You won!");
	});

	it("by choosing Scissors and loses", () => {
		cy.get('[data-cy="Scissors"]').click();
		cy.get('[data-cy="user-selection"]').should(
			"contain",
			"Your choice: Scissors"
		);
		cy.get('[data-cy="computer-selection"]').should(
			"contain",
			"Computer chose: Rock"
		);
		cy.get('[data-cy="result-message"]').should("contain", "You lost!");
	});
});

describe("User can play game against the computer who chooses Paper", () => {
	beforeEach(() => {
		cy.visit("/", {
			onBeforeLoad(window) {
				cy.stub(window.Math, "floor").returns(1);
			},
		});
	});

	it("by choosing Rock and loses", () => {
		cy.get('[data-cy="Rock"]').click();
		cy.get('[data-cy="user-selection"]').should("contain", "Your choice: Rock");
		cy.get('[data-cy="computer-selection"]').should(
			"contain",
			"Computer chose: Paper"
		);
		cy.get('[data-cy="result-message"]').should("contain", "You lost!");
	});

	it("by choosing Paper and it's a tie", () => {
		cy.get('[data-cy="Paper"]').click();
		cy.get('[data-cy="user-selection"]').should(
			"contain",
			"Your choice: Paper"
		);
		cy.get('[data-cy="computer-selection"]').should(
			"contain",
			"Computer chose: Paper"
		);
		cy.get('[data-cy="result-message"]').should("contain", "It's a tie!");
	});

	it("by choosing Scissors and wins", () => {
		cy.get('[data-cy="Scissors"]').click();
		cy.get('[data-cy="user-selection"]').should(
			"contain",
			"Your choice: Scissors"
		);
		cy.get('[data-cy="computer-selection"]').should(
			"contain",
			"Computer chose: Paper"
		);
		cy.get('[data-cy="result-message"]').should("contain", "You won!");
	});
});

describe("User can play game against the computer who chooses Scissors", () => {
	beforeEach(() => {
		cy.visit("/", {
			onBeforeLoad(window) {
				cy.stub(window.Math, "floor").returns(2);
			},
		});
	});

	it("by choosing Rock and wins", () => {
		cy.get('[data-cy="Rock"]').click();
		cy.get('[data-cy="user-selection"]').should("contain", "Your choice: Rock");
		cy.get('[data-cy="computer-selection"]').should(
			"contain",
			"Computer chose: Scissors"
		);
		cy.get('[data-cy="result-message"]').should("contain", "You won!");
	});

	it("by choosing Paper and loses", () => {
		cy.get('[data-cy="Paper"]').click();
		cy.get('[data-cy="user-selection"]').should(
			"contain",
			"Your choice: Paper"
		);
		cy.get('[data-cy="computer-selection"]').should(
			"contain",
			"Computer chose: Scissors"
		);
		cy.get('[data-cy="result-message"]').should("contain", "You lost!");
	});

	it("by choosing Scissors and it's a tie", () => {
		cy.get('[data-cy="Scissors"]').click();
		cy.get('[data-cy="user-selection"]').should(
			"contain",
			"Your choice: Scissors"
		);
		cy.get('[data-cy="computer-selection"]').should(
			"contain",
			"Computer chose: Scissors"
		);
		cy.get('[data-cy="result-message"]').should("contain", "It's a tie!");
	});
});