describe("User can play game against the computer", () => {
	beforeEach(() => {
		cy.visit("/");
	});

	it("user choose Rock", () => {
		cy.get("button#rock").should("contain", "Rock");
	});

	it("user choose Paper", () => {
		cy.get("button#paper").should("contain", "Paper");
	});

	it("user choose Scissors", () => {
		cy.get("button#scissors").should("contain", "Scissors");
	});

	it("user can see computers choice", () => {
		cy.get("computer-play").should("contain", "Computer choise");
	});

	it("user can see the results", () => {
		cy.get("#results").should("contain", "You win!");
	});
});
