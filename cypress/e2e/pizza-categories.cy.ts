import Cypress from 'cypress';

describe('Select pizza by categories', () => {
  it('should in show all vegetarian pizzas', () => {
    cy.visit('/')
    const expectedAmount = 3;

    cy.get('[role="vegetarian"]').click()
    cy.get('[role="pizza-card"]').should('have.length', expectedAmount)
  })
  it('should in show all pizzas with meat', () => {
    cy.visit('/')
    const expectedAmount = 9;

    cy.get('[role="meat"]').click()
    cy.get('[role="pizza-card"]').should('have.length', expectedAmount)
  })
  it('should in show all spicy pizzas', () => {
    cy.visit('/')
    const expectedAmount = 9;

    cy.get('[role="spicy"]').click()
    cy.get('[role="pizza-card"]').should('have.length', expectedAmount)
  })
  it('should in show all pizzas', () => {
    cy.visit('/')
    const expectedAmount = 13;

    cy.get('[role="all"]').click()
    cy.get('[role="pizza-card"]').should('have.length', expectedAmount)
  })
})