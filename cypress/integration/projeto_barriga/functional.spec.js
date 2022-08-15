///<reference types = "cypress" />

import loc from '../../support/locators'
import '../../support/commandsContas'

describe('Functional level', () => {

    before(() => {
        cy.login('joao@silva.com','joao123456')
        cy.resetApp()
    })

    it.only('Should create an account', () => {
        cy.acessarMenuConta()
        cy.inserirConta('Nova Conta')
        cy.get(loc.MESSAGE).should('have.text', '×Conta inserida com sucesso!')
        cy.get(loc.CLOSE_MESSAGE).click()
    })


    it('Should update an account', () => {
        cy.get(loc.MENU.SETTINGS).click()
        cy.get(loc.MENU.CONTAS).click()
        cy.xpath("//tr[td='Conta para alterar']/td/a[1]").click()
        cy.get(loc.CONTAS.NOME).clear().type('Novo valor teste')
        cy.get(loc.CONTAS.BTN_SALVAR).click()
        cy.get(loc.MESSAGE).should('have.text', '×Conta atualizada com sucesso!')
        cy.get(loc.CLOSE_MESSAGE).click()
    })

    it('3. Inserir uma conta repetida e validar mensagem de feedback', () => {
        cy.get(loc.MENU.SETTINGS).click()
        cy.get(loc.MENU.CONTAS).click()
        cy.get(loc.CONTAS.NOME).type('Nova conta 2')
        cy.get(loc.CONTAS.BTN_SALVAR).click()
        cy.get(loc.MESSAGE).should('have.text', '×Erro: Error: Request failed with status code 400')
        cy.get(loc.CLOSE_MESSAGE).click()
    })

    it('4. Inserir uma movimentação', () => {
        cy.get(loc.MENU.MOVIMENTACAO).click()
        cy.get(loc.TELA_MOVIMENTACAO.DESCRICAO).type('Nova movimentacao')
        cy.get(loc.TELA_MOVIMENTACAO.VALOR).type('300')
        cy.get(loc.TELA_MOVIMENTACAO.ENVOLVIDO).type('Joao')
        cy.get(loc.TELA_MOVIMENTACAO.CONTA_PARA_MOVIMENTACAO).select('Conta para movimentacoes')
        cy.get(loc.TELA_MOVIMENTACAO.STATUS).click()
        cy.get(loc.TELA_MOVIMENTACAO.BTN_SALVAR).click()
        cy.get('.toast-message').then(msg=> {
            expect(msg).have.text('Movimentação inserida com sucesso!')
        })
        cy.get('loc.CLOSE_MESSAGE').click()
        
    })

    it('5. Calculo de saudo', () => {
        const saldo_atual = cy.xpath("//tr[td='Conta para saldo']/td[2]").invoke('value').then(valor => {
            
        })

        cy.get('[data-test=menu-movimentacao]').click()
        cy.get('#descricao').type('Nova movimentacao')
        cy.get('[data-test=valor]').type('400')
        const novo_saldo = saldo_atual + 400
        cy.get('[data-test=envolvido]').type('Pedro')
        cy.get('[data-test=conta]').select('Conta para movimentacoes')
        cy.get('[data-test=status]').click()
        cy.get('button[alt=\'Salvar\']').click()
        cy.get('.toast-message').then(msg=> {
            expect(msg).have.text('Movimentação inserida com sucesso!')
        })
        cy.get('.toast-close-button').click()
        cy.get('data-test=menu-home').click()
        cy.xpath("//tr[td='Conta para saldo']/td[2]").should('have.value', novo_saldo)

        
    })

    after(() => {
        cy.get('[data-test=menu-settings]').click()
        cy.get("a[href='/reset']").click()
    })

})


//6. Remover movimentação