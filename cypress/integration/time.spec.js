///<reference types = "cypress" />

describe('Dinamic tests', () => {

    before(() => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => {
        cy.reload()
    })

    it('Going back to the past', () => {
        //cy.get('#buttonNow').click()
        //cy.get('#resultado > span').should('contain', '07/11/2019')
        const dt = new Date(2012, 3, 10, 15, 23, 50)
        cy.clock(dt.getTime())
        cy.get('#buttonNow').click()
        cy.get('##resultado > span').should('contain', '31/12/1969')

    })
    it('Goes to the future', () => {
        const dt = new Date(2012, 3, 10, 15, 23, 50)
        cy.clock(dt.getTime())
        cy.get('#buttonTimePassed').click()
        cy.get('##resultado > span').should('contain', '15731')
        cy.get('##resultado > span').invoke('text').should('gt', 154165465165651)
        cy.clock()
        cy.get('#buttonTimePassed').click()
        cy.get('##resultado > span').invoke('text').should('lte', 0)
    })
})
  