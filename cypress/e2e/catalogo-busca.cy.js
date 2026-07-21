///<reference types="cypress" />
import livro from "../fixtures/livros.json"

describe('funcionalidade: Busca no catálogo', () => {

    beforeEach(() => {
        cy.visit('catalog.html')
    });

    it('Deve fazer a busca do livro 1984 com sucesso ', () => {
      cy.get('#search-input').type('1984')
      cy.get('#book-list > .col-md-3').should('contain', '1984')
    });

    it('Deve fazer a busca do livro do arquivo de massa de dados ', () => {
      cy.get('#search-input').type(livro[1].livro)
      cy.get('#book-list > .col-md-3').should('contain', livro[1].livro)
    });
});