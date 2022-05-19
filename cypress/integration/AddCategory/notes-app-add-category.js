import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";

Given(/^the user is on the web aplication to add a new category$/, () => {
  cy.visit('http://34.140.43.143')

  cy.get('h1').contains("Notes App")
});
 
Given(/^that category is not on the list of categories$/, () => {
  /*cy.on('uncaught:exception', (err, runnable) => {
    cy.get('#category').select('Car').should('not.exist')
    return false
  })*/
});

When(/^the user goes to add a new category$/, () => {
  cy.get('#categoryText')
});

When(/^types the new category$/, () => {
  cy.get('#categoryText').type('Car')
});
 
When(/^clicks on the confirm button$/, () => {
  cy.get('#buttonAddCategory').click()
});
 
Then(/^the new category is added to the list of categories$/, () => {
  cy.get('#category').should('have.value', 'Car')
});