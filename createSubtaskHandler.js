document.getElementById("submit").addEventListener("click", function( e ) {//submit is in line 197 in task.html
  e.preventDefault();
  var sTitle = document.getElementById("subtaskTitle").value;
  var sDescription = document.getElementById("subtaskDescription").value;
  var sProgress = document.getElementById("subtaskProgress").value;
  var sDueDate = document.getElementById("subtaskDueDate").value;
  var sAttachment = document.getElementById("attachment").value;

  var sAnalysts = $('#subtaskAnalysts').val().join();//this gets multiple values, converts to array with val(), then to comma separated list with join()
  var sCollaborators = $('#subtaskCollaborators').val().join();
  var sTask = $('#subtaskTasks').val().join();
  var sSubtasks = $('#subtaskSubtasks').val().join();

 
  const formData = new FormData();
  formData.append("subtaskTitle", sTitle);
  formData.append("subtaskDescription", sDescription);
  formData.append("subtaskProgress", sProgress);
  formData.append("subtaskDueDate", sDueDate);
  formData.append("subtaskAnalysts", sAnalysts);
  formData.append("subtaskCollaborators", sCollaborators);
  formData.append("subtaskTasks", sTask);
  formData.append("subtaskSubtasks", sSubtasks);
  formData.append("subtaskAttachment", sAttachment);

  

  fetch("subHandler.php", {
        method: 'POST',
        body: formData
    }).then(function(){
      refreshSubtasks();
      alert( "submitted" );
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });

});

