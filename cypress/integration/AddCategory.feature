Feature: Add a category

    To create a new note, the user has the ability to decide if he wants to have a category on that new note or not.
    To add a category, the user has two options, where he can either select a category from an already existing list, 
    or he can add a new category manually byt typing it, in case the list doesn't have the category the user wants.
    There's also the option for the user to create a new note with no category.
    The category will be visible in the list of items (notes).


    Background: User is on the web application
        Given the user goes to the web application
        When he checks the title of the application
        Then he can see he is on the Notes App
# #-----------------------------------------------------------------------
   
    Scenario: Add a new category that doesn't exist yet
        Given that category is not on the list of categories
        When the user goes to add a new category
        And types the new category
        And clicks on the confirm button
        Then the new category is added to the list of categories

# #-----------------------------------------------------------------------
#get warning

    Scenario: Add a new category that already exists
        Given the category the user will write already exists 
        When the user types a category that already exists
        And clicks on the confirm button
        Then the user gets a warning saying "Category already exists, please enter a different category!"
        And the new category is not be added to the list of categories 
        
# #-----------------------------------------------------------------------
# #get warning

#     Scenario: Add a new empty category
#         Given the user is on the web aplication to add a new category
#         And that category has no text 
#         When the user clicks on the add category button
#         And an editable area appears to write the category
#         And does not type anything 
#         And clicks on the confirm button
#         Then the user gets a warning saying "The category must have some text!"
#         And the new category is not be added to the list of categories  

# #-----------------------------------------------------------------------

#     Scenario Outline: Add a new category with numbers or symbols
#         Given the user is on the web aplication to add a new category 
#         And that category has <text>
#         When the user clicks on the add category button 
#         And an editable area appears to write the category
#         And types <input>
#         And clicks on the confirm button
#         Then the new category is added to the list of categories

#     Examples:
#         |    text   |   input   |
#         |  numbers  |   59213   |
#         |  symbols  |   !#%&/   |


# #-----------------------------------------------------------------------

    Scenario: Create a note and assign an existing category
        Given the user writes text in the note
        When chooses a category from the list of categories
        And clicks the button to add the new note
        Then the note is be added to the list of notes
        And the category is visible

# #-----------------------------------------------------------------------
# #Backtrack

#     Scenario: Create a note and assign a category that doesn't exist yet
#         Given the user is on the web application to write a new note
#         And he wants to assign a category to that note
#         When that category is not on the list of categories
#         And clicks on the add category button
#         Then an editable area appears to write the category


#     Scenario: Add a new category that doesn't exist yet
#         Given an editable area appears to write the category
#         When the user writes the name of the new category
#         And clicks on the confirm button
#         Then the new category is added to the list of categories


#     Scenario: Add the new category to the note
#         Given the new category is on the list of categories
#         And the user writes text in the note
#         And chooses the new category
#         When the user clicks the button to add the new note
#         Then the note is added to the list of notes
#         And the category is visible


# #-----------------------------------------------------------------------

#     Scenario: Not selecting a category when creating a new note
#         Given the user is on the web application to write a new note
#         And he does not want to add a category to that note
#         When the user types the text of the note
#         And does not select a category
#         And clicks on the button to add the new note 
#         Then the note is added to the list of notes
#         And has no category

# #-----------------------------------------------------------------------

#     Scenario: Only selecting a category when creating a new note
#         Given the user is on the web application to write a new note
#         And he only adds a category to that note
#         When the user selects the category of the note
#         And clicks on the button to add the new note 
#         Then the note is added to the list of notes
#         But only has category
#         And the text of the note is empty

 

