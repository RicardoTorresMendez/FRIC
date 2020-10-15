<?php 
/*
Programed by Jose Torres Mendez
*/

//header( "Content-Type: application/json" );


$conn = mysqli_connect( "localhost", "ricardo", "hola", "fric" );

// Check connection
if ($conn -> connect_errno) {
  echo "Failed to connect to MySQL: " . $conn -> connect_error;
  exit();
}

$name = $_POST[ "eventName" ];
$description = $_POST[ "eventDescription" ];
$type = $_POST[ "eventType" ];
$version = $_POST[ "eventVersion" ];
$assessmentDate = $_POST[ "eventAssessmentDate" ];
$organizationName = $_POST[ "eventOrganizationName" ];
$sCGT = $_POST[ "eventSCGT" ];
$classification = $_POST[ "eventClassification" ];
$declassificationDate = $_POST[ "eventDeclassificationDate" ];
$customerName = $_POST[ "eventCustomerName" ];
$analysts = $_POST[ "eAnalysts" ];


$upload = "INSERT into event (Name, Description, Type, Version, AssessmentDate, OrganizationName, SCGT, Classification, DeclassificationDate, CustomerName, Analysts) values ('$name','$description','$type','$version',now(),'$organizationName','$sCGT','$classification',now(),'$customerName','$analysts')";  

$result = mysqli_query($conn, $upload);

//$results = array();

//$query = "SELECT ID, lat, lon, nodes FROM completeRoutes";

//$result_set = mysqli_query( $conn, $query );


$conn->close();

?>