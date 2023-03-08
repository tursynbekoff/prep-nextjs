describe('Select pizza and checkout page', () => {
  it('should in checkout page have total amount of different pizzas', () => {
    cy.visit('/')
    const expectedAmount = 5;

    cy.get('[role="pizza-card"]').eq(0).find('[role="button"]').click()
    cy.get('[role="pizza-card"]').eq(1).find('[role="button"]').click()
    cy.get('[role="pizza-card"]').eq(2).find('[role="button"]').click()
    cy.get('[role="pizza-card"]').eq(3).find('[role="button"]').click()
    cy.get('[role="pizza-card"]').eq(4).find('[role="button"]').click()
    cy.get('[role="total-price"]').click()

    cy.get('[role="checkout-card"]').should('have.length', expectedAmount)
  })

  it('should in checkout page have count of same type of pizza', () => {
    cy.visit('/')
    const expectedAmount = 2;

    cy.get('[role="pizza-card"]').eq(1).find('[role="size-36"]').click()
    cy.get('[role="pizza-card"]').eq(1).find('[role="button"]').click().click()
    cy.get('[role="total-price"]').click()

    cy.get('[role="same-pizza-type-count"]').should('have.text', expectedAmount)
  })
})