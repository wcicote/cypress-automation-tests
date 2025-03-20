///<reference types='cypress'/>

describe('Login', () => {
  it('login', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  })
})