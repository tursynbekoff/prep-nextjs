describe('Select pizza', () => {
  it('should see count displaying amount of pizzas selected', () => {
    cy.visit('/')
    const expectedAmount = 5;

    cy.get('[role="pizza-card"]').first().find('[role="button"]').click().click().click().click().click()
    
    cy.get('[data-testid="count"]').should('have.text', expectedAmount)
  })
  it('should see button with price and amount when start adding pizza', () => {
    cy.visit('/')
    const expectedAmount = 'from 13.3 $';
    cy.get('[role="pizza-card"]').first().find('[role="dough-thin"]').click()
    cy.get('[role="pizza-card"]').first().find('[role="size-36"]').click()
    
    cy.get('[role="pizza-card"]').first().find('[role="pizza-price"]').should('have.text', expectedAmount)
  })
  it('should see correct price and amount according to selected pizzas', () => {
    cy.visit('/')
    const expectedAmount = '86.1 $';

    cy.get('[role="pizza-card"]').first().find('[role="button"]').click().click()
    cy.get('[role="pizza-card"]').first().find('[role="dough-thin"]').click()
    cy.get('[role="pizza-card"]').first().find('[role="size-36"]').click()
    cy.get('[role="pizza-card"]').first().find('[role="button"]').click()
    cy.get('[role="pizza-card"]').eq(2).find('[role="button"]').click().click()
    cy.get('[role="pizza-card"]').eq(1).find('[role="dough-thin"]').click()
    cy.get('[role="pizza-card"]').eq(1).find('[role="size-30"]').click()
    cy.get('[role="pizza-card"]').eq(1).find('[role="button"]').click().click()
    
    cy.get('.px-4 > :nth-child(1)').should('have.text', expectedAmount)
  })
})