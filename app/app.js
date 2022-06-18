const addBtn = document.querySelector('#add');
const textArea = document.querySelector('.text-area textarea');
const notes = document.querySelector('.notes');
const colorInput =document.querySelector('#color');
const sizeInput = document.querySelector('#size');
const addCategoryBtn = document.querySelector('#buttonAddCategory');
const newCategoryText = document.querySelector('#categoryText')
const noteCategory = document.querySelector('#category');


var test = "";
var text_note = "";

// Adding Notes by clocking the Add button.
//TEST COMMENT JENKINS2
addBtn.addEventListener('click',(e)=>{
    if(textArea.value === ''){
        alert('Please Enter a note.');
        return;
    }

    //button edit
    const buttonEditNote = document.createElement('button');
    buttonEditNote.id = "button-edit";
    buttonEditNote.innerHTML = 'Edit';
   

    //button delete note
    const buttonDeleteNote = document.createElement('button');
    buttonDeleteNote.id = "delete-note";
    buttonDeleteNote.innerHTML = 'Delete note';

    //button cancel edit note
    const buttonCancelEditNote = document.createElement('button');
    buttonCancelEditNote.id = "cancel-edit-note";
    buttonCancelEditNote.innerHTML = 'Cancel';

     //button save
     const buttonSaveEditNote = document.createElement('button');
     buttonSaveEditNote.id = "button-save-edit";
     buttonSaveEditNote.innerHTML = 'Save';

    //box divs
    const box = document.createElement('div');
    box.className ='box';
    const box1 = document.createElement('div');
    box1.className ='box';

    //p for the Note's category and description
    const text = document.createElement('p');
    const text1 = document.createElement('p');
    
    

    // Create a copy of it
    var clone = noteCategory.cloneNode(true);
    // Update the ID and add a class
    clone.id = 'category-on-box';


    //creating the divs to put in the category and note text
    const noteWithCatAndText = document.createElement('div');
    noteWithCatAndText.setAttribute("id", "note");

    const grid = document.createElement('div');
    grid.setAttribute("id", "grid");

    const cat = document.createElement('div');
    cat.setAttribute("id", "s3");

    const noteText = document.createElement('div');
    noteText.setAttribute("id", "s4");

    
    cat.appendChild(box);
    noteText.appendChild(box1);


    noteWithCatAndText.appendChild(grid);
    grid.appendChild(cat);
    grid.appendChild(noteText);
    noteWithCatAndText.appendChild(buttonEditNote);
    noteWithCatAndText.appendChild(buttonCancelEditNote);
    noteWithCatAndText.appendChild(buttonDeleteNote);
    noteWithCatAndText.appendChild(buttonSaveEditNote);
    
    

    //Putting the category and the description on the 2 boxes
    box1.style.padding= "15px 10px 15px 35px"
    box1.appendChild(text1);
   

    text.style.fontWeight = "900";
    box.style.backgroundColor = '#d5d5e7';
    box.appendChild(text);
    
    

    //Adding category spinner to category box
    box.appendChild(clone);

    
 
    //get the category from the spinner, into the note
    var selectedTextFromCategory = noteCategory.options[noteCategory.selectedIndex].text;
    if (selectedTextFromCategory == 'Select a Category' || selectedTextFromCategory == '') {
        text.innerHTML = "";
    } else {
        text.innerHTML = selectedTextFromCategory;
    }

    //get the text, into the note
    text1.innerHTML = textArea.value;

    text_note = textArea.value;

    text1.style.color = colorInput.value;
    text1.style.fontSize = sizeInput.value + 'px';
    if(textArea.value === text1.innerHTML){
        textArea.value = '';
    }


    //Edit button action
    buttonEditNote.addEventListener("click", function() {
        text.contentEditable = true;
        text1.contentEditable = true;
        buttonCancelEditNote.style.display="initial";
        buttonSaveEditNote.style.display="initial";
        
        clone.style.display="initial";
        
        
        var textToFind = text.innerHTML;

        for (var i = 0; i < clone.options.length; i++) {
            if (clone.options[i].text === textToFind) {
                clone.selectedIndex = i;
                break;
            }
        }  
        //save old category
        test = text.innerHTML;
        //save old note text
        text_note = text1.innerHTML;

        
       
    });


    //Cancel button action
    buttonCancelEditNote.addEventListener("click", function() {
        text.contentEditable = false;
        text1.contentEditable = false;
        buttonSaveEditNote.style.display="none";
        buttonCancelEditNote.style.display="none";
        clone.style.display="none";
        
        
        var textToFind = text.innerHTML;

        for (var i = 0; i < clone.options.length; i++) {
            if (clone.options[i].text === textToFind) {
                clone.selectedIndex = i;
                break;
            }
        }   
        //restoring the old values
        text.innerHTML = test;
        text1.innerHTML = text_note;
        
    });

    //Save button action
    buttonSaveEditNote.addEventListener("click", function() {
        
        var textCat = text.innerHTML;
        var flag = false;
        var selectedTextFromCategoryWhenEditingCategory = clone.options[clone.selectedIndex].text;

        //When user only change text
        if(textCat  == selectedTextFromCategoryWhenEditingCategory){
            text.innerHTML = selectedTextFromCategoryWhenEditingCategory;
        }
        //if category exists on the list and is not empty
        if ( textCat != test && text.innerHTML != ""){
            
            var length=document.getElementById('category').options.length;
            for ( var i=0; i <= length - 1; i++ ) {
                if (document.getElementById('category').options[i].text == textCat)  {
                    alert('Category already exists, please enter a different category.');
                    text.innerHTML = test;
                    flag = true;
                } 
                   
            }
            //
            if (flag) {
                return;
            } else {
                //Add category to list of category - if new category
                get_position('category', text.innerHTML);
                get_position('category-on-box', text.innerHTML);
                test = textCat;
            }
                  
        } else {
             text.innerHTML = selectedTextFromCategoryWhenEditingCategory;
        }

        if(text1.innerHTML === "" && text.innerHTML === "") {
            alert('Cant leave note text empty.');
            text1.innerHTML = text_note;
            text.innerHTML = test;
        } else if (text1.innerHTML === "") {
            alert('Cant leave note text empty.');
            text1.innerHTML = text_note;
        } else {
            text.contentEditable = false;
            text1.contentEditable = false;
            buttonSaveEditNote.style.display="none";
            buttonCancelEditNote.style.display="none";
        }
        clone.style.display="none";
    });

    buttonDeleteNote.addEventListener('click',()=>{
        noteWithCatAndText.remove();
    })

    notes.appendChild(noteWithCatAndText);
});


// Changing the color of the text.
colorInput.addEventListener('change',()=>{
    textArea.style.color = colorInput.value;
});
// Changing the font size of the text.
sizeInput.addEventListener('change',()=>{
    textArea.style.fontSize = sizeInput.value + 'px';
});

//Add a new category to the spinner of categories
addCategoryBtn.addEventListener('click',(e)=>{
    var flag = false;
    if(newCategoryText.value === ''){
        alert('The category must have some text!');
    }else{
        var length=document.getElementById('category').options.length;
        for ( var i=0; i <= length - 1; i++ ) {
            if (document.getElementById('category').options[i].text.toUpperCase() == newCategoryText.value.toUpperCase())  {
                alert('Category already exists, please enter a different category!');
                flag = true;
            }  
        }
        //if category is not repeated, we can add it
        if(!flag){
            var opt = document.createElement('option');
            opt.value = newCategoryText.value;
            opt.innerHTML = newCategoryText.value;
            noteCategory.appendChild(opt);
        }
    }
});

//Add new category to list of cateogry when editing if not exists
function get_position(id,option_name) {
    
    var length=document.getElementById(id).options.length;
    
    //add item on drop down now
    document.getElementById(id).options[length] = new Option( option_name, length );
    
}