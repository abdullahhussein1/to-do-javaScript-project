const textField = document.querySelector('#textField');
const addBtn = document.querySelector('.btn');
const ul = document.querySelector('.userList');
let img;
let newButton;
let text;
let checkBox;
let select;
const pinUl = document.querySelector('.pinned');
const pinDiv = document.querySelector('.pinnedDiv');
pinDiv.appendChild(pinUl);
const completeUl = document.querySelector('.completed-list');
const completeDiv = document.querySelector('.completed-div');
pinDiv.appendChild(pinUl);
let doneBtn;


textField.addEventListener('keypress',e=>{
    if(e.key ==='Enter' && textField.value!=''){
        e.preventDefault();
        
        newButton = document.createElement('button');
        newButton.className='li-btn';
        newButton.id='newBtn';

        select = document.createElement('select');
            select.className='select-class';
            select.innerHTML='<option value="0"></option>'+'<option value="1">pin</option>'+'<option value="2">edit</option>'+'<option value="3">remove</option>'
            select.options[1].style.color='green';
            select.options[2].style.color='green';
            select.options[3].style.color='red';

        img = document.createElement('img');
        img.src='delete.png';

        newButton.appendChild(img);

        checkBox = document.createElement('input');
        checkBox.setAttribute('type','checkbox');
        checkBox.setAttribute('checked','checked');
        checkBox.className='check-box';

        textDiv = document.createElement('div');
        textDiv.className='text-div';
        text=document.createTextNode(textField.value);
        textDiv.appendChild(text);


        li = document.createElement('li');
        li.id='myList';
        li.appendChild(checkBox);
        li.appendChild(textDiv);
        li.appendChild(select);
        
        
        ul.appendChild(li);
        
        textField.value='';
    }
})


document.addEventListener('click',e=>{
    // e.preventDefault();
    //todos select button
    if (e.target.className=='select-class') {
        if (e.target.value==1) {
            pinUl.appendChild(e.target.parentElement);
            e.target.className='pinned-class';
            e.target.options[1].textContent='unpin';
            return;
        }else if (e.target.value==2) {
            e.target.previousElementSibling.setAttribute('contenteditable','true');
            console.log(e.target.previousElementSibling);
            doneBtn=document.createElement('button');
            doneBtn.textContent='done';
            doneBtn.className='done-btn';
            ul.appendChild(doneBtn,e.target);
        }else if (e.target.value==3) {
            e.target.parentElement.remove();
        }
    }

    // Pinnedtodos select button
    if (e.target.className=='pinned-class') {
        if (e.target.value==1) {
            e.target.className='select-class';
            ul.appendChild(e.target.parentElement);
            e.target.options[1].textContent='pin';
            return;
        }else if (e.target.value==2) {
            e.target.previousElementSibling.setAttribute('contenteditable',true);
        }else if (e.target.value==3) {
            e.target.parentElement.remove();
        }
    }

    //checkBox
    if (e.target.className=='check-box') {
        if (checkBox.checked==true) {
            completeUl.appendChild(e.target.parentElement)
            e.target.nextElementSibling.style.textDecoration='line-through';
        }else{
            ul.appendChild(e.target.parentElement)
            e.target.nextElementSibling.style.textDecoration='none';
        }
    }
})



//----------------- traversy media dom -----------------

// var form = document.getElementById('addForm');
// var itemList = document.getElementById('items');
// var filter = document.getElementById('filter');

// // Form submit event
// form.addEventListener('submit', addItem);
// // Delete event
// itemList.addEventListener('click', removeItem);
// // Filter event
// filter.addEventListener('keyup', filterItems);

// // Add item
// function addItem(e){
//   e.preventDefault();

//   // Get input value
//   var newItem = document.getElementById('item').value;

//   // Create new li element
//   var li = document.createElement('li');
//   // Add class
//   li.className = 'list-group-item';
//   // Add text node with input value
//   li.appendChild(document.createTextNode(newItem));

//   // Create del button element
//   var deleteBtn = document.createElement('button');

//   // Add classes to del button
//   deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

//   // Append text node
//   deleteBtn.appendChild(document.createTextNode('X'));

//   // Append button to li
//   li.appendChild(deleteBtn);

//   // Append li to list
//   itemList.appendChild(li);
// }

// // Remove item
// function removeItem(e){
//   if(e.target.classList.contains('delete')){
//     if(confirm('Are You Sure?')){
//       var li = e.target.parentElement;
//       itemList.removeChild(li);
//     }
//   }
// }

// // Filter Items
// function filterItems(e){
//   // convert text to lowercase
//   var text = e.target.value.toLowerCase();
//   // Get lis
//   var items = itemList.getElementsByTagName('li');
//   // Convert to an array
//   Array.from(items).forEach(function(item){
//     var itemName = item.firstChild.textContent;
//     if(itemName.toLowerCase().indexOf(text) != -1){
//       item.style.display = 'block';
//     } else {
//       item.style.display = 'none';
//     }
//   });
// }