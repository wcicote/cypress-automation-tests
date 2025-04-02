///<reference types='cypress'/>

describe('Login', () => {

  const usuarioValido = 'Admin';
  const senhaValida = 'admin123';
  const senhaIncorreta = 'admin';
  const usuarioIncorreto = 'Adm';

  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  });
  
  it('login com Sucesso', () => {
    cy.login(usuarioValido, senhaValida)
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Dashboard');
  })

  it('Username Vazio', () => {
    cy.login("", senhaValida)
    cy.validarMensagensDeErro('.oxd-input-field-error-message', 1, 'Required');
  })

  it('Password Vazio', () => {
    cy.login(usuarioValido, "")
    cy.validarMensagensDeErro('.oxd-input-field-error-message', 1, 'Required');
})

it('Username e Password Vazio', () => {
  cy.login('', '')
  cy.validarMensagensDeErro('.oxd-input-field-error-message', 2, 'Required');
});

it('Username Incorreto', () => {
  cy.login(usuarioIncorreto, senhaValida)
    cy.validarMensagensDeErro('.oxd-alert-content > .oxd-text', 1, 'Invalid credentials');
});

it('Password Incorreto', () => {
  cy.login(usuarioValido, senhaIncorreta)
    cy.validarMensagensDeErro('.oxd-alert-content > .oxd-text', 1, 'Invalid credentials');
});

it('Username e Password Incorreto', () => {
  cy.login(usuarioIncorreto, senhaIncorreta)
    cy.validarMensagensDeErro('.oxd-alert-content > .oxd-text', 1, 'Invalid credentials');
});
})