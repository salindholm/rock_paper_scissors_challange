describe('Game interface', () => {
  it('successfully renders,', () => {
    cy.visit('/');
    cy.contains('Rock Paper Scissors Game');
    cy.get('button#rock').click();
  })
}) 