///<reference types='cypress'/>

Cypress.Commands.add("login", (usuario, senha) => {

    if (usuario === '') {
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear()  
    } else {
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type(usuario);  
    }

    if (senha === '') {
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear()
    } else {
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type(senha);
    }
        
    cy.get('.oxd-button').click();
    }
);

Cypress.Commands.add('validarMensagensDeErro', (seletor, contagemDeErro, TextoEsperado) => {
    // Verificar se o elemento de erro existe
    cy.get(seletor)
      .should('be.visible') // Verifica se o erro está visível
      .should('have.length', contagemDeErro)  // Verifica a quantidade de mensagens de erro
      .each(($el) => {
        cy.wrap($el).should('have.text', TextoEsperado); // Verifica o texto da mensagem de erro
      });
  });