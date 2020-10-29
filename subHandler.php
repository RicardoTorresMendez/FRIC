<?php 

//header( "Content-Type: application/json" );
$conn = mysqli_connect( "localhost", "root", "", "fric" );

// Check connection
if ($conn -> connect_errno) {
  echo "Failed to connect to MySQL: " . $conn -> connect_error;
  exit();
}


$title = $_POST[ "subtaskTitle" ];
$description = $_POST[ "subtaskDescription" ];
$progress = $_POST[ "subtaskProgress" ];
$dueDate = $_POST[ "subtaskDueDate" ];
$analysts = $_POST[ "subtaskAnalysts" ];
$collaborators = $_POST[ "subtaskCollaborators" ];
$relatedTasks = $_POST[ "subtaskRelatedTasks" ];
$subtasks = $_POST[ "subtaskSubtasks" ];
$attachment = $_POST[ "subtaskAttachment" ];



$upload = "INSERT into subtask (Title,Description,Progress,DueDate,Analysts,Collaborators,Task,Subtasks,Attachment) values ('$title','$description',	'$progress','$dueDate','$analysts','$collaborators','$relatedTasks','$subtasks','$attachment')";

$result = mysqli_query($conn, $upload);

$conn->close();

?>