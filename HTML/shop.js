const list = document.getElementById('itemList');
const input = document.getElementById('itemInput');
const button = document.querySelector('button');
button.addEventListener("click" ,function(){
let newItem = input.value;
input.value = "";

let itemList = document.createElement('li');
let itemText = document.createElement('span');
let removeButton = document.createElement('button');
let editButton = document.createElement('button');

itemList.appendChild(itemText);
itemText.textContent = (newItem);

itemList.appendChild(removeButton);
removeButton.textContent = 'Remove';

itemList.appendChild(editButton);
editButton.textContent ='Edit';

list.appendChild(itemList);

    removeButton.onclick = function() {
        list.removeChild(itemList);
    };

    editButton.onclick = function() {
        if(editButton.textContent === "Edit"){
            itemText.contentEditable = "true";
            itemText.focus();
            editButton.textContent = "Save";
        }else{
            itemText.contentEditable ="false";
            editButton.textContent = "Edit";
        }
    };

input.focus();
});