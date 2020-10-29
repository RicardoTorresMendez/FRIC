<?php 

//header( "Content-Type: application/json" );


$conn = mysqli_connect( "localhost", "root", "", "fric" );

// Check connection
if ($conn -> connect_errno) {
  echo "Failed to connect to MySQL: " . $conn -> connect_error;
  exit();
}

$first = $_POST[ "first" ];
$last = $_POST[ "last" ];
$initials = $_POST[ "initials" ];
$title = $_POST[ "title" ];
$role = $_POST[ "role" ];


$upload = "INSERT into analysts (FirstName, LastName, Initial, Title, Role) values ('$first','$last','$initials','$title','$role')";

$result = mysqli_query($conn, $upload);

$conn->close();

?>