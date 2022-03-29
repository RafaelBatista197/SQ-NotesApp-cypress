Feature: Add a category

    To create a new note, the user should have the ability to decide if he wants to have a category on that new note or not.
    To add a category, the user has two options, where he can either select a category from an already existing list, 
    or he can add a new category manually, in case it doesn't have the category the user wants.
    There's also the option for the user to create a new note with no category.
    The category will be visible in the list of items (notes).


#-----------------------------------------------------------------------
#acceptable by the app    
    Scenario: Add a new category that doesn't exist yet
        Given the user wants to add a new category type
        And that category type is not already on the list of categories
        When the user clicks on the add category button
        And types the category
        Then the new category should be added to the existing list of categories

#-----------------------------------------------------------------------
#get warning

    Scenario: Add a new category that already exists
        Given 
        When 
        Then 
        
#-----------------------------------------------------------------------
#get warning

    Scenario: Add a new empty category
        Given 
        When 
        Then 

#-----------------------------------------------------------------------
#acceptable by the app

    Scenario: Add a new category with only numbers
        Given 
        When 
        Then 

#-----------------------------------------------------------------------
#acceptable by the app

    Scenario: Add a new category with only special characters
        Given 
        When 
        Then 

#-----------------------------------------------------------------------
#acceptable by the app

    Scenario: Add a new category and cancel that action
        Given 
        When 
        Then 

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

 

