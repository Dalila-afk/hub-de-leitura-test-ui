///<reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('funcionalidade: Cadastro no Hub de Leitura', () => {

    beforeEach(() => {
        cy.visit('register.html')
    })

    it('Deve realizar cadastro com sucesso', () => {
        let email = `teste${Date.now()}@gmail.com`
        cy.get('#name').type('Lila')
        cy.get('#email').type(email)
        cy.get('#phone').type('61999717369')
        cy.get('#password').type('Teste@123')
        cy.get('#confirm-password').type('Teste@123')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        //Resultado esperado
        cy.url().should('include', 'dashboard.html')
    })

    it('Deve realizar cadastro com sucesso, usando Faker', () => {
        let nome = faker.person.firstName()
        let email = faker.internet.email()
        cy.get('#name').type(nome)
        cy.get('#email').type(email)
        cy.get('#phone').type('61999717369')
        cy.get('#password').type('Teste@123')
        cy.get('#confirm-password').type('Teste@123')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        //Resultado esperado
        cy.url().should('include', 'dashboard.html')
        cy.get('#user-name').should('contain', nome)
    })
})