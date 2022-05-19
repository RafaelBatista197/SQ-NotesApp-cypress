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

    const box = document.createElement('div');
    box.className ='box';
    const text = document.createElement('p');
    const closeBtn = document.createElement('button');
    notes.appendChild(box);
    box.appendChild(text);
    box.appendChild(closeBtn);
    closeBtn.innerHTML = 'X';
    closeBtn.addEventListener('click',()=>{
        box.remove();
    })
    text.innerHTML = textArea.value;
    text.style.color = colorInput.value;
    text.style.fontSize = sizeInput.value + 'px';
    if(textArea.value === text.innerHTML){
        textArea.value = '';
    }
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