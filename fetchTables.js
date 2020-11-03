refreshEvents();
refreshAnalysts();

function refreshEvents(){

	var eventTable = document.getElementById("event_table");



	fetch("fetchToEvent.php")
    .then(response => response.json())
    .then(function (response){

        eventTable.innerText = "";
        
        for (r of response){

            let tr = document.createElement("tr");
            tr.classList.add("eventTable");
            tr.id = r["ID"];

            let td_checkbox = document.createElement("td");
            let td_Name = document.createElement("td");
            let td_Description = document.createElement("td");
            let td_Version = document.createElement("td");

            td_checkbox.innerHTML = '<input type="checkbox" value="no" >';
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

function refreshAnalysts(){

	var leads = document.getElementById("LeadAnalysts");
	var analysts = document.getElementById("Analysts");
	var all_analysts = document.getElementById("allAnalysts");

	fetch("fetchAnalysts.php")
    .then(response => response.json())
    .then(function (response){

        leads.innerText = "";
        analysts.innerText = "";
        all_analysts.innerText = "";
        
        for (r of response){

            let tr = document.createElement("tr");

            let td_checkbox = document.createElement("td");
            let td_Name = document.createElement("td");
            let td_Initials = document.createElement("td");

            td_checkbox.innerHTML = '<input type="checkbox" value="no" class="swt">';
            td_Name.innerText = r["FirstName"] + " " + r["LastName"];
            td_Initials.innerText = r["Initial"];

            tr.appendChild(td_checkbox);
            tr.appendChild(td_Name);
            tr.appendChild(td_Initials);

            let tr_c = document.createElement("tr");

            let td_checkbox_c = document.createElement("td");
            let td_Name_c = document.createElement("td");
            let td_Initials_c = document.createElement("td");

            td_checkbox_c.innerHTML = '<input type="checkbox" value="no" class="swt">';
            td_Name_c.innerText = r["FirstName"] + " " + r["LastName"];
            td_Initials_c.innerText = r["Initial"];

            tr_c.appendChild(td_checkbox_c);
            tr_c.appendChild(td_Name_c);
            tr_c.appendChild(td_Initials_c);

            all_analysts.appendChild(tr_c);

            if( r["Role"] == 0 ){
            	analysts.appendChild(tr);
            }
            else if( r["Role"] == 1 ){
            	leads.appendChild(tr);
            }

        } 
    });


}