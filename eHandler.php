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

$name = $_POST[ "eName" ];
$description = $_POST[ "eDescription" ];
$type = $_POST[ "eType" ];
$version = $_POST[ "eVersion" ];
$assessmentDate = $_POST[ "eAssessmentDate" ];
$organizationName = $_POST[ "eOrganizationName" ];
$sCGT = $_POST[ "eSCGT" ];
$classification = $_POST[ "eClassification" ];
$declassificationDate = $_POST[ "eDeclassificationDate" ];
$customerName = $_POST[ "eCustomerName" ];
$analysts = $_POST[ "eAnalysts" ];


$upload = "INSERT into event (Name, Description, Type, Version, AssessmentDate, OrganizationName, SCGT, Classification, DeclassificationDate, CustomerName, Analysts) values ('$name','$description','$type','$version',now(),'$organizationName','$sCGT','$classification',now(),'$customerName','$analysts')";  

$result = mysqli_query($conn, $upload);

//$results = array();

//$query = "SELECT ID, lat, lon, nodes FROM completeRoutes";

//$result_set = mysqli_query( $conn, $query );


$conn->close();

?>