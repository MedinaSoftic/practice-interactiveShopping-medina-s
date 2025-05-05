const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');
button.onclick = function(){
let newItem = input.value;
input.value = "";

let itemList = document.createElement('li');
let itemText = document.createElement('span');
let itemButton = document.createElement('button');

itemList.appendChild(itemText);
itemText.textContent = (newItem);

itemList.appendChild(itemButton);
itemButton.textContent = 'Remove';

list.appendChild(itemList);

itemButton.onclick = function() {
    list.removeChild(itemList);
}

input.focus()
}   