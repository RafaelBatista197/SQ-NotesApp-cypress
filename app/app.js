const addBtn = document.querySelector('#add');
const textArea = document.querySelector('.text-area textarea');
const notes = document.querySelector('.notes');
const colorInput =document.querySelector('#color');
const sizeInput = document.querySelector('#size');
const addCategoryBtn = document.querySelector('#buttonAddCategory');
const newCategoryText = document.querySelector('#categoryText')
const noteCategory = document.querySelector('#category');

// Adding Notes by clocking the Add button.
//TEST COMMENT JENKINS2
addBtn.addEventListener('click',(e)=>{
    if(textArea.value === ''){
        alert('Please Enter a note.');
        box.remove();
    }

   


    //button delete note
    const buttonDeleteNote = document.createElement('button');
    buttonDeleteNote.id = "delete-note";
    buttonDeleteNote.innerHTML = 'Delete note';

    //box divs
    const box = document.createElement('div');
    box.className ='box';
    const box1 = document.createElement('div');
    box1.className ='box';

    //p for the Note's category and description
    const text = document.createElement('p');
    const text1 = document.createElement('p');
    
    const closeBtn = document.createElement('button');
    const closeBtnCategory = document.createElement('button');

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
    noteWithCatAndText.appendChild(buttonDeleteNote);


    

    //Putting the category and the description on the 2 boxes
    box1.style.padding= "15px 10px 15px 35px"
    box1.appendChild(text1);
    box1.appendChild(closeBtnCategory);
    closeBtnCategory.innerHTML = 'X';
    closeBtnCategory.addEventListener('click',()=>{
        box1.remove();
    })

    text.style.fontWeight = "900";
    box.style.backgroundColor = '#d5d5e7';
    box.appendChild(text);
    box.appendChild(closeBtn);
    closeBtn.innerHTML = 'X';
    closeBtn.addEventListener('click',()=>{
        box.remove();
    })

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

    text.style.color = colorInput.value;
    text.style.fontSize = sizeInput.value + 'px';
    if(textArea.value === text.innerHTML){
        textArea.value = '';
    }

    

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
    if(newCategoryText.value === ''){
        alert('The category must have some text!');
        box.remove();
    }else{
        var opt = document.createElement('option');
        opt.value = newCategoryText.value;
        opt.innerHTML = newCategoryText.value;
        noteCategory.appendChild(opt);
    }
});