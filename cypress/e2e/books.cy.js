const user = require("../fixtures/user.json")

describe('books log in', () => {

  beforeEach(() => {
    cy.visit('/');
    });

  it('Should log in under the administrator', () => {
    cy.login(user.adminEmail, user.adminPassword);
    cy.contains(user.adminEmail).should('be.visible');
  });

  it('Should log in under the user', () => {
    cy.login(user.userEmail, user.userPassword);
    cy.contains(user.userEmail).should('be.visible');
  });

  it('Should add new book', () => {
    cy.login(user.userEmail, user.userPassword);
    cy.contains('Add new').should('have.class', 'btn');
  });

  it('Should show favorites', () => {
    cy.login(user.userEmail, user.userPassword);
    cy.get('h4').click();
    cy.get('.d-flex > .btn').contains('.d-flex > .btn', 'Please add some book to favorit on home page!');
  });

  it('should go back to the list of books', () => {
    cy.login(user.userEmail, user.userPassword);
    cy.get('h4').click();
    cy.get('.text-light > .ml-2').click();
    cy.contains('Add new').should('have.class', 'btn');
  })
  
  it('Wrong password', () => {
    cy.login(user.userEmail)
    cy.get('#pass').then(($el) => {
      cy.log($el)
      return $el[0].checkValidity();
    })
    .should('be.false')
  });

  it('Should not log', () => {
    cy.login(user.invalidEmail, user.invalidPassword);
    cy.get('.mb-3').contains('.mb-3', 'Неправильая почта или пароль');
  });
});