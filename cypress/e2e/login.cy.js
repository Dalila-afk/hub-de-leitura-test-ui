///<reference types="cypress" />
import user from "../fixtures/usuario.json"

describe('funcionalidade: login', () => {

    beforeEach(() => {
        cy.visit('login.html')
    });

    it('Deve realizar login com sucesso', () => {
        cy.get('#email').type('usuariopadrao@gmail.com')
        cy.get('#password').type('Usu123!')
        cy.get('#login-btn').click()
        //Resultado esperado
        cy.url().should('include', 'dashboard.html')

    });

    it('Deve realizar login com sucesso, usando comando customizado', () => {
        cy.login('usuariopadrao@gmail.com', 'Usu123!') //chamando o comando customizado     
    });

    it('Deve fazer login com sucesso com conta Admin, usando comando customizado', () => {
        cy.login('admin@biblioteca.com','admin123')
    })
     
    it('Deve fazer login com sucesso, usando importação da massa de dados', () => {
        cy.login(user.email, user.senha)

    });

});