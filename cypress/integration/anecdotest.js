/* eslint-disable no-undef */
describe('Anecdotest', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:3000')
    cy.contains('Programming anecdotes')
    cy.contains('Adding manpower to a late software project makes it later!')
  })
})