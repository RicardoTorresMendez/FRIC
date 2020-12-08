refreshFindings();


//refreshes the event table seen on event.html
function refreshFindings(){

	var findingTable = document.getElementById("findingTable");

    const formData = new FormData();

    formData.append("request", "findings");


	fetch("connectToDatabase.php", {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(function (response){

        findingTable.innerText = "";
        
        for (r of response){

            let tr = document.createElement("tr");
            tr.classList.add("findingTable");
            tr.id = r["ID"];

            let td_checkbox = document.createElement("td");
            let td_ID = document.createElement("td");
            let td_Title = document.createElement("td");
            let td_System = document.createElement("td");
            let td_Task = document.createElement("td");
            let td_Subtask = document.createElement("td");
            let td_Analyst = document.createElement("td");
            let td_Status = document.createElement("td");
            let td_Classification = document.createElement("td");
            let td_Type = document.createElement("td");
            let td_Risk = document.createElement("td");

            td_checkbox.innerHTML = '<input type="checkbox" value="no" >';
            td_ID.innerText = r["ID"];
            td_Title.innerText = r["Title"];
            td_System.innerText = r["Finding_System"];
            td_Task.innerText = r["Task"];
            td_Subtask.innerText = r["Subtask"];
            td_Analyst.innerText = r["Analyst"];
            td_Status.innerText = r["Finding_Status"];
            td_Classification.innerText = r["Classification"];
            td_Type.innerText = r["Type"];
            td_Risk.innerText = r["Risk"];

            tr.appendChild(td_checkbox);
            tr.appendChild(td_ID);
            tr.appendChild(td_Title);
            tr.appendChild(td_System);
            tr.appendChild(td_Task);
            tr.appendChild(td_Subtask);
            tr.appendChild(td_Analyst);
            tr.appendChild(td_Status);
            tr.appendChild(td_Classification);
            tr.appendChild(td_Type);
            tr.appendChild(td_Risk);
            
            findingTable.appendChild(tr);

        } 
    });

    formData.set("request", "null");

    var selectAnalyst = document.getElementById("findingAnalyst");
    var selectCollaborator = document.getElementById("findingCollaborator");

    fetch("fetchAnalysts.php", {
       method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(function (response){
        for (r of response){
            var option1 = document.createElement("option");
            option1.value = r[ "Initial" ];
            option1.text = r[ "Initial" ];
            selectAnalyst.appendChild( option1 );
            var option2 = document.createElement("option");
            option2.value = r[ "Initial" ];
            option2.text = r[ "Initial" ];
            selectCollaborator.appendChild( option2 );
        }


    });

    formData.append("request2", "systemList");
    var selectSystem = document.getElementById("findingSystem");

    fetch("connectToDatabase.php", {
       method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(function (response){
        for (r of response){
            var option = document.createElement("option");
            option.value = r[ "Name" ];
            option.text = r[ "Name" ];
            selectSystem.appendChild( option );
        }


    });


    var selectTask = document.getElementById("findingTask");

    fetch("fetchToTask.php", {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(function (response){
        for (r of response){
            var option = document.createElement("option");
            option.value = r[ "Title" ];
            option.text = r[ "Title" ];
            selectTask.appendChild( option );
        }


    });

    var selectSubtask = document.getElementById("findingSubtask");

    fetch("fetchToSubtask.php", {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(function (response){
        for (r of response){
            var option = document.createElement("option");
            option.value = r[ "Title" ];
            option.text = r[ "Title" ];
            selectSubtask.appendChild( option );
        }


    });

    formData.set("request2", "");
    formData.append("request3", "relatedFindings");

    var selectFindings = document.getElementById("findingRelatedFindings");

    fetch("connectToDatabase.php", {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(function (response){
        for (r of response){
            var option = document.createElement("option");
            option.value = r[ "Title" ];
            option.text = r[ "Title" ];
            selectFindings.appendChild( option );
        }


    });

}


