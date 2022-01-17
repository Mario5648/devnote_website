


/*
NOTE MODALS
*/

function open_details_note(task_id)
{
  // Get the modal
  var modal = document.getElementById("details_modal_note");

  // Get the button that opens the modal
  var btn = document.getElementById(task_id);

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  //open modal on button click
  modal.style.display = "block";

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

function add_note_modal()
{
  // Get the modal
  var modal = document.getElementById("modal_add_note");

  // Get the button that opens the modal
  var btn = document.getElementById("add_note");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[1];

  //open modal on button click
  modal.style.display = "block";

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
}


function open_edit_note_modal(task_id)
{
  // Get the modal
  var modal = document.getElementById("modal_edit_note");

  // Get the button that opens the modal
  var btn = document.getElementById(task_id);

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[2];

  //open modal on button click
  modal.style.display = "block";

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

function open_view_note_modal(task_id)
{
  // Get the modal
  var modal = document.getElementById("modal_view_note");

  // Get the button that opens the modal
  var btn = document.getElementById(task_id);

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[3];

  //open modal on button click
  modal.style.display = "block";

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}


function add_space_modal()
{
  // Get the modal
  var modal = document.getElementById("modal_add_space");

  // Get the button that opens the modal
  var btn = document.getElementById("add_space");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  //open modal on button click
  modal.style.display = "block";

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}
