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
else if( $_POST[ "request" ] == "" ){
	
}
else if( $_POST[ "request" ] == "" ){
	
}


$conn->close();

