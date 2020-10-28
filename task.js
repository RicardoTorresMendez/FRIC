function closeForm() {
  var addTaskForm = document.getElementById("addTask");
  if (addTaskForm.style.display === "none") {
    addTaskForm.style.display = "block";
  } else {
    addTaskForm.style.display = "none";
  }
}


function addFormAppear() {
	var addTaskForm = document.getElementById("addTask");
	if(addTaskForm.style.display === "none") {
		addTaskForm.style.display = "block"
	}
}