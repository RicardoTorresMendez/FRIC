document.getElementById("submitFinding").addEventListener("click", function( e ){
  e.preventDefault();


  var v1 = document.getElementById("findingTitle").value;
  var v2 = document.getElementById("findingHostName").value;
  var v3 = document.getElementById("findingIPPort").value;
  var v4 = document.getElementById("findingDescription").value;
  var v5 = document.getElementById("findingLongDescription").value;
  var v6 = document.getElementById("findingStatus").value;
  var v7 = document.getElementById("findingType").value;
  var v8 = document.getElementById("findingClassification").value;
  var v9 = document.getElementById("findingEvidence").value;
  var v10 = document.getElementById("findingSystem").value;
  var v11 = document.getElementById("findingTask").value;
  var v12 = document.getElementById("findingSubtask").value;
  var v13 = document.getElementById("findingRelatedFindings").value;
  var v14 = document.getElementById("findingConfidentiality").value;
  var v15 = document.getElementById("findingIntegrity").value;
  var v16 = document.getElementById("findingAvailability").value;
  var v17 = document.getElementById("findingAnalyst").value;
  var v18 = document.getElementById("findingCollaborator").value;
  var v19 = document.getElementById("findingPosture").value;
  var v20 = document.getElementById("findingMitigationBriefDescription").value;
  var v21 = document.getElementById("findingMitigationLongDescription").value;
  var v22 = document.getElementById("findingRelevance").value;
  var v23 = document.getElementById("findingEffectiveness").value;
  var v24 = document.getElementById("findingImpactDescription").value;
  var v25 = document.getElementById("findingImpact").value;
  var v26 = document.getElementById("findingSeverity").value;
  var v27 = document.getElementById("findingVulnerabilitySeverity").value;
  var v28 = document.getElementById("findingQuantitativeVulnerabilitySeverity").value;
  var v29 = document.getElementById("findingRisk").value;
  var v30 = document.getElementById("findingLikelihood").value;
  var v31 = document.getElementById("findingConfidentialityFindingImpactOnSystem").value;
  var v32 = document.getElementById("findingIntegrityFindingImpactOnSystem").value;
  var v33 = document.getElementById("findingAvailabilityFindingImpactonSystem").value;
  var v34 = document.getElementById("findingImpactScore").value;

  const formData = new FormData();
  formData.append("request", "uploadFinding");
  formData.append("v1", v1);
  formData.append("v2", v2);
  formData.append("v3", v3);
  formData.append("v4", v4);
  formData.append("v5", v5);
  formData.append("v6", v6);
  formData.append("v7", v7);
  formData.append("v8", v8);
  formData.append("v9", v9);
  formData.append("v10", v10);
  formData.append("v11", v11);
  formData.append("v12", v12);
  formData.append("v13", v13);
  formData.append("v14", v14);
  formData.append("v15", v15);
  formData.append("v16", v16);
  formData.append("v17", v17);
  formData.append("v18", v18);
  formData.append("v19", v19);
  formData.append("v20", v20);
  formData.append("v21", v21);
  formData.append("v22", v22);
  formData.append("v23", v23);
  formData.append("v24", v24);
  formData.append("v25", v25);
  formData.append("v26", v26);
  formData.append("v27", v27);
  formData.append("v28", v28);
  formData.append("v29", v29);
  formData.append("v30", v30);
  formData.append("v31", v31);
  formData.append("v32", v32);
  formData.append("v33", v33);
  formData.append("v34", v34);


  fetch("connectToDatabase.php", {
        method: 'POST',
        body: formData
    }).then(function(){
      refreshFindings();
      alert( "submitted" );
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });



});