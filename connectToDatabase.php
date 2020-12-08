<?php 

header( "Content-Type: application/json" );

$conn = mysqli_connect( "localhost", "root", "", "fric" );

// Check connection
if ($conn -> connect_errno) {
  echo "Failed to connect to MySQL: " . $conn -> connect_error;
  exit();
}

if( $_POST[ "request" ] == "firstAccess" ){
	$initials = $_POST[ "initials" ];
	$role = $_POST[ "lead" ];
	$privateIP = $_POST[ "IP" ];
	$fn = $_POST[ "firstName" ];
	$ln = $_POST[ "lastName" ];
	$machine_ip = getHostByName(getHostName());
	$upload = "INSERT into analysts (Initial, Role, IP, PDIP, FirstName, LastName) values ('$initials', '$role', '$privateIP', '$machine_ip', '$fn', '$ln')";
	$result = mysqli_query($conn, $upload);

	echo json_encode( $result );
}
else if( $_POST[ "request" ] == "authenticate" ){
	$machine_ip = getHostByName(getHostName());
	$query = "Select count(*) from analysts WHERE PDIP = '$machine_ip'";
	$result = mysqli_query($conn, $query);
	$response = [];
	while($row = mysqli_fetch_assoc($result)){
		array_push($response, $row);
	}
	echo json_encode( $response[ 0 ][ "count(*)" ] > 0 );
}
else if( $_POST[ "request" ] == "findings" ){
	$query = "Select ID, Title, Finding_System, Task, Subtask, Analyst, Finding_Status, Classification, Type, Risk from finding WHERE Archived='0'";
	$response = [];
	$result = mysqli_query($conn, $query);
	while($row = mysqli_fetch_assoc($result)){
		array_push($response, $row);
	}
	echo json_encode( $response );
}
else if( $_POST[ "request" ] == "uploadFinding" ){
	$v1 = $_POST[ "v1" ];
	$v2 = $_POST[ "v2" ];
	$v3 = $_POST[ "v3" ];
	$v4 = $_POST[ "v4" ];
	$v5 = $_POST[ "v5" ];
	$v6 = $_POST[ "v6" ];
	$v7 = $_POST[ "v7" ];
	$v8 = $_POST[ "v8" ];
	$v9 = $_POST[ "v9" ];
	$v10 = $_POST[ "v10" ];
	$v11 = $_POST[ "v11" ];
	$v12 = $_POST[ "v12" ];
	$v13 = $_POST[ "v13" ];
	$v14 = $_POST[ "v14" ];
	$v15 = $_POST[ "v15" ];
	$v16 = $_POST[ "v16" ];
	$v17 = $_POST[ "v17" ];
	$v18 = $_POST[ "v18" ];
	$v19 = $_POST[ "v19" ];
	$v20 = $_POST[ "v20" ];
	$v21 = $_POST[ "v21" ];
	$v22 = $_POST[ "v22" ];
	$v23 = $_POST[ "v23" ];
	$v24 = $_POST[ "v24" ];
	$v25 = $_POST[ "v25" ];
	$v26 = $_POST[ "v26" ];
	$v27 = $_POST[ "v27" ];
	$v28 = $_POST[ "v28" ];
	$v29 = $_POST[ "v29" ];
	$v30 = $_POST[ "v30" ];
	$v31 = $_POST[ "v31" ];
	$v32 = $_POST[ "v32" ];
	$v33 = $_POST[ "v33" ];
	$v34 = $_POST[ "v34" ];

	$upload = "INSERT into finding (Title, Finding_System, Task, Subtask, Analyst, Finding_Status, Classification, Type, Risk, Host_Name, IP_Port, Description, Long_Description, Evidence, Related_Findings, Confidentiality, Integrity, Availability, Archived, Collaborator, Posture, Mitigation_Brief_Description, Mitigation_Long_Description, Relevance, Effectiveness_Rating, Impact_Description, Impact_Level, Severity_Category_Score, Vulnerability_Severity, Quantitative_Vulnerability_Severity, Likelihood, Confidentiality_Finding_Impact_on_System, Integrity_Finding_Impact_on_System, Availability_Finding_Impact_on_System, Finding_Impact_Score) values ( '$v1', '$v10', '$v11', '$v12', '$v17', '$v6', '$v8', '$v7', '$v29', '$v2', '$v3', '$v4', '$v5', '$v9', '$v13', '$v14', '$v15', '$v16', '0', '$v18', '$v19', '$v20', '$v21', '$v22', '$v23', '$v24', '$v25', '$v26', '$v27', '$v28', '$v30', '$v31', '$v32', '$v33', '$v34' )";
	$result = mysqli_query($conn, $upload);
	echo json_encode( $result );
}
else if( $_POST[ "request" ] == "" ){
	
}


$conn->close();

