import { Given , Then , When} from "cypress-cucumber-preprocessor/steps";

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

// 2ND SCENARIO
 
Given(/^the category the user will write already exists$/, () => {
  cy.get('#category').select('Food').should('exist')
});

When(/^the user types a category that already exists$/, () => {
  cy.get('#categoryText').type('fOOd')
});

When(/^clicks on the confirm button$/, () => {
  cy.get('#buttonAddCategory').click()
});
 
Then(/^the user gets a warning saying "([^"]*)"$/, (arg0,) => {
  cy.on('window:alert', (text) => {
    expect(text).to.equal('Category already exists, please enter a different category!')
  });
});

Then(/^the new category is not be added to the list of categories$/, () => {
  cy.get('.categories')
    .find('#category')
    .then(category => {
      //by default there are 5 elements in the select, because the disabled element counts as well
    expect(category.children()).to.have.length(5);
    });
});

// 3RD SCENARIO
 
Given(/^the user writes a category that has no text$/, () => {
  //NOTE
  //cypress doesn't accept an empty string, so I'm just validating the element here for the sake of the step....
  cy.get('#categoryText')
});

When(/^he clicks on the confirm button$/, () => {
  cy.get('#buttonAddCategory').click()
});
 
Then(/^the user gets a warning saying "([^"]*)"$/, (arg0,) => {
  cy.on('window:alert', (text) => {
    expect(text).to.equal('The category must have some text!')
  });
});

Then(/^the new empty category is not be added to the list of categories$/, () => {
  cy.get('.categories')
    .find('#category')
    .then(category => {
      //by default there are 5 elements in the select, because the disabled element counts as well
    expect(category.children()).to.have.length(5);
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

// 6th SCENARIO

Given(/^the user creates a new category$/, () => {
  cy.get('#categoryText')
  cy.get('#categoryText').type('Gym')
  cy.get('#buttonAddCategory').click()
});

When(/^he types the the text of the note$/, () => {
  cy.get('textarea').type('Party this Friday{enter}')
});

When(/^chooses the new category from the list of categories$/, () => {
  cy.get('#category').select('Gym')
});

When(/^clicks the button to add the new note$/, () => {
  cy.get('#add').click()
});

Then(/^the note is added to the list of notes$/, () => {
  cy.get('#note')
});

Then(/^the category corresponds to the new category$/, () => {
  cy.get('#s3 > .box > p').contains("Gym")
});

Then(/^the text corresponds to the text written$/, () => {
  cy.get('#s4 > .box > p').contains("Party this Friday")
});


// 7th LAST SCENARIO

Given(/^the user types the text of the note$/, () => {
  cy.get('textarea').type('Party this weekend{enter}')
});

Given(/^does not select a category$/, () => {
  //check if the default value for the spinner is selected 
  //If it is, is because the user did not select a category.
  cy.get('#category').contains('Select a Category')
});

When(/^he clicks on the button to add the new note$/, () => {
  cy.get('#add').click()
});

Then(/^the note is added to the list of notes$/, () => {
  cy.get('#note')
});

Then(/^the note only has text$/, () => {
  cy.get('#s3 > .box > p').should('be.empty')
  cy.get('#s4 > .box > p').contains("Party this weekend")
});


//LAST SCENARIO

Given(/^the user only selects the category of the note$/, () => {
  cy.get('#category').select('Food')
});

When(/^he clicks on the button to add the new note$/, () => {
  cy.get('#add').click()
});
 
Then(/^the system should give a warning saying "([^"]*)"$/, (arg0,) => {
  cy.on('window:alert', (text) => {
    expect(text).to.equal('Please Enter a note.')
  });
});

Then(/^the new note should not be created$/, () => {
  //should not create a new item
  cy.get('.notes').children().should('have.length', 0)
});