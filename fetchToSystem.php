<?php 

//header( "Content-Type: application/json" );


$conn = mysqli_connect( "localhost", "root", "", "fric" );

// Check connection
if ($conn -> connect_errno) {
  echo "Failed to connect to MySQL: " . $conn -> connect_error;
  exit();
}

$query = "Select Id, Name, Title, findingTitle from systems natural join systemtasks natural join systemfindings;";
$systemtasks = "Select Id, Name, title from systems natural join systemtasks;";
$systemfindings = "Select Id, Name, findingtitle from systems natural join systemfindings;";
$systems = "Select Id, Name from systems";

$response = [];

$result = mysqli_query($conn, $query);
while($row = mysqli_fetch_assoc($result)){
	array_push($response, $row);
}
$result = mysqli_query($conn, $systemtasks);
while($row = mysqli_fetch_assoc($result)){
	array_push($response, $row);
}
$result = mysqli_query($conn, $systemfindings);
while($row = mysqli_fetch_assoc($result)){
	array_push($response, $row);
}
$result = mysqli_query($conn, $systems);
while($row = mysqli_fetch_assoc($result)){
	array_push($response, $row);
}
echo json_encode($response);

$conn->close();

?>