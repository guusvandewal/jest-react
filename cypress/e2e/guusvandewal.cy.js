/* describe('My First Test', () => {
  it('Visits the home page', () => {
    cy.visit('https://guusvandewal.nl')
    cy.contains('Drupal').click()
  })
})
 */

describe('My First Test', () => {
  it('clicks the link "type"', () => {
    cy.viewport(1600, 800)
    cy.visit('https://example.cypress.io')

    cy.contains('dblclick').click()
    cy.log('Clicked succesfully?')
    cy.get('.action-email').type('stpupid@puppet.gl')

  })
})