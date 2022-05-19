/// <reference types="cypress" />
describe('Remove note tests', () => {
    beforeEach(() => {
        cy.visit('http://34.140.43.143')

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
/*
    it('Remove the last item from a list', () => {
        
        //add 3 items to a list
        cy.get('textarea')
            .type('Buy tomatos{enter}')

        cy.get('#add').click({multiple:true})

        cy.get('textarea')
            .type('Buy oranges{enter}')

        cy.get('#add').click({multiple:true})

        cy.get('textarea')
            .type('Buy pickles{enter}')

        cy.get('#add').click({multiple:true})

        //check it has 3 items
        cy.get('.notes').get('.box').should('have.length', 3)

        //remove the last item and check if it was removed
        cy.get(':nth-child(3) > button').click({multiple:true})
        cy.get('.notes').get('.box').should('have.length', 2)
        cy.get('.box').not('.contains', "Buy pickles")
    })
*/
    it('Remove the first item from a list', () => {
        
        //add 3 items to a list
        cy.get('textarea')
            .type('Buy tomatos{enter}')

        cy.get('#add').click()

        cy.get('textarea')
            .type('Buy oranges{enter}')

        cy.get('#add').click()

        cy.get('textarea')
            .type('Buy pickles{enter}')

        cy.get('#add').click()

        //check it has 3 items
        cy.get('.notes').get('.box').should('have.length', 3)

        //remove the first item and check if it was removed
        cy.get(':nth-child(1) > button').click()
        cy.get('.notes').get('.box').should('have.length', 2)
        cy.get('.box').not('.contains', "Buy tomatos")
    })
})



