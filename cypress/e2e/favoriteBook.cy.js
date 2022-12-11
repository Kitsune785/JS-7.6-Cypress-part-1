const user = require("../fixtures/user.json")
const bookData = require("../fixtures/book.json")

describe('working with favorite books', ( )=> {
    before(() => {
        cy.visit('/');
        cy.login(user.userEmail, user.userPassword);
    });

    it("Should add book to favorite through function 'add new'", () => {
        cy.addBook(bookData.title1, bookData.description1, bookData.author1, '1')
        cy.get("input#favorite").click();
        cy.get('form > .ml-2').click();
        cy.visit("/favorites");
        cy.get(".card-title").should("contain.text", 'название1');
      });

    it("Should delete book from favorite", () => {
        cy.visit("/favorites");
        cy.contains(bookData.title1)
          .should("be.visible")
          .within(() => cy.get(".card-footer > .btn").click({ force: true }));
        cy.contains(bookData.title1).should("not.exist");
      });

      it("Should remove all favorite books", () => {
        cy.addBook(bookData.title1, bookData.description1, bookData.author1, '1')
        cy.get("input#favorite").click();
        cy.removeAllFavorite();
        cy.contains("Please add some book to favorit on home page!").should(
          "exist"
        );
    });
});