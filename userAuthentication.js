const formData = new FormData();
formData.append("request", "authenticate");

fetch("connectToDatabase.php", {
        method: 'POST',
        body: formData
  }).then(response => response.json())
  .then(function(response){

  	if( response ){
  		window.location = "event.html";
  	}

});