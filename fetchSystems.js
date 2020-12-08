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
            let td_Tasks = document.createElement("td");
            let td_Subtasks = document.createElement("td");

            td_checkbox.innerText = "";
            td_Name.innerText = r["Name"];
            if(r["Title"].split(',').length != 0)
                td_Tasks.innerText = r["Title"].split(',').length;
            else
                td_Tasks.innerText = 0;
            if(r["findingId"].split(',').length != 0)
                td_Subtasks.innerText = r["findingId"].split(',').length;
            else
                td_Subtasks.innerText = 0;

            tr.appendChild(td_checkbox);
            tr.appendChild(td_Name);
            tr.appendChild(td_Tasks);
            tr.appendChild(td_Subtasks);
            
            systemTable.appendChild(tr);
        } 
    });



}