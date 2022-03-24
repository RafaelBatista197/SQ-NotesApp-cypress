/// <reference types="cypress" />
describe('Tests to be done on "Notes App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080/')
    })

    it('Visits "Notes App" and add two new note items to list of notes and then delete one. The list of items now must be one', () => {
        cy.get('textarea')
            .type('Buy tomatos{enter}')

        cy.get('#add').click()


        cy.get('textarea')
            .type('Buy bread{enter}')

        cy.get('#add').click()

        cy.get('.notes').get('.box').should('have.length', 2)

        cy.get(':nth-child(1) > button').click()

        cy.get('.notes').get('.box').should('have.length', 1)

    })
})



