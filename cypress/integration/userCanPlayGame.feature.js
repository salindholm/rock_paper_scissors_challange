describe("User can play game against the computer", () => {
	beforeEach(() => {
		cy.visit("/");
	});

	it("by choosing Rock", () => {
		cy.get('[data-cy="Rock"]').click();
		cy.get('[data-cy="user-selection"]').should("contain", "Your choice: Rock");
		cy.get('[data-cy="computer-selection"]').should("exist");
		cy.get('[data-cy="result-message"]').should("exist");
	});

	it("by choosing Paper", () => {
		cy.get('[data-cy="Paper"]').click();
		cy.get('[data-cy="user-selection"]').should(
			"contain",
			"Your choice: Paper"
		);
		cy.get('[data-cy="computer-selection"]').should("exist");
		cy.get('[data-cy="result-message"]').should("exist");
	});

	it("by choosing Scissors", () => {
		cy.get('[data-cy="Scissors"]').click();
		cy.get('[data-cy="user-selection"]').should(
			"contain",
			"Your choice: Scissors"
		);
		cy.get('[data-cy="computer-selection"]').should("exist");
		cy.get('[data-cy="result-message"]').should("exist");
	});
});
