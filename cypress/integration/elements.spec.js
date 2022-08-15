///<reference types = "cypress" />

describe('Work with basic elements', () => {

    before(() => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => {
        cy.reload()
    })

    it('Text', () => {
        cy.get('body').should('contain', 'Cuidado')
        cy.get('span').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('have.text', 'Cuidado')
    })

    it('Links', () => {
        cy.get('a').click()
        cy.get('#resultado').should('have.text', 'Voltou!')
        cy.reload()
        cy.get('#resultado').should('have.not.text', 'Voltou!')
        cy.contains('Voltar').click()
        cy.get('#resultado').should('have.text', 'Voltou!')
    })

    it('TextFields', () => {
        cy.get('#formNome').type('Joao Silva')
        cy.get('#formNome').should('have.value', 'Joao Silva')
        cy.get('#elementosForm\\:sugestoes').type('Teste sugestão').should('have.value', 'Teste sugestão')
        cy.get('#tabelaUsuarios tr:nth-child(1) td:nth-child(6) input').type('teste')
        cy.get('formSobrenome')
            .type('Teste12345{backspace}{backspace}')
            .should('Teste123')
        cy.get('#elementosForm\\:sugestoes')
            .clear()
            .type('Erro{selectall}acerto', { delay: 100 })
            .should('have.value', 'acerto')
    })

    it('RadioButton', () => {
        cy.get('#formSexoFem').click().should('be.checked')
        cy.get('#formSexoMasc').should('not.be.checked')
        cy.get("[name=formSexo]").should('have.length', 2)
    })

    it('Checkbox', () => {
        cy.get('#formComidaPizza')
            .click()
            .should('be.checked')

        cy.get('[name=formComidaFavorita]')
            .click({ multiple: true })

        cy.get('#formComidaPizza').should('not.be.checked')
    })

    it('Combo', () => {
        cy.get('#formEscolaridade')
            .select('2o grau completo')
            .should('have.value','2graucomp')

        cy.get('#formEscolaridade')
            .select('1graucomp')
            .should('have.value','1graucomp')

        cy.get('#formEscolaridade option')
            .should('have.length', 8)

        cy.get('#formEscolaridade option')
            .then($arr => {
                const values = []
                $arr.each(function() {
                    values.push(this.innerHTML)
                })
                expect(values).to.include.members(["Superior", "Mestrado"])
            })
    })

    it('Combo', () => {
        cy.get('#formEscolaridade')
            .select('2o grau completo')
            .should('have.value','2graucomp') //precisa passar o value

        cy.get('#formEscolaridade')
            .select('1graucomp')
            .should('have.value','1graucomp') //precisa passar o value
    })

    it.only('Combo multiplo', () => {
        cy.get('#formEsportes').select(['natacao', 'Corrida','nada']) //precisa enviar o value
        
        //cy.get('#formEsportes').should('have.value', ['natacao','Corrida', 'nada'])
        cy.get('#formEsportes').then($el =>{
            expect($el.val()).to.be.deep.equal(['natacao','Corrida','nada'])
            expect($el.val()).to.have.length(3)
        })
        cy.get('#formEsportes').invoke('val').should('eql',['natacao','Corrida','nada'])
    })

})