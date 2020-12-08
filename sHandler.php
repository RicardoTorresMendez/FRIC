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
$location = $_POST[ "sLocation" ];
$router = $_POST[ "sRouter" ];
$switch = $_POST[ "sSwitch" ];
$room = $_POST[ "sRoom" ];
$testPlan = $_POST[ "sTestPlan" ];
$confidentiality = $_POST["sConfidentiality"];
$integrity = $_POST["sIntegrity"];
$availability = $_POST["sAvailability"];


$upload = "INSERT into systems (Name, Description, Location, Router, Switch, Room, TestPlan, confidentiality, integrity, availability) values ('$name','$description','$location','$router','$switch','$room','$testPlan', '$confidentiality', '$integrity', '$availability')";

$result = mysqli_query($conn, $upload);



$conn->close();

?>