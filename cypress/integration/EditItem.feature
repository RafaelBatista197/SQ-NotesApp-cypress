Feature: Edit an item of the list of notes

    After a new note is added to the list of notes, the system must have an option to edit the note.
    So, if the user written something wrong or wants to add more details on the note, when
    the user clicks on the button to edit a specific note, the text of the note should go to the
    text area where the user can edit it (the text and the category - if exists) and then update it.


    #-----------------------------------------------------------------------
    #-------- Caminho onde é editado um item que onde categoria e nota são editados;
    #-------- Num cenário o user dá save, no outro dá cancel
    #-------- Este cenário é feito já com a edição de ambas as partes (categoria e texto da nota),
    #-------- porque assim se funciona duma maneira para os 2, então não é preciso tar a fazer mais cenários, para quando só se edita a categoria e dá (save e cancel)
    #--------, o mesmo para o texto

    Scenario: Edit the text and category of the note
        Given the user is on the web application to edit a existing note
        And that note already has text
        And that note already has category
        And the user wants to edit the text
        And edit the category to one that already exists
        When the user clicks on the edit button
        And selects a new category from the list of categories
        And edits the text of the note
        And clicks the <action> button
        Then that note <outcome> be updated on the list

        Examples:
            | action | outcome   |
            | save   | should    |
            | cancel | shouldn't |


    #-------- Caminho onde é editado um item que (categoria e nota) e ambos são editados; é escrito uma categoria
    #-------- na caixa de texto que ja existe, ou seja,
    #-------- já existe na lista, por isso vai da erro
    Scenario: Edit note with category that exists
        Given the user is on the web application to edit a existing note
        And that note already has text
        And that note already has category
        And the user wants to edit the text
        And the user wants to edit the category
        But the category exists on the list
        When the user clicks on the edit button
        And writes a category that exists on the list
        And edits the text of the note
        And clicks the save button
        Then the system should show a warning message because category already exists
        And that note shouldn't be updated on the list



    #------- Caminho onde é editado um item que (categoria e nota) e ambos são editados; é escrito uma categoria
    #------- na caixa de texto e não existe, ou seja,
    #------- não existe na lista de categorias, logo não é preciso ir ao spinner, é adicionada à lista quando
    #------- carregamos no botão de update da nota
    Scenario: Edit note completly with category that doesn't exist
        Given the user is on the web application to edit a existing note
        And that note already has text
        And that note already has category
        And the user wants to edit the text
        And edit the category text
        But to one that doesn't exists
        When the user clicks on the edit button
        And writes a category that doesn't exists on the list
        And edits the text of the note
        And clicks the save button
        Then that note should now be updated on the list
        And a new category is added to the list of categoreis



    #-------- Caminho onde é editado um item que só tem texto (nota) mas não tem categoria, e vai continuar a não ter
    #-------- categoria, ou seja,
    #-------- é mesmo uma nota sem categoria e só é editado o texto da nota
    Scenario: Edit note that only has text on the note
        Given the user is on the web application to edit a existing note
        And that note already has text
        And that note has no category
        And the user wants to edit the text
        But doesn't want to edit the category
        When the user clicks on the edit button
        And edits the text of the note
        And clicks the save button
        Then that note should now be updated on the list



    #-------- Caminho onde é editado um item que tem (categoria e nota),
    #-------- e vai ser apagada a cateogira
    #-------- e é editado o texto da nota
    Scenario: Edit note where category is deleted and text note updated
        Given the user is on the web application to edit a existing note
        And that note already has text
        And that note already has category
        And the user wants to edit the text
        And delete the category of the note
        When the user clicks on the edit button
        And deletes the category text
        And edits the text of the note
        And clicks the save button
        Then that note should now be updated on the list



    #-------- Caminho onde é editado um item que tem (categoria e nota),
    #-------- e vai ser apagada a cateogira
    #-------- e o texto da nota não é editado
    Scenario: Edit note where category is deleted and text note not updated
        Given the user is on the web application to edit a existing note
        And that note already has text
        And that note already has category
        And the user wants to delete the category of the note
        When the user clicks on the edit button
        And deletes the category text
        And clicks the save button
        Then that note should now be updated on the list



    #-------- Caminho onde é um item que tem (categoria e nota),
    #-------- vai ser apagado o texto da nota não, ou seja, só vai
    #-------- ficar com a categoria,
    Scenario: Edit note where note text is deleted and text note not updated
        Given the user is on the web application to edit a existing note
        And that note already has text
        And that note already has category
        And the user wants to delete the text of the note
        When the user clicks on the edit button
        And deletes the text of the note
        And clicks the save button
        Then that note should now be updated on the list



    #-------- Caminho onde um item que tem (categoria e nota) só é editado o texto da nota,
    #-------- ou seja, a categoria vai ficar igual e o texto muda
    Scenario: Click to Edit note that exists
        Given the user is on the web application to edit a existing note
        And that note already has text
        And that note already has category
        And the user wants to edit the text
        But doesn't want to edit the category of the note
        When the user clicks on the edit button
        And edits the text of the note
        And clicks the save button
        Then that note should now be updated on the list



    #-------- Caminho onde é editado um item que tem (categoria e nota) mas só é editada a categoria
    #-------- ou seja, o texto da nota vai continuar igual; neste caso, categoria vai ser escolhida
    #-------- da lista que já existe, ou seja o user não vai escrever nada na categoria
    #-------- mas vai usar o spinner
    Scenario: Edit note category that is choosen from the list of category and note text stays the same
        Given the user is on the web application to edit a existing note
        And that note already has text
        And that note already has category
        And the user wants to edit the category
        And edit the category to one that already exists
        But doesn't edit the text of the note
        When the user clicks on the edit button
        And selects a new category from the list of categories
        And edits the text of the note
        And clicks the save button
        Then that note should now be updated on the list



    #-------- Caminho onde é editado um item que tem (categoria e nota) mas só é editada a categoria
    #-------- ou seja, o texto da nota vai continuar igual; neste caso é escrito uma categoria que
    #-------- já existe, por isso vai dar erro e o user tem de ir ao spinner e escolher a que ja existe
    Scenario: Edit note category to one that exists and where note text stays the same
        Given the user is on the web application to edit a existing note
        And that note already has text
        And that note already has category
        And the user wants to edit the category
        And the category exists on the list
        But doesn't want to edit the text
        When the user clicks on the edit button
        And writes a category that exists on the list
        And clicks the save button
        Then the system should show a warning message because category already exists
        And that note shouldn't be updated on the list


    #------- Caminho onde item que só tem texto (nota) é editada a cor do texto
    Scenario: Edit note text color
        Given the user is on the web application to edit a existing note
        And that note already has text
        And the user wants to edit the text color
        When the user clicks on the edit button
        And a new color is picked from the color pallet
        And clicks the save button
        Then that note should be updated on the list with the new text color



    #------- Caminho onde item que só tem texto (nota) é editado o tamanho do texto
    Scenario: Edit note text size
        Given the user is on the web application to edit a existing note
        And that note already has text
        And the user wants to edit the text size
        When the user clicks on the edit button
        And the user picks a new text size from the selector
        And clicks the save button
        And that note should be updated on the list with the new text size



    #------- Caminho onde é guardada uma nota sem sem categoria e sem texto na nota
    Scenario: Delete both category and text note from one note
        Given the user is on the web application to edit a existing note
        And that note already has text
        And that note already has category
        When the user clicks on the edit button
        And deletes the text note
        And deletes the category text
        And clicks the save button
        Then the system should show a warning message
        And that note shouldn't be updated on the list





