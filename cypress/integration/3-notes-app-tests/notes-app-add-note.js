/// <reference types="cypress" />
describe('Tests to be done on "Notes App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080/')
    })
   
    it('Visits "Notes App" and check is title', () => {
        cy.get('h1').contains("Notes App")
    })


    it('Visits "Notes App" and add two new note items to list of notes', () => {
        cy.get('textarea')
            .type('Buy tomatos{enter}')

        cy.get('#add').click()


        cy.get('textarea')
            .type('Buy apples{enter}')

         cy.get('#add').click()
    })
    
    it('Visits "Notes App" and add tow new note items to list of notes. The list of items must be two', () => {
        cy.get('textarea')
            .type('Buy tomatos{enter}')

        cy.get('#add').click()


        cy.get('textarea')
            .type('Buy bread{enter}')

        cy.get('#add').click()

        cy.get('.notes').get('.box').should('have.length', 2)
    })
})