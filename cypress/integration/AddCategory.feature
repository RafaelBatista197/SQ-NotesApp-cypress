Feature: Add a category

    To create a new note, the user should have the ability to decide if he wants to have a category on that new note or not.
    To add a category, the user has two options, where he can either select a category from an already existing list, 
    or he can add a new category manually, in case it doesn't have the category the user wants.
    There's also the option for the user to create a new note with no category.
    The category will be visible in the list of items (notes).


#-----------------------------------------------------------------------
#acceptable by the app    
    Scenario: Add a new category that doesn't exist yet
        Given the user wants to add a new category
        And that category is not on the list of categories
        When the user clicks on the add category button
        And types the category
        And clicks on the confirm button
        Then the new category should be added to the list of categories

#-----------------------------------------------------------------------
#get warning

    Scenario: Add a new category that already exists
        Given the user wants to add a new category
        And that category already exists 
        When the user clicks on the add category button 
        And types a category that already exists
        And clicks on the confirm button
        Then the user should get a warning saying "That category already exists!"
        And the new category should not be added to the list of categories 
        
#-----------------------------------------------------------------------
#get warning

    Scenario: Add a new empty category
        Given the user wants to add a new category
        And that category has no text 
        When the user clicks on the add category button
        And does not type anything 
        And clicks on the confirm button
        Then the user should get a warning saying "The category must have some text!"
        And the new category should not be added to the list of categories  

#-----------------------------------------------------------------------
#acceptable by the app

    Scenario: Add a new category with only numbers
        Given the user wants to add a new category 
        And that category only has numbers
        When the user clicks on the add category button 
        And types a couple of numbers
        And clicks on the confirm button
        Then the new category should be added to the list of categories
#-----------------------------------------------------------------------
#acceptable by the app

    Scenario: Add a new category with only special characters
        Given the user wants to add a new category 
        And that category only has special characters
        When the user clicks on the add category button 
        And types a couple of special characters
        And clicks on the confirm button
        Then the new category should be added to the list of categories

#-----------------------------------------------------------------------
#acceptable by the app

    Scenario: Add a new category and cancel that action
        Given the user wants to add a new category 
        When the user clicks on the add category button
        And types the name of the category
        And clicks on the cancel button
        Then the new category should not be added to the list of categories
        And the text written on the textarea for the new category should be cleaned

#-----------------------------------------------------------------------
#acceptable by the app

    Scenario: Select a category when creating a new note
        Given 
        When 
        Then 

#-----------------------------------------------------------------------
#acceptable by the app

    Scenario: Not selecting a category when creating a new note
        Given 
        When 
        Then 

 

