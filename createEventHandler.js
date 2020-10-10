document.getElementById("sync").addEventListener("click", function( e ) {
  e.preventDefault();
  
  var eName = document.getElementById("eName").value;
  var eDescription = document.getElementById("eDescription").value;
  var eType = document.getElementById("eType").value;
  var eVersion = document.getElementById("eVersion").value;
  var eAssesmentDate = document.getElementById("eAssesmentDate").value;
  var eOrganizationName = document.getElementById("eOrganizationName").value;
  var eSCTG = document.getElementById("eSCTG").value;
  var eClassification = document.getElementById("eClassification").value;
  var eDeclassificationDate = document.getElementById("eDeclassificationDate").value;
  var eCustomerName = document.getElementById("eCustomerName").value;
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
  formData.append("eName", eName);
  formData.append("eDescription", eDescription);
  formData.append("eType", eType);
  formData.append("eVersion", eVersion);
  formData.append("eAssesmentDate", eAssesmentDate);
  formData.append("eOrganizationName", eOrganizationName);
  formData.append("eSCTG", eSCTG);
  formData.append("eClassification", eClassification);
  formData.append("eDeclassificationDate", eDeclassificationDate);
  formData.append("eCustomerName", eCustomerName);
  formData.append("eAnalysts", eAnalysts);
  

  fetch("eHandler.php", {
        method: 'POST',
        body: formData
    });

  //in python create objects with data

  //connect to database in python 

  //upload json object

  //retrieve and display somewhere

});
