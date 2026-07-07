describe('Funcionalidade: Contato', () => {

    beforeEach(() => {
        cy.visit('index.html')
    })

        it('Deve preencher formulário de contato com sucesso', () => {

            cy.get('#name').type('Lucas')
            cy.get('#email').type('lucas@example.com')
            cy.get('#subject').select('Parcerias')
            cy.get('#message').type('mensagem de teste')
            cy.get('#btn-submit').click()
            //Resultado esperado: mensagem de sucesso
            cy.contains('Contato enviado com sucesso!').should('exist')
        })

        it("Deve validar mensagem de erro sem preencher nome", () => {

            cy.get('#name').clear()
            cy.get('#email').type('lucas@example.com')
            cy.get('#subject').select('Parcerias')
            cy.get('#message').type('mensagem de teste')
            cy.get('#btn-submit').click()
            //Resultado esperado: mensagem de erro
            cy.get('#alert-container').should('contain', 'Por favor, preencha o campo Nome.')
        });

        it("Deve validar mensagem de erro sem preencher email", () => {

            cy.get('#name').type('Lucas')
            cy.get('#email').clear()
            cy.get('#subject').select('Parcerias')
            cy.get('#message').type('mensagem de teste')
            cy.get('#btn-submit').click()
            //Resultado esperado: mensagem de erro
            cy.get('#alert-container').should('contain', 'Por favor, preencha o campo E-mail.')
        });

        it("Deve validar mensagem de erro sem selecionar o assunto", () => {

            cy.get('#name').type('Lucas')
            cy.get('#email').type('lucas@example.com')
            //cy.get('#subject').select('Parcerias') // Seleciona a opção vazia
            cy.get('#message').type('mensagem de teste')
            cy.get('#btn-submit').click()
            //Resultado esperado: mensagem de erro
            cy.get('#alert-container').should('contain', 'Por favor, selecione o Assunto.')
        })

        it("Deve validar mensagem de erro sem preencher a mensagem", () => {
            cy.visit('http://localhost:3000/index.html')
            cy.get('#name').type('Lucas')
            cy.get('#email').type('lucas@example.com')
            cy.get('#subject').select('Parcerias')
            cy.get('#message').clear()
            cy.get('#btn-submit').click()
            //Resultado esperado: mensagem de erro
            cy.get('#alert-container').should('contain', 'Por favor, escreva sua Mensagem.')
        })
    })
