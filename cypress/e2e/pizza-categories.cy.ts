import Cypress from 'cypress';

describe('Select pizza by categories', () => {
  it('should in show all vegetarian pizzas', () => {
    cy.visit('/')
    const expectedAmount = 3;

    cy.get('[role="vegetarian"]').click()
    cy.get('[role="pizza-card"]').should('have.length', expectedAmount)
  })
})