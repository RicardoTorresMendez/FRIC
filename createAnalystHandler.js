document.getElementById("Add").addEventListener("click", function( e ){
  e.preventDefault();
  

  var firstname = document.getElementById("analystFirstName").value;
  var lastname = document.getElementById("analystLastName").value;
  var initials = document.getElementById("analystInitials").value;
  var title = document.getElementById("analystTitle").value;
  var role = document.getElementById("analystRole").value;



  const formData = new FormData();
  formData.append("first", firstname);
  formData.append("last", lastname);
  formData.append("initials", initials);
  formData.append("title", title);
  formData.append("role", role);

  fetch("analystHandler.php", {
        method: 'POST',
        body: formData
    }).then(function(){
      refreshAnalysts();
      alert( "submitted" );
    });

});