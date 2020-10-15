refreshEvents();

function refreshEvents(){

	var eventTable = document.getElementById("event_table");



	fetch("fetchToEvent.php")
    .then(response => response.json())
    .then(function (response){

        eventTable.innerText = "";
        
        for (r of response){

            let tr = document.createElement("tr");

            let td_checkbox = document.createElement("td");
            let td_Name = document.createElement("td");
            let td_Description = document.createElement("td");
            let td_Version = document.createElement("td");

            td_checkbox.innerText = "";
            td_Name.innerText = r["Name"];
            td_Description.innerText = r["Description"];
            td_Version.innerText = r["Version"];

            tr.appendChild(td_checkbox);
            tr.appendChild(td_Name);
            tr.appendChild(td_Description);
            tr.appendChild(td_Version);
            
            eventTable.appendChild(tr);
        } 
    });



}