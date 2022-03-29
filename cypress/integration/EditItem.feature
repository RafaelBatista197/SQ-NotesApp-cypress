Feature: Edit note already added

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
        When the button "Edit note" its clicked on an specific note
        Then the category text must go to the editable area
        And the text of the note must go to the editable area


    Scenario: Edit note category successfully
        Given the editable area of the category contains the text of category of the note
        And editable area of the category its clicked on
        When a new category text its writen/added
        Then the content of the category editable area contains the new category


    Scenario: Edit note text successfully
        Given the editable area of the note text contains the text of the note
        And editable area of the note text its clicked on
        When new text its writen/added or deleted to the note
        Then the content of the note editable area contains the new text


    Scenario: Save editable note text and category successfully
        Given the editable area of the note text contains the new text of the note
        And the editable area of the category contains the new text of category of the note
        When the button "Update note" button its clicked
        Then the content of the note its updated with the new text
        And the content of the category its updated with the new text
        And the new category its added to the list of categoreis


    #Caminho em que a catagoria de uma nota nao é editada, só é editado o texto da nota
    Scenario: Click the Edit note button on a note
        Given the user wants to edit a existing note
        And the note has category or not
        And the note has text
        When the button "Edit note" its clicked on an specific note
        Then the category text must go to the editable area
        And the text of the note must go to the editable area


    Scenario: Edit note text successfully
        Given the editable area of the note text contains the text of the note
        And editable area of the note text its clicked on
        When new text its writen/added or deleted to the note
        Then the content of the note editable area contains the new text


    Scenario: Save editable note text with new text but same category successfully
        Given the editable area of the note text contains the new text of the note
        And the editable area of the category contains the same category of the note
        When the button "Update note" button its clicked
        Then the content of the note its updated with the new text
        And the content of the category its the same as before
        And no new category its added to the list of categoreis



    #Caminho em que a catagoria de uma nota é editada, mas o texto da nota não é editado
    Scenario: Click the Edit note button on a note
        Given the user wants to edit a existing note
        And the note has category if exists
        And the note has text
        When the button "Edit note" its clicked on an specific note
        Then the category text must go to the editable area
        And the text of the note must go to the editable area


    Scenario: Edit note category successfully
        Given the editable area of the category contains the text of category of the note
        And editable area of the category its clicked on
        When a new category text its writen/added
        Then the content of the category editable area contains the new category


    Scenario: Save editable note text with new category but same text of the note successfully
        Given the editable area of the note text contains the new text of category of the note
        And the editable area of the category contains the same category of the note
        When the button "Update note" button its clicked
        Then the content of the note its the same as before
        And the content of the category its updated with the new text
        And the new category its added to the list of categoreis



    #Cenario do caimnho quando nota é guardade sem categoria
    Scenario: Click the Edit note button on a note that only has note text
        Given the user wants to edit a existing note
        And the note area has text
        When the button "Edit note" its clicked on an specific note
        Then the text of the note must go to the editable area


    Scenario: Edit note text successfully
        Given the editable area of the note text contains the text of the note
        And editable area of the note text its clicked on
        When new text its writen/added or deleted to the note
        Then the content of the note editable area contains the new text


    Scenario: Save editable note text with no category successfully
        Given the editable area of the note text contains the new text of the note
        And the editable area of the category contains no text
        When the button "Update note" button its clicked
        Then the content of the note its updated with the new text
        And no new category its added to the list of categoreis


    #Cenario do caimnho quando nota é guardada com categoria mas sem texto da nota
    Scenario: Click the Edit note button on a existing note
        Given the user wants to edit a existing note
        And the note has category if exists
        And the note has text
        When the button "Edit note" its clicked on an specific note
        Then the category text must go to the editable area if exists
        And the text of the note must go to the editable area


    Scenario: Edit note category successfully
        Given the editable area of the category contains the text of category of the note
        When editable area of the category its clicked on
        And a new category text its added
        Then the content of the category editable area contains the new category


    Scenario: Edit note text not successfully
        Given the editable area of the note text contains the text of the note
        And editable area of the note text its clicked on
        When all the text of the note is deleted
        Then the content of the note on the editable area contains no text


    Scenario: Save editable note text with category and no text un-successfully
        Given the editable area of the note text contains the no text
        And the editable area of the category contains new category text
        When the button "Update note" button its clicked
        And the note its not updated
        Then the application should display "Error! Note must have text." error message
        And the note its not updated
        And no new category its added to the list of categoreis




    #Cenario do caimnho quando nota é guardada sem categoria e sem texto da nota
    Scenario: Click the Edit note button on a existing note
        Given the user wants to edit a existing note
        And the note has category if exists
        And the note has text
        When the button "Edit note" its clicked on an specific note
        Then the category text must go to the editable area if exists
        And the text of the note must go to the editable area


    Scenario: Edit note text with no category text
        Given the editable area of the category contains the text of category of the note if exists
        And editable area of the category its clicked on
        When category text its all deleted
        Then the text of the editable area of the category its updated with no text


    Scenario: Edit note text with no text
        Given the editable area of the note text contains the text of the note
        And editable area of the note text its clicked on
        When all the text of the note is deleted
        Then the content of the note on the editable area contains no text


    Scenario: Save editable note text with no category and no text un-successfully
        Given the editable area of the note text contains the no text
        And the editable area of the category contains no category text
        When the button "Update note" button its clicked
        Then the application should display "Error! Note must have text." error message
        And the note its not updated
        And no new category its added to the list of categoreis