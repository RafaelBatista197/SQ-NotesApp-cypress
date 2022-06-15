Feature: Edit an item of the list of notes

    After a new note is added to the list of notes, the application must have an option to edit the note.
    The user clicks on the button to edit a specific note, both the text of the note and the category
    becomes editable, plus the option to choose the existing categoreis appears and two buttons appear, one
    to save and another to cancel.
    The user will not be able to edit the color or the size of the text.

   

    # Background:
    #     Given the user is on the web application to edit a existing note
    # #-----------------------------------------------------------------------
    # #-------- Caminho onde é editado um item que onde categoria e nota são editados;
    # #-------- Num cenário o user dá save, no outro dá cancel
    # #-------- Este cenário é feito já com a edição de ambas as partes (categoria e texto da nota),
    # #-------- porque assim se funciona duma maneira para os 2, então não é preciso tar a fazer mais cenários, para quando só se edita a categoria e dá (save e cancel)
    # #--------, o mesmo para o texto

     Background: User is on the web application
        Given the user is on the web application to edit a existing note
        When he checks the title of the application
        Then he can see he is on the Notes App

    Scenario: Check that the note is editable when user clicks to edit note
        Given the user has created a note with text and category
        And that note already has text
        And that note already has category
        When the user clicks on the edit button
        Then the note text becomes editable 
        And the note category becomes editable 

    Scenario: Check that the note is not editable when user clicks on cancel
        Given the user has created a note with text and category
        And that note already has text
        And that note already has category
        And the user clicks on the edit button
        And the note text becomes editable 
        And the note category becomes editable 
        When the user clicks on the cancel button
        Then the note text is no longer editable 
        And the note category is no longer editable 

    Scenario: Edit note that has category and text where category is removed first and then the note
        Given the user has created a note with text and category
        And that note already has text
        And that note already has category
        When the user clicks on the edit button
        And removes the category first  
        And clicks on the delete button to remove the note 
        Then note will be removed from the list of notes

    Scenario: Edit note that has category and text and both texts are deleted
        Given the user has created a note with text and category
        And that note already has text
        And that note already has category
        When the user clicks on the edit button
        And deletes the category text
        And deletes the note text
        And clicks the save button
        Then the system shows a warning message
        And that note is not updated on the list

    # DONE---------
    # Scenario: Edit note with category and text where the text is deleted
    #     Given the user has created a note with text and category
    #     And that note already has text
    #     And that note already has category
    #     When the user clicks on the edit button
    #     And deletes the text of the note
    #     And clicks the save button
    #     Then the system shows a warning message saying "Cant leave note text empty."
    #     And that note is not updated on the list

    # DONE-----------
    # Scenario: Edit note that has no category and only has text and the text is deleted
    #     Given the user has created a note with text and no category
    #     And that note already has text
    #     And that note has no category
    #     When the user clicks on the edit button
    #     And deletes the text of the note
    #     And clicks the save button
    #     Then the system shows a warning message saying "Cant leave note text empty."
    #     And that note is not updated on the list

    # DONE-----------
    # Scenario: Edit note where category is deleted and text note is updated
    #     Given the user has created a note with text and category
    #     And that note already has text
    #     And that note already has category
    #     When the user clicks on the edit button
    #     And deletes the category text
    #     And edits the text of the note
    #     And clicks the save button
    #     Then that note contains no category
    #     And that note text is updated on the list

    #DONE--------------
    # Scenario: Edit note that has category and text but where only the text note is edited
    #     Given the user has created a note with text and category
    #     And that note already has text
    #     And that note already has category
    #     And the user wants to edit the text
    #     But doesn't want to edit the category of the note
    #     When the user clicks on the edit button
    #     And edits the text of the note
    #     And clicks the save button
    #     Then that note is updated on the list

    #DONE--------------
    # Scenario: Edit note that only has text on the note and only that text is updated
    #     Given the user has created a note with text and no category
    #     And that note already has text
    #     And that note has no category
    #     And the user wants to edit the text
    #     But doesn't want to edit the category
    #     When the user clicks on the edit button
    #     And edits the text of the note
    #     And clicks the save button
    #     Then that note is updated on the list


    # #-------- Caminho onde é editado um item que tem (categoria e nota) mas só é editada a categoria
    # #-------- ou seja, o texto da nota vai continuar igual; neste caso é escrito uma categoria que
    # #-------- já existe, por isso vai dar erro e o user tem de ir ao spinner e escolher a que ja existe
    # Scenario: Edit note category to one that is wrttien but already exists
    #     And that note already has text
    #     And that note already has category
    #     And the user wants to edit the category
    #     And the category exists on the list
    #     But doesn't want to edit the text
    #     When the user clicks on the edit button
    #     And writes a category that exists on the list
    #     And clicks the save button
    #     Then the application shows a warning message because category already exists
    #     And that note is not updated on the list


    # Scenario: Edit the text and category of the note
    #     Given the user has created a note with text and category
    #     And that note already has text
    #     And that note already has category
    #     When the user clicks on the edit button
    #     And selects a new category from the list of categories
    #     And edits the text of the note
    #     And clicks the <action> button
    #     Then that note <outcome> be updated on the list

    #     Examples:
    #         | action | outcome   |
    #         | save   | should    |
    #         | cancel | shouldn't |


    # #-------- Caminho onde é editado um item que (categoria e nota) e ambos são editados; é escrito uma categoria (2)
    # #-------- na caixa de texto que ja existe, ou seja,
    # #-------- já existe na lista, por isso vai da erro
    # Scenario: Edit note category to one that already exists
    #     And that note already has text
    #     And that note already has category
    #     And the user wants to edit the text
    #     And the user wants to edit the category
    #     But the category exists on the list
    #     When the user clicks on the edit button
    #     And writes a category that exists on the list
    #     And edits the text of the note
    #     And clicks the save button
    #     Then the application shows a warning message because category already exists
    #     And that note is not be updated on the list



    # #------- Caminho onde é editado um item que (categoria e nota) e ambos são editados; é escrito uma categoria
    # #------- na caixa de texto e não existe, ou seja,
    # #------- não existe na lista de categorias, logo não é preciso ir ao spinner, é adicionada à lista quando
    # #------- carregamos no botão de update da nota
    # Scenario: Edit note category to one that doesn't exist
    #     And that note already has text
    #     And that note already has category
    #     And the user wants to edit the text
    #     And edit the category text
    #     But to a category that doesn't exists
    #     When the user clicks on the edit button
    #     And writes a category that doesn't exists on the list
    #     And edits the text of the note
    #     And clicks the save button
    #     Then that note updates the category
    #     And updates the text
    #     And a new category is added to the list of categoreis


    # #-------- Caminho onde é editado um item que tem (categoria e nota) mas só é editada a categoria
    # #-------- ou seja, o texto da nota vai continuar igual; neste caso, categoria vai ser escolhida
    # #-------- da lista que já existe, ou seja o user não vai escrever nada na categoria
    # #-------- mas vai usar o spinner
    # Scenario: Edit note category that is choosen from the list of category
    #     And that note already has text
    #     And that note already has category
    #     And the user wants to edit the category
    #     And edit the category to one that already exists
    #     But doesn't edit the text of the note
    #     When the user clicks on the edit button
    #     And selects a new category from the list of categories
    #     And edits the text of the note
    #     And clicks the save button
    #     Then that note is updated




    # #-------- Caminho onde é editado um item que tem (categoria e nota),
    # #-------- e vai ser apagada a cateogira
    # #-------- e o texto da nota não é editado
    # Scenario: Edit note where category is deleted and text note not updated
    #     And that note already has text
    #     And that note already has category
    #     And the user wants to delete the category of the note
    #     When the user clicks on the edit button
    #     And deletes the category text
    #     And clicks the save button
    #     Then that note contains no category






   



    









