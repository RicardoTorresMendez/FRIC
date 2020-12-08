<?php 

//header( "Content-Type: application/json" );

$conn = mysqli_connect( "localhost", "root", "", "fric" );

// Check connection
if ($conn -> connect_errno) {
  echo "Failed to connect to MySQL: " . $conn -> connect_error;
  exit();
}

$title = $_POST[ "taskTitle" ];
$description = $_POST[ "taskDescription" ];
$system = $_POST[ "taskSystem" ];
$analysts = $_POST[ "taskAnalysts" ];
$priority = $_POST[ "taskPriority" ];
$progress = $_POST[ "taskProgress" ];
$dueDate = $_POST[ "taskDueDate" ];
$findings = $_POST[ "taskFindings" ];
$collaborators = $_POST[ "taskCollaborators" ];
$relatedTasks = $_POST[ "taskRelatedTasks" ];
$subtasks = $_POST[ "taskSubtasks" ];
$attachment = $_POST[ "taskAttachment" ];




$upload = "INSERT into task (Title,Description,System,Progress,DueDate,Analysts,Collaborators,RelatedTasks, Subtasks,Findings,Attachment,Priority,Archived) values	('$title','$description','$system','$progress','$dueDate','$analysts','$collaborators','$relatedTasks','$subtasks','$findings','$attachment', '$priority', '0')";

$result = mysqli_query($conn, $upload);

$upload = "INSERT into systemtasks values('$system', '$title');";
mysqli_query($conn, $upload);

$conn->close();

?>