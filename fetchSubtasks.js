refreshSubtasks();

function refreshSubtasks(){
	var subtaskTable = document.getElementById("subtask_table");

    const formData = new FormData();
    formData.append("request", "");

	fetch("fetchToSubtask.php")
    .then(response => response.json())
    .then(function (response){

        subtaskTable.innerText = "";
        
        for (r of response){

            let tr = document.createElement("tr");

            let td_checkbox = document.createElement("td");
            let td_Title = document.createElement("td");
            let td_Description = document.createElement("td");
            let td_Progress = document.createElement("td");
            let td_DueDate = document.createElement("td");
            let td_Analysts = document.createElement("td");
            let td_Collaborators = document.createElement("td");
            let td_Task = document.createElement("td");
            let td_Subtasks = document.createElement("td");
            let td_Findings = document.createElement("td");
            let td_Attachment = document.createElement("td");



            td_checkbox.innerText = "";
            td_Title.innerText = r["Title"];
            td_Description.innerText = r["Description"];
            td_Progress.innerText = r["Progress"];
            td_DueDate.innerText = r["DueDate"];
            td_Analysts.innerText = r["Analysts"];
            td_Collaborators.innerText = r["Collaborators"];
            td_Task.innerText = r["Task"];
            td_Subtasks.innerText = r["Subtasks"];
            td_Findings.innerText = r["Findings"];
            td_Attachment.innerText = r["Attachment"];




            tr.appendChild(td_checkbox);
            tr.appendChild(td_Title);
            tr.appendChild(td_Description);
            tr.appendChild(td_Progress);
            tr.appendChild(td_DueDate);
            tr.appendChild(td_Analysts);
            tr.appendChild(td_Collaborators);
            tr.appendChild(td_Task);
            tr.appendChild(td_Subtasks);
            tr.appendChild(td_Findings);
            tr.appendChild(td_Attachment);
            
            subtaskTable.appendChild(tr);
        } 
    });

    var selectAnalyst = document.getElementById("subtaskAnalysts");
    var selectCollaborator = document.getElementById("subtaskCollaborators");
    selectAnalyst.innerText = "";
    selectCollaborator.innerText = "";

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

    var selectTask = document.getElementById("subtaskTasks");
    selectTask.innerText = "";

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

    var selectSubtask = document.getElementById("subtaskSubtasks");
    selectSubtask.innerText = "";

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

    var selectFindings = document.getElementById("subtaskFindings");
    selectFindings.innerText = "";

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