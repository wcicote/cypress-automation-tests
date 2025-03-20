///<reference types='cypress'/>

describe('Login', () => {
  it('login com Sucesso', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Dashboard')
  })

  it('Username Vazio', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    cy.get('.oxd-input-group > .oxd-text').should('have.text', 'Required')
  })

  it('Password Vazio', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get('.oxd-button').click()
    cy.get('.oxd-input-group > .oxd-text').should('have.text', 'Required')
})

it('Username Incorreto', () => {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('aabbcc')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Invalid credentials')
    cy.get('.oxd-alert-content > .oxd-icon').should('be.visible')
});

it('Password Incorreto', () => {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin')
    cy.get('.oxd-button').click()
    cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Invalid credentials')
    cy.get('.oxd-alert-content > .oxd-icon').should('be.visible')
});
})