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


// 4TH SCENARIO - DONE

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


// // 5TH SCENARIO - DONE

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

// // 6TH SCENARIO - DONE

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
 
When(/^changes the text of the note$/, () => {
    cy.get('#s4 > .box > p').clear()
    cy.get('#s4 > .box > p').type('Party this weekend at 8:00 pm{enter}')
});
 
When(/^clicks the save button$/, () => {
    cy.get('#button-save-edit').click()
});
 
Then(/^that note contains no category$/, () => {
    cy.get('#s3 > .box > p').should('have.value', '');
});
 
Then(/^that note text is updated on the list$/, () => {
    cy.get('#s4 > .box > p').contains("Party this weekend at 8:00 pm")
    cy.get('#s3 > .box > p').should('have.value', '');
    cy.get('.notes').should('have.length', 1)
});

// // 7TH SCENARIO - DONE

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
 
When(/^edits the text of the note$/, () => {
    cy.get('#s4 > .box > p').clear()
    cy.get('#s4 > .box > p').type('Party this weekend at 8:00 pm{enter}')
});
 
When(/^clicks the save button$/, () => {
    cy.get('#button-save-edit').click()
});
 
Then(/^that note is updated on the list$/, () => {
    cy.get('#s4 > .box > p').contains("Party this weekend at 8:00 pm")
    cy.get('#s3 > .box > p').contains("Reminder")
    cy.get('.notes').should('have.length', 1)
});

// // 8TH SCENARIO - DONE

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
 
When(/^edits the text of the note$/, () => {
    cy.get('#s4 > .box > p').clear()
    cy.get('#s4 > .box > p').type('Party this weekend at 8:00 pm{enter}')
});
 
When(/^clicks the save button$/, () => {
    cy.get('#button-save-edit').click()
});
 
Then(/^that note gets updated on the list$/, () => {
    cy.get('#s4 > .box > p').contains("Party this weekend at 8:00 pm")
    cy.get('#s3 > .box > p').should('have.value', '');
    cy.get('.notes').should('have.length', 1)
});

//  9TH SCENARIO - DONE
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

When(/^writes a new category that doesn't exist on the list$/, () => {
    cy.get('#s3 > .box > p').clear()
    //writing one that not exists on the default spinner
    cy.get('#s3 > .box > p').type("School")
});

When(/^text of the note is edited$/, () => {
    cy.get('#s4 > .box > p').clear()
    cy.get('#s4 > .box > p').type("Different note")
});

When(/^clicks the save button$/, () => {
    cy.get('#button-save-edit').click()
});

Then(/^that note updates the category$/, (arg0,) => {
    cy.get('#s3 > .box > p').contains("School")
});

Then(/^updates the text$/, (arg0,) => {
    cy.get('#s4 > .box > p').contains("Different note")
});

Then(/^a new category is added to the list of categories$/, () => {
    //check category spinner in note
    cy.get('.categories')
    .find('#category')
    .then(category => {
    const listingCount = Cypress.$(category).children().length;
    expect(category.children()).to.have.length(listingCount);
    });

    //check category spinner in edit
    cy.get('#s3 > .box')
    .find('#category-on-box')
    .then(category => {
    const listingCount = Cypress.$(category).children().length;
    expect(category.children()).to.have.length(listingCount);
    });
});

//  12TH SCENARIO - DONE
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
 
When(/^selects a new category from the list of categories$/, () => {
    cy.get('#s3 > .box')
    .find('#category-on-box').select('Task')
});
 
When(/^clicks the save button$/, () => {
    cy.get('#button-save-edit').click()
});
 
Then(/^that note is updated with the new selected category$/, () => {
    cy.get('#s4 > .box > p').contains("Party this weekend")
    cy.get('#s3 > .box > p').contains("Task")
    cy.get('.notes').should('have.length', 1)
});

// 13TH SCENARIO

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
 
When(/^selects a new category from the list of categories$/, () => {
    cy.get('#s3 > .box')
    .find('#category-on-box').select('Task')
});
 
When(/^clicks the cancel button$/, () => {
    cy.get('#cancel-edit-note').click()
});
 
Then(/^that note is not updated with the new selected category$/, () => {
    cy.get('#s4 > .box > p').contains("Party this weekend")
    cy.get('#s3 > .box > p').contains("Reminder")
    cy.get('.notes').should('have.length', 1)
});

// 14TH SCENARIO

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
 
When(/^writes a new category that doesn't exist on the list$/, () => {
    cy.get('#s3 > .box > p').clear()
    //writing one that not exists on the default spinner
    cy.get('#s3 > .box > p').type("School")
});
 
When(/^clicks the cancel button$/, () => {
    cy.get('#cancel-edit-note').click()
});
 
Then(/^that note is not updated with the new selected category$/, () => {
    cy.get('#s4 > .box > p').contains("Party this weekend")
    cy.get('#s3 > .box > p').contains("Reminder")
    cy.get('.notes').should('have.length', 1)
});

// 15TH SCENARIO

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
 
When(/^text of the note is edited$/, () => {
    cy.get('#s4 > .box > p').clear()
    cy.get('#s4 > .box > p').type("Different note")
});
 
When(/^clicks the cancel button$/, () => {
    cy.get('#cancel-edit-note').click()
});
 
Then(/^that note is not updated with the new note text$/, () => {
    cy.get('#s4 > .box > p').contains("Party this weekend")
    cy.get('#s3 > .box > p').contains("Reminder")
    cy.get('.notes').should('have.length', 1)
});

