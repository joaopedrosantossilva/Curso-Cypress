///<reference types = "cypress" />

const { should } = require("chai")

describe('Work with Popup', () => {
    it('Deve preencher o popup corretamente', () => {
        cy.visit('https://www.wcaquino.me/cypress/frame.html')
        cy.get('#otherButton').click()
        cy.on('window:alert', msg => {
            expect(msg).to.be.equal('Click OK!')
        })
    })
    it('Verificar se o popup foi invocado', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        cy.window().then(win => {
            cy.stub(win, 'open').as('winOPen')
        })
        cy.get('#buttonPopUp').click()
        cy.get('@winOPen').should('be.called')
    })
    describe('With links...', () => {
        before(() => {
            cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        })
        it('Check popup url', () => {
            cy.contains('Popup2')
                .should('have.prop', 'href')
                .and('equal', 'https://www.wcaquino.me/cypress/frame.html')
        })

        it('ChShould access popup dinamically', () => {
            cy.contains('Popup2').then($a => {
                const href = $a.prop('href')
                cy.get('#tfield').type('funciona')
                cy.visit(href)
                cy.get('#tfield').type('funciona')
            })
        })

    })
})    