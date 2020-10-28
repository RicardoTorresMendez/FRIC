document.getElementById("submit").addEventListener("click", function( e ) {//submit is in line 197 in task.html
  e.preventDefault();
  var tTitle = document.getElementById("taskTitle").value;
  var tDescription = document.getElementById("taskDescription").value;
  var tSystem = document.getElementById("taskSystem").value;
  var tProgress = document.getElementById("taskProgress").value;
  var tDueDate = document.getElementById("taskDueDate").value;
  var tAttachment = document.getElementById("taskAttachment").value;
  var tPriority = document.getElementById("taskPriority").value;

  var tAnalysts = $('#taskAnalysts').val().join();//this gets multiple values, converts to array with val(), then to comma separated list with join()
  var tTaskFindings = $('#taskFindings').val().join();
  var tCollaborators = $('#taskCollaborators').val().join();
  var tRelatedTasks = $('#taskTasks').val().join();
  var tSubtasks = $('#taskSubtasks').val().join();
 
  const formData = new FormData();
  formData.append("taskTitle", tTitle);
  formData.append("taskSystem", tSystem);
  formData.append("taskAnalysts", tAnalysts);
  formData.append("taskPriority", tPriority);
  formData.append("taskDescription", tDescription);
  formData.append("taskProgress", tProgress);
  formData.append("taskDueDate", tDueDate);
  formData.append("taskFindings", tTaskFindings);
  formData.append("taskCollaborators", tCollaborators);
  formData.append("taskRelatedTasks", tRelatedTasks);
  formData.append("taskSubtasks", tSubtasks);
  formData.append("taskAttachment", tAttachment);

  

  fetch("tHandler.php", {
        method: 'POST',
        body: formData
    }).then(function(){
      refreshTasks();
      alert( "submitted" );
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });

});

