document.getElementById("sync").addEventListener("click", function( e ) {
  e.preventDefault();
  
  var eName = document.getElementById("eventName").value;
  var eDescription = document.getElementById("eventDescription").value;
  var eType = document.getElementById("eventType").value;
  var eVersion = document.getElementById("eventVersion").value;
  var eAssesmentDate = document.getElementById("eventAssesmentDate").value;
  var eOrganizationName = document.getElementById("eventOrganizationName").value;
  var eSCTG = document.getElementById("eventSCTG").value;
  var eClassification = document.getElementById("eventClassification").value;
  var eDeclassificationDate = document.getElementById("eventDeclassificationDate").value;
  var eCustomerName = document.getElementById("eventCustomerName").value;
  //---------------------------------------------------------------------------------
  var box1check1 = document.getElementById("leadAnalstyCheck1").checked;
  var box1check2 = document.getElementById("leadAnalstyCheck2").checked;
  var box1check3 = document.getElementById("leadAnalstyCheck3").checked;
  var box2check1 = document.getElementById("analystCheck1").checked;
  var box2check2 = document.getElementById("analystCheck2").checked;
  var box2check3 = document.getElementById("analystCheck3").checked;

  //idealy we would use the unique identifier assigned to each analyst instead of name
  var eAnalysts = ""; //concatinate all names of the included analysts (separate by ',')
  if( box1check1 ){ eAnalysts = eAnalysts + "Michael Jones" + ","; }
  if( box1check2 ){ eAnalysts = eAnalysts + "Jacklyn Jones" + ","; }
  if( box1check3 ){ eAnalysts = eAnalysts + "Indiana Jones" + ","; }
  if( box2check1 ){ eAnalysts = eAnalysts + "Katie Jones" + ","; }
  if( box2check2 ){ eAnalysts = eAnalysts + "Linnus Jones" + ","; }
  if( box2check3 ){ eAnalysts = eAnalysts + "Parker Jones" + ","; }
  //require all text fields to be non-empty, otherwise reprompt.

  const formData = new FormData();
  formData.append("eventName", eName);
  formData.append("eventDescription", eDescription);
  formData.append("eventType", eType);
  formData.append("eventVersion", eVersion);
  formData.append("eventAssesmentDate", eAssesmentDate);
  formData.append("eventOrganizationName", eOrganizationName);
  formData.append("eventSCTG", eSCTG);
  formData.append("eventClassification", eClassification);
  formData.append("eventDeclassificationDate", eDeclassificationDate);
  formData.append("eventCustomerName", eCustomerName);
  formData.append("eventAnalysts", eAnalysts);
  

  fetch("eHandler.php", {
        method: 'POST',
        body: formData
    }).then(function(){
      refreshEvents();
      alert( "submitted" );
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });

});


