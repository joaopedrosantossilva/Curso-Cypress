///<reference types = "cypress" />

describe('Cypress basics', () => {
    it('Should visit a page and assert title', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        cy.title().should('be.equal','Campo de Treinamento')
        cy.title().then(title => {
            console.log(title)
        
        let syncTitle   
        cy.title().then(title => {
            cy.get('#formNome').type(title)
            syncTitle = title
        })    
        })
    })

    it('Should find and interact with an element ', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        cy.get('#buttonSimple').click()
        cy.get('#buttonSimple').should('have.value', 'Obrigado!')

    })
})