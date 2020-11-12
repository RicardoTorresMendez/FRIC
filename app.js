document.getElementById("submit").addEventListener("click", function( e ) {
  e.preventDefault();
  
  const formData = new FormData();
  var initials = document.getElementById("initials").value;
  var privateIP = document.getElementById("privateIP").value;
  if( initials.length < 1 ){
  	alert("please input analyst initials");
  	return;
  }
  if( privateIP.length < 1 ){
    alert("please input your private IP address initials");
    return;
  }
  formData.append("IP", privateIP);
  var leadSelected = document.getElementById("eventOptions");
  var IP = document.getElementById("IPAddress").value;
  if( leadSelected.selectedIndex == 1 ){
    if( IP.length < 1 ){
      alert("please input an IP address to sync with");
      return;
    }
    formData.append("syncIP", IP);
  }

  //------------------------data validation above--------------------------------
  formData.append("firstName", document.getElementById("fName").value);
  formData.append("lastName", document.getElementById("lName").value);
  formData.append("request", "firstAccess");
  formData.append("initials", initials);
  formData.append("lead", leadSelected.selectedIndex);

  

  fetch("connectToDatabase.php", {
        method: 'POST',
        body: formData
  }).then(response => response.json())
  .then(function(response){

        console.log( response );

      //check if IP could not be found on network
      //redirect control to Lead Analyst if conflicts are found, notify analyst of this
      //once the conflicts are resolved, then show analyst the event access

      if( leadSelected.selectedIndex == 1 ){
        alert("Waiting for Sync to complete");
    
      }
      else{
        alert("submitted");
        window.location = "event.html";
      }

    });


});
