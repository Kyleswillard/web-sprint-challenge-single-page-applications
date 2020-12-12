describe('general form functionality', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })
    it('Ensure that goes to correct Page', () => {
        cy.url().should('include', 'localhost')
        cy.url().should('include', 3000)
    })
    it('checkout dropdown', () => {
        cy.get('select').select('large')
    })
    it('check submit', () => {
        cy.get('#submitBtn').click()
    })
})
