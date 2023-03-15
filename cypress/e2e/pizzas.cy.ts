import Cypress from 'cypress';

describe('Pizzas', () => {
  it('should render skeleton after list of pizzas successfuly', () => {
    // * arrange
    cy.visit('/')

    // * act
    // * assert
    cy.get('[role="loading-skeleton"]').should('be.visible')
    cy.get('[role="pizzas-wrapper"]').should('be.visible')
    cy.get('[role="loading-skeleton"]').should('not.exist')
  })
})