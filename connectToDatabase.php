<?php 

header( "Content-Type: application/json" );

$conn = mysqli_connect( "localhost", "root", "", "fric" );

// Check connection
if ($conn -> connect_errno) {
  echo "Failed to connect to MySQL: " . $conn -> connect_error;
  exit();
}

if( $_GET[ "request" ] == "firstSync" ){
	
}
else if( $_GET[ "request" ] == "" ){

}
else if( $_GET[ "request" ] == "" ){
	
}
else if( $_GET[ "request" ] == "" ){
	
}
else if( $_GET[ "request" ] == "" ){
	
}

$conn->close();

