///<reference types="cypress" />

describe('Funcionalidade: Catálogo de livros', () => {
    beforeEach(() => {
        cy.visit('catalog.html')
    })
    
    it.skip('Deve clicar no botão Adicionar á Cesta', () => {
        cy.get(':nth-child(1) > .card > .card-body > .mt-auto > .d-grid > .btn-primary').click()
          //Resultado esperado
        cy.get('#cart-count').should('contain', '1')
        cy.get('#global-alert-container').should('contain', '"1984" foi adicionado à cesta!')       
        
    })

    it('Deve clicar em todos os botões Adicionar à cesta', () => {
        cy.get('.btn-primary').click({ multiple: true })
        //Resultado esperado
        cy.get('#cart-count').should('contain', '12')

    })

    it('Deve clicar no primriro botão Adicionar à cesta', () => {
          cy.get('.btn-primary').first().click()   
        //Resultado esperado
          cy.get('#global-alert-container').should('contain', '"1984" foi adicionado à cesta!')    
    })

     it('Deve clicar no ultimo botão Adicionar à cesta', () => {
          cy.get('.btn-primary').last().click()
          //Resultado esperado
          cy.get('#global-alert-container').should('contain', '"O Alquimista" foi adicionado à cesta!')   
        
    })

     it('Deve clicar no terceiro botão Adicionar à cesta', () => {
          cy.get('.btn-primary').eq(2).click() 
          //Resultado esperado
          cy.get('#global-alert-container').should('contain', '"A Divina Comédia" foi adicionado à cesta!')  
        
    })

     it('Deve clicar no quinto botão Adicionar à cesta', () => {
          cy.get('.btn-primary').eq(4).click() 
          //Resultado esperado
          cy.get('#global-alert-container').should('contain', '"A Metamorfose" foi adicionado à cesta!')  
        
    })

    it('Deve clicar no nome do livro e direcionar para tela do livro', () => {
        cy.contains('Dom Casmurro').click()
        //Resultado esperado
        cy.url().should('include', 'book-details.html?id=1')  
        cy.get('#add-to-cart-btn').click()
        //Resultado esperado
        cy.get('#alert-container').should('contain', 'Livro adicionado à cesta com sucesso!')

    })
    
    })
