document.getElementById("submit").addEventListener("click", function( e ) {
  e.preventDefault();
  
  var sName = document.getElementById("systemName").value;
  var sDescription = document.getElementById("systemDescription").value;
  var sLocation = document.getElementById("systemLocation").value;
  var sRouter = document.getElementById("systemRouter").value;
  var sSwitch = document.getElementById("systemSwitch").value;
  var sRoom = document.getElementById("systemRoom").value;
  var sTestPlan = document.getElementById("sTestPlan").value;
  var sConfidentiality = document.getElementById("sTestPlan").value;
  var sIntegrity = document.getElementById("sTestPlan").value;
  var sAvailability = document.getElementById("sTestPlan").value;
  //---------------------------------------------------------------------------------

  const formData = new FormData();
  formData.append("sName", sName);
  formData.append("sDescription", sDescription);
  formData.append("sLocation", sLocation);
  formData.append("sRouter", sRouter);
  formData.append("sSwitch", sSwitch);
  formData.append("sRoom", sRoom);
  formData.append("sTestPlan", sTestPlan);
  formData.append("sConfidentiality", sConfidentiality);
  formData.append("sIntegrity", sIntegrity);
  formData.append("sAvailability", sAvailability);
  

  fetch("sHandler.php", {
        method: 'POST',
        body: formData
    }).then(function(){
      refreshSystems();
      alert( "submitted" );
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });

});


