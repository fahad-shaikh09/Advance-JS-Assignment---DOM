var form = document.getElementById('addForm'); //submit
var itemList = document.getElementById('items');  //ul
var field = document.getElementById('item');      // input

form.addEventListener('submit', newItem);
itemList.addEventListener('click', removeItem);


function newItem(e) {
    e.preventDefault();
    console.log('Item Added to list')
    // ADD item
    var itemValue = document.getElementById('item').value;
    console.log(itemValue);

    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(itemValue));
    itemList.appendChild(li);

     //Delete Item

    var deleteBtn = document.createElement('button');

    // Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    // Append button to li
    li.appendChild(deleteBtn);
}
    function removeItem(e){
        console.log('clicked X')
        if(e.target.classList.contains('delete')){
        var removeItem = e.target.parentElement;
        itemList.removeChild(removeItem);
 }
}

