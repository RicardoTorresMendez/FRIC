<?php 

//header( "Content-Type: application/json" );


$conn = mysqli_connect( "localhost", "root", "", "fric" );

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
$sCTG = $_POST[ "eventSCTG" ];
$classification = $_POST[ "eventClassification" ];
$declassificationDate = $_POST[ "eventDeclassificationDate" ];
$customerName = $_POST[ "eventCustomerName" ];
$analysts = $_POST[ "eAnalysts" ];


$upload = "INSERT into event (Name, Description, Type, Version, AssessmentDate, OrganizationName, SCTG, Classification, DeclassificationDate, CustomerName, Analysts) values ('$name','$description','$type','$version',now(),'$organizationName','$sCTG','$classification',now(),'$customerName','$analysts')";

$result = mysqli_query($conn, $upload);

$conn->close();

?>