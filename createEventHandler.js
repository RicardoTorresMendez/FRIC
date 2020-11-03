document.getElementById("sync").addEventListener("click", function( e ){
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
  var eAnalysts = "";

  var elems = document.getElementsByClassName("eventTable");
  var anonymous_function = Array.prototype.filter.call(elems, function( elem ){
      let c = elem.children;
      if( c[ 0 ].children[ 0 ].checked ){
        console.log( elem.id );
      }
  });

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

