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


$event = mysqli_query($conn, "Select ID from event WHERE Archived=0 LIMIT 1");
$event_id = mysqli_fetch_assoc($event)["ID"];

$upload = "INSERT into systems (Name, Description, Location, Router, Switch, Room, TestPlan, confidentiality, integrity, availability, RelatedEvent, Archived) values ('$name','$description','$location','$router','$switch','$room','$testPlan', '$confidentiality', '$integrity', '$availability', '$event_id', '0' )";

$result = mysqli_query($conn, $upload);



$conn->close();

?>