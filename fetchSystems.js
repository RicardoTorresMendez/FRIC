refreshSystems();

function refreshSystems(){

	var systemTable = document.getElementById("systemsTable");

	fetch("fetchToSystem.php")
    .then(response => response.json())
    .then(function (response){

        systemTable.innerText = "";
        
        for (r of response){

            let tr = document.createElement("tr");
            
            let td_checkbox = document.createElement("td");
            let td_Name = document.createElement("td");
            let td_Description = document.createElement("td");
            let td_Location = document.createElement("td");

            td_checkbox.innerText = "";
            td_Name.innerText = r["Name"];
            td_Description.innerText = r["Description"];
            td_Location.innerText = r["Location"];

            tr.appendChild(td_checkbox);
            tr.appendChild(td_Name);
            tr.appendChild(td_Description);
            tr.appendChild(td_Location);
            
            systemTable.appendChild(tr);
        } 
    });



}