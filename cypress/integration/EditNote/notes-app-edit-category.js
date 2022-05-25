import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";

//BACKGROUND

Given(/^the user is on the web application to edit a existing note$/, () => {
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

Given(/^the user has created a note with text and category$/, () => {
    cy.get('textarea').type('Party this weekend{enter}')
    cy.get('#category').select('Reminder')
    cy.get('#add').click()

});
 
Given(/^that note already has text$/, () => {
    cy.get('#s4 > .box > p').contains("Party this weekend")
});
 
Given(/^that note already has category$/, () => {
    cy.get('#s3 > .box > p').contains("Reminder")
});
 
When(/^the user clicks on the edit button$/, () => {
    cy.get('#button-edit').click()
});
 
Then(/^the note text becomes editable$/, () => {
    cy.get('#s4 > .box > p').should('have.attr', 'contenteditable').and('equal', 'true')
});
 
Then(/^the note category becomes editable$/, () => {
    cy.get('#s3 > .box > p').should('have.attr', 'contenteditable').and('equal', 'true')
});

// 2ND SCENARIO

Given(/^the user has created a note with text and category$/, () => {
    cy.get('textarea').type('Party this weekend{enter}')
    cy.get('#category').select('Reminder')
    cy.get('#add').click()
});
 
Given(/^that note already has text$/, () => {
    cy.get('#s4 > .box > p').contains("Party this weekend")
});
 
Given(/^that note already has category$/, () => {
    cy.get('#s3 > .box > p').contains("Reminder")
});
 
Given(/^the user clicks on the edit button$/, () => {
    cy.get('#button-edit').click()
});
 
Given(/^the note text becomes editable$/, () => {
    cy.get('#s4 > .box > p').should('have.attr', 'contenteditable').and('equal', 'true')
});
 
Given(/^the note category becomes editable$/, () => {
    cy.get('#s3 > .box > p').should('have.attr', 'contenteditable').and('equal', 'true')
});
 
When(/^the user clicks on the cancel button$/, () => {
    cy.get('#cancel-edit-note').click()
});
 
Then(/^the note text is no longer editable$/, () => {
    cy.get('#s4 > .box > p').should('have.attr', 'contenteditable').and('equal', 'false')
});
 
Then(/^the note category is no longer editable$/, () => {
    cy.get('#s3 > .box > p').should('have.attr', 'contenteditable').and('equal', 'false')
});

/*
Given(/^the user has created a note with text and category$/, () => {
    cy.get('textarea').type('Party this weekend{enter}')
    cy.get('#category').select('Reminder')
    cy.get('#add').click()


});
 
Given(/^that note already has text$/, () => {
    cy.get('#s4 > .box > p').contains("Party this weekend")
});
 
Given(/^that note already has category$/, () => {
    cy.get('#s3 > .box > p').contains("Reminder")
});
 
When(/^the user clicks on the edit button$/, () => {
});
 
When(/^selects a new category from the list of categories$/, () => {
});
 
When(/^edits the text of the note$/, () => {
});
 
When(/^clicks the <action> button$/, () => {
});
 
Then(/^that note <outcome> be updated on the list$/, () => {
});*/