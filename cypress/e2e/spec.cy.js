describe('Serasa Consumidor', () => {

    beforeEach('Acessar o site do Serasa',() => {
        cy.visit('https://www.serasa.com.br/credito/');
    })
    it ('Deve acessar a página Serasa Crédito', () => {
        cy.get('#credito', { timeout: 10000 }).should('be.visible');
    })

    it ('Deve avançar na Simulação grátis ao informar CPF válido',  () => {
        cy.contains('Simule grátis').click();
        cy.log('Inserindo CPF válido');
        cy.get('#f-cpf').clear().type('02968133039');
        cy.get('#f-cpf').should('have.value', '029.681.330-39');
        cy.log('Clicando em Continuar');
        cy.contains('button', 'Continuar').click();
    })

    it ('Deve retornar erro ao informar CPF inválido na Simulação grátis',  () => {
        cy.contains('Simule grátis').click();
        cy.log('Inserindo CPF inválido');
        cy.get('#f-cpf').clear().type('555.555.555-55');
        cy.get('#f-cpf').should('have.value', '555.555.555-55');
        cy.log('Verificando mensagem de erro');
        cy.contains('p', 'CPF inválido.').should('be.visible');
    })
})
