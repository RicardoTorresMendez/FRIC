<?php 

//header( "Content-Type: application/json" );


$conn = mysqli_connect( "localhost", "root", "", "fric" );

// Check connection
if ($conn -> connect_errno) {
  echo "Failed to connect to MySQL: " . $conn -> connect_error;
  exit();
}


$response = [];

$query = "Select Name, Title, findingTitle from systems natural join systemtasks natural join systemfindings;";

$result = mysqli_query($conn, $query);

while($row = mysqli_fetch_assoc($result)){
	array_push($response, $row);
}

echo json_encode($response);

$conn->close();

?>