Feature: Edit an item of the list of notes

    After a new note is added to the list of notes, the system must have an option to edit the note.
    So, if the user written something wrong or wants to add more details on the note, when
    the user clicks on the button to edit a specific note, the text of the note should go to the
    text area where the user can edit it (the text and the category - if exists) and then update it.



    #-----------------------------ULTIMA TENTATIVA/OPCAO-----------------------
    #-----------------------------------------------------------------------
    #-------- Caminho onde é editado um item que (categoria e nota) e ambos são editados;
    #-------- Não é escrito nada na caixa da categoria, ou seja,
    #-------- já existe na lista, por isso o user vai ao spinner e escolher
    
    Scenario: Edit note successful
        Given the user is on the web application to edit a existing note
        And that note already has text
        And that note already has category
        And the user wants to edit the text
        And edit the category to one that already exists
        When the user clicks on the edit button
        And selects a new category from the list of categories
        And edits the text of the note
        And clicks the save button
        Then that note should now be updated on the list

#----- Caminho em que é a editção da nota é cancelada
    #Caminhos possiveis:
    #tas a editar a categoria e cancelas - logo ai tens 2 -
    #1º caso tenhas escrito uma categoria nova na caixa da categoria e carregas no save categoria, isso vai adicionar a
    #categoria nova à lista; logo se cancelas vais ter de eliminar isso da lista e meter o que estava antes
    #2º caso tenhas escolhido do spinner, apenas apaga e deixa o que estava
    #caso estejas a editar o texto da nota e cancelas
    #caso ja tenhas editado os dois e cancelas
    Scenario:



    #-------- Caminho onde é editado um item que (categoria e nota) e ambos são editados; é escrito uma categoria
    #-------- na caixa de texto que ja existe, ou seja,
    #-------- já existe na lista, por isso vai da erro e o user tem de ir ao spinner e escolher a que ja existe
    Scenario: Click to Edit note that exists
        Given the user is on the web application to edit a existing note
        And the note has category
        And the note has text
        When the button to edit is clicked on an specific note
        Then the note becomes editable

    Scenario: Write note category that exists
        Given the editable area of the category is editable
        When a new category text is written
        And the button to save category is pressed
        And the new category exist on the list of categoreis
        Then the system shows a messages that the catorgy alreday exists
    #ao fazer a app, quando da isto mostra a mensagem tambem apaga o que o user escreveu na categoria

    Scenario: Add category from list
        Given the new category exist on the list of categoreis
        When a new category is chosen from the list
        Then the content of the new category should contain the same category text


    Scenario: Edit note text
        Given the editable area of the note text is editable
        When new text is editable on the note
        Then the content of the note editable area contains the new text
    #ou aqui pode-se escrever logo tambem para guardar a nota, é escolher


    Scenario: Save editable note text and category successfully
        Given the editable area of the note text contains the new text of the note
        And the editable area of the category contains the new text of category of the note
        When the button to update is clicked
        Then the content of the note is updated with the new text
        And the content of the category is updated with the new text




    #------- Caminho onde é editado um item que (categoria e nota) e ambos são editados; é escrito uma categoria
    #------- na caixa de texto e não existe, ou seja,
    #------- não existe na lista de categorias, logo não é preciso ir ao spinner, é adicionada à lista quando
    #------- carregamos no botão de update da nota
    Scenario: Click to Edit note that exists
        Given the user is on the web application to edit a existing note
        And the note has category
        And the note has text
        When the button to edit is clicked on an specific note
        Then the note becomes editable

    Scenario: Write note category that doesn't exists
        Given the editable area of the category is editable
        When a new category text is written
        And the button to save category is pressed
        And the new category doesn't exists on the list of categoreis
        Then the new category is added to the list of categoreis
        And the content of the category editable area contains the new category
    #ao fazer a app, quando da isto mostra a mensagem tambem apaga o que o user escreveu na categoria

    Scenario: Edit note text
        Given the editable area of the note text is editable
        When new text is editable on the note
        Then the content of the note editable area contains the new text
    #ou aqui pode-se escrever logo tambem para guardar a nota, é escolher

    Scenario: Save editable note text and category successfully
        Given the editable area of the note text contains the new text of the note
        And the editable area of the category contains the new text of category of the note
        When the button to update is clicked
        Then the content of the note is updated with the new text
        And the content of the category is updated with the new text



    #-------- Caminho onde é editado um item que só tem texto (nota) mas não tem categoria, e vai continuar a não ter
    #-------- categoria, ou seja,
    #-------- é mesmo uma nota sem categoria e só é editado o texto da nota
    Scenario: Click to Edit note that exists
        Given the user is on the web application to edit a existing note
        And the note has no category
        But the note has text
        When the button to edit is clicked on an specific note
        Then the note becomes editable

    Scenario: Edit note text
        Given the editable area of the note text is editable
        When new text is editable on the note
        Then the content of the note editable area contains the new text
    #ou aqui pode-se escrever logo tambem para guardar a nota, é escolher
    #OU JUNTAR
    Scenario: Save note text that was edited successfully
        Given the editable area of the note text contains the new text of the note
        And the editable area of the category contains no text
        When the button to update is clicked
        Then the content of the note is updated with the new text



    #-------- Caminho onde é editado um item que tem (categoria e nota),
    #-------- e vai ser apagada a cateogira
    #-------- e é editado o texto da nota
    Scenario: Click to Edit note that exists
        Given the user is on the web application to edit a existing note
        And the note has category
        But the note has text
        When the button to edit is clicked on an specific note
        Then the note becomes editable

    Scenario: Delete category text
        Given the editable area of the category is editable
        When a the category is deleted
        And the button to save category is pressed
        Then the content of the category editable area contains no text

    Scenario: Edit note text
        Given the editable area of the note text is editable
        When new text is editable on the note
        Then the content of the note editable area contains the new text
    #ou aqui pode-se escrever logo tambem para guardar a nota, é escolher
    #OU JUNTAR
    Scenario: Save note where category was deleted and text was edited successfully
        Given the editable area of the note text contains the new text of the note
        And the editable area of the category contains no text
        When the button to update is clicked
        Then the content of the note is updated with the new text



    #-------- Caminho onde é editado um item que tem (categoria e nota),
    #-------- e vai ser apagada a cateogira
    #-------- e o texto da nota não é editado
    Scenario: Click to Edit note that exists
        Given the user is on the web application to edit a existing note
        And the note has category
        But the note has text
        When the button to edit is clicked on an specific note
        Then the note becomes editable

    Scenario: Delete category
        Given the editable area of the category is editable
        When a the category is deleted
        And the button to save category is pressed
        Then the content of the category editable area contains no text
    #OU JUNTAR
    Scenario: Save note where category was deleted successfully
        Given the editable area of the category contains no text
        When the button to update is clicked
        Then the note is updated



    #-------- Caminho onde é um item que tem (categoria e nota),
    #-------- vai ser apagado o texto da nota não, ou seja, só vai
    #-------- ficar com a categoria, vai dar erro
    Scenario: Click to Edit note that exists
        Given the user is on the web application to edit a existing note
        And the note has category
        But the note has text
        When the button to edit is clicked on an specific note
        Then the note becomes editable

    Scenario: Delete text note
        Given the editable area of the note text is editable
        When all the text of the note is deleted
        Then the content of the note on the editable area contains no text
    #OU JUNTAR
    Scenario: Save note where text note was deleted
        Given the editable area of the note text contains no text
        When the button to update is clicked
        Then the application should display an error message
        And the note is not updated



    #-------- Caminho onde um item que tem (categoria e nota) só é editado o texto da nota,
    #-------- ou seja, a categoria vai ficar igual e o texto muda
    Scenario: Click to Edit note that exists
        Given the user is on the web application to edit a existing note
        And the note has category
        But the note has text
        When the button to edit is clicked on an specific note
        Then the note becomes editable

    Scenario: Edit note text
        Given the editable area of the note text is editable
        When new text is editable on the note
        Then the content of the note editable area contains the new text
    #ou aqui pode-se escrever logo tambem para guardar a nota, é escolher
    #OU JUNTAR
    Scenario: Save note text that was edited successfully
        Given the editable area of the note text contains the new text of the note
        When the button to update is clicked
        Then the content of the note is updated with the new text



    #-------- Caminho onde é editado um item que tem (categoria e nota) mas só é editada a categoria
    #-------- ou seja, o texto da nota vai continuar igual; neste caso, categoria vai ser escolhida
    #-------- da lista que já existe, ou seja o user não vai escrever nada na categoria
    #-------- mas vai usar o spinner
    Scenario: Click to Edit note that exists
        Given the user is on the web application to edit a existing note
        And the note has category
        And the note has text
        When the button to edit is clicked on an specific note
        Then the note becomes editable

    Scenario: Add category from list
        Given the category becomes editable
        When a new category is chosen from the list
        Then the content of the new category should contain the same category text
    #OU JUNTAR TUDO
    Scenario: Save category that was edited successfully
        Given the editable area of the category contains the new text of category of the note
        When the button to update is clicked
        Then the content of the category is updated with the new category



    #-------- Caminho onde é editado um item que tem (categoria e nota) mas só é editada a categoria
    #-------- ou seja, o texto da nota vai continuar igual; neste caso é escrito uma categoria que
    #-------- já existe, por isso vai dar erro e o user tem de ir ao spinner e escolher a que ja existe
    Scenario: Click to Edit note that exists
        Given the user is on the web application to edit a existing note
        And the note has category
        And the note has text
        When the button to edit is clicked on an specific note
        Then the note becomes editable

    Scenario: Write note category that exists
        Given the editable area of the category is editable
        When a new category text is written
        And the button to save category is pressed
        And the new category exist on the list of categoreis
        Then the system shows a messages that the catorgy alreday exists
    #ao fazer a app, quando da isto mostra a mensagem tambem apaga o que o user escreveu na categoria

    Scenario: Choose category from list
        Given the new category exist on the list of categoreis
        When a new category is chosen from the list
        Then the content of the new category should contain the same category text
    #OU JUNTAR TUDO
    Scenario: Save category that was edited successfully
        Given the editable area of the category contains the new text of category of the note
        When the button to update is clicked
        Then the content of the category is updated with the new category


    #------- Caminho onde item que só tem texto (nota) é editada a cor do texto - talvez tentar juntar estes
    Scenario: Click to Edit note that exists
        Given the user is on the web application to edit a existing note
        And the note has text
        When the button to edit is clicked on an specific note
        Then the note becomes editable

    Scenario: Edit note text color
        Given the editable area of the note text is editable
        When a new color is picked from the color pallet
        Then the color of the content of the note in the editable area changes
        And the new color is given to "Pick a Color" selector

    Scenario: Save note text with new color successfully
        Given the editable area of the note text contains the new text with the new color
        When the button to updated is clicked
        Then the content of the note is updated with the new text color



    #------- Caminho onde item que só tem texto (nota) é editado o tamanho do texto - talvez tentar juntar estes
    Scenario: Click to Edit note that exists
        Given the user is on the web application to edit a existing note
        And the note has text
        When the button to edit is clicked on an specific note
        Then the note becomes editable

    Scenario: Edit note text color
        Given the editable area of the note text is editable
        When a new text size is chosen from the "Size" selector
        Then the text size of the content of the note in the editable area changes
        And the new value of the text size is given to the "Size" selector too

    Scenario: Save note text with new size successfully
        Given the editable area of the note text contains the new text with the new size
        When the button to updated is clicked
        Then the content of the note is updated with the new text size



    #------- Caminho onde é guardada uma nota sem sem categoria e sem texto na nota
    Scenario: Click to Edit note that exists
        Given the user is on the web application to edit a existing note
        And the note has category
        And the note has text
        When the button to edit is clicked on an specific note
        Then the note becomes editable

    Scenario: Delete category text
        Given the editable area of the category is editable
        When a the category is deleted
        And the button to save category is pressed
        Then the content of the category editable area contains no text

    Scenario: Delete text note
        Given the editable area of the note text is editable
        When all the text of the note is deleted
        Then the content of the note on the editable area contains no text

    Scenario: Save emptey note with no category
        Given the editable area of the note text contains the no text
        And the editable area of the category contains no text
        When the button to update is clicked
        Then the application should display an error message
        And the note is not updated




