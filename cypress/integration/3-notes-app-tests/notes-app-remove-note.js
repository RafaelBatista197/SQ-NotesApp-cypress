/// <reference types="cypress" />
describe('Tests to be done on "Notes App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080/')

        cy.get('h1').contains("Notes App")
    })

    it('Add one new item and delete it', () => {
        cy.get('textarea')
            .type('Buy tomatos{enter}')

        cy.get('#add').click()

        cy.get('.notes').get('.box').should('have.length', 1)

        //select the "X" button on the firt item to remove it
        cy.get(':nth-child(1) > button').click()

        cy.get('.notes').get('.box').should('have.length', 0)

    })

    it('Remove an item from an empty list', () => {
        cy.get('.notes').get('.box').should('have.length', 0)

        //since there are no items no remove, the button to remove should not exist
        cy.get(':nth-child(1) > button').should('not.exist')
    })
})



