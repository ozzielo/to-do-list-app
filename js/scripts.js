function newItem(){
  //Adds New Item to List:
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  let list = $('#list');
  if (inputValue === '') {
    alert('This field can not be left empty.');
  }else{
    list.append(li);
  }

  // Crossing out an item on the List
  li.on('click', function(){
    li.toggleClass('strike');
  });

  // Adds Delete button "X"
  let crossOutButton = $('<crossOutButton>x</crossOutButton>');
  li.append(crossOutButton);

  // Deletes Item From List
  crossOutButton.on('click', function(){
    li.addClass('delete');
  });

  // Adds Ability to Sort List items
  list.sortable();
}
