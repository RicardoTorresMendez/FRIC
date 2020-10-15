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
  var eDeclassificationDate = document.getElementById("eDeclassificationDate").value;
  var eCustomerName = document.getElementById("eventCustomerName").value;
  //---------------------------------------------------------------------------------
  var box1check1 = document.getElementById("customCheck1").checked;
  var box1check2 = document.getElementById("customCheck2").checked;
  var box1check3 = document.getElementById("customCheck3").checked;
  var box2check1 = document.getElementById("customCheck4").checked;
  var box2check2 = document.getElementById("customCheck5").checked;
  var box2check3 = document.getElementById("customCheck6").checked;

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
    });

  //in python create objects with data

  //connect to database in python 

  //upload json object

  //retrieve and display somewhere

});
