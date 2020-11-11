document.getElementById("submit").addEventListener("click", function( e ) {
  e.preventDefault();
  
  var request;
  const formData = new FormData();
  var initials = document.getElementById("initials").value;
  if( initials.length < 1 ){
  	alert("please input analyst initials");
  	return;
  }
  var leadSelected = document.getElementById("eventOptions");
  var IP = document.getElementById("IPAddress").value;
  if( leadSelected.selectedIndex == 1 ){
    if( IP.length < 1 ){
      alert("please input an IP address to sync with");
      return;
    }
    request = "analystFirst"
    formData.append("IP", IP);
  }
  else{ request = "leadFirst"; }

  //------------------------data validation above--------------------------------

  formData.append("Initials", initials);
  formData.append("lead", leadSelected.selectedIndex);

  fetch("connectToDatabase.php?request=" + request, {
        method: 'POST',
        body: formData
  }).then(response => response.json())
  .then(function(response){

      alert("submitted");

      //check if IP could not be found on network
      //redirect control to Lead Analyst if conflicts are found, notify analyst of this
      //once the conflicts are resolved, then show analyst the event access
    });


  window.location = "event.html";

});
