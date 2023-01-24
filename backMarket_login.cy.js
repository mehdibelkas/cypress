//Quest 2 : Backmarket Login test

describe('Login test', () => {
  it('subscribe and pass', () => {
    cy.visit('https://preprod.backmarket.fr/register')
    cy.get('[data-qa=accept-cta]').click()
    cy.get('#signin-email').type("abqa@testmail.com")
    cy.get('#signin-password').type("Mo1dep@ssecompliqué")
    cy.get('[data-qa=signin-submit-button]').click()
    cy.wait(800)
    cy.url().then(actualurl => {
      expect(actualurl).to.eql('https://preprod.backmarket.fr/fr-fr/dashboard/orders')
    })
  })
  
})