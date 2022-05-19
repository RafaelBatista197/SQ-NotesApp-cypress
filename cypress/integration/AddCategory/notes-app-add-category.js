import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";

//BACKGROUND

Given(/^the user goes to the web application$/, () => {
  //cy.visit('http://localhost:8080')
  cy.visit('http://34.140.43.143')
});

When(/^he checks the title of the application$/, () => {
  cy.get('h1')
});

Then(/^he can see he is on the Notes App$/, () => {
  cy.get('h1').contains("Notes App")
});


// 1ST SCENARIO
 
Given(/^that category is not on the list of categories$/, () => {
  cy.on('uncaught:exception', (err, runnable) => {
    cy.get('#category').select('Car').should('not.exist')
    return false
  })
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
  cy.get('.categories')
    .find('#category')
    .then(category => {
    const listingCount = Cypress.$(category).children().length;
    expect(category.children()).to.have.length(listingCount);
    });
});

// 5th SCENARIO


Given(/^the user writes text in the note$/, () => {
  cy.get('textarea').type('Party this weekend{enter}')
});

When(/^chooses a category from the list of categories$/, () => {
  cy.get('#category').select('Reminder')
});

When(/^clicks the button to add the new note$/, () => {
  cy.get('#add').click()
});

Then(/^the note is be added to the list of notes$/, () => {
  cy.get('#note')
});

Then(/^the category is visible$/, () => {
  cy.get('#s3 > .box > p').contains("Reminder")
});