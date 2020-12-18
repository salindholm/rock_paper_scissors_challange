describe("User can play game against the computer", () => {
	beforeEach(() => {
		cy.visit("/", {
			onBeforeLoad(window) {
				cy.stub(window.Math, "floor").returns(0);
			},
		});
	});

	it("by choosing Rock", () => {
		cy.get('[data-cy="Rock"]').click();
		cy.get('[data-cy="user-selection"]').should("contain", "Your choice: Rock");
		cy.get('[data-cy="computer-selection"]').should(
			"contain",
			"Computer chose: Rock"
		);
		cy.get('[data-cy="result-message"]').should("contain", "It's a tie!");
	});

	it("by choosing Paper", () => {
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

	it("by choosing Scissors", () => {
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
