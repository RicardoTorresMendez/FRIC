document.getElementById("submit").addEventListener("click", function( e ) {
  e.preventDefault();
  

  var initials = document.getElementById("initials").value;
  if( initials.length < 1 ){
  	alert("please input analyst initials");
  	return;
  }
  window.location = "event.html";

  //var selection = e.options[e.selectedIndex].value;
  //console.log( selection );
  

  //alert("Not yet implemented");

});
