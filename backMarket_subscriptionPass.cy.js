//Quest 2 : Backmarket subscription test

describe('Subscription test Pass', () => {
  it('subscribe and pass', () => {
    cy.visit('https://preprod.backmarket.fr/register')
    cy.get('[data-qa=accept-cta]').click()
    cy.get('#firstName').type("Testeur")
    cy.get('#lastName').type("Mehdi")
    let random = ((Math.random()*100) + "@testmail.com")
    cy.get('#signup-email').type(random)
    cy.get('#signup-password').type("Mo1dep@ssecompliqué")
    cy.get('[data-qa=signup-submit-button]').click()
    cy.wait(800)
    cy.url().then(actualurl => {
      expect(actualurl).to.eql('https://preprod.backmarket.fr/fr-fr/dashboard/orders')
    })
  })
  
})