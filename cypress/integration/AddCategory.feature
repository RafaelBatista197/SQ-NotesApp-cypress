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

    Scenario: Add a new empty category
        Given the user writes a category that has no text 
        When he clicks on the confirm button
        Then the user gets a warning saying "The category must have some text!"
        And the new empty category is not be added to the list of categories  


# #-----------------------------------------------------------------------

    Scenario: Create a note and assign an existing category
        Given the user writes text in the note
        When chooses a category from the list of categories
        And clicks the button to add the new note
        Then the note is be added to the list of notes
        And the category is visible

# #-----------------------------------------------------------------------

    Scenario: Create a note and assign a new category
        Given the user creates a new category
        When he types the the text of the note
        And chooses the new category from the list of categories
        And clicks the button to add the new note
        Then the note is added to the list of notes
        And the category corresponds to the new category
        And the text corresponds to the text written


# #-----------------------------------------------------------------------

     Scenario: Not selecting a category when creating a new note
         Given the user types the text of the note
         And does not select a category
         When he clicks on the button to add the new note
         Then the note is added to the list of notes
         And the note only has text

# #-----------------------------------------------------------------------

    Scenario: Only selecting a category when creating a new note
        Given the user only selects the category of the note
        When he clicks on the button to add the new note 
        Then the system should give a warning saying "Please Enter a note."
        And the new note should not be created

 # #-----------------------------------------------------------------------


     Scenario: Add a new category with numbers
         Given the user wants to create a category with only numbers
         When he types the numbers on the category
         And clicks on the confirm button
         Then the new category is added to the list of categories


 # #-----------------------------------------------------------------------

#     Scenario Outline: Add a new category with numbers or symbols
#         Given the user wants to type a category that has <text>
#         When he types <input>
#         And clicks on the confirm button
#         Then the new category is added to the list of categories

#     Examples:
#         |    text   |   input   |
#         |  numbers  |   59213   |
#         |  symbols  |   !#%&/   |

