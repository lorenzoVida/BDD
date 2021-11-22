describe('My First Test', () => {
  it('Does not do much!', () => {
    cy.visit('https://rahulshettyacademy.com/angularpractice/')
    cy.get(':nth-child(2) > .nav-link').click()
  })
})