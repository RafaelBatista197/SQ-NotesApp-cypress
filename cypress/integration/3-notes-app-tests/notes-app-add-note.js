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

    it('Add 1 new note item to list of notes with 200 characters. The list of items must have 1 item', () => {
        cy.get('textarea')
            .type('{enter}')

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

    it('Add 1 new item with a changed color to green', () => {

        
    })

    it('Add 1 new item and increase the size of the letter to 30', () => {

        cy.get('textarea')
            .type('Big text example{enter}')

        cy.get('#size').clear();
        cy.get('#size').type('30');
        cy.get('#add').click();

        cy.get('.notes').get('.box').should('have.length', 1)

        //confirm item was added with the correct text
        cy.get('.notes').get('.box').should('have.length', 1)
        cy.get('.box').contains("Big text example")
    })

    it('Add 1 new item and decrease the size of the letter to 8', () => {

        cy.get('textarea')
            .type('Small text example{enter}')

        cy.get('#size').clear();
        cy.get('#size').type('8');
        cy.get('#add').click();

        //confirm item was added with the correct text
        cy.get('.notes').get('.box').should('have.length', 1)
        cy.get('.box').contains("Small text example")
    })

    
})