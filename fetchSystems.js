refreshSystems();

function refreshSystems(){

    var systemTable = document.getElementById("systemsTable");
    let complete_systems = [];
    var ids = new Object();

    formData = new FormData();

    fetch("fetchToSystem.php", {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(function (response){
        systemTable.innerText = "";
        for (r of response){
            if( ids[ r["Id"] ] != true ){
                complete_systems[ r["Id"] ] = r;
                ids[ r["Id"] ] = true;

                let tr = document.createElement("tr");

                let td_checkbox = document.createElement("td");
                let td_Name = document.createElement("td");
                let td_Tasks = document.createElement("td");
                let td_Subtasks = document.createElement("td");

                td_checkbox.innerText = "";
                td_Name.innerText = r["Name"];
                if(typeof r["Title"] !== 'undefined' && r["Title"] != "")
                    td_Tasks.innerText = r["Title"].split(',').length;
                else
                    td_Tasks.innerText = 0;
                if(typeof r["findingTitle"] !== 'undefined' && r["findingTitle"] != "")
                    td_Subtasks.innerText = r["findingTitle"].split(',').length;
                else
                    td_Subtasks.innerText = 0;

                tr.appendChild(td_checkbox);
                tr.appendChild(td_Name);
                tr.appendChild(td_Tasks);
                tr.appendChild(td_Subtasks);

                systemTable.appendChild(tr);
            }
        }
    });

    

}