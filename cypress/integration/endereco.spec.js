/// <reference types="cypress" />

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    before(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados =>{
            cy.login(dados.usuario, dados.senha)
        })
    });
    
    it('Deve fazer cadastro de faturamento com sucesso', () => {
       
        //pre-cadastro
        
    });
});
