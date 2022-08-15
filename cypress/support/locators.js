const locators = {
    LOGIN: {
        USER: cy.get('[data-test=email]'),
        PASSWORD: cy.get('[data-test=passwd]'),
        BTN_LOGIN: cy.get('.jumbotron button')
    },
    MENU: {
        SETTINGS: cy.get('[data-test=menu-settings]'),
        CONTAS: cy.get("a[href='/contas']"),
        RESET:  cy.get("a[href='/reset']"),
        MOVIMENTACAO: cy.get('[data-test=menu-movimentacao]')
    },
    CONTAS: {
        NOME: cy.get('[data-test=nome]'),
        BTN_SALVAR: cy.get('[alt=Salvar]')
    },
    TELA_MOVIMENTACAO: {
        DESCRICAO: cy.get('#descricao'),
        VALOR: cy.get('[data-test=valor]'),
        ENVOLVIDO: cy.get('[data-test=envolvido]'),
        CONTA_PARA_MOVIMENTACAO: cy.get('[data-test=conta]'),
        STATUS: cy.get('[data-test=status]'),
        BTN_SALVAR: cy.get('button[alt=\'Salvar\']')
    },

    MESSAGE: cy.get('#toast-container'),
    CLOSE_MESSAGE: cy.get('.toast-close-button')
}

export default locators;
