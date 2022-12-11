describe('empty spec', () => {
  it('Should open the book page', () => {
    const url = 'http://localhost:3000/';
    cy.visit(url);
    cy.contains('Books list').should('be.visible');
    cy.contains('Log in').should('be.visible');
  });
})