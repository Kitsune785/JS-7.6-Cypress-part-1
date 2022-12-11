import 'cypress-file-upload';

Cypress.Commands.add('login', (email, password) => {
    cy.contains('Log in').click();
    if (email) {
        cy.get('#mail').type(email);
    }
    if (password) {
        cy.get('#pass').type(password);
    }
    cy.contains('Submit').click();
});

Cypress.Commands.add('addBook', (title, description, author, option) => {
    cy.get('.p-0 > .btn').click();
    cy.get('#title').type(title);
    cy.get('#description').type(description);
    if ((option = '1')) {
        cy.get('#fileCover').attachFile('src.jpeg');
        cy.get('#fileBook').attachFile('test.txt');
    } else {
        cy.get('#fileCover').attachFile('src2.jpeg');
        cy.get('#fileBook').attachFile('test2.txt');
    }
    cy.get('#authors').type(author);
});

Cypress.Commands.add("removeAllFavorite", () => {
    cy.visit("/favorites");
    cy.get(".mt-3").each(() => {
      cy.get(`.card-deck a:nth-child(${1}) .btn`).click();
    });
  });
