const user = require("../fixtures/user.json")
const bookData = require("../fixtures/book.json")


describe('working with adding books', ( )=> {
    before(() => {
        cy.visit('/');
        cy.login(user.userEmail, user.userPassword);
    });

    it('Should add book', () => {
      cy.addBook(bookData.title1, bookData.description1, bookData.author1, '1');
      cy.get('form > .ml-2').click();
      cy.get('.card-title').contains('.card-title', 'название1');
    });

    it('Should canceling adding a book', () => {
        cy.addBook(bookData.title2, bookData.description2, bookData.author2, '2');
        cy.get('.btn-dark').click();
        cy.contains('.card-title', 'название2').should('not.exist');        
    });
});