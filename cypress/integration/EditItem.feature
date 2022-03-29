Feature: Edit an item of the list of notes

    After a new note is added to the list of notes, the system must have an option to edit the note.
    So, if the user written something wrong or wants to add more details on the note, when
    the user clicks on the button to edit a specific note, the text of the note should go to the
    text area where the user can edit it (the text and the category - if exists) and then update it.

    #-----------------------------------------------------------------------
    #Caminho certo
    Scenario: Click the Edit note button on a note
        Given the user wants to edit a existing note
        And the note has category or not
        And the note has text
        When the edit button is clicked on an specific note
        Then the category text must go to the editable area
        And the text of the note must go to the editable area


    Scenario: Edit note category successfully
        Given the editable area of the category contains the text of category of the note
        And editable area of the category is clicked on
        When a new category text is writen
        Then the content of the category editable area contains the new category


    Scenario: Edit note text successfully
        Given the editable area of the note text contains the text of the note
        And editable area of the note text is clicked on
        When new text is writen/added or deleted to the note
        Then the content of the note editable area contains the new text


    Scenario: Save editable note text and category successfully
        Given the editable area of the note text contains the new text of the note
        And the editable area of the category contains the new text of category of the note
        When the update button is clicked
        Then the content of the note is updated with the new text
        And the content of the category is updated with the new text
        And the new category is added to the list of categoreis


    #Caminho onde é escolhido uma categoria da lista de categorias que já existem
    Scenario: Click the Edit note button on a note
        Given the user wants to edit a existing note
        And the note has category or not
        And the note has text
        When the edit button is clicked on an specific note
        Then the category text must go to the editable area
        And the text of the note must go to the editable area


    Scenario: Edit note category by choosing one from the list of categories
        Given the editable area of the category contains the text of category of the note
        When a new category is picked from the list of categoreis that already exist
        Then the content of the category editable area contains the category picked from the list


    Scenario: Edit note text
        Given the editable area of the note text contains the text of the note
        And editable area of the note text is clicked on
        When new text is writen/added or deleted to the note
        Then the content of the note editable area contains the new text


    Scenario: Save editable note text and category successfully
        Given the editable area of the note text contains the new text of the note
        And the editable area of the category contains the new text of category of the note
        When the update button is clicked
        Then the content of the note is updated with the new text
        And the content of the category is updated with the new text
        And the no new category is added to the list of categoreis



    #Caminho editar cor do texto
    Scenario: Click the Edit note button on a note
        Given the user wants to edit a existing note
        And the note has category or not
        And the note has text
        When the edit button is clicked on an specific note
        Then the category text should go to editable state
        And the text of the note should go to the editable state


    Scenario: Edit note text color
        Given the editable area of the note text contains the text of the note
        And the editable area of the note text is clicked on
        When a new color is picked from the color pallet
        Then the color of the content of the note in the editable area changes
        And the new color is given "Pick a Color" selecter too


    Scenario: Save note with new color successfully
        Given the editable area of the note text contains the new text with the new color
        When the update button is clicked
        Then the content of the note is updated with the new text color



    #Caminho editar tamanho do texto
    Scenario: Click the Edit note button on a note
        Given the user wants to edit a existing note
        And the note has category or not
        And the note has text
        When the edit button is clicked on an specific note
        Then the category text should go to editable state
        And the text of the note should go to the editable state


    Scenario: Edit note text size
        Given the editable area of the note text contains the text of the note
        And the editable area of the note text is clicked on
        When a new text size is chosen from the "Size" selector
        Then the text size of the content of the note in the editable area changes
        And the new value of the text size is given to the "Size" selector too


    Scenario: Save note with new color successfully
        Given the editable area of the note text contains the new text with the new color
        When the update button is clicked
        Then the content of the note is updated with the new text size


    #Caminho em que a catagoria de uma nota nao é editada, só é editado o texto da nota
    Scenario: Click the Edit note button on a note
        Given the user wants to edit a existing note
        And the note has category or not
        And the note has text
        When the edit button is clicked on an specific note
        Then the category text must go to the editable area
        And the text of the note must go to the editable area


    Scenario: Edit note text successfully
        Given the editable area of the note text contains the text of the note
        And editable area of the note text is clicked on
        When new text is writen/added or deleted to the note
        Then the content of the note editable area contains the new text


    Scenario: Save editable note text with new text but same category successfully
        Given the editable area of the note text contains the new text of the note
        And the editable area of the category contains the same category of the note
        When the update button is clicked
        Then the content of the note is updated with the new text
        And the content of the category is the same as before
        And no new category is added to the list of categoreis



    #Caminho em que a catagoria de uma nota é editada, mas o texto da nota não é editado
    Scenario: Click the Edit note button on a note
        Given the user wants to edit a existing note
        And the note has category if exists
        And the note has text
        When the edit button is clicked on an specific note
        Then the category text must go to the editable area
        And the text of the note must go to the editable area


    Scenario: Edit note category successfully
        Given the editable area of the category contains the text of category of the note
        And editable area of the category is clicked on
        When a new category text is writen/added
        Then the content of the category editable area contains the new category


    Scenario: Save editable note text with new category but same text of the note successfully
        Given the editable area of the note text contains the new text of category of the note
        And the editable area of the category contains the same category of the note
        When the update button is clicked
        Then the content of the note is the same as before
        And the content of the category is updated with the new text
        And the new category is added to the list of categoreis


    #Caminho em que a catagoria de uma nota é editada e escolhida da lista de categorias, mas o texto da nota não é editado
    Scenario: Click the Edit note button on a note
        Given the user wants to edit a existing note
        And the note has category if exists
        And the note has text
        When the edit button is clicked on an specific note
        Then the category text must go to the editable area
        And the text of the note must go to the editable area


    Scenario: Edit note category by choosing one from the list of categories
        Given the editable area of the category contains the text of category of the note
        When a new category is picked from the list of categoreis that already exist
        Then the content of the category editable area contains the category picked from the list



    Scenario: Save editable note text with new category but same text of the note successfully
        Given the editable area of the note text contains the new text of category of the note
        And the editable area of the category contains the same category of the note
        When the update button is clicked
        Then the content of the note is the same as before
        And the content of the category is updated with the new text


    #Caminho em que a catagoria de uma nota é editada com numeros
    Scenario: Click the Edit note button on a note
        Given the user wants to edit a existing note
        And the note has category if exists
        And the note has text
        When the edit button is clicked on an specific note
        Then the category text must go to the editable area
        And the text of the note must go to the editable area


    Scenario: Edit note category with numbers
        Given the editable area of the category contains the text of category of the note
        And editable area of the category is clicked on
        When a new category text is writen with numbers
        Then the content of the category editable area contains the new category with numbers


    Scenario: Save editable note text with new category successfully
        Given the editable area of the category contains the new text of category of the note
        When the update button is clicked
        Then the content of the category is updated with the new text
        And the new category is added to the list of categoreis


    #Caminho em que a catagoria de uma nota é editada com caracters especiais
    Scenario: Click the Edit note button on a note
        Given the user wants to edit a existing note
        And the note has category if exists
        And the note has text
        When the edit button is clicked on an specific note
        Then the category text must go to the editable area
        And the text of the note must go to the editable area


    Scenario: Edit note category with special characters
        Given the editable area of the category contains the text of category of the note
        And editable area of the category is clicked on
        When a new category text is writen with special characters
        Then the content of the category editable area contains the new category with special characters


    Scenario: Save editable note text with new category successfully
        Given the editable area of the category contains the new text of category of the note
        When the update button is clicked
        Then the content of the category is updated with the new text
        And the new category is added to the list of categoreis



    #Caminho em que é cancela a editção da nota
    Scenario: Click the Edit note button on a note
        Given the user wants to edit a existing note
        And the note has category or not
        And the note has text
        When the edit button is clicked on an specific note
        Then the category text must go to the editable area
        And the text of the note must go to the editable area


    Scenario: Edit note category successfully
        Given the editable area of the category contains the text of category of the note
        And editable area of the category is clicked on
        When a new category text is writen/added
        Then the content of the category editable area contains the new category


    Scenario: Edit note text successfully
        Given the editable area of the note text contains the text of the note
        And editable area of the note text is clicked on
        When new text is writen/added or deleted to the note
        Then the content of the note editable area contains the new text


    Scenario: Cancel the edition of the note
        Given the editable area of the note text contains the new text of the note
        And the editable area of the category contains the new text of category of the note
        When the cancel button is clicked
        Then the content of the note is not updated with the new text
        And the content of the category is not updated with the new text
        And the new category is not added to the list of categoreis


    #Cenario do caimnho quando nota é guardade sem categoria
    Scenario: Click the Edit note button on a note that only has note text
        Given the user wants to edit a existing note
        And the note area has text
        When the edit button is clicked on an specific note
        Then the text of the note must go to the editable area


    Scenario: Edit note text successfully
        Given the editable area of the note text contains the text of the note
        And editable area of the note text is clicked on
        When new text is writen/added or deleted to the note
        Then the content of the note editable area contains the new text


    Scenario: Save editable note text with no category successfully
        Given the editable area of the note text contains the new text of the note
        And the editable area of the category contains no text
        When the update button is clicked
        Then the content of the note is updated with the new text
        And no new category is added to the list of categoreis


    #Cenario do caimnho quando nota é guardada com categoria mas sem texto da nota
    Scenario: Click the Edit note button on a existing note
        Given the user wants to edit a existing note
        And the note has category if exists
        And the note has text
        When the edit button is clicked on an specific note
        Then the category text must go to the editable area if exists
        And the text of the note must go to the editable area


    Scenario: Edit note category successfully
        Given the editable area of the category contains the text of category of the note
        When editable area of the category is clicked on
        And a new category text is added
        Then the content of the category editable area contains the new category


    Scenario: Edit note text not successfully
        Given the editable area of the note text contains the text of the note
        And editable area of the note text is clicked on
        When all the text of the note is deleted
        Then the content of the note on the editable area contains no text


    Scenario: Save editable note text with category and no text un-successfully
        Given the editable area of the note text contains the no text
        And the editable area of the category contains new category text
        When the update button is clicked
        And the note is not updated
        Then the application should display "Error! Note must have text." error message
        And the note is not updated
        And no new category is added to the list of categoreis




    #Cenario do caimnho quando nota é guardada sem categoria e sem texto da nota
    Scenario: Click the Edit note button on a existing note
        Given the user wants to edit a existing note
        And the note has category if exists
        And the note has text
        When the edit button is clicked on an specific note
        Then the category text must go to the editable area if exists
        And the text of the note must go to the editable area


    Scenario: Edit note text with no category text
        Given the editable area of the category contains the text of category of the note if exists
        And editable area of the category is clicked on
        When category text is all deleted
        Then the text of the editable area of the category is updated with no text


    Scenario: Edit note text with no text
        Given the editable area of the note text contains the text of the note
        And editable area of the note text is clicked on
        When all the text of the note is deleted
        Then the content of the note on the editable area contains no text


    Scenario: Save editable note text with no category and no text un-successfully
        Given the editable area of the note text contains the no text
        And the editable area of the category contains no category text
        When the update button is clicked
        Then the application should display "Error! Note must have text." error message
        And the note is not updated
        And no new category is added to the list of categoreis