//Quest 2 : Backmarket subscription test

describe('Subscription test fail', () => {
  it('subscribe and pass', () => {
    cy.visit('https://preprod.backmarket.fr/register')
    cy.contains('OK').click()
    cy.get('#firstName').type("Testeur")
    cy.get('#lastName').type("Mehdi")
    cy.get('#signup-email').type("aba@testmail.com")
    cy.get('#signup-password').type("Mo1dep@ssecompliqué")
    cy.contains('Enchantés !').click()
    cy.wait(800)
    cy.url().then(actualurl => {
      expect(actualurl).to.eql('https://preprod.backmarket.fr/fr-fr/register')
    })
  })
  
})