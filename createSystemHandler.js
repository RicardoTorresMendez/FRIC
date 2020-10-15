document.getElementById("save").addEventListener("click", function( e ) {
  e.preventDefault();
  
  var sName = document.getElementById("sName").value;
  var sDescription = document.getElementById("sDescription").value;
  var sLocation = document.getElementById("sLocation").value;
  var sRouter = document.getElementById("sRouter").value;
  var sSwitch = document.getElementById("sSwitch").value;
  var sRoom = document.getElementById("sRoom").value;
  var sTestPlan = document.getElementById("sTestPlan").value;
  //---------------------------------------------------------------------------------

  const formData = new FormData();
  formData.append("sName", sName);
  formData.append("sDescription", sDescription);
  formData.append("sLocation", sLocation);
  formData.append("sRouter", sRouter);
  formData.append("sSwitch", sSwitch);
  formData.append("sRoom", sRoom);
  formData.append("sTestPlan", sTestPlan);
  

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


