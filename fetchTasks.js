refreshTasks();

function refreshTasks(){
	var taskTable = document.getElementById("task_table");



	fetch("fetchToTask.php")
    .then(response => response.json())
    .then(function (response){

        taskTable.innerText = "";
        
        for (r of response){

            let tr = document.createElement("tr");

            let td_checkbox = document.createElement("td");
            let td_Title = document.createElement("td");
            let td_Description = document.createElement("td");
            let td_System = document.createElement("td");
            let td_Progress = document.createElement("td");
            let td_Priority = document.createElement("td");
            let td_DueDate = document.createElement("td");
            let td_Analysts = document.createElement("td");
            let td_Collaborators = document.createElement("td");
            let td_RelatedTasks = document.createElement("td");
            let td_Subtasks = document.createElement("td");
            let td_Findings = document.createElement("td");
            let td_Attachment = document.createElement("td");



            td_checkbox.innerText = "";
            td_Title.innerText = r["Title"];
            td_System.innerText = r["System"];
            td_Analysts.innerText = r["Analysts"];
            td_Priority.innerText = r["Priority"];
            td_Progress.innerText = r["Progress"];
            if(r["Subtasks"] != "")
                td_Subtasks.innerText = r["Subtasks"].split(',').length;
            else 
                td_Subtasks.innerText = 0;
            if(r["Findings"] != "")
                td_Findings.innerText = r["Findings"].split(',').length;
            else
                td_Findings.innerText = 0
            td_DueDate.innerText = r["DueDate"];



            tr.appendChild(td_checkbox);
            tr.appendChild(td_Title);
            tr.appendChild(td_System);
            tr.appendChild(td_Analysts);
            tr.appendChild(td_Priority);
            tr.appendChild(td_Progress);
            tr.appendChild(td_Subtasks);
            tr.appendChild(td_Findings);
            tr.appendChild(td_DueDate);
            
            taskTable.appendChild(tr);
        } 
    });



}