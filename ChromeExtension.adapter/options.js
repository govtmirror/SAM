function save_options() {
  var select = document.getElementById("mode");
  var mode = select.children[select.selectedIndex].value;
  localStorage["helperMode"] = mode;

  // Update status to let user know options were saved.
  var status = document.getElementById("status");
  status.innerHTML = "Options Saved.";
  setTimeout(function() {
    status.innerHTML = "";
  }, 750);
}

// Restores select box state to saved value from localStorage.
function restore_options() {
  var mode = localStorage["helperMode"];
  if (!mode) {
    return;
  }
  var select = document.getElementById("mode");
  for (var i = 0; i < select.children.length; i++) {
    var child = select.children[i];
    if (child.value == mode) {
      child.selected = "true";
      break;
    }
  }
}
document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);
