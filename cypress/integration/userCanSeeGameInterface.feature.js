describe('Game interface', () => {
  it('successfully renders,', () => {
    cy.visit('/');
    cy.contains('Rock Paper Scissors Game');
    cy.contains('Pick one!');
    cy.contains('Computer chose:');
  })
}) 