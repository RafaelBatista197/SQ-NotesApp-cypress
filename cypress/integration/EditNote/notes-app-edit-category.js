import { Given , Then , When} from "cypress-cucumber-preprocessor/steps";

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


// 3RD SCENARIO

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
 
When(/^removes the category first$/, () => {
    cy.get('#delete_category_button').click()
});
 
When(/^clicks on the delete button to remove the note$/, () => {
    cy.get('#delete-note').click()
});
 
Then(/^note will be removed from the list of notes$/, () => {
    cy.get('#note').should('have.length', 0)
});
 
// 4TH SCENARIO

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
 
When(/^deletes the category text$/, () => {
    cy.get('#s3 > .box > p').clear()
});
 
When(/^deletes the note text$/, () => {
    cy.get('#s4 > .box > p').clear()
});
 
When(/^clicks the save button$/, () => {
    cy.get('#button-save-edit').click()
});
 
Then(/^the system shows a warning message saying "([^"]*)"$/, (arg0,) => {
   /* cy.on('uncaught:exception', (err, runnable) => {
        console.log("err :" + err)
        console.log("runnable :" + runnable)
        return false
    })*/

    cy.on('window:alert', (text) => {
        expect(text).to.equal('Cant leave note text empty.')
    });
});
 
Then(/^that note is not updated on the list$/, () => {
    cy.get('#s4 > .box > p').contains("Party this weekend")
    cy.get('#s3 > .box > p').contains("Reminder")
    cy.get('.notes').should('have.length', 1)
});


// 5TH SCENARIO - DONE

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
 
When(/^deletes the text of the note$/, () => {
    cy.get('#s4 > .box > p').clear()
});
 
When(/^clicks the save button$/, () => {
    cy.get('#button-save-edit').click()
});
 
Then(/^the system shows a warning message saying "([^"]*)"$/, (arg0,) => {
    cy.on('window:alert', (text) => {
        expect(text).to.equal('Cant leave note text empty.')
    });
});
 
Then(/^that note is not updated on the list$/, () => {
    cy.get('#s4 > .box > p').contains("Party this weekend")
    cy.get('#s3 > .box > p').contains("Reminder")
    cy.get('.notes').should('have.length', 1)
});


// // 6TH SCENARIO - DONE

Given(/^the user has created a note with text and no category$/, () => {
    cy.get('textarea').type('Party this weekend{enter}')
    cy.get('#add').click()
});
 
Given(/^that note already has text$/, () => {
    cy.get('#s4 > .box > p').contains("Party this weekend")
});
 
Given(/^that note has no category$/, () => {
    cy.get('#s3 > .box > p').should('have.value', '');
});
 
When(/^the user clicks on the edit button$/, () => {
    cy.get('#button-edit').click()
});
 
When(/^deletes the text of the note$/, () => {
    cy.get('#s4 > .box > p').clear()
});
 
When(/^clicks the save button$/, () => {
    cy.get('#button-save-edit').click()
});
 
Then(/^the system shows a warning message saying "([^"]*)"$/, (arg0,) => {
    cy.on('window:alert', (text) => {
        expect(text).to.equal('Cant leave note text empty.')
    });
});
 
Then(/^that note isn't updated on the list$/, () => {
    cy.get('#s4 > .box > p').contains("Party this weekend")
    cy.get('#s3 > .box > p').should('have.value', '');
    cy.get('.notes').should('have.length', 1)
});


//  10TH SCENARIO - DONE
Given(/^the user has created a note with text and category$/, () => {
    cy.get('textarea').type('Party this weekend{enter}')
    cy.get('#category').select('Reminder')
    cy.get('#add').click()
});

Given(/^that note already has text$/, () => {
    cy.get('#s4 > .box > p').contains("Party this weekend")
});

Given(/^that note has category$/, () => {
    cy.get('#s3 > .box > p').contains("Reminder")
});

When(/^the user clicks on the edit button$/, () => {
    cy.get('#button-edit').click()
});

When(/^writes a different category that already exists in the list of categories$/, () => {
    cy.get('#s3 > .box > p').clear()
    //writing one that already exists on the default spinner
    cy.get('#s3 > .box > p').type("Task")
});

When(/^clicks the save button$/, () => {
    cy.get('#button-save-edit').click()
});

Then(/^the application shows a warning message saying "([^"]*)"$/, (arg0,) => {
    cy.on('window:alert', (text) => {
        expect(text).to.equal('Category already exists, please enter a different category.')
    });
});

Then(/^that note does not get updated on the list$/, () => {
    cy.get('#s4 > .box > p').contains("Party this weekend")
    cy.get('#s3 > .box > p').contains("Reminder")
    cy.get('.notes').should('have.length', 1)
});


//  11TH SCENARIO - DONE
Given(/^the user has created a note with text and category$/, () => {
    cy.get('textarea').type('Party this weekend{enter}')
    cy.get('#category').select('Reminder')
    cy.get('#add').click()
});

Given(/^that note already has text$/, () => {
    cy.get('#s4 > .box > p').contains("Party this weekend")
});

Given(/^that note has category$/, () => {
    cy.get('#s3 > .box > p').contains("Reminder")
});

When(/^the user clicks on the edit button$/, () => {
    cy.get('#button-edit').click()
});

When(/^writes a different category that already exists in the list of categories$/, () => {
    cy.get('#s3 > .box > p').clear()
    //writing one that already exists on the default spinner
    cy.get('#s3 > .box > p').type("Task")
});

When(/^edits the text of the note$/, () => {
    cy.get('#s4 > .box > p').clear()
    cy.get('#s4 > .box > p').type("Different note")
});

When(/^clicks the save button$/, () => {
    cy.get('#button-save-edit').click()
});

Then(/^the application shows a warning message saying "([^"]*)"$/, (arg0,) => {
    cy.on('window:alert', (text) => {
        expect(text).to.equal('Category already exists, please enter a different category.')
    });
});

Then(/^that note doesn't get updated on the list$/, () => {
    cy.get('#s4 > .box > p').contains("Different note")
    cy.get('#s3 > .box > p').contains("Reminder")
    cy.get('.notes').should('have.length', 1)
});


