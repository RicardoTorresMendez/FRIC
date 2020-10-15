<?php 

//header( "Content-Type: application/json" );


$conn = mysqli_connect( "localhost", "root", "", "fric" );

// Check connection
if ($conn -> connect_errno) {
  echo "Failed to connect to MySQL: " . $conn -> connect_error;
  exit();
}

$name = $_POST[ "sName" ];
$description = $_POST[ "sDescription" ];
$location = $_POST[ "s" ];
$router = $_POST[ "s" ];
$switch = $_POST[ "s" ];
$room = $_POST[ "s" ];
$testPlan = $_POST[ "s" ];



$upload = "INSERT into systems (Name, Description, Location, Router, Switch, Room, TestPlan) values ('$name','$description','$location','$router','$switch','$room','$testPlan')";

$result = mysqli_query($conn, $upload);

//$results = array();

//$query = "SELECT ID, lat, lon, nodes FROM completeRoutes";

//$result_set = mysqli_query( $conn, $query );


$conn->close();

?>