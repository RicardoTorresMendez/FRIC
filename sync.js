document.getElementById("sync").addEventListener("click", function( e ){

	var IP = document.getElementById("IPAddress").value;

	fetch( IP + "/syncRequest.php", {
        method: 'POST',
        body: formData
  }).then(response => response.json())
  .then(function(response){

  	

	});

}


