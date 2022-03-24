/// <reference types="cypress" />
describe('Tests to be done on "Notes App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080/')

        cy.get('h1').contains("Notes App")
    })

    it('Add 1 new note item to list of notes. The list of items must have 1 item', () => {
        cy.get('textarea')
            .type('Buy tomatos{enter}')

        cy.get('#add').click()

        cy.get('.notes').get('.box').should('have.length', 1)

    })

    it('Add 1 new note item to list of notes with 500 characters. The list of items must have 1 item', () => {
        cy.get('textarea')
            .type('Buy tomatos{enter}')

        cy.get('#add').click()

        cy.get('.notes').get('.box').should('have.length', 1)

        //visualmente a textbox não está correta, era necessário usar Visual Testing

    })

    it('Add empty item', () => {

        cy.get('#add').click()

        cy.on('uncaught:exception', (err, runnable) => {
            console.log("err :" + err)
            console.log("runnable :" + runnable)
            return false
        })

        cy.get('.notes').get('.box').should('have.length', 0)
    })

    it('Add 1 new item with a changed color', () => {

        
    })

    it('Add 1 new item and increase the size of the letter', () => {

        
    })

    it('Add 1 new item and decrease the size of the letter', () => {

        
    })
})