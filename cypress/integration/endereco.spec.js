/// <reference types="cypress" />
import EnderecoPage from '../support/page-objects/endereco.page'

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    before(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados =>{
            cy.login(dados.usuario, dados.senha)
        })
    });
    
    it.only('Deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('Kelvin', 'Spiller', 'Nubank', 'Brasil', 'Av Nereu Ramos', '1231', 'São Paulo', 'São Paulo', '89801002', '1152321','email@email.com')
        cy.get('.woocommerce-message').should('contain', "Endereço alterado com sucesso.")
    });
});
